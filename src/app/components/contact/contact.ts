import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';
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
  readonly sending = signal(false);
  readonly failed = signal(false);

  readonly errorText: Text = {
    ar: 'تعذر إرسال الرسالة، يرجى المحاولة مرة أخرى.',
    en: 'Could not send your message. Please try again.',
  };

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

  async submit(): Promise<void> {
    this.submitted.set(true);

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    if (this.sending()) return;

    this.sending.set(true);
    this.sent.set(false);
    this.failed.set(false);

    const { serviceId, templateId, publicKey } = environment.emailjs;
    const v = this.form.getRawValue();

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: v.name,
          from_name: v.name,
          phone: v.phone,
          email: v.email,
          reply_to: v.email,
          company: v.company,
          message: v.message,
        },
        { publicKey },
      );
      this.sent.set(true);
      this.form.reset();
      this.submitted.set(false);
    } catch {
      this.failed.set(true);
    } finally {
      this.sending.set(false);
    }
  }
}
