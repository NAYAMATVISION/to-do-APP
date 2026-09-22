/**
 * Multi-Tenant LocalStorage Persistence Engine
 * Supports State Isolation per Authenticated User Account.
 */

const SESSION_KEY = 'komorebi_session_v1';
const USERS_KEY   = 'komorebi_users_v1';

export const storage = {
  // ── Session & User Registry ──────────────────────────────────────────────
  getSession() {
    try {
      const raw = localStorage.getItem(SESSION_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  },

  saveSession(session) {
    try {
      if (session) {
        localStorage.setItem(SESSION_KEY, JSON.stringify(session));
      } else {
        localStorage.removeItem(SESSION_KEY);
      }
    } catch (err) {
      console.warn('Session save failed:', err);
    }
  },

  getUsers() {
    try {
      const raw = localStorage.getItem(USERS_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  },

  saveUsers(users) {
    try {
      localStorage.setItem(USERS_KEY, JSON.stringify(users));
    } catch (err) {
      console.warn('Users save failed:', err);
    }
  },

  // ── Isolated Task Storage per User Account ──────────────────────────────
  _getTaskKey(userId) {
    return userId ? `komorebi_tasks_${userId}` : 'komorebi_tasks_demo';
  },

  getTasks(userId) {
    try {
      const key = this._getTaskKey(userId);
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch (err) {
      console.warn('Task storage read error:', err);
      return null;
    }
  },

  saveTasks(userId, tasks) {
    try {
      const key = this._getTaskKey(userId);
      localStorage.setItem(key, JSON.stringify(tasks));
    } catch (err) {
      console.warn('Task storage write error:', err);
    }
  },

  // ── Workspace State ──────────────────────────────────────────────────────
  getWorkspace(userId) {
    try {
      const key = userId ? `komorebi_ws_${userId}` : 'komorebi_ws_demo';
      return localStorage.getItem(key) || 'personal';
    } catch {
      return 'personal';
    }
  },

  saveWorkspace(userId, ws) {
    try {
      const key = userId ? `komorebi_ws_${userId}` : 'komorebi_ws_demo';
      localStorage.setItem(key, ws);
    } catch (err) {
      console.warn('Workspace save failed:', err);
    }
  },

  // ── View Mode State ──────────────────────────────────────────────────────
  getView(userId) {
    try {
      const key = userId ? `komorebi_view_${userId}` : 'komorebi_view_demo';
      return localStorage.getItem(key) || 'list';
    } catch {
      return 'list';
    }
  },

  saveView(userId, view) {
    try {
      const key = userId ? `komorebi_view_${userId}` : 'komorebi_view_demo';
      localStorage.setItem(key, view);
    } catch (err) {
      console.warn('View save failed:', err);
    }
  },
};
