import { useEffect } from 'react';
import EastHero from '../components/eastvale/EastHero';
import EastUrgencyStrip from '../components/eastvale/EastUrgencyStrip';
import EastKeyStats from '../components/eastvale/EastKeyStats';
import EastLocation from '../components/eastvale/EastLocation';
import EastMasterplan from '../components/eastvale/EastMasterplan';
import EastAmenities from '../components/eastvale/EastAmenities';
import EastUnitTypes from '../components/eastvale/EastUnitTypes';
import EastPaymentPlan from '../components/eastvale/EastPaymentPlan';
import EastLeadForm from '../components/eastvale/EastLeadForm';
import EastFAQ from '../components/eastvale/EastFAQ';
import EastBookingPopup from '../components/eastvale/EastBookingPopup';
import { EastvaleLocaleProvider, useEastvalePage } from '../contexts/EastvaleLocaleContext';
import type { EastvaleLocale } from '../data/eastvaleCopy';

function EastvaleMetaAndAnalytics() {
  const { copy } = useEastvalePage();

  useEffect(() => {
    const prevTitle = document.title;
    document.title = copy.meta.title;

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute('content') ?? null;
    metaDesc?.setAttribute('content', copy.meta.description);

    if (typeof window.fbq === 'function') {
      window.fbq('track', 'ViewContent', {
        content_name: 'Eastvale',
        content_category: 'East Cairo',
        content_type: 'real_estate',
      });
    }
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'view_item', {
        item_id: 'eastvale',
        item_name: 'Eastvale',
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

function EastvaleLandingBody() {
  return (
    <main>
      <EastvaleMetaAndAnalytics />
      <EastHero />
      <EastUrgencyStrip />
      <EastKeyStats />
      <EastLocation />
      <EastMasterplan />
      <EastAmenities />
      <EastUnitTypes />
      <EastPaymentPlan />
      <EastLeadForm />
      <EastFAQ />
      <EastBookingPopup />
    </main>
  );
}

const EastvaleLanding = ({ locale = 'ar' }: { locale?: EastvaleLocale }) => {
  return (
    <EastvaleLocaleProvider locale={locale}>
      <EastvaleLandingBody />
    </EastvaleLocaleProvider>
  );
};

export default EastvaleLanding;
