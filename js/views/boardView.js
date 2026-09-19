import { icons } from '../utils/icons.js';

const COLUMNS = [
  { key: 'backlog',     title: 'Backlog',         icon: 'folder'      },
  { key: 'in-progress', title: 'In Progress',     icon: 'clock'       },
  { key: 'ready-qa',   title: 'Ready for Review', icon: 'checkCircle' },
];

export function renderBoardView(container, state) {
  const tasks = state.getFilteredTasks();

  container.innerHTML = `
    <div class="board-view-container">
      ${COLUMNS.map(col => {
        const colTasks = tasks.filter(t => t.status === col.key);
        return `
          <div class="board-column" data-status="${col.key}">
            <div class="board-column-header">
              <div class="board-header-title">
                <span class="icon-slot" aria-hidden="true">${icons[col.icon]}</span>
                <span>${col.title}</span>
              </div>
              <span class="column-counter">${colTasks.length}</span>
            </div>
            <div class="board-card-stack" data-dropzone="${col.key}">
              ${colTasks.length
                ? colTasks.map(task => `
                    <div class="board-card${task.completed ? ' completed' : ''}"
                         draggable="true"
                         data-id="${task.id}"
                         data-status="${task.status}">
                      <div class="board-card-body">
                        <input type="checkbox" class="task-checkbox"${task.completed ? ' checked' : ''} />
                        <span class="board-card-title">${esc(task.title)}</span>
                      </div>
                      <div class="board-card-footer">
                        <span class="task-date-pill">${task.dueDate}</span>
                        <button class="delete-task-btn" aria-label="Delete task">${icons.close}</button>
                      </div>
                    </div>`).join('')
                : '<div class="board-empty-state">No tasks in this lane</div>'
              }
            </div>
          </div>`;
      }).join('')}
    </div>`;

  _bindDragDrop(container, state);
}

function _bindDragDrop(container, state) {
  let dragId = null;

  container.querySelectorAll('.board-card').forEach(card => {
    card.addEventListener('dragstart', e => {
      dragId = card.dataset.id;
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', dragId);
      setTimeout(() => card.classList.add('is-dragging'), 0);
    });

    card.addEventListener('dragend', () => {
      card.classList.remove('is-dragging');
      container.querySelectorAll('.board-card-stack').forEach(z => z.classList.remove('drag-over'));
    });
  });

  container.querySelectorAll('.board-card-stack').forEach(zone => {
    zone.addEventListener('dragover', e => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      zone.classList.add('drag-over');
    });

    zone.addEventListener('dragleave', e => {
      if (!zone.contains(e.relatedTarget)) zone.classList.remove('drag-over');
    });

    zone.addEventListener('drop', e => {
      e.preventDefault();
      zone.classList.remove('drag-over');
      const id     = e.dataTransfer.getData('text/plain') || dragId;
      const status = zone.dataset.dropzone;
      if (id && status) state.updateTaskStatus(id, status);
    });
  });
}

function esc(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}
