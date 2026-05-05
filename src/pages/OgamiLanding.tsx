import { useEffect } from 'react';
import OgamiHero from '../components/ogami/OgamiHero';
import OgamiUrgencyStrip from '../components/ogami/OgamiUrgencyStrip';
import OgamiKeyStats from '../components/ogami/OgamiKeyStats';
import OgamiLocation from '../components/ogami/OgamiLocation';
import OgamiMasterplan from '../components/ogami/OgamiMasterplan';
import OgamiAmenities from '../components/ogami/OgamiAmenities';
import OgamiUnitTypes from '../components/ogami/OgamiUnitTypes';
import OgamiPaymentPlan from '../components/ogami/OgamiPaymentPlan';
import OgamiGallery from '../components/ogami/OgamiGallery';
import OgamiLeadForm from '../components/ogami/OgamiLeadForm';
import OgamiFAQ from '../components/ogami/OgamiFAQ';
import OgamiBookingPopup from '../components/ogami/OgamiBookingPopup';

const TITLE = 'أوجامي · بوتانيكا تاون | شاليهات الساحل الشمالي بمقدّم 5٪ - سوديك';
const DESCRIPTION =
  'أوجامي / بوتانيكا تاون من سوديك على بحر رأس الحكمة. شاليهات بإطلالة على المياه، تشطيب كامل، شراكة Nobu العالمية. مقدّم 5٪ وتقسيط حتى 8 سنوات.';

const OgamiLanding = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = TITLE;

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute('content') ?? null;
    metaDesc?.setAttribute('content', DESCRIPTION);

    if (typeof window.fbq === 'function') {
      window.fbq('track', 'ViewContent', {
        content_name: 'Ogami',
        content_category: 'Botanica Town',
        content_type: 'real_estate',
      });
    }
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'view_item', {
        item_id: 'ogami',
        item_name: 'Ogami / Botanica Town',
        item_category: 'real_estate',
      });
    }

    return () => {
      document.title = prevTitle;
      if (prevDesc !== null) metaDesc?.setAttribute('content', prevDesc);
    };
  }, []);

  return (
    <main>
      <OgamiHero />
      <OgamiUrgencyStrip />
      <OgamiKeyStats />
      <OgamiLocation />
      <OgamiMasterplan />
      <OgamiAmenities />
      <OgamiUnitTypes />
      <OgamiPaymentPlan />
      <OgamiGallery />
      <OgamiLeadForm />
      <OgamiFAQ />
      <OgamiBookingPopup />
    </main>
  );
};

export default OgamiLanding;
