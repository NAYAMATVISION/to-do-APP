import { state } from './state.js';
import { renderListView } from './views/listView.js';
import { icons } from './utils/icons.js';

/**
 * Injects SVG markup into every [data-icon] slot in the given root.
 * Called once on DOMContentLoaded for static slots (header buttons).
 * @param {HTMLElement|Document} root
 */
function mountIcons(root = document) {
  root.querySelectorAll('.icon-slot[data-icon]').forEach(slot => {
    const key = slot.dataset.icon;
    if (icons[key]) slot.innerHTML = icons[key];
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const appView        = document.getElementById('app-view');
  const projectTitle   = document.getElementById('project-title');
  const taskDialog     = document.getElementById('task-dialog');
  const taskForm       = document.getElementById('task-form');
  const openDialogBtn  = document.getElementById('open-task-dialog-btn');
  const closeDialogBtn = document.getElementById('close-dialog-btn');
  const workspaceBtns  = document.querySelectorAll('.ws-btn');
  const viewBtns       = document.querySelectorAll('.view-btn');

  // Mount SVG icons into all static header slots
  mountIcons();

  // Set initial default date in dialog to today
  document.getElementById('task-date-input').value = new Date().toISOString().split('T')[0];

  // Core Render Engine
  function render() {
    projectTitle.textContent =
      state.activeWorkspace === 'personal' ? 'Personal Workspace' : 'Work & Projects';

    // Update active workspace buttons
    workspaceBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.workspace === state.activeWorkspace);
    });

    // Render active view
    if (state.currentView === 'list') {
      renderListView(appView, state);
    } else {
      appView.innerHTML = `<div style="padding: 40px 0; color: var(--text-muted); text-align: center;">
        ${state.currentView.toUpperCase()} view coming up next.
      </div>`;
    }
  }

  // Subscribe render function to state changes (Observer Pattern)
  state.subscribe(render);

  // Workspace Switching
  workspaceBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      state.setWorkspace(e.currentTarget.dataset.workspace);
    });
  });

  // View Switching
  viewBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      viewBtns.forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      state.setView(e.currentTarget.dataset.view);
    });
  });

  // Modal Handlers (Native HTML5 Dialog API)
  openDialogBtn.addEventListener('click', () => taskDialog.showModal());
  closeDialogBtn.addEventListener('click', () => taskDialog.close());

  taskForm.addEventListener('submit', e => {
    e.preventDefault();
    const title   = document.getElementById('task-title-input').value.trim();
    const status  = document.getElementById('task-status-select').value;
    const dueDate = document.getElementById('task-date-input').value;

    if (title) {
      state.addTask({ title, status, dueDate });
      taskForm.reset();
      document.getElementById('task-date-input').value = new Date().toISOString().split('T')[0];
      taskDialog.close();
    }
  });

  // Global Event Delegation for Task Actions (Checkbox & Delete)
  appView.addEventListener('click', e => {
    const taskItem = e.target.closest('.task-item');
    if (!taskItem) return;

    const taskId = taskItem.dataset.id;

    if (e.target.closest('.task-checkbox')) {
      state.toggleTaskCompletion(taskId);
    } else if (e.target.closest('.delete-task-btn')) {
      state.deleteTask(taskId);
    }
  });

  // Initial Paint
  render();
});
