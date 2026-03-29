import Hero from '../components/Hero';
import NarrativeSection from '../components/NarrativeSection';
import TrustBar from '../components/TrustBar';
import UnitCards from '../components/UnitCards';
import PaymentBar from '../components/PaymentBar';
import ConstructionGallery from '../components/ConstructionGallery';
import LeadForm from '../components/LeadForm';

const VISION_TEXT =
  'صُممت المدينة لتضم 17 حياً سكنياً متميزاً، تجمع بين الهدوء والابتكار. مدينة عالمية متصلة بالعالم براً وبحراً وجواً، توفر كل سبل الحياة من مدارس دولية، مراكز أعمال، ملاعب جولف عالمية، ومراسي لليخوت.';

const WADI_TEXT =
  "وادي يم: الفصل الأول في أسطورة رأس الحكمة. يمثل 'وادي يم' أول انطلاقة لأحياء المدينة الـ 17، مقدماً مفهوماً جديداً للحياة الساحلية الراقية في حي مستوحى من روح البحر المتوسط.";

const Landing = () => {
  return (
    <main className="pb-24 md:pb-0">
      <Hero />
      <NarrativeSection
        id="ras-el-hekma-vision"
        title="رؤية رأس الحكمة"
        text={VISION_TEXT}
        imageSrc="./assets/narrative/ras-el-hekma-vision.jpg"
        imageAlt="رؤية رأس الحكمة"
        imagePosition="left"
        variant="default"
      />
      <NarrativeSection
        id="wadi-yemm"
        title="وادي يم — الإطلاق"
        text={WADI_TEXT}
        imageSrc="./assets/narrative/wadi-yemm.jpg"
        imageAlt="وادي يم"
        imagePosition="right"
        variant="sand"
      />
      <TrustBar />
      <UnitCards />
      <PaymentBar />
      <ConstructionGallery />
      <LeadForm />
    </main>
  );
};

export default Landing;
