import { icons } from '../utils/icons.js';
import { todayISO, addDaysISO } from '../utils/dateHelpers.js';

const COLUMNS = [
  { key: 'backlog',     title: 'Backlog',      icon: 'folder'      },
  { key: 'in-progress', title: 'In Progress',  icon: 'clock'       },
  { key: 'ready-qa',   title: 'Done / Review', icon: 'checkCircle' },
];

export function renderBoardView(container, state) {
  const tasks = state.getFilteredTasks();

  container.innerHTML = `
    <div class="board-view-container">
      ${COLUMNS.map(col => {
        const columnTasks = tasks.filter(t => t.status === col.key);
        return `
          <div class="board-column" data-status="${col.key}">
            <div class="board-column-header">
              <div class="board-header-title">
                <span class="icon-slot" aria-hidden="true">${icons[col.icon]}</span>
                <span>${col.title}</span>
              </div>
              <span class="column-counter">${columnTasks.length}</span>
            </div>
            <div class="board-card-stack" data-dropzone="${col.key}">
              ${columnTasks.length
                ? columnTasks.map(t => _card(t)).join('')
                : '<div class="board-empty-state">Drop tasks here</div>'
              }
            </div>
          </div>`;
      }).join('')}
    </div>`;

  _bindDragDrop(container, state);
}

function _card(t) {
  const dateBadge = formatDateBadge(t.dueDate);
  const priorityClass = t.priority || 'p3';
  return `
    <div
      class="board-card${t.completed ? ' completed' : ''}"
      draggable="true"
      data-id="${t.id}"
      data-status="${t.status}"
    >
      <div class="board-card-body">
        <input
          type="checkbox"
          class="task-checkbox"
          ${t.completed ? 'checked' : ''}
          aria-label="Toggle task completion"
        />
        <span class="board-card-title">${esc(t.title)}</span>
      </div>
      <div class="board-card-footer">
        <div class="board-card-meta">
          <span class="priority-pill ${priorityClass}">${priorityClass.toUpperCase()}</span>
          <span class="task-date-pill">${dateBadge}</span>
          ${t.tag ? `<span class="tag-pill">${esc(t.tag)}</span>` : ''}
        </div>
        <button class="delete-task-btn" aria-label="Delete task" title="Delete task">
          ${icons.close}
        </button>
      </div>
    </div>`;
}

function _bindDragDrop(container, state) {
  let draggedId = null;

  container.querySelectorAll('.board-card').forEach(card => {
    card.addEventListener('mousedown', e => {
      if (e.target.closest('.task-checkbox') || e.target.closest('.delete-task-btn')) {
        card.setAttribute('draggable', 'false');
      } else {
        card.setAttribute('draggable', 'true');
      }
    });

    card.addEventListener('dragstart', e => {
      draggedId = card.dataset.id;
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', draggedId);
      setTimeout(() => card.classList.add('is-dragging'), 0);
    });

    card.addEventListener('dragend', () => {
      card.classList.remove('is-dragging');
      card.setAttribute('draggable', 'true');
      container.querySelectorAll('.board-card-stack').forEach(zone => zone.classList.remove('drag-over'));
    });
  });

  container.querySelectorAll('.board-card-stack').forEach(zone => {
    zone.addEventListener('dragover', e => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      zone.classList.add('drag-over');
    });

    zone.addEventListener('dragleave', e => {
      if (!zone.contains(e.relatedTarget)) {
        zone.classList.remove('drag-over');
      }
    });

    zone.addEventListener('drop', e => {
      e.preventDefault();
      zone.classList.remove('drag-over');
      const id = e.dataTransfer.getData('text/plain') || draggedId;
      const targetStatus = zone.dataset.dropzone;

      if (id && targetStatus) {
        state.updateTaskStatus(id, targetStatus);
      }
    });
  });
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
