export const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export const WEEKDAY_NAMES = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

/**
 * Returns total days in a given month of a year.
 * @param {number} year
 * @param {number} month 0-indexed (0 = Jan, 11 = Dec)
 */
export function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

/**
 * Returns the weekday index (0=Sun ... 6=Sat) of the 1st day of the month.
 * @param {number} year
 * @param {number} month 0-indexed
 */
export function getFirstWeekdayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}

/**
 * Formats year, month, and day into ISO 'YYYY-MM-DD'.
 * @param {number} year
 * @param {number} month 0-indexed
 * @param {number} day 1-indexed
 */
export function formatISODate(year, month, day) {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

/**
 * Returns today's ISO date string in local time.
 */
export function todayISO() {
  const d = new Date();
  return formatISODate(d.getFullYear(), d.getMonth(), d.getDate());
}

/**
 * Adds N days to an ISO date string.
 * @param {string} dateStr YYYY-MM-DD
 * @param {number} days
 */
export function addDaysISO(dateStr, days) {
  const [y, m, d] = dateStr.split('-').map(Number);
  const dt = new Date(y, m - 1, d);
  dt.setDate(dt.getDate() + days);
  return formatISODate(dt.getFullYear(), dt.getMonth(), dt.getDate());
}

/**
 * Finds the upcoming ISO date for a given target weekday name (e.g. "friday", "mon").
 * @param {string} weekdayStr
 */
export function getNextWeekdayISO(weekdayStr) {
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
