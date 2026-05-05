import { motion } from 'framer-motion';
import { Plane, Sun, Waves, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const MAP = '/sections/ogami/location-map.jpg';

interface Distance {
  icon: LucideIcon;
  time: string;
  label: string;
  detail: string;
}

const distances: Distance[] = [
  {
    icon: Waves,
    time: '٣ دقائق',
    label: 'رأس الحكمة',
    detail: 'الواجهة البحرية الأشهر في الساحل الشمالي',
  },
  {
    icon: Zap,
    time: '٥ دقائق',
    label: 'June',
    detail: 'الجار المباشر — مشروع سوديك',
  },
  {
    icon: Sun,
    time: '٣٥ دقيقة',
    label: 'سيدي عبد الرحمن',
    detail: 'مارينا، مارسيليا، ومسرح العلمين',
  },
  {
    icon: Plane,
    time: '٥٥ دقيقة',
    label: 'مطار العلمين الدولي',
    detail: 'وصول مباشر من القاهرة وأوروبا',
  },
];

const OgamiLocation = () => {
  return (
    <section id="ogami-location" className="bg-stone-50 px-6 py-16 md:px-16 md:py-24">
      <div className="mx-auto max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10 max-w-2xl md:mb-14"
        >
          <p className="text-[11px] font-semibold tracking-wider text-zinc-500">
            الموقع
          </p>
          <h2 className="font-arabic mt-3 text-3xl font-bold leading-tight text-black md:text-5xl">
            على البحر مباشرة — قلب الساحل الشمالي الجديد
          </h2>
          <p className="font-arabic mt-4 text-sm leading-relaxed text-zinc-600 md:text-base">
            أوجامي بيقع على الطريق الساحلي الدولي بين رأس الحكمة وفوكا، فبتوصل بحرك في
            دقائق وأي وجهة في الساحل في أقل من ساعة.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="relative overflow-hidden bg-white shadow-sm lg:col-span-3"
          >
            <img
              src={MAP}
              alt="موقع أوجامي على الساحل الشمالي بين رأس الحكمة وفوكا"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 md:p-6">
              <p className="font-arabic text-xs font-semibold text-white md:text-sm">
                موقع أوجامي مباشر على الطريق الدولي الساحلي
              </p>
            </div>
          </motion.div>

          <div className="space-y-3 lg:col-span-2">
            {distances.map((d, index) => {
              const Icon = d.icon;
              return (
                <motion.div
                  key={d.label}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, ease: 'easeOut', delay: 0.06 * index }}
                  className="flex items-start gap-4 border border-zinc-200 bg-white p-4 transition-colors hover:border-zinc-400 md:p-5"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center bg-black text-white">
                    <Icon size={18} strokeWidth={1.6} />
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-arabic text-base font-bold text-black md:text-lg">
                        {d.label}
                      </p>
                      <p className="font-arabic shrink-0 text-xs font-semibold tracking-wide text-zinc-500 md:text-sm">
                        {d.time}
                      </p>
                    </div>
                    <p className="font-arabic mt-1 text-xs leading-relaxed text-zinc-500 md:text-sm">
                      {d.detail}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OgamiLocation;
