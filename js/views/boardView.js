import { icons } from '../utils/icons.js';

/**
 * Renders the Kanban Board View into the container
 * @param {HTMLElement} container - Target DOM node
 * @param {StateManager} state - Application state instance
 */
export function renderBoardView(container, state) {
  const tasks = state.getFilteredTasks();

  const columns = [
    { key: 'backlog', title: 'Backlog', icon: icons.folder },
    { key: 'in-progress', title: 'In progress', icon: icons.clock },
    { key: 'ready-qa', title: 'Ready for QA', icon: icons.checkCircle }
  ];

  const html = `
    <div class="board-view-container">
      ${columns.map(col => {
        const columnTasks = tasks.filter(task => task.status === col.key);

        return `
          <div class="board-column" data-status="${col.key}">
            <div class="board-column-header">
              <div class="board-header-title">
                <span class="icon-slot">${col.icon}</span>
                <span>${col.title}</span>
              </div>
              <span class="column-counter">${columnTasks.length}</span>
            </div>

            <div class="board-card-stack" data-dropzone="${col.key}">
              ${columnTasks.length > 0 ? columnTasks.map(task => `
                <div class="board-card ${task.completed ? 'completed' : ''}" 
                     data-id="${task.id}" 
                     data-status="${task.status}">
                  <div class="board-card-body">
                    <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''} />
                    <span class="board-card-title">${escapeHtml(task.title)}</span>
                  </div>
                  <div class="board-card-footer">
                    <span class="task-date-pill">${task.dueDate}</span>
                    <button class="delete-task-btn" title="Delete task" aria-label="Delete">
                      ${icons.close}
                    </button>
                  </div>
                </div>
              `).join('') : `
                <div class="board-empty-state">No tasks in this lane</div>
              `}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  container.innerHTML = html;
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}