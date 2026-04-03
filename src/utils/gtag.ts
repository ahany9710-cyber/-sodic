import { config } from '../config';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

/**
 * Initializes Google Tag (gtag.js) when googleTagId is set in config.
 * Injects the script into the document head and configures the tag.
 */
export function initGtag(): void {
  const tagId = (config as { gtag_id?: string; googleTagId?: string }).gtag_id || (config as { googleTagId?: string }).googleTagId;
  if (!tagId || typeof tagId !== 'string' || !tagId.trim()) {
    return;
  }

  const id = tagId.trim();
  // If gtag is already loaded (e.g. from index.html), just ensure config is applied
  if (typeof window.gtag === 'function') {
    window.gtag('config', id);
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };
  window.gtag('js', new Date());

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);

  window.gtag('config', id);
}

/**
 * Fires a Google Ads conversion event (submit lead form).
 * Call on the thank-you page only — not in global head, or every visit would count as a conversion.
 */
export function trackConversion(): void {
  const cfg = config as {
    conversion_id?: string;
    conversionId?: string;
    conversion_label?: string;
    conversionLabel?: string;
  };
  const convId = (cfg.conversion_id || cfg.conversionId || '').trim();
  const label = (cfg.conversion_label || cfg.conversionLabel || '').trim();
  if (!convId || !label || typeof window.gtag !== 'function') {
    return;
  }
  window.gtag('event', 'conversion', {
    send_to: `${convId}/${label}`,
    value: 1.0,
    currency: 'EGP',
  });
}
