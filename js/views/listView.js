import { icons } from '../utils/icons.js';

const GROUPS = [
  { key: 'backlog',     title: 'Backlog',           icon: 'folder'      },
  { key: 'in-progress', title: 'In Progress',       icon: 'clock'       },
  { key: 'ready-qa',   title: 'Ready for Review',   icon: 'checkCircle' },
];

export function renderListView(container, state) {
  const tasks = state.getFilteredTasks();

  container.innerHTML = `
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
              ${groupTasks.length
                ? groupTasks.map(task => `
                    <li class="task-item${task.completed ? ' completed' : ''}" data-id="${task.id}">
                      <div class="task-left">
                        <input type="checkbox" class="task-checkbox"${task.completed ? ' checked' : ''} />
                        <span class="task-text">${esc(task.title)}</span>
                      </div>
                      <div class="task-right">
                        <span class="task-date-pill">${task.dueDate}</span>
                        <button class="delete-task-btn" aria-label="Delete task">${icons.close}</button>
                      </div>
                    </li>`).join('')
                : '<li class="task-item-empty">No tasks yet</li>'
              }
            </ul>
          </section>`;
      }).join('')}
    </div>`;
}

function esc(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}
