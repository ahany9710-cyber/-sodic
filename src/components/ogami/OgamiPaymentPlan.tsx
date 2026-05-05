import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { config } from '../../config';
import { trackMarketingContact } from '../../utils/trackMarketing';
import { getWhatsAppLink } from '../../utils/whatsapp';

interface Plan {
  id: string;
  icon: LucideIcon;
  title: string;
  badge?: string;
  downpayment: string;
  duration: string;
  description: string;
  whatsappPrefill: string;
}

const plans: Plan[] = [
  {
    id: 'progressive',
    icon: TrendingUp,
    title: 'تصاعدي 8 سنوات',
    badge: 'الأخفّ على البداية',
    downpayment: '5٪',
    duration: '8 سنوات',
    description:
      'مقدّم 5٪ وأقساط بتزيد بشكل تصاعدي على مدار 8 سنوات. مناسبة لو دخلك بيكبر مع الوقت أو متوقع زيادة.',
    whatsappPrefill:
      'مرحباً، مهتم بخطة السداد التصاعدي 8 سنوات في أوجامي / بوتانيكا تاون. ممكن جدول الأقساط؟',
  },
  {
    id: 'standard',
    icon: Calendar,
    title: 'عادي 8 سنوات',
    badge: 'الأكثر طلبًا',
    downpayment: '5٪',
    duration: '8 سنوات',
    description:
      'مقدّم 5٪ وأقساط متساوية على مدار 8 سنوات. الخطة الكلاسيك الواضحة بدون مفاجآت.',
    whatsappPrefill:
      'مرحباً، مهتم بخطة السداد العادية 8 سنوات في أوجامي / بوتانيكا تاون. ممكن جدول الأقساط؟',
  },
  {
    id: 'grace',
    icon: Clock,
    title: '7 سنوات بفترة سماح',
    badge: 'تأجيل أقساط',
    downpayment: '5٪',
    duration: '7 سنوات',
    description:
      'مقدّم 5٪ وفترة سماح قبل بداية الأقساط. مناسبة لو محتاج وقت قبل ما تبدأ التحميل المالي.',
    whatsappPrefill:
      'مرحباً، مهتم بخطة 7 سنوات بفترة سماح في أوجامي / بوتانيكا تاون. ممكن تفاصيل فترة السماح؟',
  },
];

const OgamiPaymentPlan = () => {
  const scrollToLeadForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };
  const waHref = getWhatsAppLink({ text: config.whatsappOgamiMessageAr });

  return (
    <section
      id="ogami-payment"
      className="relative overflow-hidden bg-black px-6 py-16 md:px-16 md:py-24"
    >
      <div className="mx-auto max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10 max-w-2xl md:mb-14"
        >
          <p className="text-[11px] font-semibold tracking-wider text-white/50">خطط السداد</p>
          <h2 className="font-arabic mt-3 text-3xl font-bold leading-tight text-white md:text-5xl">
            ٣ خطط سداد مرنة — ابدأ بمقدّم 5٪ فقط
          </h2>
          <p className="font-arabic mt-4 text-sm leading-relaxed text-white/65 md:text-base">
            اختار اللي يناسب وضعك المالي وفريق المبيعات هيرتّبلك جدول أقساط خاص بوحدتك.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.06 * index }}
                className="group flex flex-col border border-white/10 bg-zinc-950/70 p-6 transition-colors hover:border-white/40 md:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center border border-white/20 bg-white/5 text-white">
                    <Icon size={20} strokeWidth={1.5} />
                  </span>
                  {plan.badge ? (
                    <span className="font-arabic inline-flex items-center bg-white px-3 py-1 text-[10px] font-bold tracking-wide text-black">
                      {plan.badge}
                    </span>
                  ) : null}
                </div>

                <h3 className="font-arabic mt-6 text-2xl font-bold leading-tight text-white md:text-3xl">
                  {plan.title}
                </h3>

                <div className="mt-5 grid grid-cols-2 gap-3 border-y border-white/10 py-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-white/45">
                      المقدّم
                    </p>
                    <p className="font-arabic mt-1 text-2xl font-extrabold text-white tabular-nums">
                      {plan.downpayment}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-white/45">
                      المدة
                    </p>
                    <p className="font-arabic mt-1 text-2xl font-extrabold text-white">
                      {plan.duration}
                    </p>
                  </div>
                </div>

                <p className="font-arabic mt-5 flex-1 text-sm leading-relaxed text-white/70">
                  {plan.description}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={scrollToLeadForm}
                    className="font-arabic inline-flex items-center justify-center gap-1.5 bg-white px-3 py-3 text-xs font-bold text-black transition-colors hover:bg-white/90"
                  >
                    احجز بالخطة دي
                    <ArrowLeft size={14} />
                  </button>
                  <a
                    href={getWhatsAppLink({ text: plan.whatsappPrefill })}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackMarketingContact('whatsapp')}
                    className="font-arabic inline-flex items-center justify-center gap-1.5 border border-[#25D366] bg-[#25D366] px-3 py-3 text-xs font-bold text-white transition-colors hover:bg-[#20bd5a]"
                  >
                    استفسار
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          className="mt-10 flex flex-col items-start justify-between gap-4 border border-white/10 bg-white/5 p-5 md:flex-row md:items-center md:p-7"
        >
          <p className="font-arabic max-w-2xl text-sm leading-relaxed text-white/85 md:text-base">
            مش متأكد من الخطة الأنسب؟ اكتبلنا على واتساب وفريق المبيعات هيرسّملك جدول أقساط
            مفصّل لوحدة بعينها.
          </p>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackMarketingContact('whatsapp')}
            className="font-arabic inline-flex shrink-0 items-center gap-2 bg-[#25D366] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#20bd5a]"
          >
            احصل على عرض مخصص
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default OgamiPaymentPlan;
