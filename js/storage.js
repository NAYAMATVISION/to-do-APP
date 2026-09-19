// Storage keys
const STORAGE_KEY = 'minimalist_roadmap_tasks';
const WORKSPACE_KEY = 'minimalist_roadmap_active_workspace';

export const storage = {
  /**
   * Retrieves saved tasks from localStorage safely.
   * @returns {Array} Array of task objects or empty array if null/corrupt
   */
  getTasks() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error reading tasks from localStorage:', error);
      return null;
    }
  },

  /**
   * Saves the entire array of tasks into localStorage.
   * @param {Array} tasks - Array of task objects
   */
  saveTasks(tasks) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
      console.error('Error writing tasks to localStorage:', error);
    }
  },

  /**
   * Gets the last selected workspace ('personal' | 'work')
   * @returns {string} Workspace ID
   */
  getActiveWorkspace() {
    return localStorage.getItem(WORKSPACE_KEY) || 'personal';
  },

  /**
   * Persists active workspace selection
   * @param {string} workspaceId 
   */
  saveActiveWorkspace(workspaceId) {
    localStorage.setItem(WORKSPACE_KEY, workspaceId);
  }
};