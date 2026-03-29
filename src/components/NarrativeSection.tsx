import { useInView } from '../hooks/useInView';

interface NarrativeSectionProps {
  id?: string;
  title?: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
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
  const slideClass = imagePosition === 'left' ? 'animate-slide-in-left' : 'animate-slide-in-right';

  const { ref, inView } = useInView();

  return (
    <section
      id={id}
      ref={ref}
      className={`w-full px-4 sm:px-6 lg:px-8 py-section-md md:py-section-lg ${bgClass}`}
    >
      <div className="container mx-auto max-w-6xl">
        {title ? (
          <h2
            className={`font-heading text-2xl md:text-3xl font-bold text-modon-black mb-10 md:mb-14 text-center tracking-heading ${inView ? 'animate-fade-in-up' : 'before-animate'}`}
          >
            {title}
          </h2>
        ) : null}

        <div dir="ltr" className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
          <div
            className={`${imageOrder} overflow-hidden rounded-lg shadow-md ${inView ? slideClass : 'before-animate'}`}
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover aspect-[4/3] md:min-h-[280px]"
              loading="lazy"
              width={800}
              height={600}
            />
          </div>
          <div
            dir="rtl"
            className={`${textOrder} font-arabic text-xl md:text-2xl text-gray-800 leading-loose ${inView ? 'animate-fade-in-up delay-100' : 'before-animate'}`}
          >
            <p className="text-right">{text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NarrativeSection;
