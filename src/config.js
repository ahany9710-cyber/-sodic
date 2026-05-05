/**
 * Site-wide configuration values.
 * Edit values here only.
 */

export const config = {
  // Formspree form ID — submissions go to the email registered at formspree.io
  formspreeFormId: 'mqegddew',

  // WhatsApp number (without + or spaces for wa.me)
  whatsappNumber: '201000805205',

  // Pre-filled message for wa.me links (Hero, FAB, footer, etc.)
  whatsappDefaultMessage: 'Hello, I would like to know more about SODIC properties.',

  // Arabic landing (/ar) — WhatsApp pre-filled text
  whatsappDefaultMessageAr: 'مرحباً، أود معرفة المزيد عن مشاريع سوديك.',

  // Promo strip on /ar — WhatsApp message mentioning immediate delivery & 5% offer
  whatsappPromoMessageAr:
    'مرحباً، أود الاستفسار عن عرض الإستلام الفوري بمقدّم 5٪ على الوحدات المتاحة.',

  // /ar/ogami — Ogami / Botanica Town WhatsApp pre-fill
  whatsappOgamiMessageAr:
    'مرحباً، مهتم بمشروع أوجامي / بوتانيكا تاون في الساحل الشمالي.',

  // Phone for tel: links (with country code)
  phoneNumber: '+201000805205',

  // Display format for phone (optional)
  phoneDisplay: '+20 100 080 5205',

  // ——— Google tag (matches index.html gtag config) ———
  gtag_id: 'AW-18066287198',
  // Optional: add conversion_id + conversion_label from Google Ads for thank-you page trackConversion()

  /** Legacy: optional external media URLs (hero/map). Leave empty when using /public/assets only. */
  heroVideoUrl: '',
  heroPosterUrl: '',
  mapVideoUrl: '',
};
