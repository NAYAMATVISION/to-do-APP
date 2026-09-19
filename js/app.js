import { state }             from './state.js';
import { renderListView }    from './views/listView.js';
import { renderBoardView }   from './views/boardView.js';
import { renderCalendarView } from './views/calendarView.js';
import { icons }             from './utils/icons.js';

document.addEventListener('DOMContentLoaded', () => {

  // ── Element refs (all guarded) ──────────────────────────────────────────
  const appView       = document.getElementById('app-view');
  const projectTitle  = document.getElementById('project-title');
  const taskDialog    = document.getElementById('task-dialog');
  const taskForm      = document.getElementById('task-form');
  const openDialogBtn = document.getElementById('open-task-dialog-btn');
  const closeDialogBtn= document.getElementById('close-dialog-btn');
  const dateInput     = document.getElementById('task-date-input');

  // Abort early if the core shell is missing (e.g. wrong HTML loaded)
  if (!appView || !taskDialog || !taskForm) {
    console.error('[app] Critical DOM elements missing — check index.html');
    return;
  }

  // ── Mount SVG icons into every [data-icon] slot ─────────────────────────
  // Covers workspace buttons and the New Task button in the header
  document.querySelectorAll('.icon-slot[data-icon]').forEach(slot => {
    const key = slot.dataset.icon;
    if (icons[key]) slot.innerHTML = icons[key];
  });

  // ── Set today as default date in the dialog ─────────────────────────────
  if (dateInput) dateInput.value = new Date().toISOString().split('T')[0];

  // ── Core render function ────────────────────────────────────────────────
  function render() {
    // Update page title
    if (projectTitle) {
      projectTitle.textContent =
        state.activeWorkspace === 'personal' ? 'Personal Workspace' : 'Work & Projects';
    }

    // Sync workspace button active states
    document.querySelectorAll('.ws-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.workspace === state.activeWorkspace);
    });

    // Sync view button active states
    document.querySelectorAll('.view-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.view === state.currentView);
    });

    // Route to the correct view renderer
    switch (state.currentView) {
      case 'list':     renderListView(appView, state);     break;
      case 'board':    renderBoardView(appView, state);    break;
      case 'calendar': renderCalendarView(appView, state); break;
      default:
        appView.innerHTML = `<p style="padding:40px 0;color:var(--text-muted);text-align:center">
          Unknown view: ${state.currentView}</p>`;
    }
  }

  // Subscribe render to all state mutations
  state.subscribe(render);

  // ── Workspace switcher ──────────────────────────────────────────────────
  document.querySelectorAll('.ws-btn').forEach(btn => {
    btn.addEventListener('click', () => state.setWorkspace(btn.dataset.workspace));
  });

  // ── View switcher ───────────────────────────────────────────────────────
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => state.setView(btn.dataset.view));
  });

  // ── Dialog open / close ─────────────────────────────────────────────────
  if (openDialogBtn) openDialogBtn.addEventListener('click', () => taskDialog.showModal());
  if (closeDialogBtn) closeDialogBtn.addEventListener('click', () => taskDialog.close());

  // Close on backdrop click
  taskDialog.addEventListener('click', e => {
    const r = taskDialog.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right ||
        e.clientY < r.top  || e.clientY > r.bottom) {
      taskDialog.close();
    }
  });

  // ── Task form submission ────────────────────────────────────────────────
  taskForm.addEventListener('submit', e => {
    e.preventDefault();

    const titleEl  = document.getElementById('task-title-input');
    const statusEl = document.getElementById('task-status-select');
    const dateEl   = document.getElementById('task-date-input');

    if (!titleEl || !statusEl || !dateEl) return;

    const title   = titleEl.value.trim();
    const status  = statusEl.value;
    const dueDate = dateEl.value;

    if (!title) return;

    state.addTask({ title, status, dueDate });
    taskForm.reset();
    if (dateEl) dateEl.value = new Date().toISOString().split('T')[0];
    taskDialog.close();
  });

  // ── Global delegated click handler for task actions ─────────────────────
  // Handles: checkbox toggle and delete — works across List, Board, Calendar
  appView.addEventListener('click', e => {
    // Find the closest task container regardless of which view is active
    const container =
      e.target.closest('.task-item')    ||
      e.target.closest('.board-card')   ||
      e.target.closest('.cal-task-pill');

    if (!container) return;

    const taskId = container.dataset.id;
    if (!taskId) return;

    if (e.target.closest('.delete-task-btn')) {
      state.deleteTask(taskId);
      return;
    }

    if (e.target.classList.contains('task-checkbox')) {
      state.toggleTaskCompletion(taskId);
    }
  });

  // ── Initial paint ───────────────────────────────────────────────────────
  render();
});
