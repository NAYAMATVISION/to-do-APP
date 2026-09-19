import { storage } from './storage.js';

const DEFAULT_TASKS = [
  { id: 'task-1', title: 'Morning 20-min workout',          workspace: 'personal', status: 'in-progress', dueDate: '2026-09-19', completed: false },
  { id: 'task-2', title: 'Review system design assignment', workspace: 'work',     status: 'backlog',     dueDate: '2026-09-20', completed: false },
  { id: 'task-3', title: 'Buy groceries and fruits',        workspace: 'personal', status: 'backlog',     dueDate: '2026-09-19', completed: false },
  { id: 'task-4', title: 'Write sprint retrospective notes',workspace: 'work',     status: 'in-progress', dueDate: '2026-09-21', completed: false },
  { id: 'task-5', title: 'Read 30 pages of current book',   workspace: 'personal', status: 'ready-qa',    dueDate: '2026-09-22', completed: false },
];

class StateManager {
  constructor() {
    const saved = storage.getTasks();
    this.tasks           = saved ?? DEFAULT_TASKS;
    this.activeWorkspace = storage.getActiveWorkspace();
    this.currentView     = 'list';
    this._listeners      = [];

    if (!saved) storage.saveTasks(this.tasks);
  }

  subscribe(fn) {
    this._listeners.push(fn);
  }

  _notify() {
    storage.saveTasks(this.tasks);
    storage.saveActiveWorkspace(this.activeWorkspace);
    this._listeners.forEach(fn => fn());
  }

  getFilteredTasks() {
    return this.tasks.filter(t => t.workspace === this.activeWorkspace);
  }

  setWorkspace(ws) {
    this.activeWorkspace = ws;
    this._notify();
  }

  setView(view) {
    this.currentView = view;
    this._notify();
  }

  addTask({ title, status = 'backlog', dueDate }) {
    this.tasks.push({
      id:        `task-${Date.now()}`,
      title,
      workspace: this.activeWorkspace,
      status,
      dueDate:   dueDate || new Date().toISOString().split('T')[0],
      completed: false,
    });
    this._notify();
  }

  updateTaskStatus(id, status) {
    const t = this.tasks.find(t => t.id === id);
    if (t) { t.status = status; this._notify(); }
  }

  toggleTaskCompletion(id) {
    const t = this.tasks.find(t => t.id === id);
    if (t) { t.completed = !t.completed; this._notify(); }
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this._notify();
  }
}

export const state = new StateManager();
