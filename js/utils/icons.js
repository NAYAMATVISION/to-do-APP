/**
 * Centralized inline SVG icon system.
 * All icons are 16x16, stroke="currentColor", fill="none" for full CSS color inheritance.
 * aria-hidden="true" is set on every icon — labels live on the parent element.
 */
export const icons = {
  /** Workspace: Personal — user silhouette outline */
  personal: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
      fill="none" stroke="currentColor" stroke-width="1.5"
      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <circle cx="8" cy="5.5" r="2.5"/>
    <path d="M2.5 13.5c0-3.038 2.462-5.5 5.5-5.5s5.5 2.462 5.5 5.5"/>
  </svg>`,

  /** Workspace: Work — briefcase outline */
  work: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
      fill="none" stroke="currentColor" stroke-width="1.5"
      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <rect x="1.5" y="5.5" width="13" height="8" rx="1.5"/>
    <path d="M5.5 5.5V4a1.5 1.5 0 0 1 1.5-1.5h2A1.5 1.5 0 0 1 10.5 4v1.5"/>
    <line x1="1.5" y1="9.5" x2="14.5" y2="9.5"/>
  </svg>`,

  /** Action: Add / New Task — plus sign */
  plus: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
      fill="none" stroke="currentColor" stroke-width="1.75"
      stroke-linecap="round" aria-hidden="true">
    <line x1="8" y1="2.5" x2="8" y2="13.5"/>
    <line x1="2.5" y1="8" x2="13.5" y2="8"/>
  </svg>`,

  /** Action: Close / Delete — X cross */
  close: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
      fill="none" stroke="currentColor" stroke-width="1.75"
      stroke-linecap="round" aria-hidden="true">
    <line x1="3.5" y1="3.5" x2="12.5" y2="12.5"/>
    <line x1="12.5" y1="3.5" x2="3.5" y2="12.5"/>
  </svg>`,

  /** Status: Backlog — folder outline */
  folder: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
      fill="none" stroke="currentColor" stroke-width="1.5"
      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M1.5 4.5A1.5 1.5 0 0 1 3 3h3.379a1.5 1.5 0 0 1 1.06.44l.622.621A1.5 1.5 0 0 0 9.12 4.5H13A1.5 1.5 0 0 1 14.5 6v6A1.5 1.5 0 0 1 13 13.5H3A1.5 1.5 0 0 1 1.5 12V4.5z"/>
  </svg>`,

  /** Status: In Progress — clock outline */
  clock: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
      fill="none" stroke="currentColor" stroke-width="1.5"
      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <circle cx="8" cy="8" r="6"/>
    <polyline points="8,4.5 8,8 10.5,10"/>
  </svg>`,

  /** Status: Ready for Review / Done — circle with checkmark */
  checkCircle: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
      fill="none" stroke="currentColor" stroke-width="1.5"
      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <circle cx="8" cy="8" r="6"/>
    <polyline points="5.5,8.5 7,10 10.5,6"/>
  </svg>`,
};
