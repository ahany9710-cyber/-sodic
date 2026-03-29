import { useInView } from '../hooks/useInView';

const STATS = [
  { value: '17', label: 'حي سكني', sub: '17 Residential Districts' },
  { value: 'مدن', label: 'المطور', sub: 'Modon Holding' },
  { value: 'الساحل الشمالي', label: 'الموقع', sub: 'North Coast' },
  { value: '2028', label: 'التسليم المتوقع', sub: 'Expected delivery' },
];

const TrustBar = () => {
  const { ref, inView } = useInView();

  return (
    <section className="w-full bg-modon-sand px-4 sm:px-6 lg:px-8 py-10 md:py-14" aria-label="مؤشرات الثقة في المشروع">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 text-center">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center gap-1 ${inView ? 'animate-fade-in-up' : 'before-animate'}`}
              style={inView ? { animationDelay: `${i * 120}ms` } : undefined}
            >
              <p className="font-heading text-2xl md:text-3xl font-bold text-modon-black leading-tight">
                {stat.value}
              </p>
              <p className="font-arabic text-lg md:text-xl font-semibold text-gray-900">{stat.label}</p>
              <p className="font-heading text-xs md:text-sm text-gray-600 tracking-wide">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
