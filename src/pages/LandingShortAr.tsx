import { useEffect } from 'react';
import HeroShortAr from '../components/HeroShortAr';
import PromoOfferStripAr from '../components/PromoOfferStripAr';
import AvailableUnits from '../components/AvailableUnits';
import LeadForm from '../components/LeadForm';

const AR_TITLE = 'سوديك | عروض استثمارية';

const LandingShortAr = () => {
  useEffect(() => {
    const prev = document.title;
    document.title = AR_TITLE;
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <div dir="rtl" lang="ar">
      <main>
        <HeroShortAr />
        <PromoOfferStripAr />
        <AvailableUnits locale="ar" />
        <LeadForm locale="ar" />
      </main>
    </div>
  );
};

export default LandingShortAr;
