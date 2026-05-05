/**
 * Site-wide configuration values.
 * Edit values here only.
 */

/** Arabic sales funnel — same Ogami/Botanica line everywhere (/ar + /ar/ogami + forms). */
const WHATSAPP_AR_OGAMI =
  'مرحباً، مهتم بمشروع أوجامي / بوتانيكا تاون في الساحل الشمالي.';

export const config = {
  // Formspree form ID — submissions go to the email registered at formspree.io
  formspreeFormId: 'mqegddew',

  // WhatsApp number (without + or spaces for wa.me) — same tel: + whatsapp.site-wide
  whatsappNumber: '201000805205',

  // Pre-filled message for wa.me links (Hero, FAB, footer, etc.)
  whatsappDefaultMessage: 'Hello, I would like to know more about SODIC properties.',

  // Arabic landing (/ar) — same contact funnel as Ogami
  whatsappDefaultMessageAr: WHATSAPP_AR_OGAMI,

  // Promo strip on /ar — WhatsApp message mentioning immediate delivery & 5% offer
  whatsappPromoMessageAr:
    'مرحباً، أود الاستفسار عن عرض الإستلام الفوري بمقدّم 5٪ على الوحدات المتاحة.',

  // /ar/ogami — same prefilled body as arabic funnel (explicit key for readability)
  whatsappOgamiMessageAr: WHATSAPP_AR_OGAMI,

  // Phone for tel: links (with country code)
  phoneNumber: '+201000805205',

  // Display (+20…) for footer / accessibility
  phoneDisplay: '+20 100 080 5205',

  /** Local Egyptian format — use where you surface the number in UI */
  phoneDisplayLocal: '0100 080 5205',
  gtag_id: 'AW-18066287198',
  // Optional: add conversion_id + conversion_label from Google Ads for thank-you page trackConversion()

  /** Legacy: optional external media URLs (hero/map). Leave empty when using /public/assets only. */
  heroVideoUrl: '',
  heroPosterUrl: '',
  mapVideoUrl: '',
};
