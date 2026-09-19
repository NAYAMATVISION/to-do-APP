import { MONTH_NAMES, getDaysInMonth, getFirstWeekdayOfMonth, formatISODate } from '../utils/dateHelpers.js';
import { icons } from '../utils/icons.js';

// Module-scoped navigation state
let displayDate = new Date();

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export function renderCalendarView(container, state) {
  const year  = displayDate.getFullYear();
  const month = displayDate.getMonth();

  const today    = new Date();
  const todayISO = formatISODate(today.getFullYear(), today.getMonth(), today.getDate());
  const tasks    = state.getFilteredTasks();

  const daysInMonth  = getDaysInMonth(year, month);
  const startWeekday = getFirstWeekdayOfMonth(year, month);

  const prevMonth     = month === 0  ? 11 : month - 1;
  const prevMonthYear = month === 0  ? year - 1 : year;
  const daysInPrev    = getDaysInMonth(prevMonthYear, prevMonth);

  const nextMonth     = month === 11 ? 0  : month + 1;
  const nextMonthYear = month === 11 ? year + 1 : year;

  // Build all grid cells
  let cells = '';

  // Trailing days from previous month
  for (let i = startWeekday - 1; i >= 0; i--) {
    const day = daysInPrev - i;
    cells += _cell(day, formatISODate(prevMonthYear, prevMonth, day), true, false, tasks);
  }

  // Current month days
  for (let day = 1; day <= daysInMonth; day++) {
    const iso = formatISODate(year, month, day);
    cells += _cell(day, iso, false, iso === todayISO, tasks);
  }

  // Leading days from next month
  const totalCells  = startWeekday + daysInMonth;
  const trailingCount = (7 - (totalCells % 7)) % 7;
  for (let day = 1; day <= trailingCount; day++) {
    cells += _cell(day, formatISODate(nextMonthYear, nextMonth, day), true, false, tasks);
  }

  container.innerHTML = `
    <div class="calendar-header-bar">
      <h2 class="calendar-month-label">${MONTH_NAMES[month]} ${year}</h2>
      <div class="calendar-nav">
        <button class="cal-nav-btn" id="cal-prev-btn" aria-label="Previous month">
          <span class="icon-slot">${icons.chevronLeft}</span>
        </button>
        <button class="cal-nav-btn" id="cal-today-btn">Today</button>
        <button class="cal-nav-btn" id="cal-next-btn" aria-label="Next month">
          <span class="icon-slot">${icons.chevronRight}</span>
        </button>
      </div>
    </div>
    <div class="calendar-grid">
      ${WEEKDAYS.map(d => `<div class="calendar-day-header">${d}</div>`).join('')}
      ${cells}
    </div>`;

  _bindNav(container, state);
}

function _cell(dayNumber, isoDate, isOtherMonth, isToday, tasks) {
  const dayTasks = tasks.filter(t => t.dueDate === isoDate);
  return `
    <div class="calendar-cell${isOtherMonth ? ' other-month' : ''}" data-date="${isoDate}">
      <div class="calendar-cell-top">
        <span class="cell-day-number${isToday ? ' is-today' : ''}">${dayNumber}</span>
      </div>
      <div class="calendar-task-stack">
        ${dayTasks.map(task => `
          <div class="cal-task-pill${task.completed ? ' completed' : ''}" data-id="${task.id}" title="${esc(task.title)}">
            <input type="checkbox" class="task-checkbox"${task.completed ? ' checked' : ''} />
            <span class="task-text">${esc(task.title)}</span>
          </div>`).join('')}
      </div>
    </div>`;
}

function _bindNav(container, state) {
  const prev  = container.querySelector('#cal-prev-btn');
  const next  = container.querySelector('#cal-next-btn');
  const today = container.querySelector('#cal-today-btn');

  if (prev) prev.addEventListener('click', () => {
    displayDate.setMonth(displayDate.getMonth() - 1);
    renderCalendarView(container, state);
  });

  if (next) next.addEventListener('click', () => {
    displayDate.setMonth(displayDate.getMonth() + 1);
    renderCalendarView(container, state);
  });

  if (today) today.addEventListener('click', () => {
    displayDate = new Date();
    renderCalendarView(container, state);
  });
}

function esc(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}
