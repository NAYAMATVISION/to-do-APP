import { storage } from './storage.js';

class AuthManager {
  constructor() {
    this.session = storage.getSession();
    this.users = storage.getUsers();
  }

  get currentUser() {
    return this.session ? this.session.user : null;
  }

  getCurrentUser() {
    return this.currentUser;
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
   * Finds a user by email, name/username, or email prefix.
   * @param {string} identifier
   */
  findUser(identifier) {
    if (!identifier) return null;
    const clean = identifier.trim().toLowerCase();
    this.users = storage.getUsers();

    // 1. Direct key match (case-insensitive)
    for (const key of Object.keys(this.users)) {
      if (key.trim().toLowerCase() === clean) {
        return this.users[key];
      }
    }

    // 2. Value property match: email, name, or username before @
    for (const user of Object.values(this.users)) {
      if (!user) continue;
      const userEmail = (user.email || '').trim().toLowerCase();
      const userName  = (user.name || '').trim().toLowerCase();
      const userPrefix = userEmail.includes('@') ? userEmail.split('@')[0] : '';

      if (userEmail === clean || userName === clean || userPrefix === clean) {
        return user;
      }
    }

    return null;
  }

  /**
   * Returns list of accounts stored on this device.
   * @returns {Array<{name: string, email: string}>}
   */
  getRegisteredAccounts() {
    this.users = storage.getUsers();
    return Object.values(this.users)
      .filter(u => u && u.email)
      .map(u => ({ name: u.name || 'User', email: u.email }));
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
    const cleanPassword = password ? password.trim() : '';

    if (!cleanName || !cleanEmail || !cleanPassword) {
      throw new Error('Please fill in all required fields.');
    }

    if (cleanPassword.length < 6) {
      throw new Error('Password must be at least 6 characters.');
    }

    this.users = storage.getUsers();
    if (this.findUser(cleanEmail)) {
      throw new Error('An account with this email already exists.');
    }

    const userId = `u-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`;
    const user = {
      id: userId,
      name: cleanName,
      email: cleanEmail,
      password: cleanPassword, // Mock account storage
      createdAt: new Date().toISOString(),
    };

    this.users[cleanEmail] = user;
    storage.saveUsers(this.users);

    // Explicitly initialize clean, empty workspace for the new user
    storage.saveTasks(userId, []);
    storage.saveDomain(userId, 'inbox');
    storage.saveView(userId, 'board');
    storage.saveSections(userId, 'inbox', ['(No Section)']);
    storage.saveSections(userId, 'fitness', ['Backlog', 'In Progress', 'Done / Review']);
    storage.saveSections(userId, 'habits', ['Daily Morning', 'Afternoon Flow', 'Evening Rituals']);
    storage.saveSections(userId, 'deepwork', ['Sprint Backlog', 'Active Focus', 'Shipped']);
    storage.saveSections(userId, 'errands', ['To Buy', 'In Cart', 'Completed']);

    return this._setSession(user, false);
  }

  /**
   * Signs in an existing user with email or username.
   * @param {string} email
   * @param {string} password
   */
  login({ email, password }) {
    if (!email || !password) {
      throw new Error('Please provide both your email/username and password.');
    }

    const user = this.findUser(email);
    if (!user) {
      throw new Error('No account found with this email or username.');
    }

    const cleanInputPass = password.trim();
    const cleanSavedPass = (user.password || '').trim();
    const isMatch = user.password === password ||
                    user.password === cleanInputPass ||
                    cleanSavedPass === cleanInputPass;

    if (!isMatch) {
      throw new Error('Incorrect password. Please try again or use "Forgot password?".');
    }

    return this._setSession(user, false);
  }

  /**
   * Resets password for an existing account and automatically logs in.
   * @param {string} email
   * @param {string} newPassword
   */
  resetPassword({ email, newPassword }) {
    if (!email || !newPassword) {
      throw new Error('Please provide your email address and new password.');
    }

    const cleanPass = newPassword.trim();
    if (cleanPass.length < 6) {
      throw new Error('Password must be at least 6 characters.');
    }

    const user = this.findUser(email);
    if (!user) {
      throw new Error(`No account found matching "${email.trim()}".`);
    }

    this.users = storage.getUsers();
    const targetKey = Object.keys(this.users).find(k => this.users[k]?.id === user.id) || (user.email ? user.email.trim().toLowerCase() : user.id);

    user.password = cleanPass;
    this.users[targetKey] = user;
    storage.saveUsers(this.users);

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
    const nameParts = user.name ? user.name.trim().split(/\s+/) : [];
    const initials = nameParts.length >= 2
      ? (nameParts[0][0] + nameParts[nameParts.length - 1][0]).toUpperCase()
      : (user.name ? user.name.slice(0, 2).toUpperCase() : 'U');

    this.session = {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        initials,
      },
      isDemo,
      token: `token-${Date.now()}`,
    };
    storage.saveSession(this.session);
    return this.session;
  }
}

export const auth = new AuthManager();
