import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { App } from '../app';
import { routes } from '../app.routes';
import { I18n } from './i18n';

/** renders the shell with the home route active, so header + sections are both in the DOM */
async function renderHome() {
  const fixture = TestBed.createComponent(App);
  await fixture.whenStable();
  await TestBed.inject(Router).navigate(['/']);
  await fixture.whenStable();
  return fixture;
}

describe('language switching', () => {
  beforeEach(async () => {
    localStorage.clear();
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('starts in Arabic and renders Arabic copy', async () => {
    const fixture = await renderHome();

    expect(TestBed.inject(I18n).lang()).toBe('ar');
    expect((fixture.nativeElement as HTMLElement).textContent).toContain('من نحن');
    expect(document.documentElement.getAttribute('dir')).toBe('rtl');
  });

  it('switches the whole page to English', async () => {
    const fixture = await renderHome();

    TestBed.inject(I18n).set('en');
    await fixture.whenStable();

    const text = (fixture.nativeElement as HTMLElement).textContent ?? '';
    expect(text).toContain('About us');
    expect(text).toContain('Our services');
    expect(text).toContain('Send request');
    expect(text).not.toContain('من نحن');
    expect(document.documentElement.getAttribute('dir')).toBe('ltr');
  });
});
