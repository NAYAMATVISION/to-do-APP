import { icons } from '../utils/icons.js';

/**
 * Status group definitions — icon keys map directly to the icons registry.
 */
const GROUPS = [
  { key: 'backlog',     title: 'Backlog',              icon: 'folder'      },
  { key: 'in-progress', title: 'In Progress',          icon: 'clock'       },
  { key: 'ready-qa',   title: 'Ready for Review',      icon: 'checkCircle' },
];

/**
 * Renders the interactive List View into the main container.
 * @param {HTMLElement} container
 * @param {StateManager} state
 */
export function renderListView(container, state) {
  const tasks = state.getFilteredTasks();

  const html = `
    <div class="list-view-container">
      ${GROUPS.map(group => {
        const groupTasks = tasks.filter(t => t.status === group.key);
        return `
          <section class="list-group" data-status="${group.key}">
            <header class="list-group-header">
              <span class="icon-slot" aria-hidden="true">${icons[group.icon]}</span>
              <span>${group.title}</span>
              <span class="group-count">${groupTasks.length}</span>
            </header>
            <ul class="task-list">
              ${groupTasks.length > 0
                ? groupTasks.map(task => `
                  <li class="task-item ${task.completed ? 'completed' : ''}" data-id="${task.id}">
                    <div class="task-left">
                      <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''} />
                      <span class="task-text">${escapeHtml(task.title)}</span>
                    </div>
                    <div class="task-right">
                      <span class="task-date-pill">${task.dueDate}</span>
                      <button class="delete-task-btn" title="Delete task" aria-label="Delete task">
                        ${icons.close}
                      </button>
                    </div>
                  </li>
                `).join('')
                : '<li class="task-item-empty">No tasks yet</li>'
              }
            </ul>
          </section>
        `;
      }).join('')}
    </div>
  `;

  container.innerHTML = html;
}

/** Minimal XSS sanitizer for user-entered titles */
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
