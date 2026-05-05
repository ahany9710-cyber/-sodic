const FOCUS_DELAY_MS = 350;

/**
 * After closing a booking popup, scroll to the page lead-form block and focus the first field.
 * Uses the shared LeadForm `#fullName` input when present.
 */
export function scrollToLeadFormAfterModal(sectionId: 'lead-form' | 'east-lead-form'): void {
  window.setTimeout(() => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    const byId = document.getElementById('fullName') as HTMLInputElement | null;
    if (byId) {
      byId.focus({ preventScroll: true });
      return;
    }
    const fallback = section?.querySelector<HTMLElement>('input:not([type="hidden"]), select, textarea');
    fallback?.focus({ preventScroll: true });
  }, FOCUS_DELAY_MS);
}
