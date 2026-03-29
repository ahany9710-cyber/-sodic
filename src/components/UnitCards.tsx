import { units } from '../data/units';
import { useInView } from '../hooks/useInView';

const scrollToForm = () => {
  document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
};

const UnitCards = () => {
  const { ref, inView } = useInView();

  return (
    <section
      id="available-units"
      className="w-full px-4 sm:px-6 lg:px-8 py-section-md md:py-section-lg bg-modon-bg"
    >
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <div
          className={`text-center mb-12 md:mb-16 ${inView ? 'animate-fade-in-up' : 'before-animate'}`}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-modon-black tracking-heading">
            الوحدات المتاحة
          </h2>
          <p className="font-heading text-lg md:text-xl text-gray-600 mt-3 tracking-wide">
            Available Units
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10">
          {units.map((unit, index) => (
            <article
              key={unit.id}
              className={`bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col w-full max-w-sm sm:max-w-none mx-auto sm:mx-0 ${inView ? 'animate-fade-in-up' : 'before-animate'}`}
              style={inView ? { animationDelay: `${index * 60}ms` } : undefined}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={unit.image}
                  alt={unit.nameAr}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={600}
                  height={450}
                />
                {unit.badges && unit.badges.length > 0 ? (
                  <div className="absolute top-3 end-3 flex flex-wrap gap-1.5 justify-end max-w-[85%]">
                    {unit.badges.map((badge, i) => (
                      <span
                        key={`${unit.id}-${i}-${badge}`}
                        className="inline-block px-2.5 py-1.5 text-xs sm:text-sm font-semibold tracking-wide bg-modon-black text-white rounded"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
              <div className="p-5 md:p-6 flex flex-col flex-1 text-right">
                <p className="font-arabic text-lg md:text-xl font-bold text-modon-black mb-2 order-1">
                  {unit.bedroomsAr}
                </p>
                <h3 className="font-heading font-bold text-modon-black text-lg md:text-xl mb-1 order-2">
                  {unit.nameAr}
                </h3>
                <p className="font-heading text-sm text-gray-500 mb-4 order-3" dir="ltr">
                  {unit.name} · {unit.bedrooms}
                </p>
                <p className="font-heading text-2xl md:text-3xl font-bold text-modon-black mb-2 order-4">
                  {unit.area}
                </p>
                <p className="text-gray-600 text-base font-semibold mb-6 order-5">{unit.startingPrice}</p>
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="mt-auto w-full py-4 px-4 border-2 border-modon-black text-modon-black rounded font-bold hover:bg-modon-black hover:text-white transition-colors duration-200 font-arabic text-base min-h-[52px]"
                >
                  سجل اهتمامك
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnitCards;
