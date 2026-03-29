import { motion } from 'framer-motion';

const STATS = [
  { value: '17', label: 'حي سكني', sub: '17 Residential Districts' },
  { value: 'مدن', label: 'المطور', sub: 'Madin Holding' },
  { value: 'الساحل الشمالي', label: 'الموقع', sub: 'North Coast' },
  { value: '2028', label: 'التسليم المتوقع', sub: 'Expected delivery' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const TrustBar = () => {
  return (
    <section className="w-full bg-modon-sand px-4 sm:px-6 lg:px-8 py-10 md:py-14" aria-label="مؤشرات الثقة في المشروع">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 text-center"
        >
          {STATS.map((stat) => (
            <motion.div key={stat.label} variants={item} className="flex flex-col items-center gap-1">
              <p className="font-heading text-2xl md:text-3xl font-bold text-modon-black leading-tight">
                {stat.value}
              </p>
              <p className="font-arabic text-lg md:text-xl font-semibold text-gray-900">{stat.label}</p>
              <p className="font-heading text-xs md:text-sm text-gray-600 tracking-wide">{stat.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBar;
