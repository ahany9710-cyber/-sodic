import { motion } from 'framer-motion';

const images = [
  { src: './assets/cons/cons-1.jpg', alt: 'متابعة أعمال التنفيذ — لقطة 1' },
  { src: './assets/cons/cons-2.jpg', alt: 'متابعة أعمال التنفيذ — لقطة 2' },
  { src: './assets/cons/cons-3.jpg', alt: 'متابعة أعمال التنفيذ — لقطة 3' },
];

const ConstructionGallery = () => {
  return (
    <section
      id="construction-updates"
      className="w-full px-4 sm:px-6 lg:px-8 py-section-md md:py-section-lg bg-modon-bg"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-modon-black tracking-heading">
            متابعة أعمال التنفيذ
          </h2>
          <p className="font-arabic text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            أحدث صور من موقع المشروع — رأس الحكمة
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {images.map((img, index) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-lg overflow-hidden bg-gray-200 aspect-[4/3]"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConstructionGallery;
