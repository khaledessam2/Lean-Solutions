import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';
import { Home } from './pages/home/home';
import { AboutPage } from './pages/about-page/about-page';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

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
});

describe('Home', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should render the landing sections', async () => {
    const fixture = TestBed.createComponent(Home);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('#home')).toBeTruthy();
    expect(compiled.querySelector('#about')).toBeTruthy();
    expect(compiled.querySelector('#services')).toBeTruthy();
    expect(compiled.querySelector('#contact')).toBeTruthy();
  });
});

describe('AboutPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPage],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should render the banner, both checklists and the contact section', async () => {
    const fixture = TestBed.createComponent(AboutPage);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('.banner__title')?.textContent).toContain('من نحن');
    // three training modes plus six reasons to choose us
    expect(compiled.querySelectorAll('.checklist li').length).toBe(9);
    expect(compiled.querySelector('app-pillars')).toBeTruthy();
    expect(compiled.querySelector('#contact')).toBeTruthy();
  });
});
