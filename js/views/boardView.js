import { icons } from '../utils/icons.js';

/**
 * Renders the Kanban Board View with full Drag and Drop interactions
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
                     draggable="true" 
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
  attachDragAndDropListeners(container, state);
}

/**
 * Binds native HTML5 Drag and Drop API events
 * @param {HTMLElement} container 
 * @param {StateManager} state 
 */
function attachDragAndDropListeners(container, state) {
  const cards = container.querySelectorAll('.board-card');
  const dropzones = container.querySelectorAll('.board-card-stack');

  // Drag Source Lifecycle
  cards.forEach(card => {
    card.addEventListener('dragstart', (e) => {
      // Transfer card id via DataTransfer API
      e.dataTransfer.setData('text/plain', card.dataset.id);
      e.dataTransfer.effectAllowed = 'move';
      
      // Delay opacity change to preserve native drag preview snapshot
      setTimeout(() => {
        card.classList.add('is-dragging');
      }, 0);
    });

    card.addEventListener('dragend', () => {
      card.classList.remove('is-dragging');
      dropzones.forEach(zone => zone.classList.remove('drag-over'));
    });
  });

  // Drop Target Lifecycle
  dropzones.forEach(zone => {
    zone.addEventListener('dragover', (e) => {
      // By default, browsers prevent dropping elements. e.preventDefault() unlocks dropping!
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      zone.classList.add('drag-over');
    });

    zone.addEventListener('dragleave', (e) => {
      // Only remove style if leaving the dropzone container itself
      if (!zone.contains(e.relatedTarget)) {
        zone.classList.remove('drag-over');
      }
    });

    zone.addEventListener('drop', (e) => {
      e.preventDefault();
      zone.classList.remove('drag-over');

      const taskId = e.dataTransfer.getData('text/plain');
      const targetStatus = zone.dataset.dropzone;

      if (taskId && targetStatus) {
        state.updateTaskStatus(taskId, targetStatus);
      }
    });
  });
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
