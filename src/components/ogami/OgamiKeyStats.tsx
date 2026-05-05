import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { useOgamiPage } from '../../contexts/OgamiLocaleContext';
import { useCountUp } from '../../hooks/useCountUp';
import { useInView } from '../../hooks/useInView';
import { ogamiStatIcon } from './ogamiIconMap';

interface StatResolved {
  icon: LucideIcon;
  value?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  valueText?: string;
}

const StatCard = ({
  stat,
  index,
  numberLocale,
  fontClass,
}: {
  stat: StatResolved;
  index: number;
  numberLocale: string;
  fontClass: string;
}) => {
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
      ? `${stat.prefix ?? ''}${new Intl.NumberFormat(numberLocale).format(value)}${stat.suffix ?? ''}`
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
      <p className={`${fontClass} text-2xl font-extrabold text-white sm:text-3xl md:text-4xl`}>{display}</p>
      <p className={`${fontClass} text-sm leading-relaxed text-white/65 md:text-base`}>{stat.label}</p>
    </motion.div>
  );
};

const OgamiKeyStats = () => {
  const { copy, fontClass } = useOgamiPage();
  const s = copy.stats;
  const stats: StatResolved[] = s.items.map((it) => ({
    icon: ogamiStatIcon[it.icon as keyof typeof ogamiStatIcon],
    value: it.value,
    prefix: it.prefix,
    suffix: it.suffix,
    label: it.label,
    valueText: it.valueText,
  }));

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
          <p className="text-[11px] font-semibold tracking-wider text-white/50">{s.eyebrow}</p>
          <h2 className={`${fontClass} mt-3 text-3xl font-bold leading-tight text-white md:text-5xl`}>
            {s.title}
          </h2>
          <p className={`${fontClass} mt-4 text-sm text-white/65 md:text-base`}>{s.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              stat={stat}
              index={index}
              numberLocale={copy.meta.numberLocale}
              fontClass={fontClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OgamiKeyStats;
