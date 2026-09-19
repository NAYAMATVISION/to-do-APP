import { storage } from './storage.js';

// Seed data if the user has no existing tasks
const DEFAULT_TASKS = [
  {
    id: 'task-1',
    title: 'Morning 20-min workout',
    workspace: 'personal',
    status: 'in-progress',
    dueDate: '2026-09-19',
    completed: false
  },
  {
    id: 'task-2',
    title: 'Review system design assignment',
    workspace: 'work',
    status: 'backlog',
    dueDate: '2026-09-20',
    completed: false
  },
  {
    id: 'task-3',
    title: 'Buy groceries & fruits',
    workspace: 'personal',
    status: 'backlog',
    dueDate: '2026-09-19',
    completed: false
  }
];

class StateManager {
  constructor() {
    this.tasks = storage.getTasks() || DEFAULT_TASKS;
    this.activeWorkspace = storage.getActiveWorkspace();
    this.currentView = 'list';
    this.listeners = [];

    // Save defaults if clean installation
    if (!storage.getTasks()) {
      storage.saveTasks(this.tasks);
    }
  }

  /**
   * Register a callback to execute whenever state mutates
   * @param {Function} listener 
   */
  subscribe(listener) {
    this.listeners.push(listener);
  }

  /**
   * Notify all subscribed render functions
   */
  notify() {
    storage.saveTasks(this.tasks);
    storage.saveActiveWorkspace(this.activeWorkspace);
    this.listeners.forEach(callback => callback(this));
  }

  /**
   * Get tasks filtered exclusively for the active workspace
   */
  getFilteredTasks() {
    return this.tasks.filter(t => t.workspace === this.activeWorkspace);
  }

  // State mutations
  setWorkspace(workspace) {
    this.activeWorkspace = workspace;
    this.notify();
  }

  setView(viewName) {
    this.currentView = viewName;
    this.notify();
  }

  addTask(taskData) {
    const newTask = {
      id: `task-${Date.now()}`,
      title: taskData.title,
      workspace: this.activeWorkspace,
      status: taskData.status || 'backlog',
      dueDate: taskData.dueDate || new Date().toISOString().split('T')[0],
      completed: false
    };
    this.tasks.push(newTask);
    this.notify();
  }

  updateTaskStatus(taskId, newStatus) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.status = newStatus;
      this.notify();
    }
  }

  toggleTaskCompletion(taskId) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.completed = !task.completed;
      this.notify();
    }
  }

  deleteTask(taskId) {
    this.tasks = this.tasks.filter(t => t.id !== taskId);
    this.notify();
  }
}

export const state = new StateManager();