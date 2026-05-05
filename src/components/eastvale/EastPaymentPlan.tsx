import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEastvalePage } from '../../contexts/EastvaleLocaleContext';
import { trackMarketingContact } from '../../utils/trackMarketing';
import { getWhatsAppLink } from '../../utils/whatsapp';
import { eastPaymentIcon } from './eastIconMap';

const EastPaymentPlan = () => {
  const { copy, whatsappEastvale, fontClass } = useEastvalePage();
  const p = copy.payment;

  const scrollToLeadForm = () => {
    document.getElementById('eastvale-lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const waHref = getWhatsAppLink({ text: whatsappEastvale });
  const PlanArrow = p.planCtaReverse ? ArrowRight : ArrowLeft;

  const plans = p.plans.map((plan, idx) => ({
    ...plan,
    iconKey: p.icons[idx] as keyof typeof eastPaymentIcon,
  }));

  return (
    <section id="eastvale-payment" className="relative overflow-hidden bg-black px-6 py-16 md:px-16 md:py-24">
      <div className="mx-auto max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10 max-w-2xl md:mb-14"
        >
          <p className="text-[11px] font-semibold tracking-wider text-white/50">{p.eyebrow}</p>
          <h2 className={`${fontClass} mt-3 text-3xl font-bold leading-tight text-white md:text-5xl`}>{p.title}</h2>
          <p className={`${fontClass} mt-4 text-sm leading-relaxed text-white/65 md:text-base`}>{p.lead}</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {plans.map((plan, index) => {
            const Icon = eastPaymentIcon[plan.iconKey];
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
                    <span className={`${fontClass} inline-flex items-center bg-white px-3 py-1 text-[10px] font-bold tracking-wide text-black`}>
                      {plan.badge}
                    </span>
                  ) : null}
                </div>

                <h3 className={`${fontClass} mt-6 text-2xl font-bold leading-tight text-white md:text-3xl`}>{plan.title}</h3>

                <div className="mt-5 grid grid-cols-2 gap-3 border-y border-white/10 py-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-white/45">{p.downLabel}</p>
                    <p className={`${fontClass} mt-1 text-2xl font-extrabold tabular-nums text-white`}>{plan.dp}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-white/45">{p.durationLabel}</p>
                    <p className={`${fontClass} mt-1 text-2xl font-extrabold text-white`}>{plan.duration}</p>
                  </div>
                </div>

                <p className={`${fontClass} mt-5 flex-1 text-sm leading-relaxed text-white/70`}>{plan.desc}</p>

                <div className="mt-6 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={scrollToLeadForm}
                    className={`${fontClass} inline-flex items-center justify-center gap-1.5 bg-white px-3 py-3 text-xs font-bold text-black transition-colors hover:bg-white/90`}
                  >
                    {p.ctaPlan}
                    <PlanArrow size={14} />
                  </button>
                  <a
                    href={getWhatsAppLink({ text: plan.waPrefill })}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackMarketingContact('whatsapp')}
                    className={`${fontClass} inline-flex items-center justify-center gap-1.5 border border-[#25D366] bg-[#25D366] px-3 py-3 text-xs font-bold text-white transition-colors hover:bg-[#20bd5a]`}
                  >
                    {p.ctaWa}
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
          <p className={`${fontClass} max-w-2xl text-sm leading-relaxed text-white/85 md:text-base`}>{p.footerLead}</p>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackMarketingContact('whatsapp')}
            className={`${fontClass} inline-flex shrink-0 items-center gap-2 bg-[#25D366] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#20bd5a]`}
          >
            {p.footerCta}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default EastPaymentPlan;
