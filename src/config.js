/**
 * Site-wide configuration values.
 * Edit values here only.
 */

export const config = {
  // Formspree form ID — submissions go to the email registered at formspree.io
  formspreeFormId: 'mqegddew',

  // WhatsApp number (without + or spaces for wa.me)
  whatsappNumber: '201110911460',

  // Pre-filled message for wa.me links (Hero, FAB, footer, etc.)
  whatsappDefaultMessage: 'Hello, I would like to know more about SODIC properties.',

  // Arabic landing (/ar) — WhatsApp pre-filled text
  whatsappDefaultMessageAr: 'مرحباً، أود معرفة المزيد عن مشاريع سوديك.',

  // Promo strip on /ar — WhatsApp message mentioning immediate delivery & 5% offer
  whatsappPromoMessageAr:
    'مرحباً، أود الاستفسار عن عرض الإستلام الفوري بمقدّم 5٪ على الوحدات المتاحة.',

  // Phone for tel: links (with country code)
  phoneNumber: '+201110911460',

  // Display format for phone (optional)
  phoneDisplay: '+20 111 091 1460',

  // ——— Google Ads ———
  gtag_id: 'GT-K553HXRZ',
  conversion_id: 'AW-18053013642',
  conversion_label: 'hdAtCNPzoJUcEIrBrKBD',

  /** Legacy: optional external media URLs (hero/map). Leave empty when using /public/assets only. */
  heroVideoUrl: '',
  heroPosterUrl: '',
  mapVideoUrl: '',
};
