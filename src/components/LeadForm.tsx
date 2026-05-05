import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, Phone } from 'lucide-react';
import { config } from '../config';
import { LEAD_FORM_PROJECT_OPTIONS } from '../data/leadFormProjects';
import { trackMarketingContact } from '../utils/trackMarketing';
import { getWhatsAppLink } from '../utils/whatsapp';

const FORMSPREE_ENDPOINT = `https://formspree.io/f/${config.formspreeFormId}`;

interface FormData {
  fullName: string;
  phoneNumber: string;
  confirmPhone: string;
  project: string;
}

interface FormErrors {
  phoneNumber?: string;
}

const normalizeDigits = (value: string) => value.replace(/\D/g, '');

export type LeadFormLocale = 'en' | 'ar';

interface LeadFormProps {
  locale?: LeadFormLocale;
  /** Optional pre-filled project (e.g. "Ogami") */
  presetProject?: string;
  /** When true, hide the project picker and submit presetProject as a hidden field */
  lockProject?: boolean;
  /** Optional override for the section heading */
  title?: string;
  /** Optional override for the supporting text under the heading */
  subtitle?: string;
  /** WhatsApp message override for the under-form direct contact link */
  whatsappMessage?: string;
  /** Optional override for primary CTA button label */
  submitLabelOverride?: string;
  /** Optional CSS overrides for the wrapping section (e.g. background) */
  sectionClassName?: string;
  /** Override the wrapping section's DOM id (defaults to "lead-form") */
  sectionId?: string;
}

const LeadForm = ({
  locale = 'en',
  presetProject,
  lockProject = false,
  title: titleOverride,
  subtitle: subtitleOverride,
  whatsappMessage,
  submitLabelOverride,
  sectionClassName,
  sectionId = 'lead-form',
}: LeadFormProps) => {
  const navigate = useNavigate();
  const isAr = locale === 'ar';
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phoneNumber: '',
    confirmPhone: '',
    project: presetProject ?? '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validatePhone = (value: string): string | undefined => {
    if (!value.trim()) {
      return isAr ? 'رقم الهاتف مطلوب' : 'Phone number is required';
    }
    if (!/^[0-9+\s-]+$/.test(value)) {
      return isAr ? 'يرجى إدخال رقم هاتف صحيح' : 'Please enter a valid phone number';
    }
    if (normalizeDigits(value).length < 10) {
      return isAr ? 'رقم الهاتف يجب أن يكون 10 أرقام على الأقل' : 'Phone number must be at least 10 digits';
    }
    return undefined;
  };

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'phoneNumber' && errors.phoneNumber) {
      setErrors((prev) => ({ ...prev, phoneNumber: validatePhone(value) }));
    }
  };

  const validateForm = (): boolean => {
    const phoneError = validatePhone(formData.phoneNumber);
    setErrors({ phoneNumber: phoneError });
    return !phoneError;
  };

  const getThankYouPath = (): string => {
    const base =
      (typeof import.meta.env.BASE_URL === 'string' ? import.meta.env.BASE_URL : '').replace(/\.$/, '') || '/';
    const path = base === '/' ? '/thank-you' : `${base.replace(/\/$/, '')}/thank-you`;
    if (isAr) {
      return `${path}?lang=ar`;
    }
    return path;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    const body = new FormData();
    if (formData.fullName.trim()) body.append('full_name', formData.fullName.trim());
    body.append('phone', formData.phoneNumber.trim());
    if (formData.confirmPhone.trim()) body.append('confirm_phone', formData.confirmPhone.trim());
    const projectValue = lockProject && presetProject ? presetProject : formData.project;
    if (projectValue) body.append('project', projectValue);
    if (isAr) body.append('locale', 'ar');

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body,
        redirect: 'manual',
      });
      if (res.ok || res.status === 303 || res.type === 'opaqueredirect') {
        navigate(getThankYouPath());
        return;
      }
      setIsSubmitting(false);
      alert(
        isAr
          ? 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.'
          : 'Something went wrong while sending your request. Please try again.',
      );
    } catch {
      setIsSubmitting(false);
      alert(
        isAr
          ? 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.'
          : 'Something went wrong while sending your request. Please try again.',
      );
    }
  };

  const waHref = getWhatsAppLink({
    text: whatsappMessage ?? (isAr ? config.whatsappDefaultMessageAr : undefined),
  });

  const defaultTitle = isAr ? 'تواصل معنا' : 'Contact Us';
  const defaultSubtitle = isAr
    ? 'اترك بياناتك وسيتواصل معك فريق المبيعات في أقرب وقت.'
    : 'Leave your details and our sales team will contact you shortly.';
  const title = titleOverride ?? defaultTitle;
  const subtitle = subtitleOverride ?? defaultSubtitle;
  const labelName = isAr ? 'الاسم الكامل' : 'Full Name';
  const optional = isAr ? '(اختياري)' : '(optional)';
  const labelPhone = isAr ? 'رقم الهاتف' : 'Phone Number';
  const labelConfirm = isAr ? 'تأكيد الرقم / رقم آخر' : 'Confirm Phone / Other Number';
  const labelProject = isAr ? 'المشروع' : 'Project';
  const selectPlaceholder = isAr ? 'اختر المشروع' : 'Select a project';
  const submitLabel = submitLabelOverride ?? (isAr ? 'حمل' : 'Contact Us');
  const submittingLabel = isAr ? 'جاري الإرسال...' : 'Submitting...';
  const directLabel = isAr ? 'أو تواصل مباشرة:' : 'Or contact us directly:';
  const waLabel = isAr ? 'واتساب' : 'WhatsApp';

  return (
    <section
      id={sectionId}
      className={sectionClassName ?? 'bg-white px-6 py-12 md:px-16 md:py-16'}
    >
      <div className="mx-auto max-w-xl">
        <h2
          className={`text-4xl font-bold text-black md:text-5xl ${isAr ? 'font-arabic' : 'font-heading'}`}
        >
          {title}
        </h2>
        <p className="mt-3 text-gray-600">{subtitle}</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label htmlFor="fullName" className="mb-2 block text-sm font-semibold text-black">
              {labelName}{' '}
              <span className="font-normal text-gray-500">{optional}</span>
            </label>
            <input
              id="fullName"
              value={formData.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
              className="h-12 w-full border border-zinc-200 px-4 outline-none transition-colors focus:border-black"
            />
          </div>

          <div>
            <label htmlFor="phoneNumber" className="mb-2 block text-sm font-semibold text-black">
              {labelPhone} <span className="text-red-600">*</span>
            </label>
            <input
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={(e) => handleChange('phoneNumber', e.target.value)}
              className="h-12 w-full border border-zinc-200 px-4 outline-none transition-colors focus:border-black"
              required
              aria-required="true"
            />
            {errors.phoneNumber ? <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p> : null}
          </div>

          <div>
            <label htmlFor="confirmPhone" className="mb-2 block text-sm font-semibold text-black">
              {labelConfirm}{' '}
              <span className="font-normal text-gray-500">{optional}</span>
            </label>
            <input
              id="confirmPhone"
              value={formData.confirmPhone}
              onChange={(e) => handleChange('confirmPhone', e.target.value)}
              className="h-12 w-full border border-zinc-200 px-4 outline-none transition-colors focus:border-black"
            />
          </div>

          {lockProject ? (
            <input type="hidden" name="project" value={presetProject ?? ''} />
          ) : (
            <div>
              <label htmlFor="project" className="mb-2 block text-sm font-semibold text-black">
                {labelProject}{' '}
                <span className="font-normal text-gray-500">{optional}</span>
              </label>
              <select
                id="project"
                value={formData.project}
                onChange={(e) => handleChange('project', e.target.value)}
                className="h-12 w-full border border-zinc-200 px-4 outline-none transition-colors focus:border-black"
              >
                <option value="">{selectPlaceholder}</option>
                {LEAD_FORM_PROJECT_OPTIONS.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            aria-label={isAr ? 'حمّل بروشور المشروعات بعد إرسال البيانات' : undefined}
            className={`inline-flex w-full items-center justify-center rounded-none bg-black px-8 py-4 text-base font-bold tracking-wide text-white transition-colors duration-200 hover:bg-gray-900 disabled:cursor-not-allowed disabled:bg-zinc-400 ${isAr ? '' : 'uppercase'}`}
          >
            {isSubmitting ? submittingLabel : submitLabel}
          </button>
        </form>

        <div className="mt-8 border-t border-gray-100 pt-6">
          <p className="text-sm font-semibold text-black">{directLabel}</p>
          <div className="mt-3 flex flex-wrap gap-3">
            <a
              href={`tel:${config.phoneNumber}`}
              title={config.phoneDisplay || config.phoneNumber}
              onClick={() => trackMarketingContact('phone')}
              className="inline-flex items-center gap-2 border border-black px-4 py-2 text-xs font-semibold tracking-wide text-black"
            >
              <Phone size={14} />
              {isAr ? 'اتصل بنا' : config.phoneDisplay || config.phoneNumber}
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackMarketingContact('whatsapp')}
              className="inline-flex items-center gap-2 border border-black px-4 py-2 text-xs font-semibold tracking-wide text-black"
            >
              <MessageCircle size={14} />
              {waLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
