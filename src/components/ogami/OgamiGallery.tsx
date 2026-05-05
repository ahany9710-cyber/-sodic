import { motion } from 'framer-motion';

interface Slide {
  id: string;
  src: string;
  caption: string;
}

const slides: Slide[] = [
  {
    id: 'lagoon',
    src: '/sections/ogami/lagoon.jpg',
    caption: 'لاجونز سباحة بمساحة +120,000 م² في قلب المجتمع',
  },
  {
    id: 'render-1',
    src: '/sections/ogami/building-render-1.jpg',
    caption: 'بوتيك ريتيل وكافيهات على الحارة الرئيسية',
  },
  {
    id: 'render-2',
    src: '/sections/ogami/building-render-2.jpg',
    caption: 'مباني G+2 بنتهاوس بتراسات متدرّجة',
  },
  {
    id: 'render-3',
    src: '/sections/ogami/building-render-3.jpg',
    caption: 'حدائق ومسابح خاصة لكل مجموعة مباني',
  },
  {
    id: 'concept',
    src: '/sections/ogami/concept-collage.jpg',
    caption: 'حياة هادئة بلمسة معاصرة على البحر',
  },
  {
    id: 'interiors',
    src: '/sections/ogami/interiors.jpg',
    caption: 'تشطيبات داخلية بحرفية عالية',
  },
  {
    id: 'materials',
    src: '/sections/ogami/materials.jpg',
    caption: 'خامات طبيعية بمنتجات عالمية',
  },
];

const OgamiGallery = () => {
  return (
    <section id="ogami-gallery" className="bg-white py-16 md:py-24">
      <div className="px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mx-auto mb-10 max-w-2xl md:mb-14"
        >
          <p className="text-[11px] font-semibold tracking-wider text-zinc-500">المعرض</p>
          <h2 className="font-arabic mt-3 text-3xl font-bold leading-tight text-black md:text-5xl">
            شوف أوجامي زي ما هتشوفه على البحر
          </h2>
          <p className="font-arabic mt-4 text-sm leading-relaxed text-zinc-600 md:text-base">
            رندرز رسمية من سوديك للمشروع — بتعكس روح الحياة الساحلية الجديدة في رأس الحكمة.
          </p>
        </motion.div>
      </div>

      <div
        className="scrollbar-thin flex gap-4 overflow-x-auto px-6 pb-6 md:gap-6 md:px-16 md:pb-8"
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {slides.map((slide, index) => (
          <motion.figure
            key={slide.id}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.04 * index }}
            className="group relative shrink-0 overflow-hidden bg-stone-100"
            style={{
              scrollSnapAlign: 'start',
              width: 'min(85vw, 640px)',
              height: 'min(60vw, 420px)',
            }}
          >
            <img
              src={slide.src}
              alt={slide.caption}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:p-6">
              <p className="font-arabic text-xs font-semibold text-white md:text-sm">
                {slide.caption}
              </p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
};

export default OgamiGallery;
