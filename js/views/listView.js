import { icons } from '../utils/icons.js';
import { todayISO, addDaysISO } from '../utils/dateHelpers.js';

const GROUPS = [
  { key: 'backlog',     title: 'Backlog',      icon: 'folder'      },
  { key: 'in-progress', title: 'In Progress',  icon: 'clock'       },
  { key: 'ready-qa',   title: 'Done / Review', icon: 'checkCircle' },
];

export function renderListView(container, state) {
  const tasks = state.getFilteredTasks();

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
                : '<li class="task-item-empty">No tasks in this stage</li>'
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
        <button class="delete-task-btn" aria-label="Delete task" title="Delete task">
          ${icons.close}
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
