(() => {
  "use strict";


  /* ── Bundle Module: js/utils/icons.js ── */

/**
 * Inline 16x16 / Vector SVG Icon Library
 * Standardized with stroke="currentColor", fill="none", stroke-width="1.75", stroke-linecap="round", stroke-linejoin="round".
 * Zero emojis mandate across the entire application.
 */
const icons = {
  logo: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
  </svg>`,

  spark: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14"/>
  </svg>`,

  inbox: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/>
    <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
  </svg>`,

  moreHorizontal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/><circle cx="5" cy="12" r="1.5"/>
  </svg>`,

  subtask: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <line x1="6" y1="3" x2="6" y2="15"/>
    <circle cx="18" cy="6" r="3"/>
    <circle cx="6" cy="18" r="3"/>
    <path d="M18 9a9 9 0 0 1-9 9"/>
  </svg>`,

  messageSquare: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>`,

  calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>`,

  list: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <line x1="8" y1="6" x2="21" y2="6"/>
    <line x1="8" y1="12" x2="21" y2="12"/>
    <line x1="8" y1="18" x2="21" y2="18"/>
    <line x1="3" y1="6" x2="3.01" y2="6"/>
    <line x1="3" y1="12" x2="3.01" y2="12"/>
    <line x1="3" y1="18" x2="3.01" y2="18"/>
  </svg>`,

  board: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="3" width="5" height="18" rx="1"/>
    <rect x="11" y="3" width="5" height="12" rx="1"/>
    <rect x="19" y="3" width="2" height="18" rx="1"/>
  </svg>`,

  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"/>
    <line x1="5" y1="12" x2="19" y2="12"/>
  </svg>`,

  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>`,

  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>`,

  edit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>`,

  trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="3 6 5 6 21 6"/>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
    <line x1="10" y1="11" x2="10" y2="17"/>
    <line x1="14" y1="11" x2="14" y2="17"/>
  </svg>`,

  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>`,

  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>`,

  play: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <polygon points="5 3 19 12 5 21 5 3"/>
  </svg>`,

  pause: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <rect x="6" y="4" width="4" height="16"/>
    <rect x="14" y="4" width="4" height="16"/>
  </svg>`,

  rotate: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="23 4 23 10 17 10"/>
    <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
  </svg>`,

  chevronDown: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>`,

  chevronLeft: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="15 18 9 12 15 6"/>
  </svg>`,

  chevronRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="9 18 15 12 9 6"/>
  </svg>`,

  tag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
    <line x1="7" y1="7" x2="7.01" y2="7"/>
  </svg>`,

  flag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
    <line x1="4" y1="22" x2="4" y2="15"/>
  </svg>`,

  lock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>`,

  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>`,

  fitness: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <path d="M18 4h3v16h-3M3 4h3v16H3M6 12h12M6 8h12M6 16h12"/>
  </svg>`,

  brain: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04"/>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04"/>
  </svg>`,

  shopping: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="9" cy="21" r="1"/>
    <circle cx="20" cy="21" r="1"/>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
  </svg>`,

  target: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>`,

  bell: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  </svg>`,

  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>`,

  arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>`,

  back: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"/>
    <polyline points="12 19 5 12 12 5"/>
  </svg>`,

  folder: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
  </svg>`,

  checkCircle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>`,

  zap: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>`,

  droplet: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
  </svg>`,

  flame: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3.5z"/>
  </svg>`,

  activity: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>`,

  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>`,

  upload: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="17 8 12 3 7 8"/>
    <line x1="12" y1="3" x2="12" y2="15"/>
  </svg>`,

  printer: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="6 9 6 2 18 2 18 9"/>
    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
    <rect x="6" y="14" width="12" height="8"/>
  </svg>`,

  keyboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" ry="2"/>
    <line x1="6" y1="8" x2="6.01" y2="8"/>
    <line x1="10" y1="8" x2="10.01" y2="8"/>
    <line x1="14" y1="8" x2="14.01" y2="8"/>
    <line x1="18" y1="8" x2="18.01" y2="8"/>
    <line x1="6" y1="12" x2="6.01" y2="12"/>
    <line x1="10" y1="12" x2="10.01" y2="12"/>
    <line x1="14" y1="12" x2="14.01" y2="12"/>
    <line x1="18" y1="12" x2="18.01" y2="12"/>
    <line x1="8" y1="16" x2="16" y2="16"/>
  </svg>`,

  eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>`,

  eyeOff: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
    <line x1="1" y1="1" x2="23" y2="23"/>
  </svg>`,
};


  /* ── Bundle Module: js/utils/dateHelpers.js ── */

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const WEEKDAY_NAMES = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

/**
 * Returns total days in a given month of a year.
 * @param {number} year
 * @param {number} month 0-indexed (0 = Jan, 11 = Dec)
 */
function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

/**
 * Returns the weekday index (0=Sun ... 6=Sat) of the 1st day of the month.
 * @param {number} year
 * @param {number} month 0-indexed
 */
function getFirstWeekdayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}

/**
 * Formats year, month, and day into ISO 'YYYY-MM-DD'.
 * @param {number} year
 * @param {number} month 0-indexed
 * @param {number} day 1-indexed
 */
function formatISODate(year, month, day) {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

/**
 * Returns today's ISO date string in local time.
 */
function todayISO() {
  const d = new Date();
  return formatISODate(d.getFullYear(), d.getMonth(), d.getDate());
}

/**
 * Adds N days to an ISO date string.
 * @param {string} dateStr YYYY-MM-DD
 * @param {number} days
 */
function addDaysISO(dateStr, days) {
  const [y, m, d] = dateStr.split('-').map(Number);
  const dt = new Date(y, m - 1, d);
  dt.setDate(dt.getDate() + days);
  return formatISODate(dt.getFullYear(), dt.getMonth(), dt.getDate());
}

/**
 * Finds the upcoming ISO date for a given target weekday name (e.g. "friday", "mon").
 * @param {string} weekdayStr
 */
function getNextWeekdayISO(weekdayStr) {
  const lower = weekdayStr.toLowerCase().trim();
  const dayMap = {
    sun: 0, sunday: 0,
    mon: 1, monday: 1,
    tue: 2, tues: 2, tuesday: 2,
    wed: 3, wednesday: 3,
    thu: 4, thur: 4, thurs: 4, thursday: 4,
    fri: 5, friday: 5,
    sat: 6, saturday: 6
  };

  const targetDay = dayMap[lower];
  if (targetDay === undefined) return null;

  const now = new Date();
  const currentDay = now.getDay();
  let daysAhead = targetDay - currentDay;
  if (daysAhead <= 0) daysAhead += 7;

  return addDaysISO(todayISO(), daysAhead);
}


  /* ── Bundle Module: js/utils/nlpParser.js ── */


/**
 * Natural Language Task Input Parser Engine
 * Extracts:
 *   - Title
 *   - Tag: @tag (e.g., @fitness, @deepwork, @habits, @grocery)
 *   - Priority: !p1 (high), !p2 (medium), !p3 (low)
 *   - Date: today, tomorrow, friday, in N days, or YYYY-MM-DD
 *
 * Example inputs:
 *   - "Morning 20-min run tomorrow @fitness !p1"
 *   - "2-hour deep work sprint friday @deepwork !p1"
 *   - "Pantry essentials restock today @grocery !p2"
 *
 * @param {string} raw - Raw input string
 * @returns {{ title: string, dueDate: string, tag: string|null, priority: 'p1'|'p2'|'p3' } | null}
 */
function parseNLP(raw) {
  if (!raw || typeof raw !== 'string') return null;
  let text = raw.trim();
  if (!text) return null;

  // 1. Extract priority flag !p1, !p2, !p3
  let priority = 'p3';
  const pMatch = text.match(/!(p1|p2|p3)\b/i);
  if (pMatch) {
    priority = pMatch[1].toLowerCase();
    text = text.replace(pMatch[0], '').trim();
  }

  // 2. Extract @tag (e.g. @fitness, @deepwork, @habits, @grocery)
  let tag = null;
  const tagMatch = text.match(/@([\w-]+)/i);
  if (tagMatch) {
    tag = tagMatch[1].toLowerCase();
    text = text.replace(tagMatch[0], '').trim();
  }

  // 3. Extract explicit ISO date YYYY-MM-DD
  let dueDate = null;
  const isoMatch = text.match(/\b(\d{4}-\d{2}-\d{2})\b/);
  if (isoMatch) {
    dueDate = isoMatch[1];
    text = text.replace(isoMatch[0], '').trim();
  }

  // 4. Extract relative keyword "in N days" / "in N d"
  if (!dueDate) {
    const inDaysMatch = text.match(/\bin\s+(\d+)\s+(days?|d)\b/i);
    if (inDaysMatch) {
      const numDays = parseInt(inDaysMatch[1], 10);
      dueDate = addDaysISO(todayISO(), numDays);
      text = text.replace(inDaysMatch[0], '').trim();
    }
  }

  // 5. Extract relative keywords "today" or "tomorrow"
  if (!dueDate) {
    if (/\btoday\b/i.test(text)) {
      dueDate = todayISO();
      text = text.replace(/\btoday\b/i, '').trim();
    } else if (/\btomorrow\b/i.test(text)) {
      dueDate = addDaysISO(todayISO(), 1);
      text = text.replace(/\btomorrow\b/i, '').trim();
    }
  }

  // 6. Extract upcoming day of week (e.g. "friday", "next monday", "tuesday")
  if (!dueDate) {
    const weekdayRegex = /\b(next\s+)?(monday|tuesday|wednesday|thursday|friday|saturday|sunday|mon|tue|tues|wed|thu|thur|thurs|fri|sat|sun)\b/i;
    const weekdayMatch = text.match(weekdayRegex);
    if (weekdayMatch) {
      const parsedWeekday = getNextWeekdayISO(weekdayMatch[2]);
      if (parsedWeekday) {
        dueDate = parsedWeekday;
        text = text.replace(weekdayMatch[0], '').trim();
      }
    }
  }

  // 7. Clean up remaining title string
  const title = text.replace(/\s{2,}/g, ' ').trim();
  if (!title) return null;

  return {
    title,
    dueDate: dueDate || todayISO(),
    tag,
    priority,
  };
}

/**
 * Generates badge data for live UI preview chips.
 * @param {{ title: string, dueDate: string, tag: string|null, priority: string }} parsed
 */
function nlpPreviewChips(parsed) {
  if (!parsed) return null;
  return {
    titleChip: parsed.title,
    dateChip: parsed.dueDate,
    tagChip: parsed.tag ? `@${parsed.tag}` : null,
    priorityChip: parsed.priority ? `!${parsed.priority}` : '!p3',
  };
}


  /* ── Bundle Module: js/utils/auraCanvas.js ── */

/**
 * Ambient Canvas Background Aura Component
 * Animates 4 breathing fluid radial orbs (Terracotta #c86d51, Sage #5e6b4e, Ochre #d9822b, Rose #b85444)
 * with mouse-tracking interactive physics and multi-stop radial gradients on requestAnimationFrame.
 * Supports dynamic interactive tint overrides (e.g., manifesto pillar card hover).
 */

let canvas = null;
let ctx = null;
let animFrameId = null;
let isRunning = false;

let width = 0;
let height = 0;
let startTime = Date.now();

let mouseX = 0;
let mouseY = 0;
let targetMouseX = 0;
let targetMouseY = 0;

// Dynamic Aura Tint Lerp State
let targetTintRgb = null; // { r, g, b } or null for default
let currentTintRgb = { r: 200, g: 109, b: 81 }; // lerps toward target

function initAuraCanvas(containerId = 'aura-canvas') {
  canvas = document.getElementById(containerId);
  if (!canvas) return;

  ctx = canvas.getContext('2d');
  if (!ctx) return;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    if (mouseX === 0 && mouseY === 0) {
      mouseX = targetMouseX = width / 2;
      mouseY = targetMouseY = height / 2;
    }
  }

  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', (e) => {
    targetMouseX = e.clientX;
    targetMouseY = e.clientY;
  });

  resize();
  startAura();
}

function startAura() {
  if (isRunning) return;
  isRunning = true;
  startTime = Date.now();
  render();
}

function stopAura() {
  isRunning = false;
  if (animFrameId) {
    cancelAnimationFrame(animFrameId);
    animFrameId = null;
  }
}

/**
 * Dynamically shifts background canvas aura tint color smoothly.
 * @param {string} hexColor e.g. '#c86d51', '#5e6b4e', '#44546a'
 */
function setAuraTint(hexColor) {
  if (!hexColor) {
    targetTintRgb = null;
    return;
  }
  targetTintRgb = hexToRgb(hexColor);
}

function resetAuraTint() {
  targetTintRgb = null;
}

function hexToRgb(hex) {
  let c = hex.replace('#', '');
  if (c.length === 3) c = c.split('').map(x => x + x).join('');
  const num = parseInt(c, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255
  };
}

function render() {
  if (!isRunning || !ctx) return;

  const elapsed = (Date.now() - startTime) * 0.001;
  ctx.clearRect(0, 0, width, height);

  // Smooth exponential lerp toward mouse pointer
  mouseX += (targetMouseX - mouseX) * 0.04;
  mouseY += (targetMouseY - mouseY) * 0.04;

  const mOffsetX = (mouseX - width * 0.5);
  const mOffsetY = (mouseY - height * 0.5);

  // Determine active primary orb color based on tint override
  const primaryTarget = targetTintRgb || { r: 200, g: 109, b: 81 };
  currentTintRgb.r += (primaryTarget.r - currentTintRgb.r) * 0.05;
  currentTintRgb.g += (primaryTarget.g - currentTintRgb.g) * 0.05;
  currentTintRgb.b += (primaryTarget.b - currentTintRgb.b) * 0.05;

  const rR = Math.round(currentTintRgb.r);
  const rG = Math.round(currentTintRgb.g);
  const rB = Math.round(currentTintRgb.b);

  // Orb 1: Primary Interactive Tint Orb
  const x1 = width * 0.35 + Math.sin(elapsed * 0.45) * (width * 0.22) + mOffsetX * 0.12;
  const y1 = height * 0.32 + Math.cos(elapsed * 0.35) * (height * 0.18) + mOffsetY * 0.12;
  const r1 = Math.min(width, height) * 0.45 + Math.sin(elapsed * 0.6) * 45;

  const grad1 = ctx.createRadialGradient(x1, y1, 10, x1, y1, r1);
  grad1.addColorStop(0,    `rgba(${rR}, ${rG}, ${rB}, 0.48)`);
  grad1.addColorStop(0.35, `rgba(${rR}, ${rG}, ${rB}, 0.20)`);
  grad1.addColorStop(0.70, `rgba(${rR}, ${rG}, ${rB}, 0.05)`);
  grad1.addColorStop(1,    'rgba(247, 245, 240, 0)');

  ctx.fillStyle = grad1;
  ctx.beginPath();
  ctx.arc(x1, y1, r1, 0, Math.PI * 2);
  ctx.fill();

  // Orb 2: Sage / Olive (#5e6b4e)
  const x2 = width * 0.68 + Math.cos(elapsed * 0.38) * (width * 0.20) - mOffsetX * 0.10;
  const y2 = height * 0.52 + Math.sin(elapsed * 0.48) * (height * 0.18) - mOffsetY * 0.10;
  const r2 = Math.min(width, height) * 0.42 + Math.cos(elapsed * 0.5) * 40;

  const grad2 = ctx.createRadialGradient(x2, y2, 10, x2, y2, r2);
  grad2.addColorStop(0,    'rgba(94, 107, 78, 0.38)');
  grad2.addColorStop(0.35, 'rgba(94, 107, 78, 0.15)');
  grad2.addColorStop(0.70, 'rgba(94, 107, 78, 0.04)');
  grad2.addColorStop(1,    'rgba(247, 245, 240, 0)');

  ctx.fillStyle = grad2;
  ctx.beginPath();
  ctx.arc(x2, y2, r2, 0, Math.PI * 2);
  ctx.fill();

  // Orb 3: Warm Ochre (#d9822b)
  const x3 = width * 0.50 + Math.sin(elapsed * 0.30) * (width * 0.16) + mOffsetX * 0.06;
  const y3 = height * 0.78 + Math.cos(elapsed * 0.42) * (height * 0.14) + mOffsetY * 0.06;
  const r3 = Math.min(width, height) * 0.38 + Math.sin(elapsed * 0.4) * 35;

  const grad3 = ctx.createRadialGradient(x3, y3, 10, x3, y3, r3);
  grad3.addColorStop(0,    'rgba(217, 130, 43, 0.32)');
  grad3.addColorStop(0.40, 'rgba(217, 130, 43, 0.12)');
  grad3.addColorStop(0.75, 'rgba(217, 130, 43, 0.03)');
  grad3.addColorStop(1,    'rgba(247, 245, 240, 0)');

  ctx.fillStyle = grad3;
  ctx.beginPath();
  ctx.arc(x3, y3, r3, 0, Math.PI * 2);
  ctx.fill();

  // Orb 4: Soft Rose / Accent Rust (#b85444)
  const x4 = width * 0.18 + Math.cos(elapsed * 0.50) * (width * 0.12);
  const y4 = height * 0.65 + Math.sin(elapsed * 0.32) * (height * 0.15);
  const r4 = Math.min(width, height) * 0.30 + Math.cos(elapsed * 0.7) * 25;

  const grad4 = ctx.createRadialGradient(x4, y4, 10, x4, y4, r4);
  grad4.addColorStop(0,    'rgba(184, 84, 68, 0.28)');
  grad4.addColorStop(0.40, 'rgba(184, 84, 68, 0.10)');
  grad4.addColorStop(1,    'rgba(247, 245, 240, 0)');

  ctx.fillStyle = grad4;
  ctx.beginPath();
  ctx.arc(x4, y4, r4, 0, Math.PI * 2);
  ctx.fill();

  animFrameId = requestAnimationFrame(render);
}


  /* ── Bundle Module: js/utils/breathingEngine.js ── */

/**
 * Mindful 4-7-8 Breathing Engine Component
 * Controls guided 4s Inhale -> 7s Hold -> 8s Exhale cycles.
 * Features Web Audio API zero-asset pure sine-wave tone synthesis (220 Hz -> 440 Hz glide).
 */

let isActive = false;
let currentPhaseIndex = 0;
let phaseTimeout = null;
let tickInterval = null;
let secondsRemaining = 0;
let totalCyclesCompleted = 0;

const PHASES = [
  { name: 'inhale', label: 'Inhale clarity...', duration: 4, startFreq: 220, endFreq: 440, cssClass: 'phase-inhale' },
  { name: 'hold',   label: 'Hold still...',     duration: 7, startFreq: 440, endFreq: 440, cssClass: 'phase-hold' },
  { name: 'exhale', label: 'Exhale fragmentation...', duration: 8, startFreq: 440, endFreq: 220, cssClass: 'phase-exhale' }
];

let uiElements = {
  container: null,
  ringInner: null,
  statusText: null,
  timerText: null,
  startBtn: null,
  counterBadge: null
};

/**
 * Initializes the breathing engine DOM elements & event listeners.
 */
function initBreathingEngine(config = {}) {
  uiElements.container    = document.getElementById(config.containerId || 'breathing-dock');
  uiElements.ringInner    = document.getElementById(config.ringInnerId || 'breathing-ring-inner');
  uiElements.statusText   = document.getElementById(config.statusTextId || 'breathing-status-text');
  uiElements.timerText    = document.getElementById(config.timerTextId || 'breathing-timer-text');
  uiElements.startBtn     = document.getElementById(config.startBtnId || 'breathing-start-btn');
  uiElements.counterBadge = document.getElementById(config.counterBadgeId || 'breathing-counter-badge');

  if (uiElements.startBtn) {
    uiElements.startBtn.addEventListener('click', toggleBreathingCycle);
  }
}

function toggleBreathingCycle() {
  if (isActive) {
    stopBreathingCycle();
  } else {
    startBreathingCycle();
  }
}

function startBreathingCycle() {
  if (isActive) return;
  isActive = true;
  currentPhaseIndex = 0;
  totalCyclesCompleted = 0;

  if (uiElements.startBtn) {
    uiElements.startBtn.classList.add('active');
    uiElements.startBtn.innerHTML = `
      <span class="icon-slot" data-icon="checkCircle" aria-hidden="true"></span>
      Stop Mindful Pause`;
  }

  if (uiElements.container) {
    uiElements.container.classList.add('is-breathing');
  }

  runPhase(0);
}

function stopBreathingCycle() {
  isActive = false;
  if (phaseTimeout) clearTimeout(phaseTimeout);
  if (tickInterval) clearInterval(tickInterval);

  if (uiElements.container) {
    uiElements.container.classList.remove('is-breathing', 'phase-inhale', 'phase-hold', 'phase-exhale');
  }

  if (uiElements.statusText) {
    uiElements.statusText.textContent = 'Ready for mindful pause';
  }

  if (uiElements.timerText) {
    uiElements.timerText.textContent = '4 • 7 • 8';
  }

  if (uiElements.startBtn) {
    uiElements.startBtn.classList.remove('active');
    uiElements.startBtn.innerHTML = `
      <span class="icon-slot" data-icon="spark" aria-hidden="true"></span>
      Start Mindful Pause`;
  }
}

function runPhase(index) {
  if (!isActive) return;

  currentPhaseIndex = index;
  const phase = PHASES[index];
  secondsRemaining = phase.duration;

  // Update CSS phase state class
  if (uiElements.container) {
    uiElements.container.classList.remove('phase-inhale', 'phase-hold', 'phase-exhale');
    uiElements.container.classList.add(phase.cssClass);
  }

  // Update text readouts
  if (uiElements.statusText) {
    uiElements.statusText.textContent = phase.label;
  }
  if (uiElements.timerText) {
    uiElements.timerText.textContent = `${secondsRemaining}s`;
  }

  // Synthesize soft sine wave tone glide
  playToneGlide(phase.startFreq, phase.endFreq, 1.2);

  // Countdown timer interval
  if (tickInterval) clearInterval(tickInterval);
  tickInterval = setInterval(() => {
    secondsRemaining--;
    if (secondsRemaining >= 0 && uiElements.timerText) {
      uiElements.timerText.textContent = `${secondsRemaining}s`;
    }
  }, 1000);

  // Schedule next phase transition
  if (phaseTimeout) clearTimeout(phaseTimeout);
  phaseTimeout = setTimeout(() => {
    if (!isActive) return;
    const nextIndex = (index + 1) % PHASES.length;
    if (nextIndex === 0) {
      totalCyclesCompleted++;
      if (uiElements.counterBadge) {
        uiElements.counterBadge.textContent = `${totalCyclesCompleted} Cycle${totalCyclesCompleted > 1 ? 's' : ''}`;
      }
    }
    runPhase(nextIndex);
  }, phase.duration * 1000);
}

/**
 * Web Audio API Zero-Asset Pure Sine Wave Glide Synthesizer
 * Plays a soothing sine wave tone gliding from startFreq to endFreq with a smooth gain envelope.
 */
function playToneGlide(startFreq, endFreq, durationSec = 1.0) {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';

    const now = ctx.currentTime;
    osc.frequency.setValueAtTime(startFreq, now);
    if (startFreq !== endFreq) {
      osc.frequency.exponentialRampToValueAtTime(endFreq, now + durationSec);
    }

    // Soft gentle gain envelope (fade in -> hold -> fade out)
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(0.12, now + 0.15);
    gain.gain.setValueAtTime(0.12, now + durationSec - 0.2);
    gain.gain.exponentialRampToValueAtTime(0.001, now + durationSec);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + durationSec);
  } catch (err) {
    console.warn('Web Audio breathing tone unavailable:', err);
  }
}


  /* ── Bundle Module: js/utils/textEffects.js ── */

/**
 * Kinetic Editorial Text Animation System
 * Features:
 * 1. HTML-safe Decrypt Scrambler with styled character glimmers (.scramble-glyph).
 * 2. Dynamic Kinetic Word Cycler (morphs phrases with character scramble).
 * 3. Interactive Hover Decrypt Binds.
 */

const GLYPHS = ['—', '✦', '✧', '/', '\\', '_', '[', ']', '*', '░', '▒', '▓', '°', '⚡'];

/**
 * Scramble-decrypts simple text inside an element or child container.
 * @param {HTMLElement} element
 * @param {string} targetText
 * @param {number} speedMs
 */
function decryptText(element, targetText = null, speedMs = 25) {
  if (!element) return;
  const finalString = targetText || element.dataset.originalText || element.textContent.trim();
  if (!element.dataset.originalText) {
    element.dataset.originalText = finalString;
  }

  let step = 0;
  const length = finalString.length;

  if (element._decryptInterval) {
    clearInterval(element._decryptInterval);
  }

  element._decryptInterval = setInterval(() => {
    let outputHtml = '';
    for (let i = 0; i < length; i++) {
      if (finalString[i] === ' ') {
        outputHtml += ' ';
      } else if (i < step) {
        outputHtml += escapeHtml(finalString[i]);
      } else {
        const randomGlyph = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        outputHtml += `<span class="scramble-glyph">${randomGlyph}</span>`;
      }
    }

    element.innerHTML = outputHtml;
    step += 2;

    if (step >= length + 2) {
      clearInterval(element._decryptInterval);
      element._decryptInterval = null;
      element.innerHTML = escapeHtml(finalString);
    }
  }, speedMs);
}

/**
 * Initializes a continuous kinetic word cycler that morphs between phrases.
 * @param {string|HTMLElement} elementOrId
 * @param {Array<string>} phrases
 * @param {number} intervalMs
 */
function initKineticWordCycler(elementOrId, phrases = [], intervalMs = 3200) {
  const element = typeof elementOrId === 'string' ? document.getElementById(elementOrId) : elementOrId;
  if (!element || !phrases.length) return;

  let currentIndex = 0;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % phrases.length;
    const nextPhrase = phrases[currentIndex];
    decryptText(element, nextPhrase, 30);
  }, intervalMs);
}

/**
 * Binds hover decrypt scramble to all elements matching a CSS selector.
 * @param {string} selector
 */
function bindHoverDecrypt(selector) {
  document.querySelectorAll(selector).forEach(el => {
    if (!el.dataset.originalText) {
      el.dataset.originalText = el.textContent.trim();
    }

    el.addEventListener('mouseenter', () => {
      decryptText(el, el.dataset.originalText, 25);
    });
  });
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}


  /* ── Bundle Module: js/utils/tiltPhysics.js ── */

/**
 * 3D Perspective Card Physics & Specular Glare Tracking
 * Applies real-time cursor perspective rotation (rotateX, rotateY)
 * and cursor-following specular glare reflection.
 */

function initTiltPhysics(selector = '.template-card, .feature-card') {
  const cards = document.querySelectorAll(selector);

  cards.forEach(card => {
    // 1. Ensure card has relative positioning & 3D perspective
    card.style.transformStyle = 'preserve-3d';

    // 2. Ensure specular glare overlay element exists
    let glare = card.querySelector('.card-glare');
    if (!glare) {
      glare = document.createElement('div');
      glare.className = 'card-glare';
      glare.style.cssText = `
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        border-radius: inherit;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 2;
      `;
      card.appendChild(glare);
    }

    // 3. Mousemove 3D Tilt & Specular Glare Calculation
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const width = rect.width;
      const height = rect.height;

      const rotateX = ((y / height) - 0.5) * -14;
      const rotateY = ((x / width) - 0.5) * 14;

      card.style.transition = 'transform 0.08s cubic-bezier(0.16, 1, 0.3, 1)';
      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`;

      glare.style.opacity = '1';
      glare.style.background = `radial-gradient(circle at ${x.toFixed(1)}px ${y.toFixed(1)}px, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0) 65%)`;
    });

    // 4. Mouseleave Smooth Return
    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      glare.style.opacity = '0';
    });
  });
}


  /* ── Bundle Module: js/utils/philosophyLens.js ── */

/**
 * philosophyLens.js — Interactive Split-Screen Lens Drag Math & Web Audio Soundscape Synthesizer
 * Komorebi Workspace — Pure Vanilla JavaScript (ES Module)
 */

/* ── 1. Interactive Split-Screen Lens Drag Math ────────────────────────────── */
function initPhilosophyLens() {
  const lens = document.getElementById('philosophy-lens');
  const handle = document.getElementById('lens-drag-handle');
  if (!lens || !handle) return;

  let isDragging = false;

  function updateSplit(clientX) {
    const rect = lens.getBoundingClientRect();
    if (rect.width <= 0) return;

    let offsetX = clientX - rect.left;
    let percent = (offsetX / rect.width) * 100;

    // Clamp between 5% and 95% to preserve handle visibility
    percent = Math.max(5, Math.min(95, percent));

    lens.style.setProperty('--split-percent', `${percent.toFixed(2)}%`);
    handle.setAttribute('aria-valuenow', Math.round(percent));
  }

  function onPointerDown(e) {
    isDragging = true;
    lens.classList.add('is-dragging');
    if (handle.setPointerCapture && e.pointerId) {
      handle.setPointerCapture(e.pointerId);
    }
    updateSplit(e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : 0));
  }

  function onPointerMove(e) {
    if (!isDragging) return;
    const clientX = e.clientX !== undefined ? e.clientX : (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
    updateSplit(clientX);
  }

  function onPointerUp(e) {
    if (!isDragging) return;
    isDragging = false;
    lens.classList.remove('is-dragging');
    if (handle.releasePointerCapture && e.pointerId) {
      try { handle.releasePointerCapture(e.pointerId); } catch (_) {}
    }
  }

  // Pointer Events (Mouse, Touch, Stylus)
  handle.addEventListener('pointerdown', onPointerDown);
  window.addEventListener('pointermove', onPointerMove);
  window.addEventListener('pointerup', onPointerUp);
  window.addEventListener('pointercancel', onPointerUp);

  // Fallback for Touch/Mouse on Lens container click
  lens.addEventListener('click', (e) => {
    // Only move on direct click if not handle drag
    if (e.target.closest('#lens-drag-handle')) return;
    updateSplit(e.clientX);
  });

  // Keyboard Navigation Accessibility (Arrow Keys, Home, End)
  handle.addEventListener('keydown', (e) => {
    const currentStr = lens.style.getPropertyValue('--split-percent') || '50%';
    let current = parseFloat(currentStr);
    if (isNaN(current)) current = 50;

    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      e.preventDefault();
      const next = Math.max(5, current - 5);
      lens.style.setProperty('--split-percent', `${next}%`);
      handle.setAttribute('aria-valuenow', Math.round(next));
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      e.preventDefault();
      const next = Math.min(95, current + 5);
      lens.style.setProperty('--split-percent', `${next}%`);
      handle.setAttribute('aria-valuenow', Math.round(next));
    } else if (e.key === 'Home') {
      e.preventDefault();
      lens.style.setProperty('--split-percent', '5%');
      handle.setAttribute('aria-valuenow', 5);
    } else if (e.key === 'End') {
      e.preventDefault();
      lens.style.setProperty('--split-percent', '95%');
      handle.setAttribute('aria-valuenow', 95);
    }
  });
}

/* ── 2. Mindful Audio Ambience (Native Web Audio API Synthesizer) ──────────── */
class StillnessAudioEngine {
  constructor() {
    this.ctx = null;
    this.noiseNode = null;
    this.filterNode = null;
    this.gainNode = null;
    this.isPlaying = false;
  }

  initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
    } else {
      this.play();
    }
    return this.isPlaying;
  }

  play() {
    this.initContext();
    if (!this.ctx) return false;

    try {
      // 5-second buffer of procedural low-pass brown/pink focus soundscape
      const sampleRate = this.ctx.sampleRate;
      const bufferSize = sampleRate * 5;
      const buffer = this.ctx.createBuffer(1, bufferSize, sampleRate);
      const data = buffer.getChannelData(0);

      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        // Warm brown noise integration filter
        lastOut = (lastOut + (0.02 * white)) / 1.02;
        data[i] = lastOut * 3.5;
      }

      this.noiseNode = this.ctx.createBufferSource();
      this.noiseNode.buffer = buffer;
      this.noiseNode.loop = true;

      // Warm low-pass BiquadFilter (cutoff ~320Hz)
      this.filterNode = this.ctx.createBiquadFilter();
      this.filterNode.type = 'lowpass';
      this.filterNode.frequency.setValueAtTime(320, this.ctx.currentTime);

      // Smooth gain fade-in to prevent audio click
      this.gainNode = this.ctx.createGain();
      const now = this.ctx.currentTime;
      this.gainNode.gain.setValueAtTime(0.0001, now);
      this.gainNode.gain.exponentialRampToValueAtTime(0.12, now + 1.0);

      // Audio Graph Connection
      this.noiseNode.connect(this.filterNode);
      this.filterNode.connect(this.gainNode);
      this.gainNode.connect(this.ctx.destination);

      this.noiseNode.start(0);
      this.isPlaying = true;
      return true;
    } catch (err) {
      console.error('Web Audio Playback Error:', err);
      this.isPlaying = false;
      return false;
    }
  }

  stop() {
    if (!this.gainNode || !this.ctx || !this.isPlaying) {
      this.isPlaying = false;
      return false;
    }

    try {
      const now = this.ctx.currentTime;
      this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, now);
      this.gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.5);

      setTimeout(() => {
        if (this.noiseNode) {
          try { this.noiseNode.stop(); } catch (_) {}
          try { this.noiseNode.disconnect(); } catch (_) {}
          this.noiseNode = null;
        }
        this.isPlaying = false;
      }, 500);

      this.isPlaying = false;
      return false;
    } catch (err) {
      this.isPlaying = false;
      return false;
    }
  }
}

const audioEngine = new StillnessAudioEngine();

function initAudioAmbience() {
  const toggleBtn = document.getElementById('listen-stillness-btn');
  const labelEl = document.getElementById('stillness-audio-label');
  const statusEl = document.getElementById('stillness-audio-status');
  const visualEl = document.getElementById('stillness-audio-visual');

  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    const isPlaying = audioEngine.toggle();

    if (isPlaying) {
      toggleBtn.classList.add('is-active');
      if (labelEl) labelEl.textContent = 'Pause Focus Soundscape';
      if (statusEl) statusEl.textContent = 'Playing: Low-Pass Brown Noise (Native Web Audio)';
      if (visualEl) visualEl.classList.add('is-playing');
    } else {
      toggleBtn.classList.remove('is-active');
      if (labelEl) labelEl.textContent = 'Listen to Stillness';
      if (statusEl) statusEl.textContent = 'Native Brown/Pink Noise Focus Soundscape';
      if (visualEl) visualEl.classList.remove('is-playing');
    }
  });
}

function initPhilosophySection() {
  initPhilosophyLens();
  initAudioAmbience();
}


  /* ── Bundle Module: js/storage.js ── */

/**
 * Multi-Tenant LocalStorage Persistence Engine
 * Supports State Isolation per Authenticated User Account.
 */

const SESSION_KEY = 'komorebi_session_v1';
const USERS_KEY   = 'komorebi_users_v1';

const storage = {
  // ── Session & User Registry ──────────────────────────────────────────────
  getSession() {
    try {
      const raw = localStorage.getItem(SESSION_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  },

  saveSession(session) {
    try {
      if (session) {
        localStorage.setItem(SESSION_KEY, JSON.stringify(session));
      } else {
        localStorage.removeItem(SESSION_KEY);
      }
    } catch (err) {
      console.warn('Session save failed:', err);
    }
  },

  getUsers() {
    try {
      const raw = localStorage.getItem(USERS_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  },

  saveUsers(users) {
    try {
      localStorage.setItem(USERS_KEY, JSON.stringify(users));
    } catch (err) {
      console.warn('Users save failed:', err);
    }
  },

  // ── User ID Normalization & Isolated Storage per Account ─────────────────
  _normalizeUserId(userId) {
    if (!userId || userId === 'demo' || userId === 'demo-user' || userId === 'guest') {
      return 'demo';
    }
    return String(userId);
  },

  _getTaskKey(userId) {
    const uid = this._normalizeUserId(userId);
    return `komorebi_tasks_${uid}`;
  },

  getTasks(userId) {
    try {
      const uid = this._normalizeUserId(userId);
      const key = `komorebi_tasks_${uid}`;
      let raw = localStorage.getItem(key);

      // Migration fallback: check legacy keys if demo/guest
      if (raw === null && uid === 'demo') {
        const legacy = localStorage.getItem('komorebi_tasks_demo-user');
        if (legacy !== null) {
          raw = legacy;
          localStorage.setItem(key, legacy);
        }
      }

      return raw !== null ? JSON.parse(raw) : null;
    } catch (err) {
      console.warn('Task storage read error:', err);
      return null;
    }
  },

  saveTasks(userId, tasks) {
    try {
      const key = this._getTaskKey(userId);
      localStorage.setItem(key, JSON.stringify(tasks));
    } catch (err) {
      console.warn('Task storage write error:', err);
    }
  },

  // ── Domain Workspace State ───────────────────────────────────────────────
  getDomain(userId) {
    try {
      const uid = this._normalizeUserId(userId);
      const key = `komorebi_domain_${uid}`;
      return localStorage.getItem(key) || 'inbox';
    } catch {
      return 'inbox';
    }
  },

  saveDomain(userId, domain) {
    try {
      const uid = this._normalizeUserId(userId);
      const key = `komorebi_domain_${uid}`;
      localStorage.setItem(key, domain);
    } catch (err) {
      console.warn('Domain save failed:', err);
    }
  },

  // ── View Mode State ──────────────────────────────────────────────────────
  getView(userId) {
    try {
      const uid = this._normalizeUserId(userId);
      const key = `komorebi_view_${uid}`;
      return localStorage.getItem(key) || 'board';
    } catch {
      return 'board';
    }
  },

  saveView(userId, view) {
    try {
      const uid = this._normalizeUserId(userId);
      const key = `komorebi_view_${uid}`;
      localStorage.setItem(key, view);
    } catch (err) {
      console.warn('View save failed:', err);
    }
  },

  // ── Board Section Headers Persistence ────────────────────────────────────
  getSections(userId, domain) {
    try {
      const uid = this._normalizeUserId(userId);
      const key = `komorebi_sections_${uid}`;
      let raw = localStorage.getItem(key);

      if (raw === null && uid === 'demo') {
        raw = localStorage.getItem('komorebi_sections_demo-user');
      }

      const data = raw ? JSON.parse(raw) : null;
      if (data && Array.isArray(data[domain])) {
        return data[domain];
      }
      return null;
    } catch {
      return null;
    }
  },

  saveSections(userId, domain, sections) {
    try {
      const uid = this._normalizeUserId(userId);
      const key = `komorebi_sections_${uid}`;
      const raw = localStorage.getItem(key);
      const data = raw ? JSON.parse(raw) : {};
      data[domain] = sections;
      localStorage.setItem(key, JSON.stringify(data));
    } catch (err) {
      console.warn('Sections save failed:', err);
    }
  },

  // ── Active Surface (Landing vs. Workspace) Persistence ───────────────────
  getLastSurface() {
    try {
      return localStorage.getItem('komorebi_active_surface');
    } catch {
      return null;
    }
  },

  saveLastSurface(surface) {
    try {
      if (surface) {
        localStorage.setItem('komorebi_active_surface', surface);
      } else {
        localStorage.removeItem('komorebi_active_surface');
      }
    } catch (err) {
      console.warn('Surface save failed:', err);
    }
  },

  // ── Cookie Persistence Helpers ───────────────────────────────────────────
  setCookie(name, value, maxAge = 31536000, path = '/') {
    try {
      document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; path=${path}; max-age=${maxAge}; SameSite=Lax`;
    } catch (err) {
      console.warn('Cookie write error:', err);
    }
  },

  getCookie(name) {
    try {
      const prefix = `${encodeURIComponent(name)}=`;
      const cookies = document.cookie ? document.cookie.split(';') : [];
      for (let c of cookies) {
        c = c.trim();
        if (c.startsWith(prefix)) {
          return decodeURIComponent(c.substring(prefix.length));
        }
      }
      return null;
    } catch (err) {
      console.warn('Cookie read error:', err);
      return null;
    }
  },

  removeCookie(name, path = '/') {
    try {
      document.cookie = `${encodeURIComponent(name)}=; path=${path}; max-age=0; SameSite=Lax`;
    } catch (err) {
      console.warn('Cookie removal error:', err);
    }
  },
};

const setCookie = storage.setCookie;
const getCookie = storage.getCookie;
const removeCookie = storage.removeCookie;


  /* ── Bundle Module: js/auth.js ── */


class AuthManager {
  constructor() {
    this.session = storage.getSession();
    this.users = storage.getUsers();
  }

  get currentUser() {
    return this.session ? this.session.user : null;
  }

  getCurrentUser() {
    return this.currentUser;
  }

  get isAuthenticated() {
    return !!this.session;
  }

  get isDemo() {
    return this.session ? this.session.isDemo : false;
  }

  get userId() {
    if (this.session && this.session.user) {
      return this.session.user.id;
    }
    return null;
  }

  /**
   * Finds a user by email, name/username, or email prefix.
   * @param {string} identifier
   */
  findUser(identifier) {
    if (!identifier) return null;
    const clean = identifier.trim().toLowerCase();
    this.users = storage.getUsers();

    // 1. Direct key match (case-insensitive)
    for (const key of Object.keys(this.users)) {
      if (key.trim().toLowerCase() === clean) {
        return this.users[key];
      }
    }

    // 2. Value property match: email, name, or username before @
    for (const user of Object.values(this.users)) {
      if (!user) continue;
      const userEmail = (user.email || '').trim().toLowerCase();
      const userName  = (user.name || '').trim().toLowerCase();
      const userPrefix = userEmail.includes('@') ? userEmail.split('@')[0] : '';

      if (userEmail === clean || userName === clean || userPrefix === clean) {
        return user;
      }
    }

    return null;
  }

  /**
   * Returns list of accounts stored on this device.
   * @returns {Array<{name: string, email: string}>}
   */
  getRegisteredAccounts() {
    this.users = storage.getUsers();
    return Object.values(this.users)
      .filter(u => u && u.email)
      .map(u => ({ name: u.name || 'User', email: u.email }));
  }

  /**
   * Registers a new account.
   * @param {string} name
   * @param {string} email
   * @param {string} password
   */
  register({ name, email, password }) {
    const cleanEmail = email.trim().toLowerCase();
    const cleanName = name.trim();
    const cleanPassword = password ? password.trim() : '';

    if (!cleanName || !cleanEmail || !cleanPassword) {
      throw new Error('Please fill in all required fields.');
    }

    if (cleanPassword.length < 6) {
      throw new Error('Password must be at least 6 characters.');
    }

    this.users = storage.getUsers();
    if (this.findUser(cleanEmail)) {
      throw new Error('An account with this email already exists.');
    }

    const userId = `u-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`;
    const user = {
      id: userId,
      name: cleanName,
      email: cleanEmail,
      password: cleanPassword, // Mock account storage
      createdAt: new Date().toISOString(),
    };

    this.users[cleanEmail] = user;
    storage.saveUsers(this.users);

    // Explicitly initialize clean, empty workspace for the new user
    storage.saveTasks(userId, []);
    storage.saveDomain(userId, 'inbox');
    storage.saveView(userId, 'board');
    storage.saveSections(userId, 'inbox', ['(No Section)']);
    storage.saveSections(userId, 'fitness', DEFAULT_SECTIONS.fitness);
    storage.saveSections(userId, 'habits', DEFAULT_SECTIONS.habits);
    storage.saveSections(userId, 'deepwork', DEFAULT_SECTIONS.deepwork);
    storage.saveSections(userId, 'errands', DEFAULT_SECTIONS.errands);

    return this._setSession(user, false);
  }

  /**
   * Signs in an existing user with email or username.
   * @param {string} email
   * @param {string} password
   */
  login({ email, password }) {
    if (!email || !password) {
      throw new Error('Please provide both your email/username and password.');
    }

    const user = this.findUser(email);
    if (!user) {
      throw new Error('No account found with this email or username.');
    }

    const cleanInputPass = password.trim();
    const cleanSavedPass = (user.password || '').trim();
    const isMatch = user.password === password ||
                    user.password === cleanInputPass ||
                    cleanSavedPass === cleanInputPass;

    if (!isMatch) {
      throw new Error('Incorrect password. Please try again or use "Forgot password?".');
    }

    return this._setSession(user, false);
  }

  /**
   * Resets password for an existing account and automatically logs in.
   * @param {string} email
   * @param {string} newPassword
   */
  resetPassword({ email, newPassword }) {
    if (!email || !newPassword) {
      throw new Error('Please provide your email address and new password.');
    }

    const cleanPass = newPassword.trim();
    if (cleanPass.length < 6) {
      throw new Error('Password must be at least 6 characters.');
    }

    const user = this.findUser(email);
    if (!user) {
      throw new Error(`No account found matching "${email.trim()}".`);
    }

    this.users = storage.getUsers();
    const targetKey = Object.keys(this.users).find(k => this.users[k]?.id === user.id) || (user.email ? user.email.trim().toLowerCase() : user.id);

    user.password = cleanPass;
    this.users[targetKey] = user;
    storage.saveUsers(this.users);

    return this._setSession(user, false);
  }

  /**
   * Launches Demo Mode as Guest.
   */
  startDemo() {
    const demoUser = {
      id: 'demo-user',
      name: 'Guest Explorer',
      email: 'demo@komorebi.workspace',
    };
    return this._setSession(demoUser, true);
  }

  /**
   * Clears active session.
   */
  logout() {
    this.session = null;
    storage.saveSession(null);
  }

  _setSession(user, isDemo = false) {
    const nameParts = user.name ? user.name.trim().split(/\s+/) : [];
    const initials = nameParts.length >= 2
      ? (nameParts[0][0] + nameParts[nameParts.length - 1][0]).toUpperCase()
      : (user.name ? user.name.slice(0, 2).toUpperCase() : 'U');

    this.session = {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        initials,
      },
      isDemo,
      token: `token-${Date.now()}`,
    };
    storage.saveSession(this.session);
    return this.session;
  }
}

const auth = new AuthManager();


  /* ── Bundle Module: js/state.js ── */


const today = todayISO();
const tomorrow = addDaysISO(today, 1);

const DEFAULT_SECTIONS = {
  inbox: ['(No Section)'],
  fitness: ['Backlog', 'In Progress', 'Done / Review'],
  habits: ['Daily Morning', 'Afternoon Flow', 'Evening Rituals'],
  deepwork: ['Sprint Backlog', 'Active Focus', 'Shipped'],
  errands: ['To Buy', 'In Cart', 'Completed'],
};

const DEMO_SECTIONS = {
  inbox: [
    '(No Section)',
    '22-23-24 august',
    '25 Aug',
    '27 august',
    '29 august',
    '31 august',
    '3-4-5-6-7sept',
    '8sept'
  ],
  fitness: ['Backlog', 'In Progress', 'Done / Review'],
  habits: ['Daily Morning', 'Afternoon Flow', 'Evening Rituals'],
  deepwork: ['Sprint Backlog', 'Active Focus', 'Shipped'],
  errands: ['To Buy', 'In Cart', 'Completed'],
};

const LEGACY_MOCK_SECTIONS = new Set([
  '22-23-24 august',
  '25 Aug',
  '27 august',
  '29 august',
  '31 august',
  '3-4-5-6-7sept',
  '8sept'
]);

const DEMO_TASK_IDS = new Set([
  'task-ns-1', 'task-ns-2', 'task-ns-3',
  'task-aug22-1', 'task-aug22-2', 'task-aug22-3', 'task-aug22-4', 'task-aug22-5', 'task-aug22-6', 'task-aug22-7',
  'task-aug25-1', 'task-aug25-2', 'task-aug25-3', 'task-aug25-4', 'task-aug25-5',
  'task-aug27-1', 'task-aug27-2', 'task-aug27-3', 'task-aug27-4', 'task-aug27-5',
  'task-aug29-1', 'task-aug29-2', 'task-aug29-3',
  'task-aug31-1', 'task-aug31-2', 'task-aug31-3',
  'task-sept-1', 'task-sept-2', 'task-sept-3', 'task-sept-4', 'task-sept-5', 'task-sept-6', 'task-sept-7', 'task-sept-8', 'task-sept-9',
  'fit-1', 'fit-2', 'fit-3',
  'hab-1', 'hab-2', 'hab-3',
  'dw-1', 'dw-2', 'dw-3',
  'err-1', 'err-2', 'err-3'
]);

function getDefaultTasks() {
  return [
    // ── 0. Inbox Domain (Exact replica of Todoist Reference Image) ───────────
    // Column 1: (No Section) - 3 pending
    {
      id: 'task-ns-1',
      title: 'NALR',
      domain: 'inbox',
      section: '(No Section)',
      status: 'backlog',
      dueDate: 'Tomorrow',
      dateColor: 'orange',
      completed: false,
    },
    {
      id: 'task-ns-2',
      title: 'SD',
      domain: 'inbox',
      section: '(No Section)',
      status: 'backlog',
      dueDate: 'Friday',
      dateColor: 'purple',
      completed: false,
    },
    {
      id: 'task-ns-3',
      title: 'DNN',
      domain: 'inbox',
      section: '(No Section)',
      status: 'backlog',
      dueDate: '17 Oct',
      dateColor: 'grey',
      completed: false,
    },

    // Column 2: 22-23-24 august - 2 pending
    {
      id: 'task-aug22-1',
      title: 'leetcode 4 questions',
      domain: 'inbox',
      section: '22-23-24 august',
      status: 'in-progress',
      completed: false,
      isExpanded: true,
      subtasks: [
        { id: 'sub-22-1-1', title: 'Ques4', completed: false },
        { id: 'sub-22-1-2', title: 'Ques3', completed: true },
        { id: 'sub-22-1-3', title: 'Ques2', completed: true },
        { id: 'sub-22-1-4', title: 'Ques1', completed: true },
      ],
    },
    {
      id: 'task-aug22-2',
      title: 'NALR(HCF and LCM)',
      domain: 'inbox',
      section: '22-23-24 august',
      status: 'backlog',
      completed: false,
    },
    {
      id: 'task-aug22-3',
      title: 'Assignment',
      domain: 'inbox',
      section: '22-23-24 august',
      status: 'ready-qa',
      completed: true,
      isExpanded: false,
      subtasks: [
        { id: 'sub-22-3-1', title: 'Module 1', completed: true },
        { id: 'sub-22-3-2', title: 'Module 2', completed: true },
        { id: 'sub-22-3-3', title: 'Module 3', completed: true },
      ],
    },
    {
      id: 'task-aug22-4',
      title: 'JS complete the backlog till now',
      domain: 'inbox',
      section: '22-23-24 august',
      status: 'ready-qa',
      completed: true,
    },
    {
      id: 'task-aug22-5',
      title: 'AOC',
      domain: 'inbox',
      section: '22-23-24 august',
      status: 'ready-qa',
      completed: true,
    },
    {
      id: 'task-aug22-6',
      title: 'System Design',
      domain: 'inbox',
      section: '22-23-24 august',
      status: 'ready-qa',
      completed: true,
    },
    {
      id: 'task-aug22-7',
      title: 'decide JS and WEB project',
      domain: 'inbox',
      section: '22-23-24 august',
      status: 'ready-qa',
      completed: true,
    },

    // Column 3: 25 Aug - 2 pending
    {
      id: 'task-aug25-1',
      title: '(hcf and lcm) concept',
      domain: 'inbox',
      section: '25 Aug',
      status: 'backlog',
      completed: false,
    },
    {
      id: 'task-aug25-2',
      title: 'linkedList luv babbar',
      domain: 'inbox',
      section: '25 Aug',
      status: 'backlog',
      completed: false,
    },
    {
      id: 'task-aug25-3',
      title: 'start working on JS project',
      domain: 'inbox',
      section: '25 Aug',
      status: 'ready-qa',
      completed: true,
    },
    {
      id: 'task-aug25-4',
      title: 'leetcode 1 question',
      domain: 'inbox',
      section: '25 Aug',
      status: 'ready-qa',
      completed: true,
    },
    {
      id: 'task-aug25-5',
      title: 'System design',
      domain: 'inbox',
      section: '25 Aug',
      status: 'ready-qa',
      completed: true,
    },

    // Column 4: 27 august - 1 pending
    {
      id: 'task-aug27-1',
      title: 'HCF LCM PPT',
      domain: 'inbox',
      section: '27 august',
      status: 'backlog',
      completed: false,
    },
    {
      id: 'task-aug27-2',
      title: 'linked list',
      domain: 'inbox',
      section: '27 august',
      status: 'ready-qa',
      completed: true,
    },
    {
      id: 'task-aug27-3',
      title: 'serviceNow exam',
      domain: 'inbox',
      section: '27 august',
      status: 'ready-qa',
      completed: true,
    },
    {
      id: 'task-aug27-4',
      title: 'leetcode one question',
      domain: 'inbox',
      section: '27 august',
      status: 'ready-qa',
      completed: true,
    },
    {
      id: 'task-aug27-5',
      title: 'JS project',
      domain: 'inbox',
      section: '27 august',
      status: 'ready-qa',
      completed: true,
    },

    // Column 5: 29 august - 2 pending
    {
      id: 'task-aug29-1',
      title: 'HCF/LCM concept+PPT',
      domain: 'inbox',
      section: '29 august',
      status: 'backlog',
      completed: false,
    },
    {
      id: 'task-aug29-2',
      title: 'linkedList complete revision plus questions',
      domain: 'inbox',
      section: '29 august',
      status: 'backlog',
      completed: false,
    },
    {
      id: 'task-aug29-3',
      title: 'leetcode question',
      domain: 'inbox',
      section: '29 august',
      status: 'ready-qa',
      completed: true,
    },

    // Column 6: 31 august - 1 pending
    {
      id: 'task-aug31-1',
      title: 'DSA',
      domain: 'inbox',
      section: '31 august',
      status: 'in-progress',
      completed: false,
      isExpanded: true,
      subtasks: [
        { id: 'sub-31-1-1', title: 'revise linked list', completed: false },
        { id: 'sub-31-1-2', title: 'leetcode one question', completed: true, comments: 1 },
      ],
    },
    {
      id: 'task-aug31-2',
      title: 'Assignment',
      domain: 'inbox',
      section: '31 august',
      status: 'ready-qa',
      completed: true,
      isExpanded: false,
      subtasks: [
        { id: 'sub-31-2-1', title: 'Problem 1', completed: true },
        { id: 'sub-31-2-2', title: 'Problem 2', completed: true },
      ],
    },
    {
      id: 'task-aug31-3',
      title: 'DBMS(revise complete along with assignment)',
      domain: 'inbox',
      section: '31 august',
      status: 'ready-qa',
      dueDate: '13 Dec',
      dateColor: 'grey',
      completed: true,
    },
    {
      id: 'task-aug31-4',
      title: 'comparable vs comparator',
      domain: 'inbox',
      section: '31 august',
      status: 'ready-qa',
      completed: true,
    },

    // Column 7: 3-4-5-6-7sept - 2 pending
    {
      id: 'task-sept-1',
      title: 'JS work on project',
      domain: 'inbox',
      section: '3-4-5-6-7sept',
      status: 'backlog',
      completed: false,
    },
    {
      id: 'task-sept-2',
      title: 'DBMS',
      domain: 'inbox',
      section: '3-4-5-6-7sept',
      status: 'backlog',
      completed: false,
    },
    {
      id: 'task-sept-3',
      title: 'leetcode ques',
      domain: 'inbox',
      section: '3-4-5-6-7sept',
      status: 'ready-qa',
      completed: true,
    },
    {
      id: 'task-sept-4',
      title: 'system design',
      domain: 'inbox',
      section: '3-4-5-6-7sept',
      status: 'ready-qa',
      completed: true,
    },
    {
      id: 'task-sept-5',
      title: 'assignment',
      domain: 'inbox',
      section: '3-4-5-6-7sept',
      status: 'ready-qa',
      completed: true,
    },
    {
      id: 'task-sept-6',
      title: 'JS complete backlog',
      domain: 'inbox',
      section: '3-4-5-6-7sept',
      status: 'ready-qa',
      completed: true,
    },
    {
      id: 'task-sept-7',
      title: 'leetcode 5 questions',
      domain: 'inbox',
      section: '3-4-5-6-7sept',
      status: 'ready-qa',
      completed: true,
      isExpanded: false,
      subtasks: [
        { id: 'sub-sept-7-1', title: 'Ques 1', completed: true },
        { id: 'sub-sept-7-2', title: 'Ques 2', completed: true },
        { id: 'sub-sept-7-3', title: 'Ques 3', completed: true },
        { id: 'sub-sept-7-4', title: 'Ques 4', completed: true },
        { id: 'sub-sept-7-5', title: 'Ques 5', completed: true },
      ],
    },
    {
      id: 'task-sept-8',
      title: 'capgemini quiz',
      domain: 'inbox',
      section: '3-4-5-6-7sept',
      status: 'ready-qa',
      completed: true,
    },
    {
      id: 'task-sept-9',
      title: 'stack',
      domain: 'inbox',
      section: '3-4-5-6-7sept',
      status: 'ready-qa',
      completed: true,
    },

    // ── 1. Fitness & Health Domain ──────────────────────────────────────────
    { id: 'fit-1', title: 'Morning 20-min workout & stretch',    domain: 'fitness', section: 'In Progress',  status: 'in-progress', dueDate: today,    tag: 'fitness',  priority: 'p1', completed: false },
    { id: 'fit-2', title: 'Drink 8 glasses of water',             domain: 'fitness', section: 'Backlog',      status: 'backlog',     dueDate: today,    tag: 'health',   priority: 'p3', completed: false },
    { id: 'fit-3', title: 'Evening core & flexibility routine',   domain: 'fitness', section: 'Backlog',      status: 'backlog',     dueDate: today,    tag: 'fitness',  priority: 'p2', completed: false },

    // ── 2. Habit Formation Domain ───────────────────────────────────────────
    { id: 'hab-1', title: 'Read 25 pages non-fiction',            domain: 'habits',  section: 'Afternoon Flow', status: 'in-progress', dueDate: today,    tag: 'reading',  priority: 'p3', completed: false },
    { id: 'hab-2', title: 'Daily reflection journal',            domain: 'habits',  section: 'Evening Rituals', status: 'backlog',     dueDate: today,    tag: 'mindset',  priority: 'p2', completed: false },
    { id: 'hab-3', title: '10-minute mindfulness session',        domain: 'habits',  section: 'Daily Morning',  status: 'ready-qa',    dueDate: today,    tag: 'health',   priority: 'p3', completed: true  },

    // ── 3. Deep Work Sprint Domain ──────────────────────────────────────────
    { id: 'dw-1',  title: '2-hour uninterrupted focus sprint',    domain: 'deepwork', section: 'Active Focus', status: 'in-progress', dueDate: today,    tag: 'deepwork', priority: 'p1', completed: false },
    { id: 'dw-2',  title: 'Audit architecture code & tests',      domain: 'deepwork', section: 'Sprint Backlog', status: 'backlog',     dueDate: tomorrow, tag: 'code',     priority: 'p2', completed: false },
    { id: 'dw-3',  title: 'Review Q4 product roadmap OKRs',       domain: 'deepwork', section: 'Sprint Backlog', status: 'backlog',     dueDate: tomorrow, tag: 'planning', priority: 'p2', completed: false },

    // ── 4. Grocery & Errands Domain ─────────────────────────────────────────
    { id: 'err-1', title: 'Pantry essentials restock',            domain: 'errands',  section: 'To Buy', status: 'backlog',     dueDate: today,    tag: 'grocery',  priority: 'p2', completed: false },
    { id: 'err-2', title: 'Pick up prescription at pharmacy',     domain: 'errands',  section: 'In Cart', status: 'in-progress', dueDate: today,    tag: 'health',   priority: 'p1', completed: false },
    { id: 'err-3', title: 'Weekly meal prep items & greens',      domain: 'errands',  section: 'To Buy', status: 'backlog',     dueDate: tomorrow, tag: 'grocery',  priority: 'p3', completed: false },
  ];
}

class StateManager {
  constructor() {
    this._listeners = [];
    this.currentView = 'board';
    this.reloadForUser();
  }

  /**
   * Synchronizes state for current user preserving current view.
   */
  syncUser() {
    this.reloadForUser();
  }

  /**
   * Reloads state when user logs in, switches account, or enters demo mode.
   */
  reloadForUser() {
    const userId = auth.userId;
    const isDemo = auth.isDemo || !auth.isAuthenticated;
    const saved = storage.getTasks(userId);

    if (Array.isArray(saved)) {
      if (!isDemo) {
        // Authenticated real user: purge any leaked demo tasks from storage
        const hasDemoTasks = saved.some(t => DEMO_TASK_IDS.has(t.id));
        this.tasks = saved.filter(t => !DEMO_TASK_IDS.has(t.id));
        if (hasDemoTasks) {
          storage.saveTasks(userId, this.tasks);
        }
      } else {
        this.tasks = saved;
      }
    } else {
      // Key was never created in storage:
      // Real authenticated user starts with an empty workspace ([]);
      // Demo/Guest user gets the interactive showcase tasks (getDefaultTasks())
      this.tasks = isDemo ? getDefaultTasks() : [];
      storage.saveTasks(userId, this.tasks);
    }

    // Standardize legacy 'workspace' field to 'domain'
    this.tasks.forEach(t => {
      if (!t.domain) {
        if (t.workspace === 'work') t.domain = 'deepwork';
        else if (t.workspace === 'personal') t.domain = 'fitness';
        else t.domain = t.workspace || 'inbox';
      }
      if (!t.section) {
        if (t.status === 'ready-qa') t.section = 'Done / Review';
        else if (t.status === 'in-progress') t.section = 'In Progress';
        else t.section = '(No Section)';
      }
    });

    this.activeDomain = storage.getDomain(userId) || 'inbox';
    this.currentView  = storage.getView(userId) || 'board';

    // Apply dynamic body data-domain attribute for CSS theme switching
    document.body.dataset.domain = this.activeDomain;

    if (!isDemo && this.activeDomain === 'inbox') {
      // Clean up any legacy demo august date sections from user storage
      const savedInboxSections = storage.getSections(userId, 'inbox');
      if (savedInboxSections && savedInboxSections.some(s => LEGACY_MOCK_SECTIONS.has(s))) {
        const cleaned = savedInboxSections.filter(s => !LEGACY_MOCK_SECTIONS.has(s));
        storage.saveSections(userId, 'inbox', cleaned.length > 0 ? cleaned : ['(No Section)']);
      }
    }

    storage.saveDomain(userId, this.activeDomain);
    storage.saveView(userId, this.currentView);
    this._notify();
  }

  /* ── Observer Pattern ────────────────────────────────────────────────────── */
  subscribe(fn) {
    if (typeof fn === 'function') {
      this._listeners.push(fn);
    }
  }

  _notify() {
    const userId = auth.userId;
    document.body.dataset.domain = this.activeDomain;

    storage.saveTasks(userId, this.tasks);
    storage.saveDomain(userId, this.activeDomain);
    storage.saveView(userId, this.currentView);

    // Native PWA App Badging API (Zero-dependency Web API)
    if (typeof navigator !== 'undefined' && 'setAppBadge' in navigator) {
      const pendingCount = this.tasks.filter(t => !t.completed).length;
      if (pendingCount > 0) {
        navigator.setAppBadge(pendingCount).catch(() => {});
      } else if ('clearAppBadge' in navigator) {
        navigator.clearAppBadge().catch(() => {});
      }
    }

    this._listeners.forEach(fn => fn());
  }

  /* ── Queries ─────────────────────────────────────────────────────────────── */
  getFilteredTasks() {
    return this.tasks.filter(t => t.domain === this.activeDomain);
  }

  getSections(domain = this.activeDomain) {
    const userId = auth.userId;
    const isDemo = auth.isDemo || !auth.isAuthenticated;
    const custom = storage.getSections(userId, domain);
    if (custom && custom.length > 0) {
      if (!isDemo && domain === 'inbox') {
        const cleaned = custom.filter(s => !LEGACY_MOCK_SECTIONS.has(s));
        return cleaned.length > 0 ? cleaned : ['(No Section)'];
      }
      return custom;
    }

    const defaults = (isDemo && domain === 'inbox')
      ? (DEMO_SECTIONS[domain] || ['(No Section)'])
      : (DEFAULT_SECTIONS[domain] || ['(No Section)']);

    // Discover any additional sections that tasks might already have
    const taskSections = [...new Set(
      this.tasks.filter(t => t.domain === domain && t.section).map(t => t.section)
    )];

    const merged = [...defaults];
    taskSections.forEach(s => {
      if (!merged.includes(s)) merged.push(s);
    });

    return merged;
  }

  getDomainTaskCounts() {
    const counts = { inbox: 0, fitness: 0, habits: 0, deepwork: 0, errands: 0 };
    this.tasks.forEach(t => {
      if (counts[t.domain] !== undefined) {
        counts[t.domain]++;
      }
    });
    return counts;
  }

  getTodayStats() {
    const domainTasks = this.getFilteredTasks();
    const todayTasks  = domainTasks.filter(t => t.dueDate === todayISO() || t.dueDate === 'Today');
    const total = todayTasks.length || domainTasks.length;
    const done  = todayTasks.length ? todayTasks.filter(t => t.completed).length : domainTasks.filter(t => t.completed).length;
    const pct   = total ? Math.round((done / total) * 100) : 0;
    return { total, done, pct };
  }

  /* ── Mutations ───────────────────────────────────────────────────────────── */
  setDomain(domainKey) {
    const valid = ['inbox', 'fitness', 'habits', 'deepwork', 'errands'];
    if (valid.includes(domainKey) && this.activeDomain !== domainKey) {
      this.activeDomain = domainKey;
      this._notify();
    }
  }

  setView(v) {
    if (this.currentView !== v) {
      this.currentView = v;
      this._notify();
    }
  }

  addSection(domain, sectionName) {
    const clean = sectionName.trim();
    if (!clean) return;
    const currentSections = this.getSections(domain);
    if (!currentSections.includes(clean)) {
      currentSections.push(clean);
      storage.saveSections(auth.userId, domain, currentSections);
      this._notify();
    }
  }

  renameSection(domain, oldName, newName) {
    const cleanNew = newName.trim();
    if (!cleanNew || cleanNew === oldName) return;

    let sections = this.getSections(domain);
    const idx = sections.indexOf(oldName);
    if (idx !== -1) {
      sections[idx] = cleanNew;
    } else {
      sections.push(cleanNew);
    }
    storage.saveSections(auth.userId, domain, sections);

    // Update all tasks belonging to oldName
    this.tasks.forEach(t => {
      if (t.domain === domain && (t.section || '(No Section)') === oldName) {
        t.section = cleanNew;
      }
    });

    this._notify();
  }

  deleteSection(domain, sectionName, deleteTasks = true) {
    let sections = this.getSections(domain);
    sections = sections.filter(s => s !== sectionName);
    storage.saveSections(auth.userId, domain, sections);

    if (deleteTasks) {
      // Remove all tasks in this section
      this.tasks = this.tasks.filter(t => !(t.domain === domain && (t.section || '(No Section)') === sectionName));
    } else {
      // Move tasks to fallback section
      const fallback = sections[0] || '(No Section)';
      this.tasks.forEach(t => {
        if (t.domain === domain && (t.section || '(No Section)') === sectionName) {
          t.section = fallback;
        }
      });
    }

    this._notify();
  }

  clearSectionTasks(domain, sectionName) {
    this.tasks = this.tasks.filter(t => !(t.domain === domain && (t.section || '(No Section)') === sectionName));
    this._notify();
  }

  addTask({ title, status = 'backlog', section = null, dueDate = null, dateColor = null, tag = null, priority = 'p3', subtasks = [] }) {
    const cleanTitle = title.trim();
    if (!cleanTitle) return;

    const sections = this.getSections(this.activeDomain);
    const targetSection = section || (sections.length > 0 ? sections[0] : '(No Section)');
    const isDone = status === 'ready-qa';

    const newTask = {
      id: `t-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      title: cleanTitle,
      domain: this.activeDomain,
      section: targetSection,
      status,
      dueDate: dueDate || todayISO(),
      dateColor: dateColor || null,
      tag: tag ? tag.toLowerCase() : null,
      priority: priority || 'p3',
      completed: isDone,
      subtasks: Array.isArray(subtasks) ? subtasks : [],
    };
    this.tasks.push(newTask);
    this._notify();
  }

  seedTemplate(domainKey, tasks) {
    this.activeDomain = domainKey;
    this.tasks = this.tasks.filter(t => t.domain !== domainKey);

    const now = Date.now();
    tasks.forEach((t, i) => {
      const isDone = t.status === 'ready-qa';
      this.tasks.push({
        id: `tpl-${now}-${i}`,
        domain: domainKey,
        section: t.section || (isDone ? 'Done / Review' : 'Backlog'),
        status: t.status || 'backlog',
        dueDate: t.dueDate || todayISO(),
        dateColor: t.dateColor || null,
        tag: t.tag || null,
        priority: t.priority || 'p2',
        completed: isDone,
        title: t.title,
        subtasks: t.subtasks || [],
      });
    });
    this._notify();
  }

  updateTaskStatus(id, status) {
    const t = this.tasks.find(t => t.id === id);
    if (t) {
      t.status = status;
      t.completed = (status === 'ready-qa');
      this._notify();
    }
  }

  updateTaskSection(id, newSection) {
    const t = this.tasks.find(t => t.id === id);
    if (t) {
      t.section = newSection;
      this._notify();
    }
  }

  moveTask(id, targetSection, targetIndex = -1) {
    const taskIndex = this.tasks.findIndex(t => t.id === id);
    if (taskIndex === -1) return;

    const [task] = this.tasks.splice(taskIndex, 1);
    task.section = targetSection;

    if (targetIndex >= 0) {
      this.tasks.splice(targetIndex, 0, task);
    } else {
      this.tasks.push(task);
    }
    this._notify();
  }

  toggleTaskCompletion(id) {
    const t = this.tasks.find(t => t.id === id);
    if (t) {
      t.completed = !t.completed;
      if (t.completed) {
        t.status = 'ready-qa';
        // Native Vibration API haptic feedback on completion
        if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
          navigator.vibrate([15]);
        }
      } else if (t.status === 'ready-qa') {
        t.status = 'in-progress';
      }
      this._notify();
    }
  }

  toggleSubtaskCompletion(taskId, subtaskId) {
    const t = this.tasks.find(t => t.id === taskId);
    if (t && Array.isArray(t.subtasks)) {
      const sub = t.subtasks.find(s => s.id === subtaskId);
      if (sub) {
        sub.completed = !sub.completed;
        if (sub.completed && typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
          navigator.vibrate([10]);
        }
        this._notify();
      }
    }
  }

  toggleSubtasksExpanded(taskId) {
    const t = this.tasks.find(t => t.id === taskId);
    if (t && Array.isArray(t.subtasks) && t.subtasks.length > 0) {
      t.isExpanded = !t.isExpanded;
      this._notify();
    }
  }

  deleteTask(id) {
    const idx = this.tasks.findIndex(t => t.id === id);
    if (idx !== -1) {
      const [deleted] = this.tasks.splice(idx, 1);
      this._notify();
      if (typeof window !== 'undefined' && typeof window.showUndoToast === 'function') {
        window.showUndoToast(deleted, idx);
      }
      return deleted;
    }
  }

  restoreTask(task, index = -1) {
    if (!task || !task.id) return;
    if (this.tasks.some(t => t.id === task.id)) return;
    if (index >= 0 && index <= this.tasks.length) {
      this.tasks.splice(index, 0, task);
    } else {
      this.tasks.push(task);
    }
    this._notify();
  }

  updateTask(id, { title, section, dueDate, dateColor, priority, tag }) {
    const t = this.tasks.find(t => t.id === id);
    if (!t) return;
    if (title !== undefined && title.trim()) t.title = title.trim();
    if (section !== undefined) t.section = section;
    if (dueDate !== undefined) t.dueDate = dueDate;
    if (dateColor !== undefined) t.dateColor = dateColor;
    if (priority !== undefined) t.priority = priority;
    if (tag !== undefined) t.tag = tag;
    this._notify();
  }

  addSubtask(taskId, title) {
    const clean = title ? title.trim() : '';
    if (!clean) return;
    const t = this.tasks.find(t => t.id === taskId);
    if (!t) return;
    if (!Array.isArray(t.subtasks)) t.subtasks = [];
    t.subtasks.push({
      id: `sub-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      title: clean,
      completed: false
    });
    t.isExpanded = true;
    this._notify();
  }

  updateSubtask(taskId, subtaskId, newTitle) {
    const clean = newTitle ? newTitle.trim() : '';
    if (!clean) return;
    const t = this.tasks.find(t => t.id === taskId);
    if (!t || !Array.isArray(t.subtasks)) return;
    const sub = t.subtasks.find(s => s.id === subtaskId);
    if (sub) {
      sub.title = clean;
      this._notify();
    }
  }

  deleteSubtask(taskId, subtaskId) {
    const t = this.tasks.find(t => t.id === taskId);
    if (!t || !Array.isArray(t.subtasks)) return;
    t.subtasks = t.subtasks.filter(s => s.id !== subtaskId);
    this._notify();
  }

  /* ── Custom Domain Actions ───────────────────────────────────────────────── */
  triggerDomainAction(domainKey) {
    const today = todayISO();
    switch (domainKey) {
      case 'inbox':
        this.addTask({ title: 'New quick capture task', section: '(No Section)', status: 'backlog', dueDate: 'Today' });
        break;
      case 'fitness':
        this.addTask({ title: 'Drink 500ml water', section: 'Done / Review', status: 'ready-qa', dueDate: today, tag: 'health', priority: 'p3' });
        this.addTask({ title: 'Post-work 15-min stretch', section: 'In Progress', status: 'in-progress', dueDate: today, tag: 'fitness', priority: 'p2' });
        break;
      case 'habits':
        this.getFilteredTasks().forEach(t => {
          t.completed = true;
          t.status = 'ready-qa';
        });
        this._notify();
        break;
      case 'deepwork':
        this.addTask({ title: 'URGENT: Resolve sprint blocker !p1', section: 'Active Focus', status: 'in-progress', dueDate: today, tag: 'code', priority: 'p1' });
        break;
      case 'errands':
        this.tasks = this.tasks.filter(t => !(t.domain === 'errands' && t.completed));
        this._notify();
        break;
    }
  }

  resetToDefaultTemplates() {
    this.tasks = getDefaultTasks();
    storage.saveTasks(auth.userId, this.tasks);
    storage.saveSections(auth.userId, 'inbox', DEMO_SECTIONS.inbox);
    this.activeDomain = 'inbox';
    this.currentView = 'board';
    this._notify();
  }
}

const state = new StateManager();
window.__komorebi_auth = auth;
window.__komorebi_state = state;


  /* ── Bundle Module: js/views/listView.js ── */


const GROUPS = [
  { key: 'backlog',     title: 'Backlog',      icon: 'folder'      },
  { key: 'in-progress', title: 'In Progress',  icon: 'clock'       },
  { key: 'ready-qa',   title: 'Done / Review', icon: 'checkCircle' },
];

const DOMAIN_EMPTY_MAP = {
  inbox:    { title: 'No tasks in Inbox',          desc: 'Capture ideas, study topics, or tasks with natural language quick add.', icon: 'inbox' },
  fitness:  { title: 'No fitness goals added yet', desc: 'Add water tracking, workout routines, or stretching goals to stay active.', icon: 'fitness' },
  habits:   { title: 'No daily habits logged',     desc: 'Build consistency by adding reading, journaling, or mindfulness habits.', icon: 'target' },
  deepwork: { title: 'No deep work sprints active', desc: 'Lock in focus by starting a 2-hour sprint or adding technical tasks.', icon: 'brain' },
  errands:  { title: 'No errands in list',          desc: 'Keep your day organized by adding grocery items, prescriptions, or errands.', icon: 'shopping' },
};

function renderListView(container, state) {
  const tasks = state.getFilteredTasks();

  if (tasks.length === 0) {
    const meta = DOMAIN_EMPTY_MAP[state.activeDomain] || DOMAIN_EMPTY_MAP.fitness;
    container.innerHTML = `
      <div class="domain-empty-state">
        <div class="domain-empty-icon icon-slot">${icons[meta.icon]}</div>
        <h3 class="domain-empty-title">${meta.title}</h3>
        <p class="domain-empty-desc">${meta.desc}</p>
        <button class="btn-primary" id="empty-add-btn" style="margin-top:8px;">
          <span class="icon-slot">${icons.plus}</span> Add First Task
        </button>
      </div>`;

    const addBtn = container.querySelector('#empty-add-btn');
    if (addBtn) {
      addBtn.addEventListener('click', () => {
        const dialog = document.getElementById('task-dialog');
        if (dialog) dialog.showModal();
      });
    }
    return;
  }

  container.innerHTML = `
    <div class="list-view-container">
      ${GROUPS.map(g => {
        const groupTasks = tasks.filter(t => t.status === g.key);
        return `
          <section class="list-group" data-status="${g.key}">
            <header class="list-group-header">
              <span class="icon-slot" aria-hidden="true">${icons[g.icon]}</span>
              <span>${g.title}</span>
              <span class="group-count">${groupTasks.length}</span>
            </header>
            <ul class="task-list">
              ${groupTasks.length
                ? groupTasks.map(t => _taskRow(t)).join('')
                : '<li class="task-item-empty" style="padding:16px 8px;font-size:13px;color:var(--text-muted);font-style:italic;">No tasks in this stage</li>'
              }
            </ul>
          </section>`;
      }).join('')}
    </div>`;
}

function _taskRow(t) {
  const dateBadge = formatDateBadge(t.dueDate);
  const priorityClass = t.priority || 'p3';
  return `
    <li class="task-item${t.completed ? ' completed' : ''}" data-id="${t.id}">
      <div class="task-left">
        <input
          type="checkbox"
          class="task-checkbox"
          ${t.completed ? 'checked' : ''}
          aria-label="Toggle task completion"
        />
        <span class="priority-pill ${priorityClass}">${priorityClass.toUpperCase()}</span>
        <span class="task-text">${esc(t.title)}</span>
        ${t.tag ? `<span class="tag-pill">${esc(t.tag)}</span>` : ''}
      </div>
      <div class="task-right">
        <span class="task-date-pill">${dateBadge}</span>
        <button class="edit-task-btn" data-id="${t.id}" aria-label="Edit task" title="Edit task" style="background:none;border:none;cursor:pointer;color:var(--text-muted);display:flex;align-items:center;padding:2px 4px;border-radius:4px;">
          ${icons.edit}
        </button>
        <button class="delete-task-btn" aria-label="Delete task" title="Delete task">
          ${icons.trash || icons.close}
        </button>
      </div>
    </li>`;
}

function formatDateBadge(dateStr) {
  if (!dateStr) return '';
  const today = todayISO();
  const tomorrow = addDaysISO(today, 1);
  if (dateStr === today) return 'Today';
  if (dateStr === tomorrow) return 'Tomorrow';
  return dateStr;
}

function esc(s) {
  if (!s) return '';
  const d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}


  /* ── Bundle Module: js/views/boardView.js ── */


function renderBoardView(container, state) {
  const tasks = state.getFilteredTasks();
  const sections = state.getSections(state.activeDomain);

  container.innerHTML = `
    <div class="todoist-board-wrap">
      <div class="todoist-board-canvas" id="todoist-board-canvas">
        ${sections.map(sectionName => {
          const sectionTasks = tasks.filter(t => (t.section || '(No Section)') === sectionName);
          const pendingCount = sectionTasks.filter(t => !t.completed).length;

          return `
            <div class="todoist-board-column" data-section="${esc(sectionName)}">
              <!-- Section Header -->
              <header class="todoist-column-header">
                <div class="todoist-column-title-group">
                  <h3 class="todoist-column-title" data-section="${esc(sectionName)}" title="Double-click to rename section">${esc(sectionName)}</h3>
                  <span class="todoist-column-count">${pendingCount}</span>
                </div>
                <div class="todoist-column-actions">
                  <button type="button" class="todoist-column-menu-btn" data-section="${esc(sectionName)}" title="Section options" aria-label="Section options">
                    ${icons.moreHorizontal || '···'}
                  </button>
                  <div class="todoist-column-dropdown" data-dropdown-for="${esc(sectionName)}" style="display:none;">
                    <button type="button" class="dropdown-item rename-section-btn" data-section="${esc(sectionName)}">
                      ${icons.edit}
                      <span>Rename section</span>
                    </button>
                    <button type="button" class="dropdown-item clear-section-btn" data-section="${esc(sectionName)}">
                      ${icons.rotate}
                      <span>Clear all tasks</span>
                    </button>
                    <div class="dropdown-divider"></div>
                    <button type="button" class="dropdown-item delete-section-btn text-danger" data-section="${esc(sectionName)}">
                      ${icons.trash || icons.close}
                      <span>Delete section</span>
                    </button>
                  </div>
                </div>
              </header>

              <!-- Cards Stack / Dropzone -->
              <div class="todoist-card-stack" data-dropzone="${esc(sectionName)}">
                ${sectionTasks.length > 0
                  ? sectionTasks.map(t => _cardHTML(t)).join('')
                  : '<div class="todoist-empty-state">No tasks in this section</div>'
                }
              </div>

              <!-- Column Bottom "+ Add task" -->
              <div class="todoist-column-footer">
                <button type="button" class="todoist-add-task-trigger" data-section="${esc(sectionName)}">
                  <span class="todoist-plus-sym">+</span>
                  <span>Add task</span>
                </button>
                <div class="todoist-inline-composer-slot" data-section="${esc(sectionName)}" style="display:none;"></div>
              </div>
            </div>`;
        }).join('')}

        <!-- Add Section Column -->
        <div class="todoist-add-section-slot">
          <button type="button" class="todoist-add-section-btn" id="board-add-section-trigger">
            <span class="todoist-plus-sym">+</span>
            <span>Add section</span>
          </button>
          <div class="todoist-section-composer" id="section-composer-box" style="display:none;">
            <input type="text" class="todoist-section-input" id="new-section-input" placeholder="Name this section..." />
            <div class="todoist-section-actions">
              <button type="button" class="btn-primary-sm" id="new-section-submit">Add Section</button>
              <button type="button" class="btn-subtle-sm" id="new-section-cancel">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>`;

  _bindBoardEvents(container, state);
}

function _cardHTML(t) {
  const isChecked = !!t.completed;
  const hasSubtasks = Array.isArray(t.subtasks) && t.subtasks.length > 0;
  const doneSubtasks = hasSubtasks ? t.subtasks.filter(s => s.completed).length : 0;
  const totalSubtasks = hasSubtasks ? t.subtasks.length : 0;
  const isExpanded = t.isExpanded !== false; // default expanded

  const dateClass = t.dateColor || (t.dueDate === 'Tomorrow' ? 'orange' : t.dueDate === 'Friday' ? 'purple' : 'grey');

  return `
    <div
      class="todoist-card${isChecked ? ' is-completed' : ''}"
      draggable="true"
      data-id="${t.id}"
      data-section="${esc(t.section || '')}"
    >
      <div class="todoist-card-body">
        <button
          type="button"
          class="todoist-check-circle${isChecked ? ' checked' : ''}"
          data-id="${t.id}"
          title="${isChecked ? 'Mark incomplete' : 'Mark complete'}"
          aria-label="Toggle completion"
        >
          <svg class="check-mark" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </button>

        <div class="todoist-card-info">
          <div class="todoist-card-title-row">
            <span class="todoist-card-title" data-id="${t.id}" title="Double-click to rename">${esc(t.title)}</span>
            <div class="todoist-card-actions">
              <button type="button" class="edit-task-icon" data-id="${t.id}" title="Edit task" aria-label="Edit task">
                ${icons.edit}
              </button>
              <button type="button" class="delete-task-icon" data-id="${t.id}" title="Delete task" aria-label="Delete task">
                ${icons.trash || icons.close}
              </button>
            </div>
          </div>

          <!-- Meta Pill Chips -->
          <div class="todoist-card-meta-row">
            ${t.dueDate ? `
              <span class="todoist-meta-pill date-pill date-${dateClass}">
                <span class="meta-icon">${icons.calendar}</span>
                <span>${esc(t.dueDate)}</span>
              </span>
            ` : ''}

            ${hasSubtasks ? `
              <button type="button" class="todoist-meta-pill subtask-pill${isExpanded ? ' is-open' : ''}" data-toggle-sub="${t.id}" title="Toggle subtasks">
                <span class="meta-icon">${icons.subtask || '⑂'}</span>
                <span>${doneSubtasks}/${totalSubtasks}</span>
                <span class="chevron-indicator">${isExpanded ? '⌄' : '>'}</span>
              </button>
            ` : ''}

            ${t.comments ? `
              <span class="todoist-meta-pill comment-pill">
                <span class="meta-icon">${icons.messageSquare || '💬'}</span>
                <span>${t.comments}</span>
              </span>
            ` : ''}
          </div>
        </div>
      </div>

      <!-- Nested Subtasks Stack -->
      ${hasSubtasks && isExpanded ? `
        <div class="todoist-subtasks-tree">
          ${t.subtasks.map(s => {
            const subChecked = !!s.completed;
            return `
              <div class="todoist-subtask-row${subChecked ? ' is-completed' : ''}" data-parent-id="${t.id}" data-subtask-id="${s.id}">
                <button
                  type="button"
                  class="todoist-check-circle subtask-check${subChecked ? ' checked' : ''}"
                  data-parent-id="${t.id}"
                  data-subtask-id="${s.id}"
                  aria-label="Toggle subtask"
                >
                  <svg class="check-mark" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </button>
                <span class="todoist-subtask-title" data-parent-id="${t.id}" data-subtask-id="${s.id}" title="Double-click to rename">${esc(s.title)}</span>
                ${s.comments ? `
                  <span class="todoist-meta-pill comment-pill subtask-comment">
                    <span class="meta-icon">${icons.messageSquare || '💬'}</span>
                    <span>${s.comments}</span>
                  </span>
                ` : ''}
                <div class="subtask-row-actions">
                  <button type="button" class="edit-subtask-btn" data-parent-id="${t.id}" data-subtask-id="${s.id}" title="Rename subtask">
                    ${icons.edit}
                  </button>
                  <button type="button" class="delete-subtask-btn" data-parent-id="${t.id}" data-subtask-id="${s.id}" title="Delete subtask">
                    ${icons.close}
                  </button>
                </div>
              </div>`;
          }).join('')}

          <!-- Add subtask row -->
          <div class="todoist-add-subtask-wrap" data-parent-id="${t.id}">
            <button type="button" class="todoist-add-subtask-btn" data-parent-id="${t.id}">
              <span class="todoist-plus-sym">+</span> Add subtask
            </button>
            <div class="todoist-add-subtask-slot" style="display:none;"></div>
          </div>
        </div>
      ` : ''}
    </div>`;
}

function _bindBoardEvents(container, state) {
  // 1. Task Checkbox Toggle
  container.querySelectorAll('.todoist-check-circle:not(.subtask-check)').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = btn.dataset.id;
      if (id) state.toggleTaskCompletion(id);
    });
  });

  // 2. Subtask Checkbox Toggle
  container.querySelectorAll('.subtask-check').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const parentId = btn.dataset.parentId;
      const subtaskId = btn.dataset.subtaskId;
      if (parentId && subtaskId) {
        state.toggleSubtaskCompletion(parentId, subtaskId);
      }
    });
  });

  // 3. Subtask Collapse/Expand Toggle
  container.querySelectorAll('[data-toggle-sub]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = btn.dataset.toggleSub;
      if (id) state.toggleSubtasksExpanded(id);
    });
  });

  // 4. Delete Whole Task Button
  container.querySelectorAll('.delete-task-icon').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = btn.dataset.id;
      if (id) {
        state.deleteTask(id);
      }
    });
  });

  // 5. Edit Whole Task Button (Opens Edit Task Modal)
  container.querySelectorAll('.edit-task-icon').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = btn.dataset.id;
      if (id && typeof window.openEditTaskModal === 'function') {
        window.openEditTaskModal(id);
      }
    });
  });

  // 6. Task Title Double-Click to Quick Inline Rename
  container.querySelectorAll('.todoist-card-title').forEach(titleEl => {
    titleEl.addEventListener('dblclick', e => {
      e.stopPropagation();
      const id = titleEl.dataset.id;
      if (id) {
        makeInlineEditable(titleEl, newTitle => {
          state.updateTask(id, { title: newTitle });
        });
      }
    });
  });

  // 7. Subtask Quick Inline Rename (via double-click or button)
  container.querySelectorAll('.edit-subtask-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const parentId = btn.dataset.parentId;
      const subtaskId = btn.dataset.subtaskId;
      const row = btn.closest('.todoist-subtask-row');
      const titleEl = row?.querySelector('.todoist-subtask-title');
      if (titleEl && parentId && subtaskId) {
        makeInlineEditable(titleEl, newTitle => {
          state.updateSubtask(parentId, subtaskId, newTitle);
        });
      }
    });
  });

  container.querySelectorAll('.todoist-subtask-title').forEach(titleEl => {
    titleEl.addEventListener('dblclick', e => {
      e.stopPropagation();
      const parentId = titleEl.dataset.parentId;
      const subtaskId = titleEl.dataset.subtaskId;
      if (parentId && subtaskId) {
        makeInlineEditable(titleEl, newTitle => {
          state.updateSubtask(parentId, subtaskId, newTitle);
        });
      }
    });
  });

  // 8. Delete Individual Subtask Button
  container.querySelectorAll('.delete-subtask-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const parentId = btn.dataset.parentId;
      const subtaskId = btn.dataset.subtaskId;
      if (parentId && subtaskId) {
        state.deleteSubtask(parentId, subtaskId);
      }
    });
  });

  // 9. Add Subtask Trigger & Inline Composer
  container.querySelectorAll('.todoist-add-subtask-btn').forEach(trigger => {
    trigger.addEventListener('click', e => {
      e.stopPropagation();
      const parentId = trigger.dataset.parentId;
      const wrap = trigger.closest('.todoist-add-subtask-wrap');
      const slot = wrap?.querySelector('.todoist-add-subtask-slot');
      if (!slot) return;

      trigger.style.display = 'none';
      slot.style.display = 'block';
      slot.innerHTML = `
        <div style="display:flex;align-items:center;gap:6px;margin-top:4px;">
          <input type="text" class="subtask-composer-input" placeholder="Subtask title..." autofocus />
          <button type="button" class="btn-primary-sm submit-subtask-btn">Add</button>
          <button type="button" class="btn-subtle-sm cancel-subtask-btn">✕</button>
        </div>`;

      const input = slot.querySelector('.subtask-composer-input');
      const submit = slot.querySelector('.submit-subtask-btn');
      const cancel = slot.querySelector('.cancel-subtask-btn');
      input.focus();

      const closeSubComposer = () => {
        slot.style.display = 'none';
        slot.innerHTML = '';
        trigger.style.display = 'inline-flex';
      };

      const doAdd = () => {
        const val = input.value.trim();
        if (val && parentId) {
          state.addSubtask(parentId, val);
        }
        closeSubComposer();
      };

      submit.addEventListener('click', doAdd);
      cancel.addEventListener('click', closeSubComposer);
      input.addEventListener('keydown', ev => {
        if (ev.key === 'Enter') {
          ev.preventDefault();
          doAdd();
        } else if (ev.key === 'Escape') {
          closeSubComposer();
        }
      });
    });
  });

  // 10. Section 3-dots Menu Button & Dropdown Actions
  container.querySelectorAll('.todoist-column-menu-btn').forEach(menuBtn => {
    menuBtn.addEventListener('click', e => {
      e.stopPropagation();
      const col = menuBtn.closest('.todoist-board-column');
      const dropdown = col?.querySelector('.todoist-column-dropdown');
      if (!dropdown) return;

      // Close any other open dropdowns first
      container.querySelectorAll('.todoist-column-dropdown').forEach(d => {
        if (d !== dropdown) d.style.display = 'none';
      });

      const isOpen = dropdown.style.display === 'flex';
      dropdown.style.display = isOpen ? 'none' : 'flex';
    });
  });

  // Close dropdown on outside click
  const closeAllDropdowns = () => {
    container.querySelectorAll('.todoist-column-dropdown').forEach(d => {
      d.style.display = 'none';
    });
  };
  document.addEventListener('click', closeAllDropdowns);

  // Section Dropdown: Rename Section
  container.querySelectorAll('.rename-section-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      closeAllDropdowns();
      const section = btn.dataset.section;
      const col = btn.closest('.todoist-board-column');
      const titleEl = col?.querySelector('.todoist-column-title');
      if (titleEl && section) {
        makeInlineEditable(titleEl, newName => {
          state.renameSection(state.activeDomain, section, newName);
        });
      }
    });
  });

  // Section Header Double-Click to Rename Section
  container.querySelectorAll('.todoist-column-title').forEach(titleEl => {
    titleEl.addEventListener('dblclick', e => {
      e.stopPropagation();
      const section = titleEl.dataset.section;
      if (titleEl && section) {
        makeInlineEditable(titleEl, newName => {
          state.renameSection(state.activeDomain, section, newName);
        });
      }
    });
  });

  // Section Dropdown: Clear All Tasks in Section
  container.querySelectorAll('.clear-section-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      closeAllDropdowns();
      const section = btn.dataset.section;
      if (!section) return;
      const count = state.tasks.filter(t => t.domain === state.activeDomain && (t.section || '(No Section)') === section).length;
      if (confirm(`Clear all ${count} tasks in section "${section}"?`)) {
        state.clearSectionTasks(state.activeDomain, section);
      }
    });
  });

  // Section Dropdown: Delete Whole Section
  container.querySelectorAll('.delete-section-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      closeAllDropdowns();
      const section = btn.dataset.section;
      if (!section) return;
      if (confirm(`Delete section "${section}" and all tasks inside it?`)) {
        state.deleteSection(state.activeDomain, section, true);
      }
    });
  });

  // 11. "+ Add Task" Trigger & Inline Composer
  container.querySelectorAll('.todoist-add-task-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const col = trigger.closest('.todoist-board-column');
      const section = trigger.dataset.section;
      const slot = col.querySelector('.todoist-inline-composer-slot');

      trigger.style.display = 'none';
      slot.style.display = 'block';
      slot.innerHTML = `
        <div class="todoist-inline-composer">
          <input type="text" class="composer-title-input" placeholder="Task name" autofocus />
          <div class="composer-meta-controls">
            <input type="text" class="composer-date-input" placeholder="Due date (e.g. Tomorrow, Friday)" />
          </div>
          <div class="composer-actions">
            <button type="button" class="composer-cancel-btn">Cancel</button>
            <button type="button" class="composer-submit-btn">Add task</button>
          </div>
        </div>`;

      const titleInput = slot.querySelector('.composer-title-input');
      const dateInput = slot.querySelector('.composer-date-input');
      const submitBtn = slot.querySelector('.composer-submit-btn');
      const cancelBtn = slot.querySelector('.composer-cancel-btn');

      titleInput.focus();

      const closeComposer = () => {
        slot.style.display = 'none';
        slot.innerHTML = '';
        trigger.style.display = 'flex';
      };

      const submitTask = () => {
        const title = titleInput.value.trim();
        if (!title) return;
        const dueDate = dateInput.value.trim() || null;
        let dateColor = 'grey';
        if (dueDate) {
          const lower = dueDate.toLowerCase();
          if (lower.includes('tomorrow')) dateColor = 'orange';
          else if (lower.includes('friday') || lower.includes('monday')) dateColor = 'purple';
        }

        state.addTask({
          title,
          section,
          dueDate,
          dateColor,
          status: 'backlog',
          completed: false,
        });
        closeComposer();
      };

      submitBtn.addEventListener('click', submitTask);
      cancelBtn.addEventListener('click', closeComposer);

      titleInput.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          e.preventDefault();
          submitTask();
        } else if (e.key === 'Escape') {
          closeComposer();
        }
      });
    });
  });

  // 12. "+ Add Section" Column Trigger
  const addSecTrigger = container.querySelector('#board-add-section-trigger');
  const secComposerBox = container.querySelector('#section-composer-box');
  const newSecInput = container.querySelector('#new-section-input');
  const newSecSubmit = container.querySelector('#new-section-submit');
  const newSecCancel = container.querySelector('#new-section-cancel');

  if (addSecTrigger && secComposerBox) {
    addSecTrigger.addEventListener('click', () => {
      addSecTrigger.style.display = 'none';
      secComposerBox.style.display = 'block';
      newSecInput.focus();
    });

    const closeSecComposer = () => {
      secComposerBox.style.display = 'none';
      newSecInput.value = '';
      addSecTrigger.style.display = 'flex';
    };

    const submitSection = () => {
      const name = newSecInput.value.trim();
      if (name) {
        state.addSection(state.activeDomain, name);
      }
      closeSecComposer();
    };

    if (newSecSubmit) newSecSubmit.addEventListener('click', submitSection);
    if (newSecCancel) newSecCancel.addEventListener('click', closeSecComposer);
    if (newSecInput) {
      newSecInput.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          e.preventDefault();
          submitSection();
        } else if (e.key === 'Escape') {
          closeSecComposer();
        }
      });
    }
  }

  // 13. Drag & Drop Implementation
  _bindDragAndDrop(container, state);
}

function _bindDragAndDrop(container, state) {
  let draggedId = null;

  container.querySelectorAll('.todoist-card').forEach(card => {
    card.addEventListener('mousedown', e => {
      if (
        e.target.closest('.todoist-check-circle') ||
        e.target.closest('.delete-task-icon') ||
        e.target.closest('.edit-task-icon') ||
        e.target.closest('[data-toggle-sub]') ||
        e.target.closest('.todoist-subtask-row') ||
        e.target.closest('.inline-rename-input')
      ) {
        card.setAttribute('draggable', 'false');
      } else {
        card.setAttribute('draggable', 'true');
      }
    });

    card.addEventListener('dragstart', e => {
      draggedId = card.dataset.id;
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', draggedId);
      setTimeout(() => card.classList.add('is-dragging'), 0);
    });

    card.addEventListener('dragend', () => {
      card.classList.remove('is-dragging');
      card.setAttribute('draggable', 'true');
      container.querySelectorAll('.todoist-card-stack').forEach(zone => zone.classList.remove('drag-over'));
    });
  });

  container.querySelectorAll('.todoist-card-stack').forEach(zone => {
    zone.addEventListener('dragover', e => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      zone.classList.add('drag-over');
    });

    zone.addEventListener('dragleave', e => {
      if (!zone.contains(e.relatedTarget)) {
        zone.classList.remove('drag-over');
      }
    });

    zone.addEventListener('drop', e => {
      e.preventDefault();
      zone.classList.remove('drag-over');
      const id = e.dataTransfer.getData('text/plain') || draggedId;
      const targetSection = zone.dataset.dropzone;

      if (id && targetSection) {
        state.updateTaskSection(id, targetSection);
      }
    });
  });
}

function makeInlineEditable(element, onSave) {
  const currentText = element.textContent.trim();
  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'inline-rename-input';
  input.value = currentText;

  let finished = false;
  const finish = (save) => {
    if (finished) return;
    finished = true;
    if (save) {
      const val = input.value.trim();
      if (val && val !== currentText) {
        input.remove();
        element.style.display = '';
        onSave(val);
        return;
      }
    }
    element.textContent = currentText;
    element.style.display = '';
    input.remove();
  };

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      finish(true);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      finish(false);
    }
  });

  input.addEventListener('blur', () => finish(true));

  element.style.display = 'none';
  element.parentNode.insertBefore(input, element);
  input.focus();
  input.select();
}

function esc(s) {
  if (!s) return '';
  const d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}


  /* ── Bundle Module: js/views/calendarView.js ── */


let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function renderCalendarView(container, state) {
  const today = todayISO();
  const tasks = state.getFilteredTasks();

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const startWeekday = getFirstWeekdayOfMonth(currentYear, currentMonth);

  const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
  const daysInPrev = getDaysInMonth(prevYear, prevMonth);

  const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
  const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;

  let cellHTML = '';

  // 1. Previous month trailing days
  for (let i = startWeekday - 1; i >= 0; i--) {
    const day = daysInPrev - i;
    const iso = formatISODate(prevYear, prevMonth, day);
    cellHTML += _cell(day, iso, true, false, tasks);
  }

  // 2. Current month days
  for (let day = 1; day <= daysInMonth; day++) {
    const iso = formatISODate(currentYear, currentMonth, day);
    cellHTML += _cell(day, iso, false, iso === today, tasks);
  }

  // 3. Next month leading days (fill remaining grid row)
  const totalCellsSoFar = startWeekday + daysInMonth;
  const trailingCount = (7 - (totalCellsSoFar % 7)) % 7;
  for (let day = 1; day <= trailingCount; day++) {
    const iso = formatISODate(nextYear, nextMonth, day);
    cellHTML += _cell(day, iso, true, false, tasks);
  }

  container.innerHTML = `
    <div class="calendar-header-bar">
      <h2 class="calendar-month-label">${MONTH_NAMES[currentMonth]} ${currentYear}</h2>
      <div class="calendar-nav">
        <button class="cal-nav-btn" id="cal-prev" aria-label="Previous month" title="Previous month">
          <span class="icon-slot">${icons.chevronLeft}</span>
        </button>
        <button class="cal-nav-btn" id="cal-today" title="Jump to Today">Today</button>
        <button class="cal-nav-btn" id="cal-next" aria-label="Next month" title="Next month">
          <span class="icon-slot">${icons.chevronRight}</span>
        </button>
      </div>
    </div>
    <div class="calendar-grid">
      ${WEEKDAYS.map(d => `<div class="calendar-day-header">${d}</div>`).join('')}
      ${cellHTML}
    </div>`;

  // Bind navigation listeners
  const prevBtn = container.querySelector('#cal-prev');
  const nextBtn = container.querySelector('#cal-next');
  const todayBtn = container.querySelector('#cal-today');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentMonth--;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
      }
      renderCalendarView(container, state);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentMonth++;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
      renderCalendarView(container, state);
    });
  }

  if (todayBtn) {
    todayBtn.addEventListener('click', () => {
      const now = new Date();
      currentYear = now.getFullYear();
      currentMonth = now.getMonth();
      renderCalendarView(container, state);
    });
  }

  // Bind cell click for quick task creation on date
  container.querySelectorAll('.calendar-cell').forEach(cell => {
    cell.addEventListener('click', e => {
      if (e.target.closest('.cal-task-pill')) return;
      const targetDate = cell.dataset.date;
      if (targetDate) {
        const dialog = document.getElementById('task-dialog');
        const dateInput = document.getElementById('task-date-input');
        if (dialog && dateInput) {
          dateInput.value = targetDate;
          dialog.showModal();
        }
      }
    });
  });
}

function _cell(dayNum, iso, isOtherMonth, isToday, tasks) {
  const dayTasks = tasks.filter(t => t.dueDate === iso);
  return `
    <div
      class="calendar-cell${isOtherMonth ? ' other-month' : ''}"
      data-date="${iso}"
      title="Click to add task on ${iso}"
    >
      <div class="calendar-cell-top">
        <span class="cell-day-number${isToday ? ' is-today' : ''}">${dayNum}</span>
      </div>
      <div class="calendar-task-stack">
        ${dayTasks.map(t => `
          <div
            class="cal-task-pill${t.completed ? ' completed' : ''}"
            data-id="${t.id}"
            title="${esc(t.title)}"
          >
            <input
              type="checkbox"
              class="task-checkbox"
              ${t.completed ? 'checked' : ''}
              aria-label="Toggle completion"
            />
            <span class="task-text">${esc(t.title)}</span>
          </div>
        `).join('')}
      </div>
    </div>`;
}

function esc(s) {
  if (!s) return '';
  const d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}


  /* ── Bundle Module: js/app.js ── */


/* ── Preset Template Definitions per Domain ──────────────────────────────── */
const TEMPLATES = {
  fitness: {
    label: 'Fitness & Health',
    domain: 'fitness',
    tasks: [
      { title: 'Morning 20-min workout & stretch', status: 'backlog',     tag: 'fitness', priority: 'p1' },
      { title: 'Drink 8 glasses of water',         status: 'backlog',     tag: 'health',  priority: 'p3' },
      { title: 'Evening core & flexibility',      status: 'backlog',     tag: 'fitness', priority: 'p2' },
      { title: 'Track daily nutrition & macros',   status: 'in-progress', tag: 'health',  priority: 'p2' },
    ],
  },
  habits: {
    label: 'Habit Formation',
    domain: 'habits',
    tasks: [
      { title: 'Read 25 pages non-fiction',       status: 'backlog',     tag: 'reading',  priority: 'p3' },
      { title: 'Daily reflection journal',       status: 'in-progress', tag: 'mindset',  priority: 'p2' },
      { title: '10-min mindfulness session',     status: 'backlog',     tag: 'health',   priority: 'p3' },
    ],
  },
  deepwork: {
    label: 'Deep Work Sprint',
    domain: 'deepwork',
    tasks: [
      { title: '2-hour uninterrupted focus sprint', status: 'in-progress', tag: 'deepwork', priority: 'p1' },
      { title: 'Audit architecture code & tests',   status: 'backlog',     tag: 'code',     priority: 'p2' },
      { title: 'Review Q4 product roadmap OKRs',    status: 'backlog',     tag: 'planning', priority: 'p2' },
    ],
  },
  errands: {
    label: 'Grocery & Errands',
    domain: 'errands',
    tasks: [
      { title: 'Pantry essentials restock',       status: 'backlog',     tag: 'grocery', priority: 'p2' },
      { title: 'Pick up prescription at pharmacy',status: 'backlog',     tag: 'health',  priority: 'p1' },
      { title: 'Weekly meal prep items & greens', status: 'backlog',     tag: 'grocery', priority: 'p3' },
    ],
  },
};

/* ── DOM Domain Meta Configuration Map ───────────────────────────────────── */
const DOMAIN_META = {
  inbox: {
    name: 'Inbox',
    desc: 'Capture, organize, and execute your tasks across flexible date horizons.',
    icon: 'inbox',
    metricIcon: 'checkCircle',
    actionLabel: '+ Add Section',
  },
  fitness: {
    name: 'Fitness & Health',
    desc: 'Track active movement, hydration, and stretching goals.',
    icon: 'fitness',
    metricIcon: 'flame',
    actionLabel: 'Quick Hydrate & Stretch',
  },
  habits: {
    name: 'Habit Formation',
    desc: 'Build daily consistency for reading, journaling, and mindfulness.',
    icon: 'target',
    metricIcon: 'activity',
    actionLabel: 'Log Daily Routine',
  },
  deepwork: {
    name: 'Deep Work Sprint',
    desc: 'High-leverage focus sessions, technical execution, and OKRs.',
    icon: 'brain',
    metricIcon: 'clock',
    actionLabel: 'Add Urgent Blocker (!p1)',
  },
  errands: {
    name: 'Grocery & Errands',
    desc: 'Manage pantry restocks, pharmacy runs, and household errands.',
    icon: 'shopping',
    metricIcon: 'checkCircle',
    actionLabel: 'Clear Done Items',
  },
};

/* ── Selector Helpers ────────────────────────────────────────────────────── */
const $  = id  => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

/**
 * Mounts vector SVG icons into element containers with data-icon attributes.
 */
function mountIcons(root = document) {
  root.querySelectorAll('[data-icon]').forEach(el => {
    const iconKey = el.dataset.icon;
    if (icons[iconKey]) {
      el.innerHTML = icons[iconKey];
    }
  });
}

/* ── Zero-Dependency IntersectionObserver Scroll Reveal ─────────────────── */
function initScrollReveals() {
  const elements = $$('.reveal-on-scroll');
  if (!elements.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    elements.forEach(el => observer.observe(el));
  } else {
    elements.forEach(el => el.classList.add('is-revealed'));
  }
}

/* ── Scroll-Triggered Rolling Numerical Stat Counters ────────────────────── */
function initRollingCounters() {
  const counterElements = $$('.feature-stat-num[data-target]');
  if (!counterElements.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.target, 10);
          const suffix = el.dataset.suffix || '';
          animateCounter(el, target, suffix);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.2 });

    counterElements.forEach(el => observer.observe(el));
  }
}

function animateCounter(el, targetNum, suffix = '') {
  let start = 0;
  const duration = 1200;
  const startTime = performance.now();

  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(easeOut * targetNum);

    el.textContent = `${current}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = `${targetNum}${suffix}`;
    }
  }

  requestAnimationFrame(update);
}

/* ── Native View Transitions SPA Router ──────────────────────────────────── */
function switchSurface(surface) {
  const isApp = (surface === 'app' || surface === 'app-surface');
  const surfaceId = isApp ? 'app-surface' : 'landing-surface';

  if (isApp) {
    state.currentView = storage.getView(auth.userId) || 'board';
    if (typeof state.syncUser === 'function') {
      state.syncUser();
    } else {
      state.reloadForUser();
    }
    storage.saveLastSurface('app');
    if (window.location.hash !== '#app' && window.location.hash !== '#board') {
      history.replaceState(null, '', '#app');
    }
  } else {
    storage.saveLastSurface('landing');
    if (window.location.hash === '#app' || window.location.hash === '#board') {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }

  showSurface(surfaceId);
  syncLandingHeaderAuth();
}
window.__komorebi_switchSurface = switchSurface;

function showSurface(surfaceId) {
  const landing = $('landing-surface');
  const app = $('app-surface');

  const updateDom = () => {
    if (surfaceId === 'app-surface') {
      if (landing) landing.classList.add('surface-hidden');
      if (app) app.classList.remove('surface-hidden');
      renderWorkspace();
    } else {
      if (app) app.classList.add('surface-hidden');
      if (landing) landing.classList.remove('surface-hidden');
      startAura();
    }
    if (typeof window.scrollTo === 'function') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if ('startViewTransition' in document) {
    document.startViewTransition(updateDom);
  } else {
    updateDom();
  }
}

/* ── User Session & Profile UI Synchronization ────────────────────────────── */
function syncLandingHeaderAuth() {
  const user = typeof auth.getCurrentUser === 'function' ? auth.getCurrentUser() : auth.currentUser;
  const guestState = $('landing-nav-guest');
  const userCapsule = $('landing-nav-user');
  const avatarEl = $('landing-user-avatar');
  const nameEl = $('landing-user-name');

  if (user && guestState && userCapsule) {
    guestState.style.display = 'none';
    userCapsule.style.display = 'flex';

    let initials = user.initials;
    if (!initials) {
      if (user.name) {
        const parts = user.name.trim().split(/\s+/);
        initials = parts.length >= 2
          ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
          : user.name.slice(0, 2).toUpperCase();
      } else {
        initials = 'U';
      }
    }

    if (avatarEl) avatarEl.textContent = initials;
    if (nameEl) nameEl.textContent = user.name || 'User';
  } else if (guestState && userCapsule) {
    userCapsule.style.display = 'none';
    guestState.style.display = 'flex';
    if (avatarEl) avatarEl.textContent = '';
    if (nameEl) nameEl.textContent = '';
  }
}

function updateProfileUI() {
  const user = typeof auth.getCurrentUser === 'function' ? auth.getCurrentUser() : auth.currentUser;
  const avatarEl = $('user-avatar-initial');
  const nameEl   = $('user-display-name');

  if (user) {
    let initials = user.initials;
    if (!initials) {
      if (user.name) {
        const parts = user.name.trim().split(/\s+/);
        initials = parts.length >= 2
          ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
          : user.name.slice(0, 2).toUpperCase();
      } else {
        initials = 'U';
      }
    }
    if (avatarEl) avatarEl.textContent = initials;
    if (nameEl)   nameEl.textContent   = user.name || 'User';
  } else {
    if (avatarEl) avatarEl.textContent = 'G';
    if (nameEl)   nameEl.textContent   = 'Guest';
  }
}

/* ── Animated Streak & Completion Ring ───────────────────────────────────── */
function updateCompletionRing() {
  const fill  = $('ring-fill');
  const label = $('streak-label');
  if (!fill || !label) return;

  const { pct, done, total } = state.getTodayStats();
  const circumference = 56.548; // 2 * π * 9
  const offset = circumference - (circumference * pct / 100);

  fill.style.strokeDashoffset = offset;
  label.textContent = total ? `${pct}% Today` : '0% Today';
}

/* ── Domain Banner & Ribbon Update ───────────────────────────────────────── */
function updateDomainBannerUI() {
  const meta = DOMAIN_META[state.activeDomain] || DOMAIN_META.fitness;
  const counts = state.getDomainTaskCounts();
  const { done, total } = state.getTodayStats();

  const inBadge  = $('badge-inbox');
  const fitBadge = $('badge-fitness');
  const habBadge = $('badge-habits');
  const dwBadge  = $('badge-deepwork');
  const errBadge = $('badge-errands');
  if (inBadge)  inBadge.textContent  = counts.inbox;
  if (fitBadge) fitBadge.textContent = counts.fitness;
  if (habBadge) habBadge.textContent = counts.habits;
  if (dwBadge)  dwBadge.textContent  = counts.deepwork;
  if (errBadge) errBadge.textContent = counts.errands;

  const titleName = $('domain-name');
  const titleIcon = $('domain-icon');
  const descEl    = $('domain-desc');
  if (titleName) titleName.textContent = meta.name;
  if (descEl)    descEl.textContent    = meta.desc;
  if (titleIcon) {
    titleIcon.dataset.icon = meta.icon;
    titleIcon.innerHTML = icons[meta.icon] || '';
  }

  const metricText = $('domain-metric-text');
  if (metricText) {
    if (state.activeDomain === 'inbox') {
      const pending = state.getFilteredTasks().filter(t => !t.completed).length;
      metricText.textContent = `Inbox Horizon: ${pending} tasks pending`;
    } else if (state.activeDomain === 'fitness') {
      metricText.textContent = `Active Movement: ${done}/${total} done`;
    } else if (state.activeDomain === 'habits') {
      metricText.textContent = `Habit Consistency: ${done}/${total} today`;
    } else if (state.activeDomain === 'deepwork') {
      metricText.textContent = `Deep Work Focus: ${done}/${total} completed`;
    } else if (state.activeDomain === 'errands') {
      metricText.textContent = `Checklist Clearance: ${done}/${total} cleared`;
    }
  }

  const actionLabel = $('domain-action-label');
  if (actionLabel) actionLabel.textContent = meta.actionLabel;
}

/* ── Workspace Render Orchestration ─────────────────────────────────────── */
function renderWorkspace() {
  updateProfileUI();

  $$('.ws-domain-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.domain === state.activeDomain);
  });

  $$('.view-toggle-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === state.currentView);
  });

  updateDomainBannerUI();
  updateCompletionRing();

  const appView = $('app-view');
  if (!appView) return;

  switch (state.currentView) {
    case 'list':     renderListView(appView, state);     break;
    case 'board':    renderBoardView(appView, state);    break;
    case 'calendar': renderCalendarView(appView, state); break;
    default:         renderListView(appView, state);     break;
  }
}

/* ── Web Audio API Zero-Asset Chime Synthesis ────────────────────────────── */
function playPomodoroChime() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    const playNote = (freq, startTime, duration) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.3, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + duration);
    };

    const now = ctx.currentTime;
    playNote(523.25, now, 0.4);       // C5
    playNote(659.25, now + 0.15, 0.6); // E5
  } catch (err) {
    console.warn('Web Audio chime playback unavailable:', err);
  }
}

/* ── Web Notifications Permission & Alert Hook ────────────────────────────── */
function triggerNotification(title, body) {
  if (!('Notification' in window)) return;

  if (Notification.permission === 'granted') {
    new Notification(title, { body });
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        new Notification(title, { body });
      }
    });
  }
}

/* ── Pomodoro Focus Dock Timer ───────────────────────────────────────────── */
let pomoInterval = null;
let pomoSeconds = 25 * 60;

function initPomodoroDock() {
  const display  = $('pomo-display');
  const playBtn  = $('pomo-play-btn');
  const pauseBtn = $('pomo-pause-btn');
  const resetBtn = $('pomo-reset-btn');
  if (!display || !playBtn || !pauseBtn || !resetBtn) return;

  function updateDisplay() {
    const m = String(Math.floor(pomoSeconds / 60)).padStart(2, '0');
    const s = String(pomoSeconds % 60).padStart(2, '0');
    display.textContent = `${m}:${s}`;
  }

  playBtn.addEventListener('click', () => {
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }

    playBtn.style.display  = 'none';
    pauseBtn.style.display = 'inline-flex';

    if (!pomoInterval) {
      pomoInterval = setInterval(() => {
        if (pomoSeconds > 0) {
          pomoSeconds--;
          updateDisplay();
        } else {
          clearInterval(pomoInterval);
          pomoInterval = null;
          playBtn.style.display  = 'inline-flex';
          pauseBtn.style.display = 'none';

          playPomodoroChime();
          triggerNotification('Pomodoro Complete!', '25-minute focus session finished. Take a short break.');
        }
      }, 1000);
    }
  });

  pauseBtn.addEventListener('click', () => {
    clearInterval(pomoInterval);
    pomoInterval = null;
    playBtn.style.display  = 'inline-flex';
    pauseBtn.style.display = 'none';
  });

  resetBtn.addEventListener('click', () => {
    clearInterval(pomoInterval);
    pomoInterval = null;
    pomoSeconds = 25 * 60;
    updateDisplay();
    playBtn.style.display  = 'inline-flex';
    pauseBtn.style.display = 'none';
  });

  updateDisplay();
}

/* ── Natural Language Task Quick-Add Input Bar ────────────────────────────── */
function initNLPBar() {
  const input   = $('nlp-input');
  const preview = $('nlp-preview');
  const form    = $('nlp-form');
  if (!input || !preview || !form) return;

  input.addEventListener('input', () => {
    const parsed = parseNLP(input.value);
    const chips  = parsed ? nlpPreviewChips(parsed) : null;

    if (chips) {
      preview.classList.add('visible');
      preview.innerHTML = `
        <span class="nlp-preview-chip"><span>Task</span> ${esc(chips.titleChip)}</span>
        <span class="nlp-preview-chip"><span>Due</span> ${chips.dateChip}</span>
        <span class="nlp-preview-chip"><span>Priority</span> ${chips.priorityChip.toUpperCase()}</span>
        ${chips.tagChip ? `<span class="nlp-preview-chip"><span>Tag</span> ${chips.tagChip}</span>` : ''}`;
    } else {
      preview.classList.remove('visible');
      preview.innerHTML = '';
    }
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    const parsed = parseNLP(input.value);
    if (!parsed) return;

    const tagDomainMap = {
      fitness: 'fitness', health: 'fitness', workout: 'fitness', stretch: 'fitness', water: 'fitness',
      habits: 'habits', reading: 'habits', mindset: 'habits', journal: 'habits',
      deepwork: 'deepwork', code: 'deepwork', planning: 'deepwork', sprint: 'deepwork', focus: 'deepwork',
      grocery: 'errands', errands: 'errands', shopping: 'errands', pantry: 'errands'
    };

    if (parsed.tag && tagDomainMap[parsed.tag]) {
      state.setDomain(tagDomainMap[parsed.tag]);
    }

    state.addTask({
      title: parsed.title,
      dueDate: parsed.dueDate,
      tag: parsed.tag,
      priority: parsed.priority || 'p3',
    });

    input.value = '';
    preview.classList.remove('visible');
    preview.innerHTML = '';
  });
}

/* ── Task Creation & Editing Modal (<dialog id="task-dialog">) ───────────── */
function initTaskDialog() {
  const dialog      = $('task-dialog');
  const form        = $('task-form');
  if (!dialog || !form) return;

  const openBtn     = $('open-task-dialog-btn');
  const closeBtn    = $('close-dialog-btn');
  const dialogTitle = $('dialog-title');
  const editIdInput = $('task-edit-id');
  const titleEl     = $('task-title-input');
  const sectionEl   = $('task-section-select');
  const priorityEl  = $('task-priority-select');
  const statusEl    = $('task-status-select');
  const dateEl      = $('task-date-input');
  const submitBtn   = $('save-task-submit-btn') || form.querySelector('button[type="submit"]');

  function populateSections(selectedSection = null) {
    if (!sectionEl) return;
    const sections = state.getSections(state.activeDomain);
    sectionEl.innerHTML = sections.map(s => {
      const isSel = s === selectedSection;
      return `<option value="${esc(s)}"${isSel ? ' selected' : ''}>${esc(s)}</option>`;
    }).join('');
  }

  window.openCreateTaskModal = (defaultSection = null) => {
    form.reset();
    if (editIdInput) editIdInput.value = '';
    if (dialogTitle) dialogTitle.textContent = 'Create New Task';
    if (submitBtn) submitBtn.textContent = 'Save Task';
    populateSections(defaultSection);
    if (dateEl) dateEl.value = 'Today';
    dialog.showModal();
    if (titleEl) titleEl.focus();
  };

  window.openEditTaskModal = (taskId) => {
    const task = state.tasks.find(t => t.id === taskId);
    if (!task) return;
    if (editIdInput) editIdInput.value = task.id;
    if (dialogTitle) dialogTitle.textContent = 'Edit Task';
    if (submitBtn) submitBtn.textContent = 'Save Changes';
    if (titleEl) titleEl.value = task.title;
    populateSections(task.section);
    if (priorityEl) priorityEl.value = task.priority || 'p3';
    if (statusEl) statusEl.value = task.status || (task.completed ? 'ready-qa' : 'backlog');
    if (dateEl) dateEl.value = task.dueDate || '';
    dialog.showModal();
    if (titleEl) titleEl.focus();
  };

  if (openBtn) openBtn.addEventListener('click', () => window.openCreateTaskModal());
  if (closeBtn) closeBtn.addEventListener('click', () => dialog.close());

  dialog.addEventListener('click', e => {
    const r = dialog.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) {
      dialog.close();
    }
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!titleEl) return;
    const title = titleEl.value.trim();
    if (!title) return;

    const editId = editIdInput ? editIdInput.value : '';
    const section = sectionEl ? sectionEl.value : null;
    const priority = priorityEl ? priorityEl.value : 'p3';
    const status = statusEl ? statusEl.value : 'backlog';
    const dueDate = dateEl ? dateEl.value.trim() : null;

    let dateColor = null;
    if (dueDate) {
      const lower = dueDate.toLowerCase();
      if (lower.includes('tomorrow')) dateColor = 'orange';
      else if (lower.includes('friday') || lower.includes('monday')) dateColor = 'purple';
      else dateColor = 'grey';
    }

    if (editId) {
      // Edit existing task
      state.updateTask(editId, {
        title,
        section,
        priority,
        dueDate,
        dateColor
      });
      state.updateTaskStatus(editId, status);
    } else {
      // Create new task
      state.addTask({
        title,
        section,
        priority,
        status,
        dueDate,
        dateColor
      });
    }

    form.reset();
    dialog.close();
  });
}

/* ── Authentication Modal Controller (<dialog id="auth-modal">) ──────────── */
function initAuthModal() {
  const modal         = $('auth-modal');
  const signinForm    = $('signin-form');
  const regForm       = $('register-form');
  const forgotForm    = $('forgot-form');
  const tabSignin     = $('tab-signin-btn');
  const tabRegister   = $('tab-register-btn');
  const authForgotBtn = $('auth-forgot-btn');
  const forgotBackBtn = $('forgot-back-btn');
  const authTitle     = $('auth-modal-title');
  const authSub       = $('auth-modal-sub');
  const errorEl       = $('auth-error');
  const demoBtn       = $('auth-demo-btn');
  if (!modal) return;

  // Initialize eye toggle buttons on all password inputs
  $$('.toggle-password-btn').forEach(btn => {
    btn.innerHTML = icons.eye || '';
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.dataset.passTarget || btn.dataset.target;
      const input = $(targetId);
      if (!input) return;
      const isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';
      btn.innerHTML = isPassword ? (icons.eyeOff || '') : (icons.eye || '');
      btn.title = isPassword ? 'Hide password' : 'Show password';
      btn.setAttribute('aria-label', btn.title);
    });
  });

  function showTab(type) {
    errorEl.classList.remove('visible');
    errorEl.textContent = '';

    if (type === 'signin') {
      tabSignin?.classList.add('active');
      tabRegister?.classList.remove('active');
      if (signinForm) signinForm.style.display = 'flex';
      if (regForm)    regForm.style.display    = 'none';
      if (forgotForm) forgotForm.style.display = 'none';
      if (authTitle)  authTitle.textContent    = 'Welcome back';
      if (authSub)    authSub.textContent      = 'Sign in to access your isolated workspace store.';
    } else if (type === 'register') {
      tabRegister?.classList.add('active');
      tabSignin?.classList.remove('active');
      if (regForm)    regForm.style.display    = 'flex';
      if (signinForm) signinForm.style.display = 'none';
      if (forgotForm) forgotForm.style.display = 'none';
      if (authTitle)  authTitle.textContent    = 'Create an Account';
      if (authSub)    authSub.textContent      = 'Setup your personal isolated workspace.';
    } else if (type === 'forgot') {
      tabSignin?.classList.remove('active');
      tabRegister?.classList.remove('active');
      if (signinForm) signinForm.style.display = 'none';
      if (regForm)    regForm.style.display    = 'none';
      if (forgotForm) forgotForm.style.display = 'flex';
      if (authTitle)  authTitle.textContent    = 'Reset Password';
      if (authSub)    authSub.textContent      = 'Enter your registered email and choose a new password.';
    }
  }

  if (tabSignin)   tabSignin.addEventListener('click',   () => showTab('signin'));
  if (tabRegister) tabRegister.addEventListener('click', () => showTab('register'));
  if (authForgotBtn) {
    authForgotBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const currentEmail = $('signin-email')?.value?.trim() || '';
      showTab('forgot');
      if (currentEmail && $('forgot-email')) {
        $('forgot-email').value = currentEmail;
      }
    });
  }
  if (forgotBackBtn) {
    forgotBackBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showTab('signin');
    });
  }

  $$('#nav-signin-btn, #hero-register-btn, #footer-signin-btn, #footer-register-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const isReg = btn.id.includes('register');
      showTab(isReg ? 'register' : 'signin');
      modal.showModal();
    });
  });

  modal.addEventListener('click', e => {
    const r = modal.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) {
      modal.close();
    }
  });

  if (signinForm) {
    signinForm.addEventListener('submit', e => {
      e.preventDefault();
      const email = $('signin-email').value;
      const pass  = $('signin-password').value;

      try {
        auth.login({ email, password: pass });
        modal.close();
        if (typeof state.syncUser === 'function') state.syncUser();
        else state.reloadForUser();
        switchSurface('app');
      } catch (err) {
        errorEl.textContent = err.message;
        errorEl.classList.add('visible');
      }
    });
  }

  if (regForm) {
    regForm.addEventListener('submit', e => {
      e.preventDefault();
      const name  = $('register-name').value;
      const email = $('register-email').value;
      const pass  = $('register-password').value;

      try {
        auth.register({ name, email, password: pass });
        modal.close();
        if (typeof state.syncUser === 'function') state.syncUser();
        else state.reloadForUser();
        switchSurface('app');
      } catch (err) {
        errorEl.textContent = err.message;
        errorEl.classList.add('visible');
      }
    });
  }

  if (forgotForm) {
    forgotForm.addEventListener('submit', e => {
      e.preventDefault();
      const email    = $('forgot-email').value;
      const newPass  = $('forgot-new-password').value;
      const confPass = $('forgot-confirm-password').value;

      if (newPass !== confPass) {
        errorEl.textContent = 'Passwords do not match. Please re-enter.';
        errorEl.classList.add('visible');
        return;
      }

      try {
        auth.resetPassword({ email, newPassword: newPass });
        modal.close();
        if (typeof state.syncUser === 'function') state.syncUser();
        else state.reloadForUser();
        switchSurface('app');
      } catch (err) {
        errorEl.textContent = err.message;
        errorEl.classList.add('visible');
      }
    });
  }

  if (demoBtn) {
    demoBtn.addEventListener('click', () => {
      auth.startDemo();
      modal.close();
      if (typeof state.syncUser === 'function') state.syncUser();
      else state.reloadForUser();
      switchSurface('app');
    });
  }
}

/* ── Interactive FAQ Accordion ────────────────────────────────────────────── */
function initFAQAccordion() {
  $$('.faq-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
      trigger.setAttribute('aria-expanded', !isExpanded);
      const item = trigger.closest('.faq-item');
      if (item) {
        item.classList.toggle('open', !isExpanded);
      }
    });
  });
}

/* ── Global View Click & Event Delegation ────────────────────────────────── */
function initAppViewDelegation() {
  const appView = $('app-view');
  if (!appView) return;

  appView.addEventListener('click', e => {
    const container =
      e.target.closest('.task-item')    ||
      e.target.closest('.board-card')   ||
      e.target.closest('.cal-task-pill');
    if (!container) return;

    const id = container.dataset.id;
    if (!id) return;

    if (e.target.closest('.delete-task-btn')) {
      state.deleteTask(id);
      return;
    }

    if (e.target.closest('.edit-task-btn')) {
      e.stopPropagation();
      if (typeof window.openEditTaskModal === 'function') {
        window.openEditTaskModal(id);
      }
      return;
    }

    if (e.target.classList.contains('task-checkbox')) {
      e.preventDefault();
      state.toggleTaskCompletion(id);
    }
  });
}

/* ── Landing Page Actions & Template Shelf ───────────────────────────────── */
function initLanding() {
  $$('[data-action="open-demo"]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (!auth.isAuthenticated) {
        auth.startDemo();
        if (typeof state.syncUser === 'function') state.syncUser();
        else state.reloadForUser();
      }
      switchSurface('app');
    });
  });

  $$('[data-template]').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.template;
      const tpl = TEMPLATES[key];
      if (!tpl) return;

      if (!auth.isAuthenticated) {
        auth.startDemo();
        if (typeof state.syncUser === 'function') state.syncUser();
        else state.reloadForUser();
      }

      const today = todayISO();
      const seededTasks = tpl.tasks.map(t => ({ ...t, dueDate: today }));

      state.seedTemplate(tpl.domain, seededTasks);
      switchSurface('app');
    });
  });

  const landingOpenWsBtn = $('landing-open-ws-btn');
  if (landingOpenWsBtn) {
    landingOpenWsBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (!auth.isAuthenticated) {
        auth.startDemo();
        if (typeof state.syncUser === 'function') state.syncUser();
        else state.reloadForUser();
      }
      switchSurface('app');
    });
  }

  const landingSignOutBtn = $('landing-signout-btn');
  if (landingSignOutBtn) {
    landingSignOutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      auth.logout();
      if (typeof state.syncUser === 'function') state.syncUser();
      else state.reloadForUser();
      syncLandingHeaderAuth();
    });
  }
}

/* ── 3-Pillar Manifesto Hover Canvas Aura Shift ───────────────────────────── */
function initPillarMicroInteractions() {
  $$('.pillar-card[data-tint]').forEach(card => {
    const tint = card.dataset.tint;
    card.addEventListener('mouseenter', () => setAuraTint(tint));
    card.addEventListener('mouseleave', () => resetAuraTint());
    card.addEventListener('click', () => setAuraTint(tint));
  });
}

/* ── Cognitive Drag Index Self-Audit Checklist ────────────────────────────── */
function initCognitiveDragAudit() {
  const form = $('audit-form');
  const scoreText = $('audit-score-text');
  const recTitle  = $('audit-rec-title');
  const recDesc   = $('audit-rec-desc');
  const seedBtn   = $('audit-seed-btn');
  if (!form || !scoreText || !recTitle || !recDesc || !seedBtn) return;

  function updateAudit() {
    const checked = form.querySelectorAll('.audit-checkbox-input:checked');
    const count = checked.length;

    let scoreLabel = '0% \u2013 Calm Horizon';
    let titleStr   = 'Recommended Preset: Balanced Life Horizon';
    let descStr    = 'Your current setup shows zero cognitive drag. Explore all 4 domain workspaces.';
    let targetDomain = 'fitness';

    if (count === 1) {
      scoreLabel = '33% \u2013 Low Drag';
      titleStr   = 'Recommended Preset: Habit Formation + Fitness';
      descStr    = 'Strengthen personal routines and health habits before workload escalates.';
      targetDomain = 'habits';
    } else if (count === 2) {
      scoreLabel = '66% \u2013 Moderate Drag';
      titleStr   = 'Recommended Preset: Deep Work Sprint + Habit Formation';
      descStr    = 'Isolate focus sprints with strict 25-minute Pomodoro intervals.';
      targetDomain = 'deepwork';
    } else if (count === 3) {
      scoreLabel = '100% \u2013 Severe Drag';
      titleStr   = 'Recommended Preset: Deep Work Sprint + Urgent Clearance';
      descStr    = 'High cognitive fragmentation detected. Seeding urgent focus & errand clearance.';
      targetDomain = 'deepwork';
    }

    scoreText.textContent = scoreLabel;
    recTitle.textContent  = titleStr;
    recDesc.textContent   = descStr;

    seedBtn.style.display = count > 0 ? 'inline-flex' : 'none';
    seedBtn.dataset.targetDomain = targetDomain;
  }

  form.querySelectorAll('.audit-checkbox-input').forEach(chk => {
    chk.addEventListener('change', updateAudit);
  });

  seedBtn.addEventListener('click', () => {
    if (!auth.isAuthenticated) {
      auth.startDemo();
      if (typeof state.syncUser === 'function') state.syncUser();
      else state.reloadForUser();
    }

    const domain = seedBtn.dataset.targetDomain || 'deepwork';
    const tpl = TEMPLATES[domain] || TEMPLATES.deepwork;
    const today = todayISO();
    const seeded = tpl.tasks.map(t => ({ ...t, dueDate: today }));

    state.seedTemplate(domain, seeded);
    switchSurface('app');
  });

  updateAudit();
}

/* ── Native Online / Offline Network Status Indicator ────────────────────── */
function initNetworkStatus() {
  const pill = $('network-pill');
  const label = $('network-text');
  if (!pill || !label) return;

  function update() {
    const isOnline = navigator.onLine !== false;
    pill.classList.toggle('online', isOnline);
    pill.classList.toggle('offline', !isOnline);
    label.textContent = isOnline ? 'Online' : 'Offline';
    pill.title = isOnline ? 'Connected (Sync active)' : 'Offline (Saving changes locally to browser)';
  }

  window.addEventListener('online', update);
  window.addEventListener('offline', update);
  update();
}

/* ── 5-Second Floating Undo Delete Toast Banner ──────────────────────────── */
let undoTimer = null;
let lastDeleted = null;

function initUndoToast() {
  const toast = $('undo-toast');
  const msgEl = $('undo-toast-msg');
  const undoBtn = $('undo-toast-action');
  const closeBtn = $('undo-toast-close');
  const bar = $('undo-progress-bar');
  if (!toast) return;

  window.showUndoToast = (task, originalIndex) => {
    if (!task) return;
    lastDeleted = { task, index: originalIndex };

    if (msgEl) msgEl.textContent = `Deleted "${task.title || 'task'}"`;
    if (bar) {
      bar.style.transition = 'none';
      bar.style.width = '100%';
      void bar.offsetWidth;
      bar.style.transition = 'width 5s linear';
      bar.style.width = '0%';
    }

    toast.style.display = 'block';

    if (undoTimer) clearTimeout(undoTimer);
    undoTimer = setTimeout(() => {
      toast.style.display = 'none';
      lastDeleted = null;
    }, 5000);
  };

  if (undoBtn) {
    undoBtn.addEventListener('click', () => {
      if (lastDeleted && lastDeleted.task) {
        state.restoreTask(lastDeleted.task, lastDeleted.index);
        if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
          navigator.vibrate([20]);
        }
      }
      toast.style.display = 'none';
      if (undoTimer) clearTimeout(undoTimer);
      lastDeleted = null;
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      toast.style.display = 'none';
      if (undoTimer) clearTimeout(undoTimer);
      lastDeleted = null;
    });
  }
}

/* ── Client-Side Zero-Dependency JSON Backup & Restore ───────────────────── */
function exportWorkspaceJSON() {
  try {
    const payload = {
      komorebi_backup_v1: true,
      exportedAt: new Date().toISOString(),
      userId: auth.userId || 'demo',
      domain: state.activeDomain,
      view: state.currentView,
      sections: storage.getSections(auth.userId, state.activeDomain) || [],
      tasks: state.tasks
    };

    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const dateStr = new Date().toISOString().slice(0, 10);
    a.href = url;
    a.download = `komorebi-backup-${dateStr}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  } catch (err) {
    alert('Export failed: ' + err.message);
  }
}

function importWorkspaceJSON(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (!data || !Array.isArray(data.tasks)) {
        throw new Error('Invalid backup file format: tasks array missing.');
      }
      state.tasks = data.tasks;
      if (data.domain) state.activeDomain = data.domain;
      if (data.view) state.currentView = data.view;
      if (data.sections && Array.isArray(data.sections)) {
        storage.saveSections(auth.userId, state.activeDomain, data.sections);
      }
      state._notify();
      alert(`Workspace restored successfully! (${data.tasks.length} tasks loaded)`);
    } catch (err) {
      alert('Could not restore backup: ' + err.message);
    }
  };
  reader.readAsText(file);
}

function initToolsDropdownAndBackup() {
  const menuBtn = $('ws-tools-menu-btn');
  const dropdown = $('ws-tools-dropdown');
  const exportBtn = $('export-json-btn');
  const importTrigger = $('import-json-trigger-btn');
  const fileInput = $('import-backup-file-input');
  const printBtn = $('print-agenda-btn');
  const shortcutsBtn = $('shortcuts-modal-btn');
  const shortcutsDialog = $('shortcuts-dialog');

  if (menuBtn && dropdown) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dropdown.style.display === 'flex';
      dropdown.style.display = isOpen ? 'none' : 'flex';
    });

    document.addEventListener('click', (e) => {
      if (!menuBtn.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.style.display = 'none';
      }
    });
  }

  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      if (dropdown) dropdown.style.display = 'none';
      exportWorkspaceJSON();
    });
  }

  if (importTrigger && fileInput) {
    importTrigger.addEventListener('click', () => {
      if (dropdown) dropdown.style.display = 'none';
      fileInput.click();
    });

    fileInput.addEventListener('change', (e) => {
      const file = e.target.files?.[0];
      if (file) {
        importWorkspaceJSON(file);
        fileInput.value = '';
      }
    });
  }

  if (printBtn) {
    printBtn.addEventListener('click', () => {
      if (dropdown) dropdown.style.display = 'none';
      window.print();
    });
  }

  if (shortcutsBtn && shortcutsDialog) {
    shortcutsBtn.addEventListener('click', () => {
      if (dropdown) dropdown.style.display = 'none';
      shortcutsDialog.showModal();
    });
  }
}

/* ── Keyboard Shortcuts & Modal Controller ───────────────────────────────── */
function initKeyboardShortcuts() {
  const shortcutsDialog = $('shortcuts-dialog');
  const closeBtn = $('close-shortcuts-btn');

  if (closeBtn && shortcutsDialog) {
    closeBtn.addEventListener('click', () => shortcutsDialog.close());
    shortcutsDialog.addEventListener('click', (e) => {
      const r = shortcutsDialog.getBoundingClientRect();
      if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) {
        shortcutsDialog.close();
      }
    });
  }

  window.addEventListener('keydown', (e) => {
    const tag = e.target.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || e.target.isContentEditable) {
      if (e.key === 'Escape') {
        e.target.blur();
      }
      return;
    }

    if (e.key === '1') {
      e.preventDefault();
      state.setView('board');
    } else if (e.key === '2') {
      e.preventDefault();
      state.setView('list');
    } else if (e.key === '3') {
      e.preventDefault();
      state.setView('calendar');
    } else if (e.key === 'q' || e.key === 'Q' || e.key === 'n' || e.key === 'N') {
      e.preventDefault();
      if (typeof window.openCreateTaskModal === 'function') {
        window.openCreateTaskModal();
      }
    } else if (e.key === '/') {
      e.preventDefault();
      const nlp = $('nlp-input');
      if (nlp) nlp.focus();
    } else if (e.key === 'p' || e.key === 'P') {
      if (!e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        window.print();
      }
    } else if (e.key === 'b' || e.key === 'B') {
      if (!e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        exportWorkspaceJSON();
      }
    } else if (e.key === '?') {
      e.preventDefault();
      if (shortcutsDialog) {
        if (shortcutsDialog.open) shortcutsDialog.close();
        else shortcutsDialog.showModal();
      }
    } else if (e.key === 'Escape') {
      if (shortcutsDialog && shortcutsDialog.open) shortcutsDialog.close();
      const taskDialog = $('task-dialog');
      if (taskDialog && taskDialog.open) taskDialog.close();
      const dropdown = $('ws-tools-dropdown');
      if (dropdown) dropdown.style.display = 'none';
      const toast = $('undo-toast');
      if (toast) toast.style.display = 'none';
    }
  });
}

/* ── Application Bootstrap ───────────────────────────────────────────────── */
function bootstrapApp() {
  // 1. Render vector SVG icons into data-icon slots
  mountIcons();

  // 2. Initialize Ambient Canvas Fluid Aura
  initAuraCanvas('aura-canvas');

  // 3. Initialize 3D Perspective Card Tilt Physics & Glare
  initTiltPhysics('.template-card, .feature-card');

  // 4. Bind Hover Decrypt Scramble to titles and navigation headers
  bindHoverDecrypt('.decrypt-on-hover, .section-title, .nav-brand, .template-name');

  // 5. Initialize Kinetic Word Cycler in Hero Headline
  initKineticWordCycler('kinetic-word-switcher', [
    'Deep Work Sprints',
    'Daily Habit Routines',
    'Fitness & Movement',
    'Grocery & Errands'
  ], 3200);

  // 6. Trigger Hero Eyebrow Initial Decrypt Scramble
  const heroEyebrow = document.querySelector('.hero-eyebrow');
  if (heroEyebrow) {
    decryptText(heroEyebrow, null, 25);
  }

  // 6. Initialize IntersectionObserver Scroll Reveals & Rolling Stat Counters
  initScrollReveals();
  initRollingCounters();

  // 7. Subscribe workspace renderer to state observer
  state.subscribe(renderWorkspace);

  // 8. Bind 4-domain ribbon buttons (fitness, habits, deepwork, errands)
  $$('.ws-domain-btn').forEach(btn => {
    btn.addEventListener('click', () => state.setDomain(btn.dataset.domain));
  });

  // 9. Bind domain banner quick action button
  const domainActionBtn = $('domain-quick-action-btn');
  if (domainActionBtn) {
    domainActionBtn.addEventListener('click', () => {
      if (state.activeDomain === 'inbox') {
        const trigger = document.getElementById('board-add-section-trigger');
        if (trigger) {
          trigger.click();
          trigger.scrollIntoView({ behavior: 'smooth' });
        } else {
          state.triggerDomainAction(state.activeDomain);
        }
      } else {
        state.triggerDomainAction(state.activeDomain);
      }
    });
  }

  // 10. Bind view mode toggles (List, Board, Calendar)
  $$('.view-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => state.setView(btn.dataset.view));
  });

  // 11. Bind "Back to main page" button
  const backBtn = $('ws-back-btn');
  if (backBtn) {
    backBtn.addEventListener('click', () => switchSurface('landing'));
  }

  // 12. Bind Sign Out button
  const signOutBtn = $('sign-out-btn');
  if (signOutBtn) {
    signOutBtn.addEventListener('click', () => {
      auth.logout();
      if (typeof state.syncUser === 'function') state.syncUser();
      else state.reloadForUser();
      switchSurface('landing');
    });
  }

  // 13. Initialize UI modules
  initLanding();
  initAuthModal();
  initFAQAccordion();
  initNLPBar();
  initTaskDialog();
  initPomodoroDock();
  initAppViewDelegation();
  initPillarMicroInteractions();
  initBreathingEngine();
  initCognitiveDragAudit();
  initPhilosophySection();
  initNetworkStatus();
  initUndoToast();
  initToolsDropdownAndBackup();
  initKeyboardShortcuts();

  // 14. Auto-seed authentic Todoist Dummy Data from Source Image ONLY for demo / guest mode if never initialized
  const isDemoOrGuest = !auth.isAuthenticated || auth.isDemo;
  const existingSavedTasks = storage.getTasks(auth.userId);
  if (isDemoOrGuest && existingSavedTasks === null && localStorage.getItem('komorebi_source_seeded_v4') !== 'true') {
    state.resetToDefaultTemplates();
    localStorage.setItem('komorebi_source_seeded_v4', 'true');
  } else if (localStorage.getItem('komorebi_source_seeded_v4') !== 'true') {
    localStorage.setItem('komorebi_source_seeded_v4', 'true');
  }
  window.seedDummyData = () => state.resetToDefaultTemplates();
  window.state = state;
  window.auth = auth;
  window.storage = storage;

  // 15. Initial Surface Routing — checks saved surface, URL hash, or active user session
  const lastSurface = storage.getLastSurface();
  const hasAppHash  = window.location.hash === '#app' || window.location.hash === '#board';

  if (hasAppHash || lastSurface === 'app' || (lastSurface !== 'landing' && auth.isAuthenticated)) {
    switchSurface('app');
  } else {
    switchSurface('landing');
  }

  // 16. Support Browser Back / Forward History Navigation
  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#app' || window.location.hash === '#board') {
      if ($('app-surface')?.classList.contains('surface-hidden')) {
        switchSurface('app');
      }
    } else if (!window.location.hash || window.location.hash === '#') {
      if ($('landing-surface')?.classList.contains('surface-hidden')) {
        switchSurface('landing');
      }
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrapApp);
} else {
  bootstrapApp();
}

function esc(s) {
  if (!s) return '';
  const d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}


})();
