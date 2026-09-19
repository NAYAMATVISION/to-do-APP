/**
 * Centralized inline SVG icon registry.
 * All icons: 15x15 viewport, stroke="currentColor", fill="none".
 * aria-hidden="true" on every <svg> — accessible labels live on the parent.
 */
export const icons = {

  personal: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"
      fill="none" stroke="currentColor" stroke-width="1.4"
      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <circle cx="7.5" cy="5" r="2.5"/>
    <path d="M2 13c0-3.038 2.462-5.5 5.5-5.5S13 9.962 13 13"/>
  </svg>`,

  work: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"
      fill="none" stroke="currentColor" stroke-width="1.4"
      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <rect x="1" y="5" width="13" height="8" rx="1.5"/>
    <path d="M5 5V3.5A1.5 1.5 0 0 1 6.5 2h2A1.5 1.5 0 0 1 10 3.5V5"/>
    <line x1="1" y1="9" x2="14" y2="9"/>
  </svg>`,

  plus: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"
      fill="none" stroke="currentColor" stroke-width="1.6"
      stroke-linecap="round" aria-hidden="true">
    <line x1="7.5" y1="2" x2="7.5" y2="13"/>
    <line x1="2" y1="7.5" x2="13" y2="7.5"/>
  </svg>`,

  close: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"
      fill="none" stroke="currentColor" stroke-width="1.6"
      stroke-linecap="round" aria-hidden="true">
    <line x1="3" y1="3" x2="12" y2="12"/>
    <line x1="12" y1="3" x2="3" y2="12"/>
  </svg>`,

  folder: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"
      fill="none" stroke="currentColor" stroke-width="1.4"
      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M1 4A1.5 1.5 0 0 1 2.5 2.5h3.25a1.5 1.5 0 0 1 1.06.44l.69.69A1.5 1.5 0 0 0 8.56 4H13A1.5 1.5 0 0 1 14.5 5.5v6A1.5 1.5 0 0 1 13 13H2A1.5 1.5 0 0 1 .5 11.5V4z"/>
  </svg>`,

  clock: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"
      fill="none" stroke="currentColor" stroke-width="1.4"
      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <circle cx="7.5" cy="7.5" r="6"/>
    <polyline points="7.5,4 7.5,7.5 10,9.5"/>
  </svg>`,

  checkCircle: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"
      fill="none" stroke="currentColor" stroke-width="1.4"
      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <circle cx="7.5" cy="7.5" r="6"/>
    <polyline points="5,8 6.5,9.5 10,6"/>
  </svg>`,

  chevronLeft: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"
      fill="none" stroke="currentColor" stroke-width="1.6"
      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <polyline points="9.5,3 5,7.5 9.5,12"/>
  </svg>`,

  chevronRight: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"
      fill="none" stroke="currentColor" stroke-width="1.6"
      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <polyline points="5.5,3 10,7.5 5.5,12"/>
  </svg>`,
};
