import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, Phone } from 'lucide-react';
import { config } from '../config';
import { LEAD_FORM_PROJECT_OPTIONS } from '../data/leadFormProjects';

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

const LeadForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phoneNumber: '',
    confirmPhone: '',
    project: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validatePhone = (value: string): string | undefined => {
    if (!value.trim()) return 'Phone number is required';
    if (!/^[0-9+\s-]+$/.test(value)) return 'Please enter a valid phone number';
    if (normalizeDigits(value).length < 10) return 'Phone number must be at least 10 digits';
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
    return base === '/' ? '/thank-you' : `${base.replace(/\/$/, '')}/thank-you`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    const body = new FormData();
    if (formData.fullName.trim()) body.append('full_name', formData.fullName.trim());
    body.append('phone', formData.phoneNumber.trim());
    if (formData.confirmPhone.trim()) body.append('confirm_phone', formData.confirmPhone.trim());
    if (formData.project) body.append('project', formData.project);

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
      alert('Something went wrong while sending your request. Please try again.');
    } catch {
      setIsSubmitting(false);
      alert('Something went wrong while sending your request. Please try again.');
    }
  };

  return (
    <section id="lead-form" className="bg-white px-6 py-12 md:px-16 md:py-16">
      <div className="mx-auto max-w-xl">
        <h2 className="font-heading text-4xl font-bold text-black md:text-5xl">Contact Us</h2>
        <p className="mt-3 text-gray-600">Leave your details and our sales team will contact you shortly.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label htmlFor="fullName" className="mb-2 block text-sm font-semibold text-black">
              Full Name <span className="font-normal text-gray-500">(optional)</span>
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
              Phone Number <span className="text-red-600">*</span>
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
              Confirm Phone / Other Number <span className="font-normal text-gray-500">(optional)</span>
            </label>
            <input
              id="confirmPhone"
              value={formData.confirmPhone}
              onChange={(e) => handleChange('confirmPhone', e.target.value)}
              className="h-12 w-full border border-zinc-200 px-4 outline-none transition-colors focus:border-black"
            />
          </div>

          <div>
            <label htmlFor="project" className="mb-2 block text-sm font-semibold text-black">
              Project <span className="font-normal text-gray-500">(optional)</span>
            </label>
            <select
              id="project"
              value={formData.project}
              onChange={(e) => handleChange('project', e.target.value)}
              className="h-12 w-full border border-zinc-200 px-4 outline-none transition-colors focus:border-black"
            >
              <option value="">Select a project</option>
              {LEAD_FORM_PROJECT_OPTIONS.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-solid w-full disabled:cursor-not-allowed disabled:bg-zinc-400"
          >
            {isSubmitting ? 'Submitting...' : 'Contact Us'}
          </button>
        </form>

        <div className="mt-8 border-t border-gray-100 pt-6">
          <p className="text-sm font-semibold text-black">Or contact us directly:</p>
          <div className="mt-3 flex flex-wrap gap-3">
            <a
              href={`tel:${config.phoneNumber}`}
              className="inline-flex items-center gap-2 border border-black px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black"
            >
              <Phone size={14} />
              {config.phoneDisplay || config.phoneNumber}
            </a>
            <a
              href={`https://wa.me/${config.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-black px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black"
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
