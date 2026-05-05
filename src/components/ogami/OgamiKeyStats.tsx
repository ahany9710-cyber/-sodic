import { motion } from 'framer-motion';
import { Award, Building2, MapPin, Sparkles, Trees, Waves } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useCountUp } from '../../hooks/useCountUp';
import { useInView } from '../../hooks/useInView';

interface Stat {
  icon: LucideIcon;
  value?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  /** Use when there's no number (e.g. textual badge) */
  valueText?: string;
}

const stats: Stat[] = [
  {
    icon: MapPin,
    value: 3,
    suffix: ' دقائق',
    label: 'تفصلك عن رأس الحكمة',
  },
  {
    icon: Waves,
    value: 120000,
    prefix: '+',
    suffix: ' م²',
    label: 'لاجونز سباحة عذبة',
  },
  {
    icon: Trees,
    value: 19,
    suffix: ' فدان',
    label: 'بوتانيكا تاون مشي بدون عربيات',
  },
  {
    icon: Building2,
    value: 60,
    suffix: '٪',
    label: 'وحدات بإطلالة على المياه',
  },
  {
    icon: Award,
    valueText: 'Nobu',
    label: 'فندق ومطعم وريزيدنسز عالمي داخل أوجامي',
  },
  {
    icon: Sparkles,
    valueText: '٪100',
    label: 'تشطيب كامل + تكييف وغرفة شغّالة',
  },
];

const formatArabic = (n: number) => new Intl.NumberFormat('ar-EG').format(n);

const StatCard = ({ stat, index }: { stat: Stat; index: number }) => {
  const { ref, inView } = useInView('-40px');
  const value = useCountUp({
    to: stat.value ?? 0,
    duration: 1500,
    start: inView && stat.value !== undefined,
    decimals: stat.decimals ?? 0,
  });
  const Icon = stat.icon;
  const display =
    stat.value !== undefined
      ? `${stat.prefix ?? ''}${formatArabic(value)}${stat.suffix ?? ''}`
      : (stat.valueText ?? '');
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: 'easeOut', delay: 0.05 * index }}
      className="group relative flex flex-col gap-3 border border-white/10 bg-zinc-950/70 p-6 transition-colors hover:border-white/30 md:p-8"
    >
      <span
        className="inline-flex h-11 w-11 items-center justify-center border border-white/20 bg-white/5 text-white"
        aria-hidden
      >
        <Icon size={20} strokeWidth={1.5} />
      </span>
      <p className="font-arabic text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
        {display}
      </p>
      <p className="font-arabic text-sm leading-relaxed text-white/65 md:text-base">{stat.label}</p>
    </motion.div>
  );
};

const OgamiKeyStats = () => {
  return (
    <section
      id="ogami-stats"
      className="relative overflow-hidden bg-black px-6 py-16 md:px-16 md:py-24"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10 max-w-2xl md:mb-14"
        >
          <p className="text-[11px] font-semibold tracking-wider text-white/50">
            ليه أوجامي؟
          </p>
          <h2 className="font-arabic mt-3 text-3xl font-bold leading-tight text-white md:text-5xl">
            كل اللي يخلّيك تنبهر بالساحل في مشروع واحد
          </h2>
          <p className="font-arabic mt-4 text-sm text-white/65 md:text-base">
            من سوديك — مطوّر برصيد +30 سنة وأكثر من 30,000 ساكن.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OgamiKeyStats;
