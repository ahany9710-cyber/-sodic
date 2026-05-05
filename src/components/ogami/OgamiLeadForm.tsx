import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { config } from '../../config';
import LeadForm from '../LeadForm';

const OgamiLeadForm = () => {
  return (
    <section
      id="lead-form"
      className="relative overflow-hidden bg-stone-50 px-6 py-16 md:px-16 md:py-24"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 gap-10 md:gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="flex flex-col justify-center"
          >
            <p className="text-[11px] font-semibold tracking-wider text-zinc-500">سجّل اهتمامك</p>
            <h2 className="font-arabic mt-3 text-3xl font-bold leading-tight text-black md:text-5xl">
              احجز شاليهك في أوجامي اليوم
            </h2>
            <p className="font-arabic mt-4 max-w-md text-sm leading-relaxed text-zinc-600 md:text-base">
              اترك اسمك ورقمك وفريق المبيعات هيتواصل معاك في خلال 24 ساعة بكل التفاصيل
              والأسعار وخطط السداد المتاحة لوحدتك المثالية.
            </p>

            <ul className="font-arabic mt-8 space-y-4 text-sm text-zinc-700 md:text-base">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center bg-black text-white">
                  <ShieldCheck size={14} strokeWidth={1.8} />
                </span>
                <span>تواصل خلال 24 ساعة من أحد فريق مبيعات سوديك</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center bg-black text-white">
                  <ShieldCheck size={14} strokeWidth={1.8} />
                </span>
                <span>زيارة معاينة لمكاتب العرض في الشيخ زايد أو القاهرة الجديدة</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center bg-black text-white">
                  <ShieldCheck size={14} strokeWidth={1.8} />
                </span>
                <span>عروض أسعار مخصّصة وخطط سداد مرنة حسب احتياجاتك</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center bg-black text-white">
                  <ShieldCheck size={14} strokeWidth={1.8} />
                </span>
                <span>بياناتك بتتعامل بسرية كاملة ومش بنبعتلك Spam.</span>
              </li>
            </ul>

            <div className="mt-10 border-t border-zinc-200 pt-6 text-xs text-zinc-500 md:text-sm">
              <p className="font-arabic">
                مكاتب البيع · الشيخ زايد: ك ٣٨ طريق القاهرة-الإسكندرية الصحراوي · القاهرة الجديدة: شارع التسعين الجنوبي.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
            className="bg-white p-2 shadow-xl ring-1 ring-zinc-100"
          >
            <LeadForm
              locale="ar"
              presetProject="Ogami"
              lockProject
              title="بياناتك"
              subtitle="هنتواصل معاك في خلال 24 ساعة."
              submitLabelOverride="سجّل اهتمامك"
              whatsappMessage={config.whatsappOgamiMessageAr}
              sectionClassName="bg-white px-6 py-8 md:px-10 md:py-10"
              sectionId="lead-form-inner"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OgamiLeadForm;
