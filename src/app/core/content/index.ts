/**
 * The shape of every editable string on the site.
 *
 * Nothing here is copy — this file is only the contract. The values live in
 * `content.data.ts`, which is written by `scripts/pull-content.mjs` from the
 * Supabase content database, and the admin app edits that database.
 *
 * The catalogue (services, projects and their detail pages) is described by
 * `catalog.ts` and stored in `catalog.data.ts` / `catalog-details.ts` for the
 * same reason the site has always split it: the detail copy is ~90 kB and must
 * stay out of the initial bundle.
 */

export * from './shared.model';
export * from './site.model';
export * from './shell.model';
export * from './home.model';
export * from './pages.model';
export * from './content.model';
