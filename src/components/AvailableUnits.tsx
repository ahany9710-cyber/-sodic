import { MessageCircle, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { config } from '../config';
import { units } from '../data/units';
import { formatPrice } from '../utils/formatPrice';

const AvailableUnits = () => {
  const scrollToLeadForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const waHover =
    'inline-flex items-center gap-2 border border-black px-3 py-2 text-xs font-semibold uppercase tracking-wide text-black transition-colors hover:bg-[#25D366] hover:text-white hover:border-[#25D366]';

  return (
    <section id="available-units" className="bg-white px-6 py-12 md:px-16 md:py-16">
      <div className="mx-auto max-w-[1600px]">
        <h2 className="font-heading text-4xl font-bold uppercase tracking-wide text-black md:text-5xl">Available Units</h2>

        <div className="mt-8 hidden overflow-hidden border border-gray-100 md:block">
          <table className="w-full text-left">
            <thead className="bg-gray-50">
              <tr className="text-xs uppercase tracking-wide text-gray-600">
                <th className="px-4 py-3">Unit</th>
                <th className="px-4 py-3">Project</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Area</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Details</th>
                <th className="px-4 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {units.map((unit) => (
                <tr key={unit.id} className="border-b border-gray-100 align-middle">
                  <td className="px-4 py-3">
                    <img src={unit.image} alt={unit.type} className="h-14 w-24 object-cover" />
                  </td>
                  <td className="px-4 py-3 font-semibold text-black">{unit.project}</td>
                  <td className="px-4 py-3 text-gray-700">{unit.type}</td>
                  <td className="px-4 py-3 text-gray-700">{unit.area}</td>
                  <td className="px-4 py-3 font-bold text-black">{formatPrice(unit.price)}</td>
                  <td className="px-4 py-3 text-gray-600">{unit.details}</td>
                  <td className="px-4 py-3 text-right">
                    <a
                      href={`https://wa.me/${config.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={waHover}
                    >
                      <MessageCircle size={14} />
                      WhatsApp Inquiry
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:hidden">
          {units.map((unit) => (
            <article key={unit.id} className="border border-gray-100 bg-white p-4 shadow-sm">
              <img src={unit.image} alt={unit.type} className="h-40 w-full object-cover" />
              <div className="mt-4 space-y-1">
                <p className="text-xs uppercase tracking-wide text-gray-500">{unit.project}</p>
                <h3 className="font-heading text-xl font-bold text-black">{unit.type}</h3>
                <p className="text-sm text-gray-600">{unit.area}</p>
                <p className="text-lg font-bold text-black">{formatPrice(unit.price)}</p>
                <p className="text-sm text-gray-600">{unit.details}</p>
              </div>
              <a
                href={`https://wa.me/${config.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-4 inline-flex w-full items-center justify-center gap-2 border border-black px-3 py-3 text-xs font-semibold uppercase tracking-wide text-black transition-colors hover:bg-[#25D366] hover:text-white hover:border-[#25D366]`}
              >
                <MessageCircle size={14} />
                WhatsApp Inquiry
              </a>
            </article>
          ))}
        </div>

        <div className="mb-12 mt-12 flex justify-center">
          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            onClick={scrollToLeadForm}
            className="inline-flex w-full items-center justify-center gap-2 bg-black px-12 py-5 text-sm font-bold text-white transition-colors hover:bg-zinc-800 md:w-auto"
          >
            Check more units only for you
            <ChevronRight size={18} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default AvailableUnits;
