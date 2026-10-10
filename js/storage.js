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

  // ── User ID Normalization & Isolated Storage per Account ─────────────────
  _normalizeUserId(userId) {
    if (!userId || userId === 'demo' || userId === 'demo-user' || userId === 'guest') {
      return 'demo';
    }
    return String(userId);
  },

  _getTaskKey(userId) {
    const uid = this._normalizeUserId(userId);
    return `komorebi_tasks_${uid}`;
  },

  getTasks(userId) {
    try {
      const uid = this._normalizeUserId(userId);
      const key = `komorebi_tasks_${uid}`;
      let raw = localStorage.getItem(key);

      // Migration fallback: check legacy keys if demo/guest
      if (raw === null && uid === 'demo') {
        const legacy = localStorage.getItem('komorebi_tasks_demo-user');
        if (legacy !== null) {
          raw = legacy;
          localStorage.setItem(key, legacy);
        }
      }

      return raw !== null ? JSON.parse(raw) : null;
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

  // ── Domain Workspace State ───────────────────────────────────────────────
  getDomain(userId) {
    try {
      const uid = this._normalizeUserId(userId);
      const key = `komorebi_domain_${uid}`;
      return localStorage.getItem(key) || 'inbox';
    } catch {
      return 'inbox';
    }
  },

  saveDomain(userId, domain) {
    try {
      const uid = this._normalizeUserId(userId);
      const key = `komorebi_domain_${uid}`;
      localStorage.setItem(key, domain);
    } catch (err) {
      console.warn('Domain save failed:', err);
    }
  },

  // ── View Mode State ──────────────────────────────────────────────────────
  getView(userId) {
    try {
      const uid = this._normalizeUserId(userId);
      const key = `komorebi_view_${uid}`;
      return localStorage.getItem(key) || 'board';
    } catch {
      return 'board';
    }
  },

  saveView(userId, view) {
    try {
      const uid = this._normalizeUserId(userId);
      const key = `komorebi_view_${uid}`;
      localStorage.setItem(key, view);
    } catch (err) {
      console.warn('View save failed:', err);
    }
  },

  // ── Board Section Headers Persistence ────────────────────────────────────
  getSections(userId, domain) {
    try {
      const uid = this._normalizeUserId(userId);
      const key = `komorebi_sections_${uid}`;
      let raw = localStorage.getItem(key);

      if (raw === null && uid === 'demo') {
        raw = localStorage.getItem('komorebi_sections_demo-user');
      }

      const data = raw ? JSON.parse(raw) : null;
      if (data && Array.isArray(data[domain])) {
        return data[domain];
      }
      return null;
    } catch {
      return null;
    }
  },

  saveSections(userId, domain, sections) {
    try {
      const uid = this._normalizeUserId(userId);
      const key = `komorebi_sections_${uid}`;
      const raw = localStorage.getItem(key);
      const data = raw ? JSON.parse(raw) : {};
      data[domain] = sections;
      localStorage.setItem(key, JSON.stringify(data));
    } catch (err) {
      console.warn('Sections save failed:', err);
    }
  },

  // ── Active Surface (Landing vs. Workspace) Persistence ───────────────────
  getLastSurface() {
    try {
      return localStorage.getItem('komorebi_active_surface');
    } catch {
      return null;
    }
  },

  saveLastSurface(surface) {
    try {
      if (surface) {
        localStorage.setItem('komorebi_active_surface', surface);
      } else {
        localStorage.removeItem('komorebi_active_surface');
      }
    } catch (err) {
      console.warn('Surface save failed:', err);
    }
  },

  // ── Cookie Persistence Helpers ───────────────────────────────────────────
  setCookie(name, value, maxAge = 31536000, path = '/') {
    try {
      document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; path=${path}; max-age=${maxAge}; SameSite=Lax`;
    } catch (err) {
      console.warn('Cookie write error:', err);
    }
  },

  getCookie(name) {
    try {
      const prefix = `${encodeURIComponent(name)}=`;
      const cookies = document.cookie ? document.cookie.split(';') : [];
      for (let c of cookies) {
        c = c.trim();
        if (c.startsWith(prefix)) {
          return decodeURIComponent(c.substring(prefix.length));
        }
      }
      return null;
    } catch (err) {
      console.warn('Cookie read error:', err);
      return null;
    }
  },

  removeCookie(name, path = '/') {
    try {
      document.cookie = `${encodeURIComponent(name)}=; path=${path}; max-age=0; SameSite=Lax`;
    } catch (err) {
      console.warn('Cookie removal error:', err);
    }
  },
};

export const setCookie = storage.setCookie;
export const getCookie = storage.getCookie;
export const removeCookie = storage.removeCookie;
