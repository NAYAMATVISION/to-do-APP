import { icons } from '../utils/icons.js';
import { todayISO, addDaysISO } from '../utils/dateHelpers.js';

export function renderBoardView(container, state) {
  const tasks = state.getFilteredTasks();
  const sections = state.getSections(state.activeDomain);

  container.innerHTML = `
    <div class="todoist-board-wrap">
      <div class="todoist-board-canvas" id="todoist-board-canvas">
        ${sections.map(sectionName => {
          const sectionTasks = tasks.filter(t => (t.section || '(No Section)') === sectionName);
          const pendingCount = sectionTasks.filter(t => !t.completed).length;

          return `
            <div class="todoist-board-column" data-section="${esc(sectionName)}">
              <!-- Section Header -->
              <header class="todoist-column-header">
                <div class="todoist-column-title-group">
                  <h3 class="todoist-column-title" data-section="${esc(sectionName)}" title="Double-click to rename section">${esc(sectionName)}</h3>
                  <span class="todoist-column-count">${pendingCount}</span>
                </div>
                <div class="todoist-column-actions">
                  <button type="button" class="todoist-column-menu-btn" data-section="${esc(sectionName)}" title="Section options" aria-label="Section options">
                    ${icons.moreHorizontal || '···'}
                  </button>
                  <div class="todoist-column-dropdown" data-dropdown-for="${esc(sectionName)}" style="display:none;">
                    <button type="button" class="dropdown-item rename-section-btn" data-section="${esc(sectionName)}">
                      ${icons.edit}
                      <span>Rename section</span>
                    </button>
                    <button type="button" class="dropdown-item clear-section-btn" data-section="${esc(sectionName)}">
                      ${icons.rotate}
                      <span>Clear all tasks</span>
                    </button>
                    <div class="dropdown-divider"></div>
                    <button type="button" class="dropdown-item delete-section-btn text-danger" data-section="${esc(sectionName)}">
                      ${icons.trash || icons.close}
                      <span>Delete section</span>
                    </button>
                  </div>
                </div>
              </header>

              <!-- Cards Stack / Dropzone -->
              <div class="todoist-card-stack" data-dropzone="${esc(sectionName)}">
                ${sectionTasks.length > 0
                  ? sectionTasks.map(t => _cardHTML(t)).join('')
                  : '<div class="todoist-empty-state">No tasks in this section</div>'
                }
              </div>

              <!-- Column Bottom "+ Add task" -->
              <div class="todoist-column-footer">
                <button type="button" class="todoist-add-task-trigger" data-section="${esc(sectionName)}">
                  <span class="todoist-plus-sym">+</span>
                  <span>Add task</span>
                </button>
                <div class="todoist-inline-composer-slot" data-section="${esc(sectionName)}" style="display:none;"></div>
              </div>
            </div>`;
        }).join('')}

        <!-- Add Section Column -->
        <div class="todoist-add-section-slot">
          <button type="button" class="todoist-add-section-btn" id="board-add-section-trigger">
            <span class="todoist-plus-sym">+</span>
            <span>Add section</span>
          </button>
          <div class="todoist-section-composer" id="section-composer-box" style="display:none;">
            <input type="text" class="todoist-section-input" id="new-section-input" placeholder="Name this section..." />
            <div class="todoist-section-actions">
              <button type="button" class="btn-primary-sm" id="new-section-submit">Add Section</button>
              <button type="button" class="btn-subtle-sm" id="new-section-cancel">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>`;

  _bindBoardEvents(container, state);
}

function _cardHTML(t) {
  const isChecked = !!t.completed;
  const hasSubtasks = Array.isArray(t.subtasks) && t.subtasks.length > 0;
  const doneSubtasks = hasSubtasks ? t.subtasks.filter(s => s.completed).length : 0;
  const totalSubtasks = hasSubtasks ? t.subtasks.length : 0;
  const isExpanded = t.isExpanded !== false; // default expanded

  const dateClass = t.dateColor || (t.dueDate === 'Tomorrow' ? 'orange' : t.dueDate === 'Friday' ? 'purple' : 'grey');

  return `
    <div
      class="todoist-card${isChecked ? ' is-completed' : ''}"
      draggable="true"
      data-id="${t.id}"
      data-section="${esc(t.section || '')}"
    >
      <div class="todoist-card-body">
        <button
          type="button"
          class="todoist-check-circle${isChecked ? ' checked' : ''}"
          data-id="${t.id}"
          title="${isChecked ? 'Mark incomplete' : 'Mark complete'}"
          aria-label="Toggle completion"
        >
          <svg class="check-mark" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </button>

        <div class="todoist-card-info">
          <div class="todoist-card-title-row">
            <span class="todoist-card-title" data-id="${t.id}" title="Double-click to rename">${esc(t.title)}</span>
            <div class="todoist-card-actions">
              <button type="button" class="edit-task-icon" data-id="${t.id}" title="Edit task" aria-label="Edit task">
                ${icons.edit}
              </button>
              <button type="button" class="delete-task-icon" data-id="${t.id}" title="Delete task" aria-label="Delete task">
                ${icons.trash || icons.close}
              </button>
            </div>
          </div>

          <!-- Meta Pill Chips -->
          <div class="todoist-card-meta-row">
            ${t.dueDate ? `
              <span class="todoist-meta-pill date-pill date-${dateClass}">
                <span class="meta-icon">${icons.calendar}</span>
                <span>${esc(t.dueDate)}</span>
              </span>
            ` : ''}

            ${hasSubtasks ? `
              <button type="button" class="todoist-meta-pill subtask-pill${isExpanded ? ' is-open' : ''}" data-toggle-sub="${t.id}" title="Toggle subtasks">
                <span class="meta-icon">${icons.subtask || '⑂'}</span>
                <span>${doneSubtasks}/${totalSubtasks}</span>
                <span class="chevron-indicator">${isExpanded ? '⌄' : '>'}</span>
              </button>
            ` : ''}

            ${t.comments ? `
              <span class="todoist-meta-pill comment-pill">
                <span class="meta-icon">${icons.messageSquare || '💬'}</span>
                <span>${t.comments}</span>
              </span>
            ` : ''}
          </div>
        </div>
      </div>

      <!-- Nested Subtasks Stack -->
      ${hasSubtasks && isExpanded ? `
        <div class="todoist-subtasks-tree">
          ${t.subtasks.map(s => {
            const subChecked = !!s.completed;
            return `
              <div class="todoist-subtask-row${subChecked ? ' is-completed' : ''}" data-parent-id="${t.id}" data-subtask-id="${s.id}">
                <button
                  type="button"
                  class="todoist-check-circle subtask-check${subChecked ? ' checked' : ''}"
                  data-parent-id="${t.id}"
                  data-subtask-id="${s.id}"
                  aria-label="Toggle subtask"
                >
                  <svg class="check-mark" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </button>
                <span class="todoist-subtask-title" data-parent-id="${t.id}" data-subtask-id="${s.id}" title="Double-click to rename">${esc(s.title)}</span>
                ${s.comments ? `
                  <span class="todoist-meta-pill comment-pill subtask-comment">
                    <span class="meta-icon">${icons.messageSquare || '💬'}</span>
                    <span>${s.comments}</span>
                  </span>
                ` : ''}
                <div class="subtask-row-actions">
                  <button type="button" class="edit-subtask-btn" data-parent-id="${t.id}" data-subtask-id="${s.id}" title="Rename subtask">
                    ${icons.edit}
                  </button>
                  <button type="button" class="delete-subtask-btn" data-parent-id="${t.id}" data-subtask-id="${s.id}" title="Delete subtask">
                    ${icons.close}
                  </button>
                </div>
              </div>`;
          }).join('')}

          <!-- Add subtask row -->
          <div class="todoist-add-subtask-wrap" data-parent-id="${t.id}">
            <button type="button" class="todoist-add-subtask-btn" data-parent-id="${t.id}">
              <span class="todoist-plus-sym">+</span> Add subtask
            </button>
            <div class="todoist-add-subtask-slot" style="display:none;"></div>
          </div>
        </div>
      ` : ''}
    </div>`;
}

function _bindBoardEvents(container, state) {
  // 1. Task Checkbox Toggle
  container.querySelectorAll('.todoist-check-circle:not(.subtask-check)').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = btn.dataset.id;
      if (id) state.toggleTaskCompletion(id);
    });
  });

  // 2. Subtask Checkbox Toggle
  container.querySelectorAll('.subtask-check').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const parentId = btn.dataset.parentId;
      const subtaskId = btn.dataset.subtaskId;
      if (parentId && subtaskId) {
        state.toggleSubtaskCompletion(parentId, subtaskId);
      }
    });
  });

  // 3. Subtask Collapse/Expand Toggle
  container.querySelectorAll('[data-toggle-sub]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = btn.dataset.toggleSub;
      if (id) state.toggleSubtasksExpanded(id);
    });
  });

  // 4. Delete Whole Task Button
  container.querySelectorAll('.delete-task-icon').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = btn.dataset.id;
      if (id) {
        state.deleteTask(id);
      }
    });
  });

  // 5. Edit Whole Task Button (Opens Edit Task Modal)
  container.querySelectorAll('.edit-task-icon').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = btn.dataset.id;
      if (id && typeof window.openEditTaskModal === 'function') {
        window.openEditTaskModal(id);
      }
    });
  });

  // 6. Task Title Double-Click to Quick Inline Rename
  container.querySelectorAll('.todoist-card-title').forEach(titleEl => {
    titleEl.addEventListener('dblclick', e => {
      e.stopPropagation();
      const id = titleEl.dataset.id;
      if (id) {
        makeInlineEditable(titleEl, newTitle => {
          state.updateTask(id, { title: newTitle });
        });
      }
    });
  });

  // 7. Subtask Quick Inline Rename (via double-click or button)
  container.querySelectorAll('.edit-subtask-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const parentId = btn.dataset.parentId;
      const subtaskId = btn.dataset.subtaskId;
      const row = btn.closest('.todoist-subtask-row');
      const titleEl = row?.querySelector('.todoist-subtask-title');
      if (titleEl && parentId && subtaskId) {
        makeInlineEditable(titleEl, newTitle => {
          state.updateSubtask(parentId, subtaskId, newTitle);
        });
      }
    });
  });

  container.querySelectorAll('.todoist-subtask-title').forEach(titleEl => {
    titleEl.addEventListener('dblclick', e => {
      e.stopPropagation();
      const parentId = titleEl.dataset.parentId;
      const subtaskId = titleEl.dataset.subtaskId;
      if (parentId && subtaskId) {
        makeInlineEditable(titleEl, newTitle => {
          state.updateSubtask(parentId, subtaskId, newTitle);
        });
      }
    });
  });

  // 8. Delete Individual Subtask Button
  container.querySelectorAll('.delete-subtask-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const parentId = btn.dataset.parentId;
      const subtaskId = btn.dataset.subtaskId;
      if (parentId && subtaskId) {
        state.deleteSubtask(parentId, subtaskId);
      }
    });
  });

  // 9. Add Subtask Trigger & Inline Composer
  container.querySelectorAll('.todoist-add-subtask-btn').forEach(trigger => {
    trigger.addEventListener('click', e => {
      e.stopPropagation();
      const parentId = trigger.dataset.parentId;
      const wrap = trigger.closest('.todoist-add-subtask-wrap');
      const slot = wrap?.querySelector('.todoist-add-subtask-slot');
      if (!slot) return;

      trigger.style.display = 'none';
      slot.style.display = 'block';
      slot.innerHTML = `
        <div style="display:flex;align-items:center;gap:6px;margin-top:4px;">
          <input type="text" class="subtask-composer-input" placeholder="Subtask title..." autofocus />
          <button type="button" class="btn-primary-sm submit-subtask-btn">Add</button>
          <button type="button" class="btn-subtle-sm cancel-subtask-btn">✕</button>
        </div>`;

      const input = slot.querySelector('.subtask-composer-input');
      const submit = slot.querySelector('.submit-subtask-btn');
      const cancel = slot.querySelector('.cancel-subtask-btn');
      input.focus();

      const closeSubComposer = () => {
        slot.style.display = 'none';
        slot.innerHTML = '';
        trigger.style.display = 'inline-flex';
      };

      const doAdd = () => {
        const val = input.value.trim();
        if (val && parentId) {
          state.addSubtask(parentId, val);
        }
        closeSubComposer();
      };

      submit.addEventListener('click', doAdd);
      cancel.addEventListener('click', closeSubComposer);
      input.addEventListener('keydown', ev => {
        if (ev.key === 'Enter') {
          ev.preventDefault();
          doAdd();
        } else if (ev.key === 'Escape') {
          closeSubComposer();
        }
      });
    });
  });

  // 10. Section 3-dots Menu Button & Dropdown Actions
  container.querySelectorAll('.todoist-column-menu-btn').forEach(menuBtn => {
    menuBtn.addEventListener('click', e => {
      e.stopPropagation();
      const col = menuBtn.closest('.todoist-board-column');
      const dropdown = col?.querySelector('.todoist-column-dropdown');
      if (!dropdown) return;

      // Close any other open dropdowns first
      container.querySelectorAll('.todoist-column-dropdown').forEach(d => {
        if (d !== dropdown) d.style.display = 'none';
      });

      const isOpen = dropdown.style.display === 'flex';
      dropdown.style.display = isOpen ? 'none' : 'flex';
    });
  });

  // Close dropdown on outside click
  const closeAllDropdowns = () => {
    container.querySelectorAll('.todoist-column-dropdown').forEach(d => {
      d.style.display = 'none';
    });
  };
  document.addEventListener('click', closeAllDropdowns);

  // Section Dropdown: Rename Section
  container.querySelectorAll('.rename-section-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      closeAllDropdowns();
      const section = btn.dataset.section;
      const col = btn.closest('.todoist-board-column');
      const titleEl = col?.querySelector('.todoist-column-title');
      if (titleEl && section) {
        makeInlineEditable(titleEl, newName => {
          state.renameSection(state.activeDomain, section, newName);
        });
      }
    });
  });

  // Section Header Double-Click to Rename Section
  container.querySelectorAll('.todoist-column-title').forEach(titleEl => {
    titleEl.addEventListener('dblclick', e => {
      e.stopPropagation();
      const section = titleEl.dataset.section;
      if (titleEl && section) {
        makeInlineEditable(titleEl, newName => {
          state.renameSection(state.activeDomain, section, newName);
        });
      }
    });
  });

  // Section Dropdown: Clear All Tasks in Section
  container.querySelectorAll('.clear-section-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      closeAllDropdowns();
      const section = btn.dataset.section;
      if (!section) return;
      const count = state.tasks.filter(t => t.domain === state.activeDomain && (t.section || '(No Section)') === section).length;
      if (confirm(`Clear all ${count} tasks in section "${section}"?`)) {
        state.clearSectionTasks(state.activeDomain, section);
      }
    });
  });

  // Section Dropdown: Delete Whole Section
  container.querySelectorAll('.delete-section-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      closeAllDropdowns();
      const section = btn.dataset.section;
      if (!section) return;
      if (confirm(`Delete section "${section}" and all tasks inside it?`)) {
        state.deleteSection(state.activeDomain, section, true);
      }
    });
  });

  // 11. "+ Add Task" Trigger & Inline Composer
  container.querySelectorAll('.todoist-add-task-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const col = trigger.closest('.todoist-board-column');
      const section = trigger.dataset.section;
      const slot = col.querySelector('.todoist-inline-composer-slot');

      trigger.style.display = 'none';
      slot.style.display = 'block';
      slot.innerHTML = `
        <div class="todoist-inline-composer">
          <input type="text" class="composer-title-input" placeholder="Task name" autofocus />
          <div class="composer-meta-controls">
            <input type="text" class="composer-date-input" placeholder="Due date (e.g. Tomorrow, Friday)" />
          </div>
          <div class="composer-actions">
            <button type="button" class="composer-cancel-btn">Cancel</button>
            <button type="button" class="composer-submit-btn">Add task</button>
          </div>
        </div>`;

      const titleInput = slot.querySelector('.composer-title-input');
      const dateInput = slot.querySelector('.composer-date-input');
      const submitBtn = slot.querySelector('.composer-submit-btn');
      const cancelBtn = slot.querySelector('.composer-cancel-btn');

      titleInput.focus();

      const closeComposer = () => {
        slot.style.display = 'none';
        slot.innerHTML = '';
        trigger.style.display = 'flex';
      };

      const submitTask = () => {
        const title = titleInput.value.trim();
        if (!title) return;
        const dueDate = dateInput.value.trim() || null;
        let dateColor = 'grey';
        if (dueDate) {
          const lower = dueDate.toLowerCase();
          if (lower.includes('tomorrow')) dateColor = 'orange';
          else if (lower.includes('friday') || lower.includes('monday')) dateColor = 'purple';
        }

        state.addTask({
          title,
          section,
          dueDate,
          dateColor,
          status: 'backlog',
          completed: false,
        });
        closeComposer();
      };

      submitBtn.addEventListener('click', submitTask);
      cancelBtn.addEventListener('click', closeComposer);

      titleInput.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          e.preventDefault();
          submitTask();
        } else if (e.key === 'Escape') {
          closeComposer();
        }
      });
    });
  });

  // 12. "+ Add Section" Column Trigger
  const addSecTrigger = container.querySelector('#board-add-section-trigger');
  const secComposerBox = container.querySelector('#section-composer-box');
  const newSecInput = container.querySelector('#new-section-input');
  const newSecSubmit = container.querySelector('#new-section-submit');
  const newSecCancel = container.querySelector('#new-section-cancel');

  if (addSecTrigger && secComposerBox) {
    addSecTrigger.addEventListener('click', () => {
      addSecTrigger.style.display = 'none';
      secComposerBox.style.display = 'block';
      newSecInput.focus();
    });

    const closeSecComposer = () => {
      secComposerBox.style.display = 'none';
      newSecInput.value = '';
      addSecTrigger.style.display = 'flex';
    };

    const submitSection = () => {
      const name = newSecInput.value.trim();
      if (name) {
        state.addSection(state.activeDomain, name);
      }
      closeSecComposer();
    };

    if (newSecSubmit) newSecSubmit.addEventListener('click', submitSection);
    if (newSecCancel) newSecCancel.addEventListener('click', closeSecComposer);
    if (newSecInput) {
      newSecInput.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          e.preventDefault();
          submitSection();
        } else if (e.key === 'Escape') {
          closeSecComposer();
        }
      });
    }
  }

  // 13. Drag & Drop Implementation
  _bindDragAndDrop(container, state);
}

function _bindDragAndDrop(container, state) {
  let draggedId = null;

  container.querySelectorAll('.todoist-card').forEach(card => {
    card.addEventListener('mousedown', e => {
      if (
        e.target.closest('.todoist-check-circle') ||
        e.target.closest('.delete-task-icon') ||
        e.target.closest('.edit-task-icon') ||
        e.target.closest('[data-toggle-sub]') ||
        e.target.closest('.todoist-subtask-row') ||
        e.target.closest('.inline-rename-input')
      ) {
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
      container.querySelectorAll('.todoist-card-stack').forEach(zone => zone.classList.remove('drag-over'));
    });
  });

  container.querySelectorAll('.todoist-card-stack').forEach(zone => {
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
      const targetSection = zone.dataset.dropzone;

      if (id && targetSection) {
        state.updateTaskSection(id, targetSection);
      }
    });
  });
}

function makeInlineEditable(element, onSave) {
  const currentText = element.textContent.trim();
  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'inline-rename-input';
  input.value = currentText;

  let finished = false;
  const finish = (save) => {
    if (finished) return;
    finished = true;
    if (save) {
      const val = input.value.trim();
      if (val && val !== currentText) {
        input.remove();
        element.style.display = '';
        onSave(val);
        return;
      }
    }
    element.textContent = currentText;
    element.style.display = '';
    input.remove();
  };

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      finish(true);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      finish(false);
    }
  });

  input.addEventListener('blur', () => finish(true));

  element.style.display = 'none';
  element.parentNode.insertBefore(input, element);
  input.focus();
  input.select();
}

function esc(s) {
  if (!s) return '';
  const d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}
