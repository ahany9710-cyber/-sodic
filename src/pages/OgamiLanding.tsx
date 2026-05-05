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
import { OgamiLocaleProvider, useOgamiPage } from '../contexts/OgamiLocaleContext';
import type { OgamiLocale } from '../data/ogamiCopy';

function OgamiMetaAndAnalytics() {
  const { copy } = useOgamiPage();

  useEffect(() => {
    const prevTitle = document.title;
    document.title = copy.meta.title;

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute('content') ?? null;
    metaDesc?.setAttribute('content', copy.meta.description);

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
  }, [copy.meta.description, copy.meta.title]);

  return null;
}

function OgamiLandingBody() {
  return (
    <main>
      <OgamiMetaAndAnalytics />
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
}

const OgamiLanding = ({ locale = 'ar' }: { locale?: OgamiLocale }) => {
  return (
    <OgamiLocaleProvider locale={locale}>
      <OgamiLandingBody />
    </OgamiLocaleProvider>
  );
};

export default OgamiLanding;
