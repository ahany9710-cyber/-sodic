import { motion } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { config } from '../../config';
import { trackMarketingContact } from '../../utils/trackMarketing';
import { getWhatsAppLink } from '../../utils/whatsapp';

const HERO_IMAGE = '/sections/ogami/hero.jpg';
const HERO_FALLBACK_VIDEO = '/sections/hero/video.mp4';

const OgamiHero = () => {
  const scrollToLeadForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToNext = () => {
    document.getElementById('ogami-stats')?.scrollIntoView({ behavior: 'smooth' });
  };

  const waHref = getWhatsAppLink({ text: config.whatsappOgamiMessageAr });

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] overflow-hidden bg-black md:min-h-screen"
    >
      <img
        src={HERO_IMAGE}
        alt="أوجامي - الساحل الشمالي"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={HERO_IMAGE}
        className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700"
        onCanPlay={(event) => {
          event.currentTarget.classList.remove('opacity-0');
        }}
      >
        <source src={HERO_FALLBACK_VIDEO} type="video/mp4" />
      </video>

      <div
        className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/90"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/30 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-[92vh] items-end pb-28 pt-24 md:min-h-screen md:pb-32">
        <div className="w-full px-6 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mb-4 inline-flex items-center gap-2 border border-white/40 bg-white/10 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-white backdrop-blur-sm"
          >
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
            <span>إطلاق جديد · بوتانيكا تاون · شراكة Nobu العالمية</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
            className="font-arabic max-w-3xl text-4xl font-bold leading-[1.05] text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.55)] sm:text-5xl md:text-6xl lg:text-[5.25rem]"
          >
            أوجامي
            <span className="block text-2xl font-semibold text-white/90 sm:text-3xl md:text-4xl lg:text-5xl">
              حياة كاملة على بحر رأس الحكمة
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.12 }}
            className="font-arabic mt-5 max-w-xl text-base leading-relaxed text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] md:text-lg"
          >
            مجتمع ساحلي متكامل من تطوير سوديك على بُعد ٣ دقائق من رأس الحكمة، يجمع بين
            لاجونز سباحة، شاطئ خاص، فندق ومطعم Nobu، ووحدات بإطلالة على المياه.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.18 }}
            className="mt-7 grid max-w-xl grid-cols-2 gap-2 text-white sm:gap-3"
          >
            <div className="border border-white/25 bg-white/5 px-4 py-3 backdrop-blur-sm">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-white/60">
                شاليه غرفتين
              </p>
              <p className="font-arabic mt-1 text-lg font-bold sm:text-xl md:text-2xl">
                من 16.5 مليون ج.م.
              </p>
              <p className="text-[11px] text-white/70">من 120 م²</p>
            </div>
            <div className="border border-white/25 bg-white/5 px-4 py-3 backdrop-blur-sm">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-white/60">
                شاليه ٣ غرف
              </p>
              <p className="font-arabic mt-1 text-lg font-bold sm:text-xl md:text-2xl">
                من 18.5 مليون ج.م.
              </p>
              <p className="text-[11px] text-white/70">من 140 م²</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.24 }}
            className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <button
              type="button"
              onClick={scrollToLeadForm}
              className="font-arabic inline-flex min-h-12 items-center justify-center gap-2 bg-white px-6 py-3 text-sm font-bold text-black transition-colors hover:bg-white/90 sm:text-base"
            >
              احجز شاليهك الآن
            </button>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackMarketingContact('whatsapp')}
              className="font-arabic inline-flex min-h-12 items-center justify-center gap-2 bg-[#25D366] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#20bd5a] sm:text-base"
            >
              <MessageCircle size={18} />
              تواصل واتساب
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.42 }}
            className="font-arabic mt-5 text-xs text-white/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)] md:text-sm"
          >
            مقدّم 5٪ فقط · تقسيط حتى 8 سنوات · تشطيب كامل + تكييف
          </motion.p>
        </div>
      </div>

      <motion.button
        type="button"
        onClick={scrollToNext}
        aria-label="المزيد"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.6 },
          y: { duration: 1.6, repeat: Infinity, ease: 'easeInOut', delay: 0.6 },
        }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 text-white/80 hover:text-white md:block"
      >
        <ChevronDown size={28} strokeWidth={1.5} />
      </motion.button>
    </section>
  );
};

export default OgamiHero;
