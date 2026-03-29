import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { m } from 'framer-motion';
import { config } from '../config';
import { units } from '../data/units';

const FORMSPREE_ENDPOINT = `https://formspree.io/f/${config.formspreeFormId}`;

interface FormData {
  fullName: string;
  phoneNumber: string;
  confirmPhone: string;
  unitType: string;
}

interface FormErrors {
  fullName?: string;
  phoneNumber?: string;
  confirmPhone?: string;
}

const normalizeDigits = (value: string) => value.replace(/\D/g, '');

const LeadForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phoneNumber: '',
    confirmPhone: '',
    unitType: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name: keyof FormData, value: string, all: FormData): string | undefined => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'الاسم مطلوب';
        return undefined;
      case 'phoneNumber':
        if (!value.trim()) return 'رقم الجوال مطلوب';
        if (!/^[0-9+\s-]+$/.test(value)) return 'يرجى إدخال رقم صحيح مع كود الدولة';
        if (normalizeDigits(value).length < 10) return 'يجب أن يكون الرقم على الأقل 10 أرقام مع كود الدولة';
        return undefined;
      case 'confirmPhone': {
        if (!value.trim()) return undefined;
        if (!/^[0-9+\s-]+$/.test(value)) return 'يرجى إدخال رقم صحيح';
        if (normalizeDigits(value) !== normalizeDigits(all.phoneNumber)) {
          return 'يجب أن يطابق رقم الجوال';
        }
        return undefined;
      }
      case 'unitType':
        return undefined;
      default:
        return undefined;
    }
  };

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      const next = { ...formData, [name]: value };
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, value, next),
      }));
    }
  };

  const handleBlur = (name: keyof FormData) => {
    const err = validateField(name, formData[name], formData);
    setErrors((prev) => {
      const next = { ...prev };
      if (err) next[name as keyof FormErrors] = err;
      else delete next[name as keyof FormErrors];
      return next;
    });
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    const keys: Array<keyof FormData> = ['fullName', 'phoneNumber', 'confirmPhone', 'unitType'];
    keys.forEach((key) => {
      const err = validateField(key, formData[key], formData);
      if (err) newErrors[key as keyof FormErrors] = err;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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
    const errorMessage = 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.';
    try {
      const body = new FormData();
      body.append('full_name', formData.fullName);
      body.append('phone', formData.phoneNumber);
      body.append('confirm_phone', formData.confirmPhone.trim() || '');
      body.append('unit_type', formData.unitType ? units.find((u) => u.id === formData.unitType)?.nameAr ?? '' : '');

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body,
        redirect: 'manual',
      });
      const success =
        res.ok ||
        res.status === 301 ||
        res.status === 302 ||
        res.status === 303 ||
        res.type === 'opaqueredirect';
      if (success) {
        navigate(getThankYouPath());
        return;
      }
      setIsSubmitting(false);
      alert(errorMessage);
    } catch {
      setIsSubmitting(false);
      alert(errorMessage);
    }
  };

  const canSubmit =
    formData.fullName.trim() !== '' &&
    formData.phoneNumber.trim() !== '' &&
    !Object.values(errors).some((e) => e !== undefined && e !== '');

  return (
    <section
      id="lead-form"
      className="w-full px-4 sm:px-6 lg:px-8 pt-section-md md:pt-section-lg pb-2 md:pb-4 bg-modon-bg"
    >
      <div className="container mx-auto max-w-lg">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="rounded-2xl border border-modon-black/10 bg-modon-sand shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-7 md:p-10"
        >
          <div className="text-center border-b border-modon-black/10 pb-6 mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-modon-black tracking-heading">
              سجل اهتمامك الآن
            </h2>
            <p className="font-arabic text-gray-600 mt-2 text-base leading-relaxed">
              املأ البيانات وسيتواصل معك فريقنا في أقرب وقت
            </p>
          </div>

          <m.form onSubmit={handleSubmit} className="space-y-6 text-right">
            <div>
              <label htmlFor="fullName" className="block text-base font-semibold text-modon-black mb-2 font-arabic">
                الاسم الكامل <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="full_name"
                value={formData.fullName}
                onChange={(e) => handleChange('fullName', e.target.value)}
                onBlur={() => handleBlur('fullName')}
                className={`w-full px-4 py-4 rounded-xl border-2 text-right text-lg bg-white/90 transition-colors ${
                  errors.fullName ? 'border-red-500' : 'border-gray-200 focus:border-modon-black'
                } focus:outline-none focus:ring-2 focus:ring-modon-black/20`}
                placeholder="اكتب اسمك بالكامل"
                autoComplete="name"
              />
              {errors.fullName ? <p className="mt-1.5 text-sm text-red-600 font-arabic">{errors.fullName}</p> : null}
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block text-base font-semibold text-modon-black mb-2 font-arabic">
                رقم الجوال <span className="text-red-600">*</span>
                <span className="text-gray-600 font-normal text-sm ms-1">(مع كود الدولة)</span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phone"
                value={formData.phoneNumber}
                onChange={(e) => handleChange('phoneNumber', e.target.value)}
                onBlur={() => handleBlur('phoneNumber')}
                className={`w-full px-4 py-4 rounded-xl border-2 text-lg bg-white/90 transition-colors ${
                  errors.phoneNumber ? 'border-red-500' : 'border-gray-200 focus:border-modon-black'
                } focus:outline-none focus:ring-2 focus:ring-modon-black/20`}
                placeholder="+20 …"
                dir="ltr"
                autoComplete="tel"
              />
              {errors.phoneNumber ? (
                <p className="mt-1.5 text-sm text-red-600 font-arabic">{errors.phoneNumber}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="confirmPhone" className="block text-base font-semibold text-modon-black mb-2 font-arabic">
                أكد رقم التواصل
                <span className="text-gray-500 font-normal text-sm ms-1">(اختياري)</span>
              </label>
              <input
                type="tel"
                id="confirmPhone"
                name="confirm_phone"
                value={formData.confirmPhone}
                onChange={(e) => handleChange('confirmPhone', e.target.value)}
                onBlur={() => handleBlur('confirmPhone')}
                className={`w-full px-4 py-4 rounded-xl border-2 text-lg bg-white/90 transition-colors ${
                  errors.confirmPhone ? 'border-red-500' : 'border-gray-200 focus:border-modon-black'
                } focus:outline-none focus:ring-2 focus:ring-modon-black/20`}
                placeholder="نفس رقم الجوال للتأكيد"
                dir="ltr"
                autoComplete="tel"
              />
              {errors.confirmPhone ? (
                <p className="mt-1.5 text-sm text-red-600 font-arabic">{errors.confirmPhone}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="unitType" className="block text-base font-semibold text-modon-black mb-2 font-arabic">
                نوع الوحدة
                <span className="text-gray-500 font-normal text-sm ms-1">(اختياري)</span>
              </label>
              <select
                id="unitType"
                name="unit_type"
                value={formData.unitType}
                onChange={(e) => handleChange('unitType', e.target.value)}
                className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 bg-white/90 text-lg text-right font-arabic focus:border-modon-black focus:outline-none focus:ring-2 focus:ring-modon-black/20 appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%231A1A1A'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'left 1rem center',
                  backgroundSize: '1.25rem',
                }}
              >
                <option value="">— اختر نوع الوحدة —</option>
                {units.map((u) => (
                  <option key={u.id} value={u.id}>
                    {u.nameAr}
                  </option>
                ))}
              </select>
            </div>

            <p className="text-center font-arabic text-base md:text-lg font-bold text-orange-700 pt-1">
              العدد محدود — سجل الآن
            </p>

            <m.button
              type="submit"
              disabled={isSubmitting || !canSubmit}
              whileHover={{ scale: canSubmit && !isSubmitting ? 1.01 : 1 }}
              whileTap={{ scale: canSubmit && !isSubmitting ? 0.99 : 1 }}
              className={`w-full py-4 md:py-5 text-sm sm:text-base md:text-lg leading-snug rounded-xl font-bold font-arabic text-white transition-colors min-h-[52px] md:min-h-[56px] shadow-md ${
                canSubmit && !isSubmitting
                  ? 'bg-[#16a34a] hover:bg-[#15803d] cursor-pointer'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              {isSubmitting ? 'جاري الإرسال...' : '📥 احصل على البروشور وتواصل معنا'}
            </m.button>
          </m.form>

          <div className="mt-8 pt-6 border-t border-modon-black/10 space-y-4 text-center">
            <p className="font-arabic text-base font-semibold text-modon-black">أو اتصل بنا مباشرة</p>
            <a
              href={`tel:${config.phoneNumber}`}
              className="block font-arabic text-lg font-bold text-modon-black hover:underline"
              dir="ltr"
            >
              {config.phoneDisplay || config.phoneNumber}
            </a>
            <a
              href={`https://wa.me/${config.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 font-arabic text-base font-bold text-white hover:bg-[#20BD5A] transition-colors"
            >
              تواصل عبر واتساب
            </a>
          </div>
        </m.div>
      </div>
    </section>
  );
};

export default LeadForm;
