// Breakpoints pro responzivní design
export const BREAKPOINTS = {
  // Mobile zařízení
  mobile: 640,
  
  // Tablety
  tablet: 1024,
  
  // Laptopy
  laptop: 1280,
  
  // Desktop
  desktop: 1536,
  
  // Wide desktop
  wideDesktop: 1536,
};

// Helper funkce pro media queries v JS
export const getBreakpoint = (width) => {
  if (width < BREAKPOINTS.mobile) return 'mobile';
  if (width < BREAKPOINTS.tablet) return 'tablet';
  return 'desktop'; // Pro laptop a desktop používáme desktop layout
};

// Media query strings pro použití v styled-components apod.
export const MEDIA_QUERIES = {
  mobile: `(max-width: ${BREAKPOINTS.mobile - 1}px)`,
  tablet: `(min-width: ${BREAKPOINTS.mobile}px) and (max-width: ${BREAKPOINTS.tablet - 1}px)`,
  laptop: `(min-width: ${BREAKPOINTS.tablet}px) and (max-width: ${BREAKPOINTS.laptop - 1}px)`,
  desktop: `(min-width: ${BREAKPOINTS.laptop}px) and (max-width: ${BREAKPOINTS.desktop - 1}px)`,
  wideDesktop: `(min-width: ${BREAKPOINTS.wideDesktop}px)`,
  
  // Min-width varianty
  minMobile: `(min-width: ${BREAKPOINTS.mobile}px)`,
  minTablet: `(min-width: ${BREAKPOINTS.tablet}px)`,
  minLaptop: `(min-width: ${BREAKPOINTS.laptop}px)`,
  minDesktop: `(min-width: ${BREAKPOINTS.desktop}px)`,
};
