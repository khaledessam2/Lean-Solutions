import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactInfoItem } from '../../core/content';
import { I18n, Text } from '../../core/i18n';
import { Reveal } from '../../shared/reveal';
import { ContentStore } from '../../core/content-store';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, Reveal],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private readonly store = inject(ContentStore);
  private readonly fb = inject(FormBuilder);
  private readonly i18n = inject(I18n);

  readonly t = (value: Text): string => this.i18n.t(value);

  readonly submitted = signal(false);
  readonly sent = signal(false);

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9+\s()-]{8,}$/)]],
    email: ['', [Validators.required, Validators.email]],
    company: ['', [Validators.required]],
    message: [''],
  });

  readonly copy = this.store.content.contact;

  readonly info: ContactInfoItem[] = this.store.content.contact.info;

  invalid(control: 'name' | 'phone' | 'email' | 'company'): boolean {
    const c = this.form.controls[control];
    return c.invalid && (c.touched || this.submitted());
  }

  submit(): void {
    this.submitted.set(true);

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    // No backend is wired yet — surface a confirmation and reset the form.
    this.sent.set(true);
    this.form.reset();
    this.submitted.set(false);
  }
}
