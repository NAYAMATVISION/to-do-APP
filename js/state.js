import { storage } from './storage.js';
import { auth } from './auth.js';
import { todayISO, addDaysISO } from './utils/dateHelpers.js';

const today = todayISO();
const tomorrow = addDaysISO(today, 1);

function getDefaultTasks() {
  return [
    // ── Personal Life Workspace ───────────────────────────────────────────
    { id: 'p1', title: 'Morning 20-min run & stretch',    workspace: 'personal', status: 'in-progress', dueDate: today,    tag: 'fitness',  priority: 'p1', completed: false },
    { id: 'p2', title: 'Hydrate — Drink 8 glasses water', workspace: 'personal', status: 'backlog',     dueDate: today,    tag: 'health',   priority: 'p3', completed: false },
    { id: 'p3', title: 'Pick up organic produce & oats', workspace: 'personal', status: 'backlog',     dueDate: today,    tag: 'grocery',  priority: 'p2', completed: false },
    { id: 'p4', title: 'Read 25 pages of Newsreader',     workspace: 'personal', status: 'ready-qa',    dueDate: today,    tag: 'reading',  priority: 'p3', completed: true  },

    // ── Deep Work Workspace ──────────────────────────────────────────────
    { id: 'w1', title: 'Architect Komorebi SPA engine',   workspace: 'work',     status: 'in-progress', dueDate: today,    tag: 'deepwork', priority: 'p1', completed: false },
    { id: 'w2', title: 'Review Q4 product roadmap OKRs',  workspace: 'work',     status: 'backlog',     dueDate: tomorrow, tag: 'planning', priority: 'p2', completed: false },
    { id: 'w3', title: 'Audit web audio API sound chime', workspace: 'work',     status: 'backlog',     dueDate: tomorrow, tag: 'audio',    priority: 'p2', completed: false },
    { id: 'w4', title: 'Finalize Vanilla JS state manager',workspace: 'work',    status: 'ready-qa',    dueDate: today,    tag: 'code',     priority: 'p1', completed: true  },
  ];
}

class StateManager {
  constructor() {
    this._listeners = [];
    this.reloadForUser();
  }

  /**
   * Reloads state when user logs in, switches account, or enters demo mode.
   */
  reloadForUser() {
    const userId = auth.userId;
    const saved = storage.getTasks(userId);
    this.tasks = saved ?? getDefaultTasks();
    this.activeWorkspace = storage.getWorkspace(userId);
    this.currentView = storage.getView(userId);

    if (!saved) {
      storage.saveTasks(userId, this.tasks);
    }
    this._notify();
  }

  /* ── Observer Pattern ────────────────────────────────────────────────────── */
  subscribe(fn) {
    if (typeof fn === 'function') {
      this._listeners.push(fn);
    }
  }

  _notify() {
    const userId = auth.userId;
    storage.saveTasks(userId, this.tasks);
    storage.saveWorkspace(userId, this.activeWorkspace);
    storage.saveView(userId, this.currentView);
    this._listeners.forEach(fn => fn());
  }

  /* ── Queries ─────────────────────────────────────────────────────────────── */
  getFilteredTasks() {
    return this.tasks.filter(t => t.workspace === this.activeWorkspace);
  }

  getTodayStats() {
    const todayTasks = this.tasks.filter(
      t => t.workspace === this.activeWorkspace && t.dueDate === todayISO()
    );
    const total = todayTasks.length;
    const done = todayTasks.filter(t => t.completed).length;
    const pct = total ? Math.round((done / total) * 100) : 0;
    return { total, done, pct };
  }

  /* ── Mutations ───────────────────────────────────────────────────────────── */
  setWorkspace(ws) {
    if (this.activeWorkspace !== ws) {
      this.activeWorkspace = ws;
      this._notify();
    }
  }

  setView(v) {
    if (this.currentView !== v) {
      this.currentView = v;
      this._notify();
    }
  }

  addTask({ title, status = 'backlog', dueDate, tag = null, priority = 'p3' }) {
    const isDone = status === 'ready-qa';
    const newTask = {
      id: `t-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      title,
      workspace: this.activeWorkspace,
      status,
      dueDate: dueDate || todayISO(),
      tag: tag ? tag.toLowerCase() : null,
      priority: priority || 'p3',
      completed: isDone,
    };
    this.tasks.push(newTask);
    this._notify();
  }

  seedTemplate(workspaceId, tasks) {
    this.activeWorkspace = workspaceId;
    this.tasks = this.tasks.filter(t => t.workspace !== workspaceId);

    const now = Date.now();
    tasks.forEach((t, i) => {
      const isDone = t.status === 'ready-qa';
      this.tasks.push({
        id: `tpl-${now}-${i}`,
        workspace: workspaceId,
        status: t.status || 'backlog',
        dueDate: t.dueDate || todayISO(),
        tag: t.tag || null,
        priority: t.priority || 'p2',
        completed: isDone,
        title: t.title,
      });
    });
    this._notify();
  }

  updateTaskStatus(id, status) {
    const t = this.tasks.find(t => t.id === id);
    if (t) {
      t.status = status;
      t.completed = (status === 'ready-qa');
      this._notify();
    }
  }

  toggleTaskCompletion(id) {
    const t = this.tasks.find(t => t.id === id);
    if (t) {
      t.completed = !t.completed;
      if (t.completed) {
        t.status = 'ready-qa';
      } else if (t.status === 'ready-qa') {
        t.status = 'in-progress';
      }
      this._notify();
    }
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this._notify();
  }
}

export const state = new StateManager();
