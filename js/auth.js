import { storage } from './storage.js';

class AuthManager {
  constructor() {
    this.session = storage.getSession();
    this.users = storage.getUsers();
  }

  get currentUser() {
    return this.session ? this.session.user : null;
  }

  get isAuthenticated() {
    return !!this.session;
  }

  get isDemo() {
    return this.session ? this.session.isDemo : false;
  }

  get userId() {
    if (this.session && this.session.user) {
      return this.session.user.id;
    }
    return null;
  }

  /**
   * Registers a new account.
   * @param {string} name
   * @param {string} email
   * @param {string} password
   */
  register({ name, email, password }) {
    const cleanEmail = email.trim().toLowerCase();
    const cleanName = name.trim();

    if (!cleanName || !cleanEmail || !password) {
      throw new Error('Please fill in all required fields.');
    }

    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters.');
    }

    this.users = storage.getUsers();
    if (this.users[cleanEmail]) {
      throw new Error('An account with this email already exists.');
    }

    const userId = `u-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`;
    const user = {
      id: userId,
      name: cleanName,
      email: cleanEmail,
      password, // Mock account storage
      createdAt: new Date().toISOString(),
    };

    this.users[cleanEmail] = user;
    storage.saveUsers(this.users);

    return this._setSession(user, false);
  }

  /**
   * Signs in an existing user.
   * @param {string} email
   * @param {string} password
   */
  login({ email, password }) {
    const cleanEmail = email.trim().toLowerCase();
    this.users = storage.getUsers();

    const user = this.users[cleanEmail];
    if (!user || user.password !== password) {
      throw new Error('Invalid email or password.');
    }

    return this._setSession(user, false);
  }

  /**
   * Launches Demo Mode as Guest.
   */
  startDemo() {
    const demoUser = {
      id: 'demo-user',
      name: 'Guest Explorer',
      email: 'demo@komorebi.workspace',
    };
    return this._setSession(demoUser, true);
  }

  /**
   * Clears active session.
   */
  logout() {
    this.session = null;
    storage.saveSession(null);
  }

  _setSession(user, isDemo = false) {
    this.session = {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      isDemo,
      token: `token-${Date.now()}`,
    };
    storage.saveSession(this.session);
    return this.session;
  }
}

export const auth = new AuthManager();
