import { motion } from 'framer-motion';
import { ArrowLeft, BedDouble, Maximize2, MessageCircle, Trees } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { trackMarketingContact } from '../../utils/trackMarketing';
import { getWhatsAppLink } from '../../utils/whatsapp';

interface UnitType {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  image: string;
  priceLabel: string;
  priceValue: string;
  downPaymentLabel: string;
  downPaymentValue: string;
  highlights: { icon: LucideIcon; label: string }[];
  features: string[];
  whatsappPrefill: string;
}

const units: UnitType[] = [
  {
    id: '2-bedroom',
    badge: 'الأكثر طلبًا',
    title: 'شاليه غرفتين',
    subtitle: 'Building Type 01 — Modern Living',
    image: '/sections/ogami/building-render-2.jpg',
    priceLabel: 'السعر الكلي يبدأ من',
    priceValue: '16,500,000 ج.م.',
    downPaymentLabel: 'مقدّم 5٪',
    downPaymentValue: '825,000 ج.م.',
    highlights: [
      { icon: Maximize2, label: 'من 120 م² مغلق + تراسات' },
      { icon: BedDouble, label: 'غرفتين + غرفة شغّالة' },
      { icon: Trees, label: 'تراسات متدرّجة وحديقة أرضية' },
    ],
    features: [
      'تشطيب كامل مع تكييف',
      '5 وحدات لكل عمارة (G+2)',
      'إطلالة على المياه أو حديقة',
      'مدخل خاص لكل وحدة',
    ],
    whatsappPrefill:
      'مرحباً، مهتم بشاليه غرفتين في أوجامي / بوتانيكا تاون. ممكن تفاصيل الأسعار وخطط السداد؟',
  },
  {
    id: '3-bedroom',
    badge: 'للعائلة',
    title: 'شاليه ٣ غرف',
    subtitle: 'Building Type 02 — Spacious Family',
    image: '/sections/ogami/building-render-1.jpg',
    priceLabel: 'السعر الكلي يبدأ من',
    priceValue: '18,500,000 ج.م.',
    downPaymentLabel: 'مقدّم 5٪',
    downPaymentValue: '925,000 ج.م.',
    highlights: [
      { icon: Maximize2, label: 'من 140 م² مغلق + تراسات' },
      { icon: BedDouble, label: '٣ غرف + غرفة شغّالة' },
      { icon: Trees, label: 'تراسات أوسع وحديقة خاصة' },
    ],
    features: [
      'تشطيب كامل مع تكييف',
      '8 وحدات لكل عمارة',
      'مناطق معيشة محددة بوضوح',
      'مرونة في التصميم للعائلة',
    ],
    whatsappPrefill:
      'مرحباً، مهتم بشاليه ٣ غرف في أوجامي / بوتانيكا تاون. ممكن تفاصيل الأسعار وخطط السداد؟',
  },
  {
    id: 'double-view',
    badge: 'Double View',
    title: 'شاليه بانورامي غرفتين',
    subtitle: 'Building Type 03 — Panoramic Outlooks',
    image: '/sections/ogami/building-render-3.jpg',
    priceLabel: 'السعر الكلي',
    priceValue: 'تواصل للتسعير',
    downPaymentLabel: 'مقدّم 5٪',
    downPaymentValue: 'حسب الإطلالة',
    highlights: [
      { icon: Maximize2, label: '109-124 م² + تراس' },
      { icon: BedDouble, label: 'غرفتين + شغّالة' },
      { icon: Trees, label: 'إطلالة بانورامية على جانبين' },
    ],
    features: [
      'تشطيب كامل مع تكييف',
      '6 وحدات لكل عمارة',
      'إطلالات مزدوجة مميزة',
      'إضاءة طبيعية طوال النهار',
    ],
    whatsappPrefill:
      'مرحباً، مهتم بشاليه Double View في أوجامي / بوتانيكا تاون. ممكن تفاصيل الإطلالات والأسعار؟',
  },
];

const OgamiUnitTypes = () => {
  const scrollToLeadForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="ogami-units" className="bg-white px-6 py-16 md:px-16 md:py-24">
      <div className="mx-auto max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold tracking-wider text-zinc-500">
              الوحدات المتاحة
            </p>
            <h2 className="font-arabic mt-3 text-3xl font-bold leading-tight text-black md:text-5xl">
              ٣ تصميمات تناسب كل أسلوب حياة
            </h2>
            <p className="font-arabic mt-4 text-sm leading-relaxed text-zinc-600 md:text-base">
              كل الوحدات بتشطيب كامل، مكيّفة، ومجهّزة بغرفة شغّالة. مباني G+2 بنتهاوس
              بتراسات متدرّجة بتحافظ على الإطلالات المفتوحة.
            </p>
          </div>
          <p className="font-arabic text-sm text-zinc-500 md:max-w-xs md:text-end md:text-base">
            الأسعار من ٢٠٢٦ — قابلة للتحديث.
            <br />
            خطط سداد حتى ٨ سنوات.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {units.map((unit, index) => (
            <motion.article
              key={unit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.06 * index }}
              className="group flex flex-col overflow-hidden border border-zinc-200 bg-white transition-all hover:border-black hover:shadow-lg"
            >
              <div className="relative h-56 overflow-hidden bg-stone-100 md:h-64">
                <img
                  src={unit.image}
                  alt={unit.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute right-4 top-4 inline-flex items-center bg-black px-3 py-1 text-[10px] font-bold tracking-wide text-white md:text-xs">
                  {unit.badge}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-[10px] font-semibold tracking-wider text-zinc-400">
                  {unit.subtitle}
                </p>
                <h3 className="font-arabic mt-2 text-2xl font-bold leading-tight text-black md:text-3xl">
                  {unit.title}
                </h3>

                <div className="mt-4 grid grid-cols-2 divide-x divide-zinc-200 border-y border-zinc-200 bg-stone-50 [direction:rtl]">
                  <div className="px-4 py-4">
                    <p className="font-arabic text-[11px] font-semibold tracking-wide text-zinc-500">
                      {unit.downPaymentLabel}
                    </p>
                    <p className="font-arabic mt-1 text-xl font-extrabold leading-tight text-black md:text-2xl">
                      {unit.downPaymentValue}
                    </p>
                  </div>
                  <div className="px-4 py-4">
                    <p className="font-arabic text-[11px] font-semibold tracking-wide text-zinc-500">
                      {unit.priceLabel}
                    </p>
                    <p className="font-arabic mt-1 text-xl font-extrabold leading-tight text-black md:text-2xl">
                      {unit.priceValue}
                    </p>
                  </div>
                </div>

                <ul className="mt-4 space-y-2">
                  {unit.highlights.map((h) => {
                    const Icon = h.icon;
                    return (
                      <li
                        key={h.label}
                        className="font-arabic flex items-center gap-3 text-sm text-zinc-700"
                      >
                        <Icon size={16} strokeWidth={1.6} className="shrink-0 text-zinc-500" />
                        <span>{h.label}</span>
                      </li>
                    );
                  })}
                </ul>

                <ul className="font-arabic mt-4 grid grid-cols-2 gap-x-3 gap-y-1 border-t border-zinc-100 pt-4 text-xs text-zinc-600">
                  {unit.features.map((f) => (
                    <li key={f} className="flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-black" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={scrollToLeadForm}
                    className="font-arabic inline-flex items-center justify-center gap-1.5 bg-black px-3 py-3 text-xs font-bold text-white transition-colors hover:bg-zinc-800"
                  >
                    احجز
                    <ArrowLeft size={14} />
                  </button>
                  <a
                    href={getWhatsAppLink({ text: unit.whatsappPrefill })}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackMarketingContact('whatsapp')}
                    className="font-arabic inline-flex items-center justify-center gap-1.5 border border-[#25D366] bg-[#25D366] px-3 py-3 text-xs font-bold text-white transition-colors hover:bg-[#20bd5a]"
                  >
                    <MessageCircle size={14} />
                    استفسار
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="font-arabic mt-8 text-center text-xs text-zinc-500 md:text-sm">
          * كل الصور والتصاميم لأغراض توضيحية — وقابلة للتحديث.
        </p>
      </div>
    </section>
  );
};

export default OgamiUnitTypes;
