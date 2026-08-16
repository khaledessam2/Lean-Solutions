import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';
import { CONTENT_FIXTURE } from './core/content.fixture';
import { CONTENT_LOADER, ContentStore } from './core/content-store';
import { Home } from './pages/home/home';
import { AboutPage } from './pages/about-page/about-page';

/**
 * Every page reads its copy from the store, which is normally filled from
 * Supabase before the app renders. The specs fill it from a fixture instead, so
 * they exercise the templates without a network and without asserting on copy
 * that the admin can change.
 */
async function setUp(component: unknown) {
  await TestBed.configureTestingModule({
    imports: [component as never],
    providers: [
      provideRouter(routes),
      { provide: CONTENT_LOADER, useValue: () => Promise.resolve(CONTENT_FIXTURE) },
    ],
  }).compileComponents();

  await TestBed.inject(ContentStore).load();
}

describe('App', () => {
  beforeEach(() => setUp(App));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the header and footer around the routed page', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('app-header')).toBeTruthy();
    expect(compiled.querySelector('app-footer')).toBeTruthy();
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });

  it('should say so, rather than throw, when the content cannot be loaded', async () => {
    TestBed.resetTestingModule();
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideRouter(routes),
        { provide: CONTENT_LOADER, useValue: () => Promise.reject(new Error('database is down')) },
      ],
    }).compileComponents();

    await TestBed.inject(ContentStore).load();

    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('app-header')).toBeNull();
    expect(compiled.querySelector('.content-error')?.textContent).toContain('database is down');
  });
});

describe('Home', () => {
  beforeEach(() => setUp(Home));

  it('should render the landing sections', async () => {
    const fixture = TestBed.createComponent(Home);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('#home')).toBeTruthy();
    expect(compiled.querySelector('#about')).toBeTruthy();
    expect(compiled.querySelector('#services')).toBeTruthy();
    expect(compiled.querySelector('#contact')).toBeTruthy();
  });

  it('should list the catalogue the store was given', async () => {
    const fixture = TestBed.createComponent(Home);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelectorAll('#services .scard').length).toBe(
      CONTENT_FIXTURE.services.length,
    );
  });
});

describe('AboutPage', () => {
  beforeEach(() => setUp(AboutPage));

  it('should render the banner, both checklists and the contact section', async () => {
    const fixture = TestBed.createComponent(AboutPage);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('.banner__title')?.textContent).toContain('من نحن');
    // the training modes plus the reasons to choose us
    expect(compiled.querySelectorAll('.checklist li').length).toBe(6);
    expect(compiled.querySelector('app-pillars')).toBeTruthy();
    expect(compiled.querySelector('#contact')).toBeTruthy();
  });
});
