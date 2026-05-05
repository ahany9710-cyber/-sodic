import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { config } from '../../config';
import { trackMarketingContact } from '../../utils/trackMarketing';
import { getWhatsAppLink } from '../../utils/whatsapp';

interface FAQ {
  q: string;
  a: string;
}

const faqs: FAQ[] = [
  {
    q: 'أوجامي بالظبط فين على الساحل الشمالي؟',
    a: 'أوجامي بيقع مباشرة على الطريق الدولي الساحلي بين رأس الحكمة وفوكا. على بُعد 3 دقائق من رأس الحكمة، 5 دقائق من June، 35 دقيقة من سيدي عبد الرحمن، و55 دقيقة من مطار العلمين الدولي. الموقع بيدّيك بحر مباشر +800 متر شاطئ خاص.',
  },
  {
    q: 'إيه الفرق بين أوجامي وبوتانيكا تاون؟',
    a: 'أوجامي هو المشروع الكامل (8 مناطق متكاملة، فندق Nobu، شاطئ، نادي رياضي، مكتبة ثقافية، إلخ). بوتانيكا تاون هي مرحلة الإطلاق داخل أوجامي - تاون مشي بدون عربيات على مساحة 19 فدان فيها شاليهات بتشطيب كامل بأسعار تبدأ من 16.5 مليون.',
  },
  {
    q: 'الوحدات بتشطيب ولا نص تشطيب؟',
    a: 'كل وحدات بوتانيكا تاون بيتم تسليمها بتشطيب كامل (Fully Finished) مع تكييف مركّب جاهز. كمان كل الوحدات فيها غرفة للشغّالة، وتراسات متدرّجة (cascading terraces) بمساحات من 11 لـ 56 م². بمعنى تستلم الشاليه بتاعك جاهز بدون أي مصاريف تشطيب إضافية.',
  },
  {
    q: 'إيه خطط السداد المتاحة؟',
    a: 'فيه 3 خطط: (1) مقدّم 5٪ + تقسيط تصاعدي 8 سنوات، (2) مقدّم 5٪ + تقسيط عادي 8 سنوات، (3) مقدّم 5٪ + 7 سنوات بفترة سماح قبل بدء الأقساط. فريق المبيعات بيقدر يفصّلك جدول مخصّص حسب الوحدة اللي اختارتها.',
  },
  {
    q: 'فندق Nobu فعلًا داخل أوجامي ولا قريب منه؟',
    a: 'فندق Nobu ومطعمه وريزيدنسز Nobu Branded داخل أوجامي بشكل أصلي ومش مجرد جار. ده شراكة عالمية بين سوديك و Nobu (المعروف عالميًا في طوكيو ومونتي كارلو ولاس فيغاس). معناها سكان أوجامي بيتمتعوا بالخدمات الفندقية، المطعم، والشاطئ المرتبط بالفندق.',
  },
];

const OgamiFAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const waHref = getWhatsAppLink({ text: config.whatsappOgamiMessageAr });

  return (
    <section
      id="ogami-faq"
      className="bg-white px-6 py-16 md:px-16 md:py-24"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10 md:mb-14"
        >
          <p className="text-[11px] font-semibold tracking-wider text-zinc-500">الأسئلة الشائعة</p>
          <h2 className="font-arabic mt-3 text-3xl font-bold leading-tight text-black md:text-5xl">
            الإجابات اللي بتسأل عنها قبل ما تشتري
          </h2>
        </motion.div>

        <div className="border-y border-zinc-200">
          {faqs.map((faq, index) => {
            const isOpen = openIdx === index;
            return (
              <div
                key={faq.q}
                className={`border-b border-zinc-200 last:border-b-0 ${isOpen ? 'bg-stone-50' : 'bg-white'}`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-start transition-colors md:py-6"
                >
                  <span className="font-arabic text-base font-bold text-black md:text-lg">
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="grid h-9 w-9 shrink-0 place-items-center border border-zinc-300 bg-white text-zinc-700"
                  >
                    <ChevronDown size={16} strokeWidth={2} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <p className="font-arabic pb-6 text-sm leading-relaxed text-zinc-700 md:text-base">
                        {faq.a}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          className="mt-10 flex flex-col items-start gap-4 border border-zinc-200 bg-stone-50 p-5 md:flex-row md:items-center md:justify-between md:p-7"
        >
          <p className="font-arabic max-w-2xl text-sm leading-relaxed text-zinc-700 md:text-base">
            عندك سؤال مش مذكور هنا؟ تواصل مع فريق المبيعات على واتساب — هنرد عليك في دقائق.
          </p>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackMarketingContact('whatsapp')}
            className="font-arabic inline-flex shrink-0 items-center gap-2 bg-[#25D366] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#20bd5a]"
          >
            <MessageCircle size={16} />
            اسأل على واتساب
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default OgamiFAQ;
