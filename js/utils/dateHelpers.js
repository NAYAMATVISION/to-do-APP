export const MONTH_NAMES = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December'
];

/**
 * Total days in a given month/year.
 * Day=0 of month+1 returns the last day of the target month.
 * @param {number} year
 * @param {number} month  0-indexed
 */
export function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

/**
 * Weekday index (0=Sun … 6=Sat) of the 1st of the month.
 * @param {number} year
 * @param {number} month  0-indexed
 */
export function getFirstWeekdayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}

/**
 * Formats year/month/day into ISO 'YYYY-MM-DD'.
 * @param {number} year
 * @param {number} month  0-indexed
 * @param {number} day
 */
export function formatISODate(year, month, day) {
  const m = String(month + 1).padStart(2, '0');
  const d = String(day).padStart(2, '0');
  return `${year}-${m}-${d}`;
}
