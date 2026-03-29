import { motion } from 'framer-motion';

const items = [
  {
    ar: '٥٪ مقدم + ٥٪ بعد ٣ أشهر',
    en: '5% Downpayment + 5% after 3 months',
  },
  {
    ar: 'تقسيط حتى ٨ سنوات',
    en: '8 Years Installments',
  },
  {
    ar: 'جدية حجز ١،٠٠٠،٠٠٠ ج.م',
    en: '1,000,000 EGP Booking Fee',
  },
];

const PaymentBar = () => {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="payment-plan" className="w-full bg-modon-black text-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14"
      >
        <div className="flex items-center justify-center gap-2 mb-6 md:mb-8">
          <motion.span
            className="relative flex h-3 w-3"
            aria-hidden
            initial={{ scale: 0.9 }}
            animate={{ scale: [0.9, 1.15, 0.9] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-amber-400" />
          </motion.span>
          <span className="font-arabic text-sm md:text-base font-semibold text-amber-200 tracking-wide">
            عرض محدود — لا تفوت الفرصة
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className={`text-center px-4 md:px-6 flex flex-col justify-center gap-2 ${
                i < 2 ? 'md:border-e md:border-white/20' : ''
              }`}
            >
              <p className="font-arabic text-xl md:text-2xl font-bold leading-snug">
                {item.ar}
              </p>
              <p className="font-heading text-base md:text-lg text-white/90 tracking-wide font-semibold">
                {item.en}
              </p>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 md:mt-12 pt-8 border-t border-white/15 text-center"
        >
          <p className="font-arabic text-xl md:text-2xl font-bold text-white mb-5">
            حمّل البروشور الآن
          </p>
          <motion.button
            type="button"
            onClick={scrollToForm}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-modon-black rounded font-bold font-arabic text-lg shadow-lg hover:bg-modon-sand transition-colors min-h-[56px]"
          >
            حمّل البروشور
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PaymentBar;
