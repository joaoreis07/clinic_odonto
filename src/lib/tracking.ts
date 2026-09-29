export type TrackingEvent =
  | 'whatsapp_click'
  | 'treatment_view'
  | 'case_view'
  | 'before_after_interaction'
  | 'cta_click';

export interface TrackingPayload {
  label?: string;
  location?: string;
  slug?: string;
  treatment?: string;
}

/** Prepared for future analytics integration (GA4, Meta Pixel, etc.) */
export function trackEvent(event: TrackingEvent, payload: TrackingPayload = {}): void {
  if (import.meta.env.DEV) {
    console.debug('[track]', event, payload);
  }

  // Future: window.gtag?.('event', event, payload);
  // Future: window.fbq?.('trackCustom', event, payload);
}
