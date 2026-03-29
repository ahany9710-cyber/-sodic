import { m } from 'framer-motion';

interface NarrativeSectionProps {
  id?: string;
  /** Section heading (optional) */
  title?: string;
  /** Arabic narrative body */
  text: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
  /** default = modon-bg (#F9F9F9), sand = #D2CAB7 */
  variant?: 'default' | 'sand';
}

const NarrativeSection = ({
  id,
  title,
  text,
  imageSrc,
  imageAlt,
  imagePosition,
  variant = 'default',
}: NarrativeSectionProps) => {
  const bgClass = variant === 'sand' ? 'bg-modon-sand' : 'bg-modon-bg';
  const imageOrder = imagePosition === 'left' ? 'md:order-1' : 'md:order-2';
  const textOrder = imagePosition === 'left' ? 'md:order-2' : 'md:order-1';

  return (
    <section
      id={id}
      className={`w-full px-4 sm:px-6 lg:px-8 py-section-md md:py-section-lg ${bgClass}`}
    >
      <div className="container mx-auto max-w-6xl">
        {title ? (
          <m.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="font-heading text-2xl md:text-3xl font-bold text-modon-black mb-10 md:mb-14 text-center tracking-heading"
          >
            {title}
          </m.h2>
        ) : null}

        {/* LTR grid so image left/right matches design regardless of page RTL */}
        <div dir="ltr" className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
          <m.div
            initial={{ opacity: 0, x: imagePosition === 'left' ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65 }}
            className={`${imageOrder} overflow-hidden rounded-lg shadow-md`}
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover aspect-[4/3] md:min-h-[280px]"
              loading="lazy"
            />
          </m.div>
          <m.div
            dir="rtl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className={`${textOrder} font-arabic text-xl md:text-2xl text-gray-800 leading-loose`}
          >
            <p className="text-right">{text}</p>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default NarrativeSection;
