import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, Phone, Send, Sparkles, X } from 'lucide-react';
import { config } from '../../config';
import { trackMarketingContact } from '../../utils/trackMarketing';
import { getWhatsAppLink } from '../../utils/whatsapp';

const SESSION_KEY = 'ogami_booking_popup_seen';
const TIME_DELAY_MS = 15_000;
const SCROLL_TRIGGER_RATIO = 0.4;

const popupWaMessage =
  'مرحباً، عايز أحجز مكاني على ماستربلان أوجامي / بوتانيكا تاون قبل البيع الرسمي. ممكن التفاصيل والأسعار؟';

const trackPopup = (action: 'open' | 'close' | 'cta_phone' | 'cta_whatsapp' | 'cta_form', trigger?: string) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'ogami_popup', { action, trigger });
  }
};

const OgamiBookingPopup = () => {
  const [open, setOpen] = useState(false);

  const openPopup = useCallback((trigger: string) => {
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem(SESSION_KEY) === '1') return;
    sessionStorage.setItem(SESSION_KEY, '1');
    setOpen(true);
    trackPopup('open', trigger);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem(SESSION_KEY) === '1') return;

    const timer = window.setTimeout(() => openPopup('time'), TIME_DELAY_MS);

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      const ratio = window.scrollY / max;
      if (ratio >= SCROLL_TRIGGER_RATIO) {
        openPopup('scroll');
      }
    };

    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) openPopup('exit_intent');
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    document.documentElement.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [openPopup]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    trackPopup('close');
  };

  const handleForm = () => {
    trackPopup('cta_form');
    setOpen(false);
    setTimeout(() => {
      const el = document.getElementById('lead-form');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        const firstInput = el.querySelector<HTMLInputElement>('input, select, textarea');
        firstInput?.focus({ preventScroll: true });
      }
    }, 250);
  };

  const waHref = getWhatsAppLink({ text: popupWaMessage });

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          key="ogami-popup"
          className="font-arabic fixed inset-0 z-[100] flex items-center justify-center px-4 py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          dir="rtl"
        >
          <button
            type="button"
            aria-label="إغلاق النافذة"
            onClick={close}
            className="absolute inset-0 cursor-default bg-black/70 backdrop-blur-sm"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="ogami-popup-title"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg overflow-hidden bg-white shadow-2xl"
          >
            <div className="relative bg-black px-6 py-5 text-white md:px-8 md:py-6">
              <button
                type="button"
                onClick={close}
                aria-label="إغلاق"
                className="absolute left-3 top-3 grid h-9 w-9 place-items-center text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X size={18} strokeWidth={2} />
              </button>

              <div className="flex items-center gap-2">
                <span className="relative inline-flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
                </span>
                <p className="text-[11px] font-semibold tracking-wider text-white/70">
                  بوتانيكا تاون · فرصة الإطلاق الأولي
                </p>
              </div>

              <h3
                id="ogami-popup-title"
                className="mt-3 text-2xl font-bold leading-tight md:text-3xl"
              >
                احجز مكانك على الماستربلان قبل الجميع
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75 md:text-base">
                عدد الوحدات محدود والترتيب أولوية. اختار طريقة التواصل المفضلة وفريق المبيعات
                هيوصلك بكل التفاصيل والأسعار وخطط السداد.
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] text-white/70 md:text-xs">
                <span className="inline-flex items-center gap-1.5">
                  <Sparkles size={12} strokeWidth={2} className="text-amber-400" />
                  مقدّم 5٪ فقط
                </span>
                <span className="text-white/30">·</span>
                <span>تقسيط حتى 8 سنوات</span>
                <span className="text-white/30">·</span>
                <span>تشطيب كامل + تكييف</span>
              </div>
            </div>

            <div className="grid gap-3 px-6 py-6 md:px-8 md:py-7">
              <a
                href={`tel:${config.phoneNumber}`}
                onClick={() => {
                  trackMarketingContact('phone');
                  trackPopup('cta_phone');
                  setOpen(false);
                }}
                className="group inline-flex w-full items-center justify-between gap-3 bg-black px-5 py-4 text-base font-bold text-white transition-colors hover:bg-zinc-800"
              >
                <span className="inline-flex items-center gap-2.5">
                  <Phone size={18} strokeWidth={2} />
                  اتصل بفريق المبيعات الآن
                </span>
                <span className="text-[11px] font-semibold tracking-wide text-white/70 group-hover:text-white">
                  أسرع رد
                </span>
              </a>

              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackMarketingContact('whatsapp');
                  trackPopup('cta_whatsapp');
                  setOpen(false);
                }}
                className="group inline-flex w-full items-center justify-between gap-3 bg-[#25D366] px-5 py-4 text-base font-bold text-white transition-colors hover:bg-[#20bd5a]"
              >
                <span className="inline-flex items-center gap-2.5">
                  <MessageCircle size={18} />
                  ابعت رسالة على واتساب
                </span>
                <span className="text-[11px] font-semibold tracking-wide text-white/80 group-hover:text-white">
                  رد فوري
                </span>
              </a>

              <button
                type="button"
                onClick={handleForm}
                className="inline-flex w-full items-center justify-between gap-3 border border-black bg-white px-5 py-4 text-base font-bold text-black transition-colors hover:bg-stone-50"
              >
                <span className="inline-flex items-center gap-2.5">
                  <Send size={18} />
                  سجّل اهتمامك في الفورم
                </span>
                <span className="text-[11px] font-semibold tracking-wide text-zinc-500">
                  خلال 24 ساعة
                </span>
              </button>
            </div>

            <div className="border-t border-zinc-100 bg-stone-50 px-6 py-4 text-xs leading-relaxed text-zinc-600 md:px-8 md:text-sm">
              <p>
                بياناتك بتتعامل بسرّية تامة ومش بيتم مشاركتها مع أي طرف تالت — سوديك ٣٠+ سنة من
                المصداقية والتسليم في الميعاد.
              </p>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default OgamiBookingPopup;
