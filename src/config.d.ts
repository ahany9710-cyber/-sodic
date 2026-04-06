export const config: {
  formspreeFormId: string;
  whatsappNumber: string;
  /** Pre-filled WhatsApp message for wa.me ?text= */
  whatsappDefaultMessage: string;
  /** Arabic WhatsApp pre-fill for /ar landing */
  whatsappDefaultMessageAr: string;
  /** Arabic WhatsApp text for promo banner CTA */
  whatsappPromoMessageAr: string;
  phoneNumber: string;
  phoneDisplay: string;
  /** Google tag ID (loaded in index.html; keep in sync) */
  gtag_id: string;
  /** Google Ads conversion id for ThankYou page (optional) */
  conversion_id?: string;
  /** Google Ads conversion label for ThankYou page (optional) */
  conversion_label?: string;
  /** Optional legacy external URLs */
  heroVideoUrl: string;
  heroPosterUrl: string;
  mapVideoUrl: string;
};
