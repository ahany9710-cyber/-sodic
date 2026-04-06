import { motion } from 'framer-motion';
import { MessageCircle, Plus } from 'lucide-react';
import { trackMarketingContact } from '../utils/trackMarketing';
import { getWhatsAppLink } from '../utils/whatsapp';

const HERO_POSTER = './assets/hero/bg.webp';
const HERO_VIDEO = './sections/hero/video.mp4';

const Hero = () => {
  const scrollToDevelopments = () => {
    document.getElementById('interactive-filter')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToLeadForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={HERO_POSTER}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/25" aria-hidden />

      <div className="relative z-10 flex min-h-screen items-end pb-28 pt-28 md:pb-32">
        <div className="w-full pl-6 pr-6 md:pl-16 lg:pl-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <h1 className="font-heading text-white font-light text-5xl leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl">
              Creating
              <br />
              Communities for
              <br />
              You to Live More
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.12 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <motion.button
              type="button"
              onClick={scrollToDevelopments}
              className="inline-flex items-center gap-2 border border-white/80 px-6 py-3 text-xs font-semibold tracking-[0.2em] text-white uppercase transition-colors hover:bg-white/10"
            >
              <Plus size={14} />
              Our Developments
            </motion.button>
            <motion.button
              type="button"
              onClick={scrollToLeadForm}
              className="inline-flex items-center gap-2 border border-white bg-white px-6 py-3 text-xs font-semibold tracking-[0.2em] text-black uppercase transition-colors hover:bg-white/90"
            >
              Register Your Interest
            </motion.button>
            <motion.a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackMarketingContact('whatsapp')}
              className="inline-flex items-center gap-2 border border-[#25D366] bg-[#25D366]/95 px-6 py-3 text-xs font-semibold tracking-[0.2em] text-white uppercase transition-colors hover:bg-[#20bd5a]"
            >
              <MessageCircle size={14} />
              WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
