import { storage } from './storage.js';
import { auth } from './auth.js';
import { todayISO, addDaysISO } from './utils/dateHelpers.js';

const today = todayISO();
const tomorrow = addDaysISO(today, 1);

export const DEFAULT_SECTIONS = {
  inbox: [
    '(No Section)',
    '22-23-24 august',
    '25 Aug',
    '27 august',
    '29 august',
    '31 august',
    '3-4-5-6-7sept',
    '8sept'
  ],
  fitness: ['Backlog', 'In Progress', 'Done / Review'],
  habits: ['Daily Morning', 'Afternoon Flow', 'Evening Rituals'],
  deepwork: ['Sprint Backlog', 'Active Focus', 'Shipped'],
  errands: ['To Buy', 'In Cart', 'Completed'],
};

export function getDefaultTasks() {
  return [
    // ── 0. Inbox Domain (Exact replica of Todoist Reference Image) ───────────
    // Column 1: (No Section) - 3 pending
    {
      id: 'task-ns-1',
      title: 'NALR',
      domain: 'inbox',
      section: '(No Section)',
      status: 'backlog',
      dueDate: 'Tomorrow',
      dateColor: 'orange',
      completed: false,
    },
    {
      id: 'task-ns-2',
      title: 'SD',
      domain: 'inbox',
      section: '(No Section)',
      status: 'backlog',
      dueDate: 'Friday',
      dateColor: 'purple',
      completed: false,
    },
    {
      id: 'task-ns-3',
      title: 'DNN',
      domain: 'inbox',
      section: '(No Section)',
      status: 'backlog',
      dueDate: '17 Oct',
      dateColor: 'grey',
      completed: false,
    },

    // Column 2: 22-23-24 august - 2 pending
    {
      id: 'task-aug22-1',
      title: 'leetcode 4 questions',
      domain: 'inbox',
      section: '22-23-24 august',
      status: 'in-progress',
      completed: false,
      isExpanded: true,
      subtasks: [
        { id: 'sub-22-1-1', title: 'Ques4', completed: false },
        { id: 'sub-22-1-2', title: 'Ques3', completed: true },
        { id: 'sub-22-1-3', title: 'Ques2', completed: true },
        { id: 'sub-22-1-4', title: 'Ques1', completed: true },
      ],
    },
    {
      id: 'task-aug22-2',
      title: 'NALR(HCF and LCM)',
      domain: 'inbox',
      section: '22-23-24 august',
      status: 'backlog',
      completed: false,
    },
    {
      id: 'task-aug22-3',
      title: 'Assignment',
      domain: 'inbox',
      section: '22-23-24 august',
      status: 'ready-qa',
      completed: true,
      isExpanded: false,
      subtasks: [
        { id: 'sub-22-3-1', title: 'Module 1', completed: true },
        { id: 'sub-22-3-2', title: 'Module 2', completed: true },
        { id: 'sub-22-3-3', title: 'Module 3', completed: true },
      ],
    },
    {
      id: 'task-aug22-4',
      title: 'JS complete the backlog till now',
      domain: 'inbox',
      section: '22-23-24 august',
      status: 'ready-qa',
      completed: true,
    },
    {
      id: 'task-aug22-5',
      title: 'AOC',
      domain: 'inbox',
      section: '22-23-24 august',
      status: 'ready-qa',
      completed: true,
    },
    {
      id: 'task-aug22-6',
      title: 'System Design',
      domain: 'inbox',
      section: '22-23-24 august',
      status: 'ready-qa',
      completed: true,
    },
    {
      id: 'task-aug22-7',
      title: 'decide JS and WEB project',
      domain: 'inbox',
      section: '22-23-24 august',
      status: 'ready-qa',
      completed: true,
    },

    // Column 3: 25 Aug - 2 pending
    {
      id: 'task-aug25-1',
      title: '(hcf and lcm) concept',
      domain: 'inbox',
      section: '25 Aug',
      status: 'backlog',
      completed: false,
    },
    {
      id: 'task-aug25-2',
      title: 'linkedList luv babbar',
      domain: 'inbox',
      section: '25 Aug',
      status: 'backlog',
      completed: false,
    },
    {
      id: 'task-aug25-3',
      title: 'start working on JS project',
      domain: 'inbox',
      section: '25 Aug',
      status: 'ready-qa',
      completed: true,
    },
    {
      id: 'task-aug25-4',
      title: 'leetcode 1 question',
      domain: 'inbox',
      section: '25 Aug',
      status: 'ready-qa',
      completed: true,
    },
    {
      id: 'task-aug25-5',
      title: 'System design',
      domain: 'inbox',
      section: '25 Aug',
      status: 'ready-qa',
      completed: true,
    },

    // Column 4: 27 august - 1 pending
    {
      id: 'task-aug27-1',
      title: 'HCF LCM PPT',
      domain: 'inbox',
      section: '27 august',
      status: 'backlog',
      completed: false,
    },
    {
      id: 'task-aug27-2',
      title: 'linked list',
      domain: 'inbox',
      section: '27 august',
      status: 'ready-qa',
      completed: true,
    },
    {
      id: 'task-aug27-3',
      title: 'serviceNow exam',
      domain: 'inbox',
      section: '27 august',
      status: 'ready-qa',
      completed: true,
    },
    {
      id: 'task-aug27-4',
      title: 'leetcode one question',
      domain: 'inbox',
      section: '27 august',
      status: 'ready-qa',
      completed: true,
    },
    {
      id: 'task-aug27-5',
      title: 'JS project',
      domain: 'inbox',
      section: '27 august',
      status: 'ready-qa',
      completed: true,
    },

    // Column 5: 29 august - 2 pending
    {
      id: 'task-aug29-1',
      title: 'HCF/LCM concept+PPT',
      domain: 'inbox',
      section: '29 august',
      status: 'backlog',
      completed: false,
    },
    {
      id: 'task-aug29-2',
      title: 'linkedList complete revision plus questions',
      domain: 'inbox',
      section: '29 august',
      status: 'backlog',
      completed: false,
    },
    {
      id: 'task-aug29-3',
      title: 'leetcode question',
      domain: 'inbox',
      section: '29 august',
      status: 'ready-qa',
      completed: true,
    },

    // Column 6: 31 august - 1 pending
    {
      id: 'task-aug31-1',
      title: 'DSA',
      domain: 'inbox',
      section: '31 august',
      status: 'in-progress',
      completed: false,
      isExpanded: true,
      subtasks: [
        { id: 'sub-31-1-1', title: 'revise linked list', completed: false },
        { id: 'sub-31-1-2', title: 'leetcode one question', completed: true, comments: 1 },
      ],
    },
    {
      id: 'task-aug31-2',
      title: 'Assignment',
      domain: 'inbox',
      section: '31 august',
      status: 'ready-qa',
      completed: true,
      isExpanded: false,
      subtasks: [
        { id: 'sub-31-2-1', title: 'Problem 1', completed: true },
        { id: 'sub-31-2-2', title: 'Problem 2', completed: true },
      ],
    },
    {
      id: 'task-aug31-3',
      title: 'DBMS(revise complete along with assignment)',
      domain: 'inbox',
      section: '31 august',
      status: 'ready-qa',
      dueDate: '13 Dec',
      dateColor: 'grey',
      completed: true,
    },
    {
      id: 'task-aug31-4',
      title: 'comparable vs comparator',
      domain: 'inbox',
      section: '31 august',
      status: 'ready-qa',
      completed: true,
    },

    // Column 7: 3-4-5-6-7sept - 2 pending
    {
      id: 'task-sept-1',
      title: 'JS work on project',
      domain: 'inbox',
      section: '3-4-5-6-7sept',
      status: 'backlog',
      completed: false,
    },
    {
      id: 'task-sept-2',
      title: 'DBMS',
      domain: 'inbox',
      section: '3-4-5-6-7sept',
      status: 'backlog',
      completed: false,
    },
    {
      id: 'task-sept-3',
      title: 'leetcode ques',
      domain: 'inbox',
      section: '3-4-5-6-7sept',
      status: 'ready-qa',
      completed: true,
    },
    {
      id: 'task-sept-4',
      title: 'system design',
      domain: 'inbox',
      section: '3-4-5-6-7sept',
      status: 'ready-qa',
      completed: true,
    },
    {
      id: 'task-sept-5',
      title: 'assignment',
      domain: 'inbox',
      section: '3-4-5-6-7sept',
      status: 'ready-qa',
      completed: true,
    },
    {
      id: 'task-sept-6',
      title: 'JS complete backlog',
      domain: 'inbox',
      section: '3-4-5-6-7sept',
      status: 'ready-qa',
      completed: true,
    },
    {
      id: 'task-sept-7',
      title: 'leetcode 5 questions',
      domain: 'inbox',
      section: '3-4-5-6-7sept',
      status: 'ready-qa',
      completed: true,
      isExpanded: false,
      subtasks: [
        { id: 'sub-sept-7-1', title: 'Ques 1', completed: true },
        { id: 'sub-sept-7-2', title: 'Ques 2', completed: true },
        { id: 'sub-sept-7-3', title: 'Ques 3', completed: true },
        { id: 'sub-sept-7-4', title: 'Ques 4', completed: true },
        { id: 'sub-sept-7-5', title: 'Ques 5', completed: true },
      ],
    },
    {
      id: 'task-sept-8',
      title: 'capgemini quiz',
      domain: 'inbox',
      section: '3-4-5-6-7sept',
      status: 'ready-qa',
      completed: true,
    },
    {
      id: 'task-sept-9',
      title: 'stack',
      domain: 'inbox',
      section: '3-4-5-6-7sept',
      status: 'ready-qa',
      completed: true,
    },

    // ── 1. Fitness & Health Domain ──────────────────────────────────────────
    { id: 'fit-1', title: 'Morning 20-min workout & stretch',    domain: 'fitness', section: 'In Progress',  status: 'in-progress', dueDate: today,    tag: 'fitness',  priority: 'p1', completed: false },
    { id: 'fit-2', title: 'Drink 8 glasses of water',             domain: 'fitness', section: 'Backlog',      status: 'backlog',     dueDate: today,    tag: 'health',   priority: 'p3', completed: false },
    { id: 'fit-3', title: 'Evening core & flexibility routine',   domain: 'fitness', section: 'Backlog',      status: 'backlog',     dueDate: today,    tag: 'fitness',  priority: 'p2', completed: false },

    // ── 2. Habit Formation Domain ───────────────────────────────────────────
    { id: 'hab-1', title: 'Read 25 pages non-fiction',            domain: 'habits',  section: 'Afternoon Flow', status: 'in-progress', dueDate: today,    tag: 'reading',  priority: 'p3', completed: false },
    { id: 'hab-2', title: 'Daily reflection journal',            domain: 'habits',  section: 'Evening Rituals', status: 'backlog',     dueDate: today,    tag: 'mindset',  priority: 'p2', completed: false },
    { id: 'hab-3', title: '10-minute mindfulness session',        domain: 'habits',  section: 'Daily Morning',  status: 'ready-qa',    dueDate: today,    tag: 'health',   priority: 'p3', completed: true  },

    // ── 3. Deep Work Sprint Domain ──────────────────────────────────────────
    { id: 'dw-1',  title: '2-hour uninterrupted focus sprint',    domain: 'deepwork', section: 'Active Focus', status: 'in-progress', dueDate: today,    tag: 'deepwork', priority: 'p1', completed: false },
    { id: 'dw-2',  title: 'Audit architecture code & tests',      domain: 'deepwork', section: 'Sprint Backlog', status: 'backlog',     dueDate: tomorrow, tag: 'code',     priority: 'p2', completed: false },
    { id: 'dw-3',  title: 'Review Q4 product roadmap OKRs',       domain: 'deepwork', section: 'Sprint Backlog', status: 'backlog',     dueDate: tomorrow, tag: 'planning', priority: 'p2', completed: false },

    // ── 4. Grocery & Errands Domain ─────────────────────────────────────────
    { id: 'err-1', title: 'Pantry essentials restock',            domain: 'errands',  section: 'To Buy', status: 'backlog',     dueDate: today,    tag: 'grocery',  priority: 'p2', completed: false },
    { id: 'err-2', title: 'Pick up prescription at pharmacy',     domain: 'errands',  section: 'In Cart', status: 'in-progress', dueDate: today,    tag: 'health',   priority: 'p1', completed: false },
    { id: 'err-3', title: 'Weekly meal prep items & greens',      domain: 'errands',  section: 'To Buy', status: 'backlog',     dueDate: tomorrow, tag: 'grocery',  priority: 'p3', completed: false },
  ];
}

class StateManager {
  constructor() {
    this._listeners = [];
    this.currentView = 'board';
    this.reloadForUser();
  }

  /**
   * Synchronizes state for current user preserving current view.
   */
  syncUser() {
    this.reloadForUser();
  }

  /**
   * Reloads state when user logs in, switches account, or enters demo mode.
   */
  reloadForUser() {
    const userId = auth.userId;
    const saved = storage.getTasks(userId);
    // Respect user modifications: only fallback to getDefaultTasks if key was never created in storage
    this.tasks = Array.isArray(saved) ? saved : getDefaultTasks();

    // Standardize legacy 'workspace' field to 'domain'
    this.tasks.forEach(t => {
      if (!t.domain) {
        if (t.workspace === 'work') t.domain = 'deepwork';
        else if (t.workspace === 'personal') t.domain = 'fitness';
        else t.domain = t.workspace || 'inbox';
      }
      if (!t.section) {
        if (t.status === 'ready-qa') t.section = 'Done / Review';
        else if (t.status === 'in-progress') t.section = 'In Progress';
        else t.section = '(No Section)';
      }
    });

    this.activeDomain = storage.getDomain(userId) || 'inbox';
    this.currentView  = storage.getView(userId) || 'board';

    // Apply dynamic body data-domain attribute for CSS theme switching
    document.body.dataset.domain = this.activeDomain;

    if (!Array.isArray(saved)) {
      storage.saveTasks(userId, this.tasks);
      storage.saveDomain(userId, this.activeDomain);
      storage.saveView(userId, this.currentView);
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

    // Native PWA App Badging API (Zero-dependency Web API)
    if (typeof navigator !== 'undefined' && 'setAppBadge' in navigator) {
      const pendingCount = this.tasks.filter(t => !t.completed).length;
      if (pendingCount > 0) {
        navigator.setAppBadge(pendingCount).catch(() => {});
      } else if ('clearAppBadge' in navigator) {
        navigator.clearAppBadge().catch(() => {});
      }
    }

    this._listeners.forEach(fn => fn());
  }

  /* ── Queries ─────────────────────────────────────────────────────────────── */
  getFilteredTasks() {
    return this.tasks.filter(t => t.domain === this.activeDomain);
  }

  getSections(domain = this.activeDomain) {
    const userId = auth.userId;
    const custom = storage.getSections(userId, domain);
    if (custom && custom.length > 0) return custom;

    const defaults = DEFAULT_SECTIONS[domain] || ['(No Section)'];

    // Discover any additional sections that tasks might already have
    const taskSections = [...new Set(
      this.tasks.filter(t => t.domain === domain && t.section).map(t => t.section)
    )];

    const merged = [...defaults];
    taskSections.forEach(s => {
      if (!merged.includes(s)) merged.push(s);
    });

    return merged;
  }

  getDomainTaskCounts() {
    const counts = { inbox: 0, fitness: 0, habits: 0, deepwork: 0, errands: 0 };
    this.tasks.forEach(t => {
      if (counts[t.domain] !== undefined) {
        counts[t.domain]++;
      }
    });
    return counts;
  }

  getTodayStats() {
    const domainTasks = this.getFilteredTasks();
    const todayTasks  = domainTasks.filter(t => t.dueDate === todayISO() || t.dueDate === 'Today');
    const total = todayTasks.length || domainTasks.length;
    const done  = todayTasks.length ? todayTasks.filter(t => t.completed).length : domainTasks.filter(t => t.completed).length;
    const pct   = total ? Math.round((done / total) * 100) : 0;
    return { total, done, pct };
  }

  /* ── Mutations ───────────────────────────────────────────────────────────── */
  setDomain(domainKey) {
    const valid = ['inbox', 'fitness', 'habits', 'deepwork', 'errands'];
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

  addSection(domain, sectionName) {
    const clean = sectionName.trim();
    if (!clean) return;
    const currentSections = this.getSections(domain);
    if (!currentSections.includes(clean)) {
      currentSections.push(clean);
      storage.saveSections(auth.userId, domain, currentSections);
      this._notify();
    }
  }

  renameSection(domain, oldName, newName) {
    const cleanNew = newName.trim();
    if (!cleanNew || cleanNew === oldName) return;

    let sections = this.getSections(domain);
    const idx = sections.indexOf(oldName);
    if (idx !== -1) {
      sections[idx] = cleanNew;
    } else {
      sections.push(cleanNew);
    }
    storage.saveSections(auth.userId, domain, sections);

    // Update all tasks belonging to oldName
    this.tasks.forEach(t => {
      if (t.domain === domain && (t.section || '(No Section)') === oldName) {
        t.section = cleanNew;
      }
    });

    this._notify();
  }

  deleteSection(domain, sectionName, deleteTasks = true) {
    let sections = this.getSections(domain);
    sections = sections.filter(s => s !== sectionName);
    storage.saveSections(auth.userId, domain, sections);

    if (deleteTasks) {
      // Remove all tasks in this section
      this.tasks = this.tasks.filter(t => !(t.domain === domain && (t.section || '(No Section)') === sectionName));
    } else {
      // Move tasks to fallback section
      const fallback = sections[0] || '(No Section)';
      this.tasks.forEach(t => {
        if (t.domain === domain && (t.section || '(No Section)') === sectionName) {
          t.section = fallback;
        }
      });
    }

    this._notify();
  }

  clearSectionTasks(domain, sectionName) {
    this.tasks = this.tasks.filter(t => !(t.domain === domain && (t.section || '(No Section)') === sectionName));
    this._notify();
  }

  addTask({ title, status = 'backlog', section = null, dueDate = null, dateColor = null, tag = null, priority = 'p3', subtasks = [] }) {
    const cleanTitle = title.trim();
    if (!cleanTitle) return;

    const sections = this.getSections(this.activeDomain);
    const targetSection = section || (sections.length > 0 ? sections[0] : '(No Section)');
    const isDone = status === 'ready-qa';

    const newTask = {
      id: `t-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      title: cleanTitle,
      domain: this.activeDomain,
      section: targetSection,
      status,
      dueDate: dueDate || todayISO(),
      dateColor: dateColor || null,
      tag: tag ? tag.toLowerCase() : null,
      priority: priority || 'p3',
      completed: isDone,
      subtasks: Array.isArray(subtasks) ? subtasks : [],
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
        section: t.section || (isDone ? 'Done / Review' : 'Backlog'),
        status: t.status || 'backlog',
        dueDate: t.dueDate || todayISO(),
        dateColor: t.dateColor || null,
        tag: t.tag || null,
        priority: t.priority || 'p2',
        completed: isDone,
        title: t.title,
        subtasks: t.subtasks || [],
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

  updateTaskSection(id, newSection) {
    const t = this.tasks.find(t => t.id === id);
    if (t) {
      t.section = newSection;
      this._notify();
    }
  }

  moveTask(id, targetSection, targetIndex = -1) {
    const taskIndex = this.tasks.findIndex(t => t.id === id);
    if (taskIndex === -1) return;

    const [task] = this.tasks.splice(taskIndex, 1);
    task.section = targetSection;

    if (targetIndex >= 0) {
      this.tasks.splice(targetIndex, 0, task);
    } else {
      this.tasks.push(task);
    }
    this._notify();
  }

  toggleTaskCompletion(id) {
    const t = this.tasks.find(t => t.id === id);
    if (t) {
      t.completed = !t.completed;
      if (t.completed) {
        t.status = 'ready-qa';
        // Native Vibration API haptic feedback on completion
        if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
          navigator.vibrate([15]);
        }
      } else if (t.status === 'ready-qa') {
        t.status = 'in-progress';
      }
      this._notify();
    }
  }

  toggleSubtaskCompletion(taskId, subtaskId) {
    const t = this.tasks.find(t => t.id === taskId);
    if (t && Array.isArray(t.subtasks)) {
      const sub = t.subtasks.find(s => s.id === subtaskId);
      if (sub) {
        sub.completed = !sub.completed;
        if (sub.completed && typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
          navigator.vibrate([10]);
        }
        this._notify();
      }
    }
  }

  toggleSubtasksExpanded(taskId) {
    const t = this.tasks.find(t => t.id === taskId);
    if (t && Array.isArray(t.subtasks) && t.subtasks.length > 0) {
      t.isExpanded = !t.isExpanded;
      this._notify();
    }
  }

  deleteTask(id) {
    const idx = this.tasks.findIndex(t => t.id === id);
    if (idx !== -1) {
      const [deleted] = this.tasks.splice(idx, 1);
      this._notify();
      if (typeof window !== 'undefined' && typeof window.showUndoToast === 'function') {
        window.showUndoToast(deleted, idx);
      }
      return deleted;
    }
  }

  restoreTask(task, index = -1) {
    if (!task || !task.id) return;
    if (this.tasks.some(t => t.id === task.id)) return;
    if (index >= 0 && index <= this.tasks.length) {
      this.tasks.splice(index, 0, task);
    } else {
      this.tasks.push(task);
    }
    this._notify();
  }

  updateTask(id, { title, section, dueDate, dateColor, priority, tag }) {
    const t = this.tasks.find(t => t.id === id);
    if (!t) return;
    if (title !== undefined && title.trim()) t.title = title.trim();
    if (section !== undefined) t.section = section;
    if (dueDate !== undefined) t.dueDate = dueDate;
    if (dateColor !== undefined) t.dateColor = dateColor;
    if (priority !== undefined) t.priority = priority;
    if (tag !== undefined) t.tag = tag;
    this._notify();
  }

  addSubtask(taskId, title) {
    const clean = title ? title.trim() : '';
    if (!clean) return;
    const t = this.tasks.find(t => t.id === taskId);
    if (!t) return;
    if (!Array.isArray(t.subtasks)) t.subtasks = [];
    t.subtasks.push({
      id: `sub-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      title: clean,
      completed: false
    });
    t.isExpanded = true;
    this._notify();
  }

  updateSubtask(taskId, subtaskId, newTitle) {
    const clean = newTitle ? newTitle.trim() : '';
    if (!clean) return;
    const t = this.tasks.find(t => t.id === taskId);
    if (!t || !Array.isArray(t.subtasks)) return;
    const sub = t.subtasks.find(s => s.id === subtaskId);
    if (sub) {
      sub.title = clean;
      this._notify();
    }
  }

  deleteSubtask(taskId, subtaskId) {
    const t = this.tasks.find(t => t.id === taskId);
    if (!t || !Array.isArray(t.subtasks)) return;
    t.subtasks = t.subtasks.filter(s => s.id !== subtaskId);
    this._notify();
  }

  /* ── Custom Domain Actions ───────────────────────────────────────────────── */
  triggerDomainAction(domainKey) {
    const today = todayISO();
    switch (domainKey) {
      case 'inbox':
        this.addTask({ title: 'New quick capture task', section: '(No Section)', status: 'backlog', dueDate: 'Today' });
        break;
      case 'fitness':
        this.addTask({ title: 'Drink 500ml water', section: 'Done / Review', status: 'ready-qa', dueDate: today, tag: 'health', priority: 'p3' });
        this.addTask({ title: 'Post-work 15-min stretch', section: 'In Progress', status: 'in-progress', dueDate: today, tag: 'fitness', priority: 'p2' });
        break;
      case 'habits':
        this.getFilteredTasks().forEach(t => {
          t.completed = true;
          t.status = 'ready-qa';
        });
        this._notify();
        break;
      case 'deepwork':
        this.addTask({ title: 'URGENT: Resolve sprint blocker !p1', section: 'Active Focus', status: 'in-progress', dueDate: today, tag: 'code', priority: 'p1' });
        break;
      case 'errands':
        this.tasks = this.tasks.filter(t => !(t.domain === 'errands' && t.completed));
        this._notify();
        break;
    }
  }

  resetToDefaultTemplates() {
    this.tasks = getDefaultTasks();
    storage.saveTasks(auth.userId, this.tasks);
    storage.saveSections(auth.userId, 'inbox', DEFAULT_SECTIONS.inbox);
    this.activeDomain = 'inbox';
    this.currentView = 'board';
    this._notify();
  }
}

export const state = new StateManager();
