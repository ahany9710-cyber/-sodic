import { useEffect } from 'react';
import EastHero from '../components/east/EastHero';
import EastUrgencyStrip from '../components/east/EastUrgencyStrip';
import EastKeyStats from '../components/east/EastKeyStats';
import EastLocation from '../components/east/EastLocation';
import EastMasterplan from '../components/east/EastMasterplan';
import EastAmenities from '../components/east/EastAmenities';
import EastUnitTypes from '../components/east/EastUnitTypes';
import EastPaymentPlan from '../components/east/EastPaymentPlan';
import EastGallery from '../components/east/EastGallery';
import EastLeadForm from '../components/east/EastLeadForm';
import EastFAQ from '../components/east/EastFAQ';
import EastBookingPopup from '../components/east/EastBookingPopup';
import { EastLocaleProvider, useEastPage } from '../contexts/EastLocaleContext';
import type { EastLocale } from '../data/eastCopy';

function EastMetaAndAnalytics() {
  const { copy } = useEastPage();

  useEffect(() => {
    const prevTitle = document.title;
    document.title = copy.meta.title;

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute('content') ?? null;
    metaDesc?.setAttribute('content', copy.meta.description);

    if (typeof window.fbq === 'function') {
      window.fbq('track', 'ViewContent', {
        content_name: 'East',
        content_category: 'East Cairo',
        content_type: 'real_estate',
      });
    }
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'view_item', {
        item_id: 'east',
        item_name: 'SODIC East',
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

function EastLandingBody() {
  return (
    <main>
      <EastMetaAndAnalytics />
      <EastHero />
      <EastUrgencyStrip />
      <EastKeyStats />
      <EastLocation />
      <EastMasterplan />
      <EastAmenities />
      <EastUnitTypes />
      <EastPaymentPlan />
      <EastGallery />
      <EastLeadForm />
      <EastFAQ />
      <EastBookingPopup />
    </main>
  );
}

const EastLanding = ({ locale = 'ar' }: { locale?: EastLocale }) => {
  return (
    <EastLocaleProvider locale={locale}>
      <EastLandingBody />
    </EastLocaleProvider>
  );
};

export default EastLanding;
