type FbqFn = (...args: unknown[]) => void;

function getFbq(): FbqFn | undefined {
  if (typeof window === 'undefined') return undefined;
  return (window as Window & { fbq?: FbqFn }).fbq;
}

/** PageView — pixel is initialized in index.html; fbq queues until fbevents.js loads. */
export function trackMetaPageView(): void {
  getFbq()?.('track', 'PageView');
}
