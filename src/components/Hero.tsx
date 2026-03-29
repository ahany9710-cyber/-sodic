import { m } from 'framer-motion';

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
      />
      <div className="absolute inset-0 bg-black/40" aria-hidden />

      <div className="relative z-10 flex min-h-screen flex-col">
        <div className="flex justify-center pt-24 md:pt-28 px-4">
          <m.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center w-full max-w-2xl md:max-w-4xl"
          >
            <img
              src={LOGO_REH}
              alt="رأس الحكمة"
              width={640}
              height={200}
              className="w-full max-w-[min(92vw,28rem)] md:max-w-[min(85vw,36rem)] h-auto object-contain object-center brightness-0 invert drop-shadow-md md:drop-shadow-lg"
            />
          </m.div>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center px-4 pb-24 md:pb-28 text-center">
          <m.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-wide max-w-5xl leading-tight"
          >
            Timeless Mediterranean Living
          </m.h1>
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3 }}
            className="font-arabic mt-6 md:mt-8 max-w-3xl text-2xl md:text-3xl text-white/90 leading-relaxed"
          >
            رأس الحكمة: حيث تلتقي الفخامة بالطبيعة الساحرة على ساحل المتوسط
          </m.p>
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.45 }}
            className="mt-10 md:mt-12"
          >
            <m.button
              type="button"
              onClick={scrollToForm}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-5 text-lg md:text-xl bg-white text-modon-black rounded font-bold font-arabic shadow-lg hover:bg-modon-sand transition-colors duration-200 min-h-[56px]"
            >
              سجل اهتمامك الآن
            </m.button>
            <p className="mt-4 text-base md:text-lg font-arabic text-white/70 max-w-xl mx-auto">
              العرض محدود — سجل قبل انتهاء الفترة
            </p>
          </m.div>
        </div>

        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
        >
          <m.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            aria-hidden
          >
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </m.div>
        </m.div>
      </div>
    </section>
  );
};

export default Hero;
