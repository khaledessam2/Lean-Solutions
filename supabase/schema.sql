-- ---------------------------------------------------------------------------
-- Lean Business Solutions — content database
--
-- Run this once in the Supabase SQL editor (Dashboard → SQL Editor → New query).
-- It is idempotent: running it again is safe and will not drop your content.
--
-- Bilingual copy is stored as jsonb in the shape the site already uses:
--     {"ar": "...", "en": "..."}
-- so a row maps one-to-one onto the site's `Text` type with no translation step.
-- ---------------------------------------------------------------------------

-- --------------------------------------------------------------------------
-- 1. who is allowed to edit
--
-- Membership of this table — not merely having an account — is what grants
-- write access. Sign the user up in Authentication → Users, then insert their
-- id here (see the note at the bottom of this file).
-- --------------------------------------------------------------------------
create table if not exists public.admins (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  email      text        not null,
  created_at timestamptz not null default now()
);

comment on table public.admins is
  'Users allowed to write content. Being in auth.users is not enough.';

-- a security-definer helper so the policies below do not each need a sub-select
create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (select 1 from public.admins where user_id = auth.uid());
$$;

-- --------------------------------------------------------------------------
-- 2. site-wide settings — the identity block behind the footer, the contact
--    card and every SEO tag. Exactly one row, pinned to id = 1.
-- --------------------------------------------------------------------------
create table if not exists public.site_settings (
  id            smallint primary key default 1 check (id = 1),
  origin        text not null,
  name          jsonb not null,
  legal_name    text not null,
  logo          text not null,
  og_image      text not null,
  service_cover text not null,
  phone         text not null,
  email         text not null,
  city          jsonb not null,
  country       jsonb not null,
  linkedin      text not null,
  map_embed     text not null,
  updated_at    timestamptz not null default now()
);

-- --------------------------------------------------------------------------
-- 3. the fixed page and section copy
--
-- One row per editable block (the hero, the footer, the About page, …). The
-- shape of `data` differs per key and is described by the admin app's field
-- schema, which is what renders the form — so adding a field is a change in
-- two places (the site's `content.ts` and the admin's schema), never a
-- migration here.
-- --------------------------------------------------------------------------
create table if not exists public.content_blocks (
  key        text primary key,
  label      text not null,
  section    text not null default 'general',
  sort_order integer not null default 0,
  data       jsonb not null,
  updated_at timestamptz not null default now()
);

comment on column public.content_blocks.data is
  'The block''s content tree. Its shape is fixed by the site''s content.ts types.';

-- --------------------------------------------------------------------------
-- 4. the catalogue
--
-- The card fields are columns, because the admin lists, orders and filters on
-- them. The detail-page write-up is jsonb, because it is a deep tree (offers,
-- features, steps, spec rows, prose sections) that no sane column layout fits.
-- --------------------------------------------------------------------------
create table if not exists public.services (
  id           uuid primary key default gen_random_uuid(),
  slug         text not null unique,
  sort_order   integer not null default 0,
  icon         text not null,
  category     text not null check (category in ('elearning', 'digital', 'management')),
  title        jsonb not null,
  body         jsonb not null,
  has_detail   boolean not null default true,
  external_url text,
  detail       jsonb,
  published    boolean not null default true,
  updated_at   timestamptz not null default now()
);

comment on column public.services.body is
  'The card paragraph. Named `body` because `text` is a reserved word in SQL.';
comment on column public.services.detail is
  'ServiceDetail: offerTitle, offers, featuresTitle, features, processTitle, processLead, steps.';

create table if not exists public.projects (
  id         uuid primary key default gen_random_uuid(),
  slug       text not null unique,
  sort_order integer not null default 0,
  image      text not null,
  category   text not null check (category in ('elearning', 'digital', 'management')),
  tag        jsonb not null,
  title      jsonb not null,
  body       jsonb not null,
  detail     jsonb,
  published  boolean not null default true,
  updated_at timestamptz not null default now()
);

comment on column public.projects.detail is
  'ProjectDetail: title, image, aboutTitle, aboutText, features, infoTitle, info, sections.';

create index if not exists services_sort_idx on public.services (sort_order);
create index if not exists projects_sort_idx on public.projects (sort_order);

-- --------------------------------------------------------------------------
-- 5. keep `updated_at` honest
-- --------------------------------------------------------------------------
create or replace function public.touch_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

do $$
declare
  t text;
begin
  foreach t in array array['site_settings', 'content_blocks', 'services', 'projects'] loop
    execute format('drop trigger if exists touch_%1$s on public.%1$s', t);
    execute format(
      'create trigger touch_%1$s before update on public.%1$s
       for each row execute function public.touch_updated_at()', t);
  end loop;
end;
$$;

-- --------------------------------------------------------------------------
-- 6. row-level security
--
-- Read is open: every one of these rows is already published on a public
-- website, and the site's server reads them with the anon key as it renders.
-- Write is restricted to rows in `admins`.
-- --------------------------------------------------------------------------
do $$
declare
  t text;
begin
  foreach t in array array['site_settings', 'content_blocks', 'services', 'projects'] loop
    execute format('alter table public.%I enable row level security', t);

    execute format('drop policy if exists "read for everyone" on public.%I', t);
    execute format(
      'create policy "read for everyone" on public.%I for select using (true)', t);

    execute format('drop policy if exists "write for admins" on public.%I', t);
    execute format(
      'create policy "write for admins" on public.%I for all to authenticated
       using (public.is_admin()) with check (public.is_admin())', t);
  end loop;
end;
$$;

-- the admin list itself: an admin may see who else is one, nobody may self-enrol
alter table public.admins enable row level security;

drop policy if exists "admins read the roster" on public.admins;
create policy "admins read the roster" on public.admins
  for select to authenticated using (public.is_admin());

-- --------------------------------------------------------------------------
-- 7. media bucket — images, animated icons and Lottie files
-- --------------------------------------------------------------------------
insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do update set public = true;

drop policy if exists "media is public to read" on storage.objects;
create policy "media is public to read" on storage.objects
  for select using (bucket_id = 'media');

drop policy if exists "admins manage media" on storage.objects;
create policy "admins manage media" on storage.objects
  for all to authenticated
  using (bucket_id = 'media' and public.is_admin())
  with check (bucket_id = 'media' and public.is_admin());

-- ---------------------------------------------------------------------------
-- Last step, once you have created your user under Authentication → Users:
--
--   insert into public.admins (user_id, email)
--   select id, email from auth.users where email = 'you@example.com'
--   on conflict (user_id) do nothing;
--
-- Then sign in to the admin and press "استيراد المحتوى الحالي" on the site
-- status screen to load the site's copy into these tables.
-- ---------------------------------------------------------------------------
