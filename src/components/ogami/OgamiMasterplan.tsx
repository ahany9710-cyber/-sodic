import { motion } from 'framer-motion';
import {
  Building2,
  Dumbbell,
  Flower,
  Library,
  Palmtree,
  Sparkles,
  Sun,
  UtensilsCrossed,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const OVERVIEW = '/sections/ogami/ogami-overview.jpg';
const BOTANICA = '/sections/ogami/botanica-launch.jpg';

interface Zone {
  number: string;
  icon: LucideIcon;
  name: string;
  description: string;
}

const zones: Zone[] = [
  {
    number: '01',
    icon: Sparkles,
    name: 'بوابة الاستقبال',
    description: 'مدخل المشروع — استقبال 24/7 وأمن متكامل.',
  },
  {
    number: '02',
    icon: Building2,
    name: 'بوتانيكا تاون',
    description: 'مرحلة الإطلاق المشي — شاليهات بإطلالة على المياه ومتاجر بوتيك.',
  },
  {
    number: '03',
    icon: Dumbbell,
    name: 'النادي الرياضي والملاعب',
    description: 'كلاب هاوس وملاعب متعددة لرياضات اليوم كله.',
  },
  {
    number: '04',
    icon: Flower,
    name: 'مركز الويلنس واليوغا',
    description: 'سبا، يوغا، علاج طبيعي وكل ما يخص الراحة والاسترخاء.',
  },
  {
    number: '05',
    icon: Library,
    name: 'المنطقة الثقافية والمكتبة',
    description: 'فعاليات، ورش، ومكتبة في قلب المجتمع.',
  },
  {
    number: '06',
    icon: UtensilsCrossed,
    name: 'الكلاب هاوس والمطعم',
    description: 'تجربة طعام متميزة على البحيرات وسط الطبيعة.',
  },
  {
    number: '07',
    icon: Palmtree,
    name: 'بيتش تاون والريتيل',
    description: 'بروميناد ساحلي بكافيهات ومحلات بإطلالة مباشرة على البحر.',
  },
  {
    number: '08',
    icon: Sun,
    name: 'فندق ومطعم وريزيدنسز Nobu',
    description: 'الشراكة العالمية — لايف ستايل ياباني معاصر على شاطئ خاص.',
  },
];

const OgamiMasterplan = () => {
  return (
    <section
      id="ogami-masterplan"
      className="bg-white px-6 py-16 md:px-16 md:py-24"
    >
      <div className="mx-auto max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10 max-w-2xl md:mb-14"
        >
          <p className="text-[11px] font-semibold tracking-wider text-zinc-500">
            الماستر بلان
          </p>
          <h2 className="font-arabic mt-3 text-3xl font-bold leading-tight text-black md:text-5xl">
            مش وحدة فقط — مجتمع ساحلي كامل
          </h2>
          <p className="font-arabic mt-4 text-sm leading-relaxed text-zinc-600 md:text-base">
            أوجامي مقسوم لـ ٨ مناطق متكاملة، من شاطئ خاص بطول +800 متر إلى لاجونز
            سباحة بمساحة +120,000 م²، فندق Nobu، ومرحلة بوتانيكا تاون اللي بدأ الحجز فيها.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative overflow-hidden bg-stone-50 shadow-sm"
        >
          <img
            src={OVERVIEW}
            alt="الخريطة الشاملة لمشروع أوجامي"
            loading="lazy"
            className="h-auto w-full object-cover"
          />
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-14 md:gap-5 lg:grid-cols-4">
          {zones.map((zone, index) => {
            const Icon = zone.icon;
            return (
              <motion.div
                key={zone.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.04 * index }}
                className="group flex flex-col gap-3 border border-zinc-200 bg-white p-5 transition-colors hover:border-black"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center bg-black text-white">
                    <Icon size={18} strokeWidth={1.6} />
                  </span>
                  <span className="font-arabic text-2xl font-bold text-zinc-200 transition-colors group-hover:text-black">
                    {zone.number}
                  </span>
                </div>
                <h3 className="font-arabic text-base font-bold leading-snug text-black md:text-lg">
                  {zone.name}
                </h3>
                <p className="font-arabic text-xs leading-relaxed text-zinc-600 md:text-sm">
                  {zone.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mt-14 grid grid-cols-1 items-stretch gap-6 md:mt-20 md:grid-cols-2"
        >
          <div className="relative overflow-hidden bg-stone-100">
            <img
              src={BOTANICA}
              alt="منطقة إطلاق بوتانيكا تاون داخل أوجامي"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[11px] font-semibold tracking-wider text-zinc-500">
              مرحلة الإطلاق
            </p>
            <h3 className="font-arabic mt-3 text-2xl font-bold leading-tight text-black md:text-4xl">
              بوتانيكا تاون — تاون مشي بدون عربيات
            </h3>
            <p className="font-arabic mt-4 text-sm leading-relaxed text-zinc-600 md:text-base">
              ١٩ فدان، G+2 بنتهاوس، شوارع داخلية للمشي بس، باحات مشتركة، حمامات سباحة
              للأطفال، ومحلات بوتيك في الحارة الرئيسية. ٧٥٪ من الوحدات غرفتين و٢٥٪ ٣ غرف،
              كلها بتشطيب كامل وتكييف وغرفة شغالة.
            </p>
            <ul className="font-arabic mt-5 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-zinc-700">
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-black" /> ممرات مشاة 19 فدان
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-black" /> ٣ أنواع مباني
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-black" /> ميزات مياه متدفقة
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-black" /> سبلاش بارك
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-black" /> ريتيل بوتيك
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-black" /> توجيه شمالي للوحدات
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OgamiMasterplan;
