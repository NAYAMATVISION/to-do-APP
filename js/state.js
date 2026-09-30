import { storage } from './storage.js';
import { auth } from './auth.js';
import { todayISO, addDaysISO } from './utils/dateHelpers.js';

const today = todayISO();
const tomorrow = addDaysISO(today, 1);

function getDefaultTasks() {
  return [
    // ── 1. Fitness & Health Domain ──────────────────────────────────────────
    { id: 'fit-1', title: 'Morning 20-min workout & stretch',    domain: 'fitness', status: 'in-progress', dueDate: today,    tag: 'fitness',  priority: 'p1', completed: false },
    { id: 'fit-2', title: 'Drink 8 glasses of water',             domain: 'fitness', status: 'backlog',     dueDate: today,    tag: 'health',   priority: 'p3', completed: false },
    { id: 'fit-3', title: 'Evening core & flexibility routine',   domain: 'fitness', status: 'backlog',     dueDate: today,    tag: 'fitness',  priority: 'p2', completed: false },

    // ── 2. Habit Formation Domain ───────────────────────────────────────────
    { id: 'hab-1', title: 'Read 25 pages non-fiction',            domain: 'habits',  status: 'in-progress', dueDate: today,    tag: 'reading',  priority: 'p3', completed: false },
    { id: 'hab-2', title: 'Daily reflection journal',            domain: 'habits',  status: 'backlog',     dueDate: today,    tag: 'mindset',  priority: 'p2', completed: false },
    { id: 'hab-3', title: '10-minute mindfulness session',        domain: 'habits',  status: 'ready-qa',    dueDate: today,    tag: 'health',   priority: 'p3', completed: true  },

    // ── 3. Deep Work Sprint Domain ──────────────────────────────────────────
    { id: 'dw-1',  title: '2-hour uninterrupted focus sprint',    domain: 'deepwork', status: 'in-progress', dueDate: today,    tag: 'deepwork', priority: 'p1', completed: false },
    { id: 'dw-2',  title: 'Audit architecture code & tests',      domain: 'deepwork', status: 'backlog',     dueDate: tomorrow, tag: 'code',     priority: 'p2', completed: false },
    { id: 'dw-3',  title: 'Review Q4 product roadmap OKRs',       domain: 'deepwork', status: 'backlog',     dueDate: tomorrow, tag: 'planning', priority: 'p2', completed: false },

    // ── 4. Grocery & Errands Domain ─────────────────────────────────────────
    { id: 'err-1', title: 'Pantry essentials restock',            domain: 'errands',  status: 'backlog',     dueDate: today,    tag: 'grocery',  priority: 'p2', completed: false },
    { id: 'err-2', title: 'Pick up prescription at pharmacy',     domain: 'errands',  status: 'in-progress', dueDate: today,    tag: 'health',   priority: 'p1', completed: false },
    { id: 'err-3', title: 'Weekly meal prep items & greens',      domain: 'errands',  status: 'backlog',     dueDate: tomorrow, tag: 'grocery',  priority: 'p3', completed: false },
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

    // Standardize legacy 'workspace' field to 'domain'
    this.tasks.forEach(t => {
      if (!t.domain) {
        if (t.workspace === 'work') t.domain = 'deepwork';
        else if (t.workspace === 'personal') t.domain = 'fitness';
        else t.domain = t.workspace || 'fitness';
      }
    });

    this.activeDomain = storage.getDomain(userId);
    this.currentView   = storage.getView(userId);

    // Apply dynamic body data-domain attribute for CSS theme switching
    document.body.dataset.domain = this.activeDomain;

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
    document.body.dataset.domain = this.activeDomain;

    storage.saveTasks(userId, this.tasks);
    storage.saveDomain(userId, this.activeDomain);
    storage.saveView(userId, this.currentView);

    this._listeners.forEach(fn => fn());
  }

  /* ── Queries ─────────────────────────────────────────────────────────────── */
  getFilteredTasks() {
    return this.tasks.filter(t => t.domain === this.activeDomain);
  }

  getDomainTaskCounts() {
    const counts = { fitness: 0, habits: 0, deepwork: 0, errands: 0 };
    this.tasks.forEach(t => {
      if (counts[t.domain] !== undefined) {
        counts[t.domain]++;
      }
    });
    return counts;
  }

  getTodayStats() {
    const domainTasks = this.getFilteredTasks();
    const todayTasks  = domainTasks.filter(t => t.dueDate === todayISO());
    const total = todayTasks.length;
    const done  = todayTasks.filter(t => t.completed).length;
    const pct   = total ? Math.round((done / total) * 100) : 0;
    return { total, done, pct };
  }

  /* ── Mutations ───────────────────────────────────────────────────────────── */
  setDomain(domainKey) {
    const valid = ['fitness', 'habits', 'deepwork', 'errands'];
    if (valid.includes(domainKey) && this.activeDomain !== domainKey) {
      this.activeDomain = domainKey;
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
      domain: this.activeDomain,
      status,
      dueDate: dueDate || todayISO(),
      tag: tag ? tag.toLowerCase() : null,
      priority: priority || 'p3',
      completed: isDone,
    };
    this.tasks.push(newTask);
    this._notify();
  }

  seedTemplate(domainKey, tasks) {
    this.activeDomain = domainKey;
    this.tasks = this.tasks.filter(t => t.domain !== domainKey);

    const now = Date.now();
    tasks.forEach((t, i) => {
      const isDone = t.status === 'ready-qa';
      this.tasks.push({
        id: `tpl-${now}-${i}`,
        domain: domainKey,
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

  /* ── Custom Domain Actions ───────────────────────────────────────────────── */
  triggerDomainAction(domainKey) {
    const today = todayISO();
    switch (domainKey) {
      case 'fitness':
        this.addTask({ title: 'Drink 500ml water', status: 'ready-qa', dueDate: today, tag: 'health', priority: 'p3' });
        this.addTask({ title: 'Post-work 15-min stretch', status: 'in-progress', dueDate: today, tag: 'fitness', priority: 'p2' });
        break;
      case 'habits':
        this.getFilteredTasks().forEach(t => {
          t.completed = true;
          t.status = 'ready-qa';
        });
        this._notify();
        break;
      case 'deepwork':
        this.addTask({ title: 'URGENT: Resolve sprint blocker !p1', status: 'in-progress', dueDate: today, tag: 'code', priority: 'p1' });
        break;
      case 'errands':
        this.tasks = this.tasks.filter(t => !(t.domain === 'errands' && t.completed));
        this._notify();
        break;
    }
  }
}

export const state = new StateManager();
