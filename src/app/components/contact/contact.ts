import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { I18n, Text } from '../../core/i18n';
import { Reveal } from '../../shared/reveal';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, Reveal],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
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

  readonly copy = {
    eyebrow: { ar: 'اتصل بنا', en: 'Contact us' },
    title: { ar: 'نحن هنا لمساعدتك.', en: 'We are here to help.' },
    lead: {
      ar: 'نحن هنا لمساعدتك. تواصل معنا وسنرد عليك في أقرب وقت ممكن.',
      en: 'Get in touch and we will get back to you as soon as possible.',
    },
    name: { ar: 'الاسم', en: 'Name' },
    namePh: { ar: 'أدخل اسمك', en: 'Enter your name' },
    nameErr: { ar: 'الرجاء إدخال الاسم', en: 'Please enter your name' },
    phone: { ar: 'الهاتف المحمول', en: 'Mobile phone' },
    phonePh: { ar: 'أدخل رقم هاتفك المحمول', en: 'Enter your mobile number' },
    phoneErr: { ar: 'الرجاء إدخال رقم هاتف صحيح', en: 'Please enter a valid phone number' },
    email: { ar: 'البريد الإلكتروني', en: 'Email' },
    emailPh: { ar: 'أدخل بريدك الإلكتروني', en: 'Enter your email' },
    emailErr: { ar: 'الرجاء إدخال بريد إلكتروني صحيح', en: 'Please enter a valid email' },
    company: { ar: 'اسم الشركة', en: 'Company name' },
    companyPh: { ar: 'أدخل اسم شركتك', en: 'Enter your company name' },
    companyErr: { ar: 'الرجاء إدخال اسم الشركة', en: 'Please enter your company name' },
    message: { ar: 'الرسالة', en: 'Message' },
    messagePh: { ar: 'أخبرنا عن مشروعك...', en: 'Tell us about your project...' },
    submit: { ar: 'إرسال الطلب', en: 'Send request' },
    ok: {
      ar: 'تم استلام طلبك بنجاح، سنتواصل معك في أقرب وقت.',
      en: 'Your request has been received — we will contact you shortly.',
    },
    reach: { ar: 'تواصل معنا', en: 'Reach us' },
  };

  readonly info: { key: string; label: Text; value: Text; href: string | null }[] = [
    {
      key: 'phone',
      label: { ar: 'الخط الساخن', en: 'Hotline' },
      value: { ar: '+966547378443', en: '+966547378443' },
      href: 'tel:+966547378443',
    },
    {
      key: 'pin',
      label: { ar: 'المكتب', en: 'Office' },
      value: { ar: 'الرياض، المملكة العربية السعودية', en: 'Riyadh, Saudi Arabia' },
      href: null,
    },
    {
      key: 'mail',
      label: { ar: 'البريد الإلكتروني', en: 'Email' },
      value: { ar: 'info@leansolutions.com.sa', en: 'info@leansolutions.com.sa' },
      href: 'mailto:info@leansolutions.com.sa',
    },
    {
      key: 'clock',
      label: { ar: 'أيام العمل', en: 'Working days' },
      value: {
        ar: 'من الأحد إلى الخميس، من 8 ص إلى 4 م',
        en: 'Sunday to Thursday, 8 AM – 4 PM',
      },
      href: null,
    },
  ];

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
