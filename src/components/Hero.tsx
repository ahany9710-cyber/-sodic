const HERO_BG = './assets/hero/bg.webp';
const LOGO_REH = './assets/hero/reh-logo.png';

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden">
      <img
        src={HERO_BG}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden
        fetchPriority="high"
        decoding="async"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-black/40" aria-hidden />

      <div className="relative z-10 flex min-h-screen flex-col">
        <div className="flex justify-center pt-24 md:pt-28 px-4">
          <div className="flex items-center justify-center w-full max-w-2xl md:max-w-4xl animate-fade-in-down">
            <img
              src={LOGO_REH}
              alt="رأس الحكمة"
              width={640}
              height={200}
              className="w-full max-w-[min(92vw,28rem)] md:max-w-[min(85vw,36rem)] h-auto object-contain object-center brightness-0 invert drop-shadow-md md:drop-shadow-lg"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center px-4 pb-24 md:pb-28 text-center">
          <h1
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-wide max-w-5xl leading-tight animate-fade-in-up delay-150"
          >
            Timeless Mediterranean Living
          </h1>
          <p
            className="font-arabic mt-6 md:mt-8 max-w-3xl text-2xl md:text-3xl text-white/90 leading-relaxed animate-fade-in-up delay-300"
          >
            رأس الحكمة: حيث تلتقي الفخامة بالطبيعة الساحرة على ساحل المتوسط
          </p>
          <div className="mt-10 md:mt-12 animate-fade-in-up delay-450">
            <button
              type="button"
              onClick={scrollToForm}
              className="px-12 py-5 text-lg md:text-xl bg-white text-modon-black rounded font-bold font-arabic shadow-lg hover:bg-modon-sand transition-colors duration-200 min-h-[56px] hover-scale"
            >
              سجل اهتمامك الآن
            </button>
            <p className="mt-4 text-base md:text-lg font-arabic text-white/70 max-w-xl mx-auto">
              العرض محدود — سجل قبل انتهاء الفترة
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-fade-in delay-1200">
          <div className="animate-bounce-arrow" aria-hidden>
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
