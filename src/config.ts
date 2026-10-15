/**
 * Budah Frequency - Configuration & Funnel Parameters
 * 
 * BRAND NAME RULE: Spelled exactly "Budah Frequency" everywhere.
 */

export const BRAND_NAME = "Budah Frequency";
export const VSL_EMBED_SRC = "https://player.mediadelivery.net/embed/778341/b6c60dd6-7ad5-4351-9ca0-83c78f3ae11d?autoplay=true&loop=false&muted=true&preload=true&responsive=true";
export const VSL_EMBED_CODE = `<div style="position:relative;padding-top:177.78%;"><iframe src="https://player.mediadelivery.net/embed/778341/b6c60dd6-7ad5-4351-9ca0-83c78f3ae11d?autoplay=true&loop=false&muted=true&preload=true&responsive=true" loading="lazy" style="border:0;position:absolute;top:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;fullscreen;" allowfullscreen="true"></iframe></div>`;
export const VSL_ASPECT = "9/16";
export const CHECKOUT_URL = "https://pay.hotmart.com/C107996219E";
export const BUY_BUTTON_APPEAR_AT = "21:55"; // mm:ss of REAL video time
export const PRICE = "$37";
export const GUARANTEE_DAYS = 7; // MUST match the guarantee configured in Hotmart; owner will confirm
export const CONTACT_EMAIL = "budahfrequency.support@gmail.com";
export const testMode = false; // when true, the delayed buy button shows immediately

/**
 * Converts mm:ss format into total seconds
 */
export function parseTimeToSeconds(timeStr: string): number {
  const parts = timeStr.split(":").map(Number);
  if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
    return parts[0] * 60 + parts[1];
  }
  return 1315; // default fallback for 21:55
}

export const BUY_BUTTON_APPEAR_SECONDS = parseTimeToSeconds(BUY_BUTTON_APPEAR_AT);

/**
 * Helper to safely track Meta Pixel events wrapped in try/catch
 */
export function trackMetaPixel(
  eventType: 'track' | 'trackCustom',
  eventName: string,
  parameters?: Record<string, unknown>
): void {
  try {
    if (typeof window !== 'undefined' && typeof (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq === 'function') {
      const fbq = (window as unknown as { fbq: (...args: unknown[]) => void }).fbq;
      if (parameters) {
        fbq(eventType, eventName, parameters);
      } else {
        fbq(eventType, eventName);
      }
    }
  } catch (err) {
    // Graceful silent catch to prevent ad-blocker from interfering with UI or purchase flow
    console.warn(`Meta Pixel event "${eventName}" blocked or suppressed:`, err);
  }
}

/**
 * Handles buy button click: fires InitiateCheckout and opens checkout URL
 */
export function handleCheckoutClick(sourceLocation = 'unknown'): void {
  trackMetaPixel('track', 'InitiateCheckout', {
    content_name: BRAND_NAME,
    currency: 'USD',
    value: 37,
    button_location: sourceLocation,
  });

  window.open(CHECKOUT_URL, '_blank', 'noopener,noreferrer');
}
