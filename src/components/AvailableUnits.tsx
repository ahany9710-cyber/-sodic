import { MessageCircle, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { config } from '../config';
import { getUnitDisplay, isSodicEastHotOfferUnit, units } from '../data/units';
import { formatPrice } from '../utils/formatPrice';
import { trackMarketingContact } from '../utils/trackMarketing';
import { getWhatsAppLink } from '../utils/whatsapp';

export type AvailableUnitsLocale = 'en' | 'ar';

interface AvailableUnitsProps {
  locale?: AvailableUnitsLocale;
}

function HotOfferBadge({ locale }: { locale: AvailableUnitsLocale }) {
  const isAr = locale === 'ar';
  return (
    <span className="inline-flex max-w-full shrink-0 flex-wrap items-center gap-x-1.5 gap-y-0.5 border border-red-600 bg-red-50 px-2 py-1 text-[10px] font-bold leading-tight text-red-700">
      <span className="uppercase tracking-wide">Hot offer</span>
      <span className="text-red-400" aria-hidden>
        ·
      </span>
      <span className={isAr ? 'font-semibold' : 'font-semibold uppercase tracking-wide'}>
        {isAr ? 'إستلام فوري' : 'Immediate delivery'}
      </span>
    </span>
  );
}

const AvailableUnits = ({ locale = 'en' }: AvailableUnitsProps) => {
  const isAr = locale === 'ar';
  const scrollToLeadForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const waHref = isAr ? getWhatsAppLink({ text: config.whatsappDefaultMessageAr }) : getWhatsAppLink();

  const waHover =
    'inline-flex items-center gap-2 border border-black px-3 py-2 text-xs font-semibold tracking-wide text-black transition-colors hover:bg-[#25D366] hover:text-white hover:border-[#25D366]';

  const title = isAr ? 'الوحدات المتاحة' : 'Available Units';
  const thUnit = isAr ? 'الوحدة' : 'Unit';
  const thProject = isAr ? 'المشروع' : 'Project';
  const thType = isAr ? 'النوع' : 'Type';
  const thArea = isAr ? 'المساحة' : 'Area';
  const thPrice = isAr ? 'السعر' : 'Price';
  const thDetails = isAr ? 'التفاصيل' : 'Details';
  const thAction = isAr ? 'إجراء' : 'Action';
  const waInquiry = isAr ? 'استفسار واتساب' : 'WhatsApp Inquiry';
  const ctaLabel = isAr ? 'المزيد من الوحدات المناسبة لك' : 'Check more units only for you';

  const theadClass = isAr
    ? 'text-xs font-semibold text-gray-600'
    : 'text-xs uppercase tracking-wide text-gray-600';

  return (
    <section id="available-units" className={`bg-white px-6 py-12 md:px-16 md:py-16 ${isAr ? 'font-arabic' : ''}`}>
      <div className="mx-auto max-w-[1600px]">
        <h2
          className={`text-4xl font-bold tracking-wide text-black md:text-5xl ${isAr ? 'font-arabic' : 'font-heading uppercase'}`}
        >
          {title}
        </h2>

        <div className="mt-8 hidden overflow-hidden border border-gray-100 md:block">
          <table className="w-full text-start">
            <thead className="bg-gray-50">
              <tr className={theadClass}>
                <th className="px-4 py-3">{thUnit}</th>
                <th className="px-4 py-3">{thProject}</th>
                <th className="px-4 py-3">{thType}</th>
                <th className="px-4 py-3">{thArea}</th>
                <th className="px-4 py-3">{thPrice}</th>
                <th className="px-4 py-3">{thDetails}</th>
                <th className="px-4 py-3 text-end">{thAction}</th>
              </tr>
            </thead>
            <tbody>
              {units.map((unit) => {
                const row = getUnitDisplay(unit, locale);
                return (
                <tr key={unit.id} className="border-b border-gray-100 align-middle">
                  <td className="px-4 py-3">
                    <img src={unit.image} alt={row.type} className="h-14 w-24 object-cover" />
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-col items-start gap-2 sm:flex-row sm:flex-wrap sm:items-center">
                      <span className="font-semibold text-black">{row.project}</span>
                      {isSodicEastHotOfferUnit(unit) ? <HotOfferBadge locale={locale} /> : null}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-700">{row.type}</td>
                  <td className="px-4 py-3 text-gray-700">{row.area}</td>
                  <td className="px-4 py-3 font-bold text-black">{formatPrice(unit.price)}</td>
                  <td className="px-4 py-3 text-gray-600">{row.details}</td>
                  <td className="px-4 py-3 text-end">
                    <a
                      href={waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackMarketingContact('whatsapp')}
                      className={waHover}
                    >
                      <MessageCircle size={14} />
                      {waInquiry}
                    </a>
                  </td>
                </tr>
              );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:hidden">
          {units.map((unit) => {
            const row = getUnitDisplay(unit, locale);
            return (
            <article key={unit.id} className="border border-gray-100 bg-white p-4 shadow-sm">
              <img src={unit.image} alt={row.type} className="h-40 w-full object-cover" />
              <div className="mt-4 space-y-2">
                <div className="flex flex-col gap-2">
                  <p className={`text-xs tracking-wide text-gray-500 ${isAr ? '' : 'uppercase'}`}>{row.project}</p>
                  {isSodicEastHotOfferUnit(unit) ? <HotOfferBadge locale={locale} /> : null}
                </div>
                <h3 className={`text-xl font-bold text-black ${isAr ? 'font-arabic' : 'font-heading'}`}>{row.type}</h3>
                <p className="text-sm text-gray-600">{row.area}</p>
                <p className="text-lg font-bold text-black">{formatPrice(unit.price)}</p>
                <p className="text-sm text-gray-600">{row.details}</p>
              </div>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackMarketingContact('whatsapp')}
                className={`mt-4 inline-flex w-full items-center justify-center gap-2 border border-black px-3 py-3 text-xs font-semibold tracking-wide text-black transition-colors hover:bg-[#25D366] hover:text-white hover:border-[#25D366] ${isAr ? '' : 'uppercase'}`}
              >
                <MessageCircle size={14} />
                {waInquiry}
              </a>
            </article>
          );
          })}
        </div>

        <div className="mb-12 mt-12 flex justify-center">
          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            onClick={scrollToLeadForm}
            className={`inline-flex w-full items-center justify-center gap-2 bg-black px-12 py-5 text-sm font-bold text-white transition-colors hover:bg-zinc-800 md:w-auto ${isAr ? 'font-arabic' : ''}`}
          >
            {ctaLabel}
            <ChevronRight size={18} className={isAr ? 'rotate-180' : ''} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default AvailableUnits;
