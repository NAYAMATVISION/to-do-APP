import {
  MONTH_NAMES,
  getDaysInMonth,
  getFirstWeekdayOfMonth,
  formatISODate,
  todayISO
} from '../utils/dateHelpers.js';
import { icons } from '../utils/icons.js';

let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export function renderCalendarView(container, state) {
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
