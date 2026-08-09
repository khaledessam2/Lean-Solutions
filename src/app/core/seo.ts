import { DOCUMENT } from '@angular/common';
import { Injectable, effect, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { I18n, Lang, Text } from './i18n';

/**
 * Everything a crawler or a share preview needs, in one place.
 *
 * Pages declare their metadata with `useSeo()` and this service writes it into
 * `<head>` — title, description, canonical, hreflang, Open Graph, Twitter and a
 * JSON-LD graph. It re-runs whenever the language changes, so the tags always
 * match what is on screen, and because it writes through `DOCUMENT` it also
 * runs during prerendering: every built page ships its own tags in the HTML.
 */

/** Change this one line when the site moves to its production domain. */
export const SITE_ORIGIN = 'https://leansolutions.com.sa';

export const SITE = {
  origin: SITE_ORIGIN,
  name: { ar: 'لين بيزنس سوليشنز', en: 'Lean Business Solutions' } satisfies Text,
  legalName: 'Lean Business Solutions',
  logo: 'logo/logo-full.png',
  /** the share-card fallback for pages that do not name their own image */
  ogImage: 'images/hero-bg.jpg',
  phone: '+966547378443',
  email: 'info@leansolutions.com.sa',
  city: { ar: 'الرياض', en: 'Riyadh' } satisfies Text,
  country: { ar: 'المملكة العربية السعودية', en: 'Saudi Arabia' } satisfies Text,
  linkedin: 'https://www.linkedin.com/company/lbs-sa/',
};

/** the id every node in the graph points at, so the Organization is stated once */
const ORG_ID = `${SITE_ORIGIN}/#organization`;
const SITE_ID = `${SITE_ORIGIN}/#website`;

/** Open Graph locale codes, keyed by our two languages. */
const OG_LOCALE: Record<Lang, string> = { ar: 'ar_SA', en: 'en_US' };

export interface Crumb {
  label: Text;
  link: string;
}

export interface PageSeo {
  /** the page's own heading — the brand is appended unless it is already the brand */
  title: Text;
  description: Text;
  /** defaults to the current router URL */
  path?: string;
  /** share image, relative to the site root (e.g. `images/why-us.png`) */
  image?: string;
  type?: 'website' | 'article';
  /** the crumbs *between* Home and this page; Home and the page itself are added */
  breadcrumbs?: Crumb[];
  /** schema.org nodes to publish alongside the site-wide Organization/WebSite */
  jsonLd?: Record<string, unknown>[];
  /** for pages that must not be indexed — the detail pages' not-found state */
  noIndex?: boolean;
}

/**
 * Trims copy to a length search engines will actually show, cutting on a word
 * boundary so a description never ends mid-word.
 */
export function clamp(value: string, max = 158): string {
  const text = value.replace(/\s+/g, ' ').trim();
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const boundary = cut.lastIndexOf(' ');
  return `${(boundary > max * 0.6 ? cut.slice(0, boundary) : cut).trim()}…`;
}

@Injectable({ providedIn: 'root' })
export class Seo {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);
  private readonly i18n = inject(I18n);

  apply(page: PageSeo): void {
    const lang = this.i18n.lang();
    const brand = SITE.name[lang];
    const heading = page.title[lang];
    // a page whose own title already names the brand does not get it twice
    const title = heading.includes(brand) ? heading : `${heading} | ${brand}`;
    const description = clamp(page.description[lang]);

    const path = this.normalise(page.path ?? this.router.url);
    const url = SITE.origin + path;
    const image = `${SITE.origin}/${page.image ?? SITE.ogImage}`;

    this.title.setTitle(title);
    this.tag('name', 'description', description);
    this.tag(
      'name',
      'robots',
      page.noIndex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1',
    );

    this.tag('property', 'og:type', page.type ?? 'website');
    this.tag('property', 'og:site_name', brand);
    this.tag('property', 'og:title', title);
    this.tag('property', 'og:description', description);
    this.tag('property', 'og:url', url);
    this.tag('property', 'og:image', image);
    this.tag('property', 'og:locale', OG_LOCALE[lang]);
    this.tag('property', 'og:locale:alternate', OG_LOCALE[lang === 'ar' ? 'en' : 'ar']);

    this.tag('name', 'twitter:card', 'summary_large_image');
    this.tag('name', 'twitter:title', title);
    this.tag('name', 'twitter:description', description);
    this.tag('name', 'twitter:image', image);

    // one canonical per path, with the language variants declared as alternates
    this.link('canonical', 'canonical', url);
    this.link('alt-ar', 'alternate', url, 'ar');
    this.link('alt-en', 'alternate', `${url}?lang=en`, 'en');
    this.link('alt-default', 'alternate', url, 'x-default');

    this.jsonLd([
      this.organization(lang),
      this.website(lang),
      this.webPage(lang, title, description, url),
      ...this.breadcrumbList(lang, page, url),
      ...(page.jsonLd ?? []),
    ]);
  }

  /** '/services?x=1#top' -> '/services'; the router's URL is not a canonical one */
  private normalise(url: string): string {
    const path = url.split(/[?#]/)[0];
    if (path === '' || path === '/') return '/';
    return path.endsWith('/') ? path.slice(0, -1) : path;
  }

  private tag(kind: 'name' | 'property', key: string, content: string): void {
    this.meta.updateTag({ [kind]: key, content }, `${kind}='${key}'`);
  }

  /** `key` is ours, not the browser's — it lets us update a link in place */
  private link(key: string, rel: string, href: string, hreflang?: string): void {
    const head = this.document.head;
    let element = head.querySelector<HTMLLinkElement>(`link[data-seo="${key}"]`);

    if (!element) {
      element = this.document.createElement('link');
      element.setAttribute('data-seo', key);
      head.appendChild(element);
    }

    element.setAttribute('rel', rel);
    element.setAttribute('href', href);
    if (hreflang) element.setAttribute('hreflang', hreflang);
  }

  private jsonLd(graph: Record<string, unknown>[]): void {
    const head = this.document.head;
    let element = head.querySelector<HTMLScriptElement>('script[data-seo="jsonld"]');

    if (!element) {
      element = this.document.createElement('script');
      element.setAttribute('type', 'application/ld+json');
      element.setAttribute('data-seo', 'jsonld');
      head.appendChild(element);
    }

    element.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
  }

  private organization(lang: Lang): Record<string, unknown> {
    return {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: SITE.name[lang],
      legalName: SITE.legalName,
      url: `${SITE.origin}/`,
      logo: `${SITE.origin}/${SITE.logo}`,
      image: `${SITE.origin}/${SITE.ogImage}`,
      email: SITE.email,
      telephone: SITE.phone,
      sameAs: [SITE.linkedin],
      address: {
        '@type': 'PostalAddress',
        addressLocality: SITE.city[lang],
        addressCountry: 'SA',
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          telephone: SITE.phone,
          email: SITE.email,
          areaServed: 'SA',
          availableLanguage: ['ar', 'en'],
        },
      ],
    };
  }

  private website(lang: Lang): Record<string, unknown> {
    return {
      '@type': 'WebSite',
      '@id': SITE_ID,
      name: SITE.name[lang],
      url: `${SITE.origin}/`,
      inLanguage: lang,
      publisher: { '@id': ORG_ID },
    };
  }

  private webPage(
    lang: Lang,
    title: string,
    description: string,
    url: string,
  ): Record<string, unknown> {
    return {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      name: title,
      description,
      url,
      inLanguage: lang,
      isPartOf: { '@id': SITE_ID },
      about: { '@id': ORG_ID },
    };
  }

  /** Home needs no breadcrumb; every other page gets Home › …crumbs › itself. */
  private breadcrumbList(lang: Lang, page: PageSeo, url: string): Record<string, unknown>[] {
    if (this.normalise(page.path ?? this.router.url) === '/') return [];

    const trail: Crumb[] = [
      { label: { ar: 'الرئيسية', en: 'Home' }, link: '/' },
      ...(page.breadcrumbs ?? []),
      { label: page.title, link: url },
    ];

    return [
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: trail.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.label[lang],
          item: crumb.link.startsWith('http')
            ? crumb.link
            : SITE.origin + (crumb.link === '/' ? '/' : crumb.link),
        })),
      },
    ];
  }
}

/**
 * Publishes a page's metadata. Call it from a component's constructor: the
 * config is a callback so it can read signals — the language, a route input —
 * and the tags are rewritten whenever any of them change.
 */
export function useSeo(config: () => PageSeo): void {
  const seo = inject(Seo);
  effect(() => seo.apply(config()));
}
