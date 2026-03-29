import { useInView } from '../hooks/useInView';

const images = [
  { src: './assets/cons/cons-1.jpg', alt: 'متابعة أعمال التنفيذ — لقطة 1' },
  { src: './assets/cons/cons-2.jpg', alt: 'متابعة أعمال التنفيذ — لقطة 2' },
  { src: './assets/cons/cons-3.jpg', alt: 'متابعة أعمال التنفيذ — لقطة 3' },
];

const ConstructionGallery = () => {
  const { ref, inView } = useInView();

  return (
    <section
      id="construction-updates"
      className="w-full px-4 sm:px-6 lg:px-8 py-section-md md:py-section-lg bg-modon-bg"
    >
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <div
          className={`text-center mb-12 md:mb-16 ${inView ? 'animate-fade-in-up' : 'before-animate'}`}
        >
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-modon-black tracking-heading">
            متابعة أعمال التنفيذ
          </h2>
          <p className="font-arabic text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            أحدث صور من موقع المشروع — رأس الحكمة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {images.map((img, index) => (
            <div
              key={img.src}
              className={`group relative rounded-lg overflow-hidden bg-gray-200 aspect-[4/3] ${inView ? 'animate-fade-in-up' : 'before-animate'}`}
              style={inView ? { animationDelay: `${index * 100}ms` } : undefined}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConstructionGallery;
