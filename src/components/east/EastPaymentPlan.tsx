import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEastPage } from '../../contexts/EastLocaleContext';
import { trackMarketingContact } from '../../utils/trackMarketing';
import { getWhatsAppLink } from '../../utils/whatsapp';

const EastPaymentPlan = () => {
  const { copy, whatsappEast, fontClass } = useEastPage();
  const p = copy.payment;

  const scrollToLeadForm = () => {
    document.getElementById('east-lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const waHref = getWhatsAppLink({ text: whatsappEast });
  const PlanArrow = p.planCtaReverse ? ArrowRight : ArrowLeft;

  return (
    <section id="east-payment" className="relative overflow-hidden bg-black px-6 py-5 md:px-16 md:py-6">
      <div className="mx-auto max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-semibold tracking-wider text-white/50">{p.eyebrow}</p>
              <h2 className={`${fontClass} mt-1 text-lg font-bold text-white md:text-xl`}>{p.title}</h2>
            </div>
            <p className={`${fontClass} text-xs leading-relaxed text-white/55 md:max-w-sm md:text-end`}>{p.lead}</p>
          </div>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            {p.plans.map((plan) => (
              <div
                key={plan.id}
                className="flex items-center justify-between gap-3 border border-white/10 bg-white/5 px-3 py-2.5 md:flex-col md:items-start md:gap-1.5 md:px-4 md:py-3"
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <h3 className={`${fontClass} text-sm font-bold text-white`}>{plan.title}</h3>
                    {plan.badge ? (
                      <span className={`${fontClass} shrink-0 bg-white/10 px-1.5 py-0.5 text-[9px] font-semibold text-white/70`}>
                        {plan.badge}
                      </span>
                    ) : null}
                  </div>
                </div>
                <div className={`${fontClass} flex shrink-0 gap-3 text-xs tabular-nums`}>
                  <span>
                    <span className="text-white/40">{p.downLabel} </span>
                    <span className="font-bold text-white">{plan.dp}</span>
                  </span>
                  <span>
                    <span className="text-white/40">{p.durationLabel} </span>
                    <span className="font-bold text-white">{plan.duration}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 border-t border-white/10 pt-3 sm:flex-row sm:items-center sm:justify-between">
            <p className={`${fontClass} text-xs text-white/65 sm:max-w-md`}>{p.footerLead}</p>
            <div className="flex shrink-0 flex-wrap gap-2">
              <button
                type="button"
                onClick={scrollToLeadForm}
                className={`${fontClass} inline-flex items-center gap-1 bg-white px-3 py-2 text-xs font-bold text-black transition-colors hover:bg-white/90`}
              >
                {p.ctaPlan}
                <PlanArrow size={12} />
              </button>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackMarketingContact('whatsapp')}
                className={`${fontClass} inline-flex items-center gap-1.5 bg-[#25D366] px-3 py-2 text-xs font-bold text-white transition-colors hover:bg-[#20bd5a]`}
              >
                {p.footerCta}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EastPaymentPlan;
