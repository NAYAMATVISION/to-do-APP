const TASKS_KEY     = 'roadmap_tasks_v1';
const WORKSPACE_KEY = 'roadmap_workspace_v1';

export const storage = {
  getTasks() {
    try {
      const raw = localStorage.getItem(TASKS_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  },

  saveTasks(tasks) {
    try {
      localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
    } catch {
      // Storage quota exceeded — fail silently
    }
  },

  getActiveWorkspace() {
    return localStorage.getItem(WORKSPACE_KEY) || 'personal';
  },

  saveActiveWorkspace(id) {
    localStorage.setItem(WORKSPACE_KEY, id);
  },
};
