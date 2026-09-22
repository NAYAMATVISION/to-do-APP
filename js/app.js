import { state }              from './state.js';
import { auth }               from './auth.js';
import { renderListView }     from './views/listView.js';
import { renderBoardView }    from './views/boardView.js';
import { renderCalendarView } from './views/calendarView.js';
import { icons }              from './utils/icons.js';
import { parseNLP, nlpPreviewChips } from './utils/nlpParser.js';
import { todayISO }           from './utils/dateHelpers.js';

/* ── Preset Template Definitions ─────────────────────────────────────────── */
const TEMPLATES = {
  fitness: {
    label: 'Fitness & Health',
    workspace: 'personal',
    tasks: [
      { title: 'Morning 20-min workout',         status: 'backlog',     tag: 'fitness', priority: 'p1' },
      { title: 'Hydrate 8 glasses water',         status: 'backlog',     tag: 'health',  priority: 'p3' },
      { title: 'Evening stretching routine',     status: 'backlog',     tag: 'fitness', priority: 'p2' },
      { title: 'Track daily nutrition & macros', status: 'in-progress', tag: 'health',  priority: 'p2' },
    ],
  },
  habits: {
    label: 'Habit Formation',
    workspace: 'personal',
    tasks: [
      { title: 'Read 25 pages non-fiction',       status: 'backlog',     tag: 'reading',  priority: 'p3' },
      { title: 'Daily reflection journal',       status: 'in-progress', tag: 'mindset',  priority: 'p2' },
      { title: '10-minute mindfulness practice', status: 'backlog',     tag: 'health',   priority: 'p3' },
    ],
  },
  deepwork: {
    label: 'Deep Work Sprint',
    workspace: 'work',
    tasks: [
      { title: '2-hour uninterrupted focus sprint', status: 'in-progress', tag: 'deepwork', priority: 'p1' },
      { title: 'Audit architecture code & tests',   status: 'backlog',     tag: 'code',     priority: 'p2' },
      { title: 'Ship production release build',    status: 'backlog',     tag: 'code',     priority: 'p1' },
    ],
  },
  grocery: {
    label: 'Grocery & Errands',
    workspace: 'personal',
    tasks: [
      { title: 'Pantry essentials restock',       status: 'backlog',     tag: 'grocery', priority: 'p2' },
      { title: 'Pick up prescription',            status: 'backlog',     tag: 'health',  priority: 'p1' },
      { title: 'Weekly meal prep items',          status: 'backlog',     tag: 'grocery', priority: 'p3' },
    ],
  },
};

/* ── Selector Helpers ────────────────────────────────────────────────────── */
const $  = id  => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

/**
 * Mounts vector SVG icons into element containers with data-icon attributes.
 */
function mountIcons(root = document) {
  root.querySelectorAll('[data-icon]').forEach(el => {
    const iconKey = el.dataset.icon;
    if (icons[iconKey]) {
      el.innerHTML = icons[iconKey];
    }
  });
}

/* ── Surface Switching Router ────────────────────────────────────────────── */
function showSurface(surfaceId) {
  const landing = $('landing-surface');
  const app = $('app-surface');

  if (surfaceId === 'app-surface') {
    landing.classList.add('surface-hidden');
    app.classList.remove('surface-hidden');
    renderWorkspace();
  } else {
    app.classList.add('surface-hidden');
    landing.classList.remove('surface-hidden');
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ── User Session & Profile UI Synchronization ────────────────────────────── */
function updateProfileUI() {
  const user = auth.currentUser;
  const avatarEl = $('user-avatar-initial');
  const nameEl   = $('user-display-name');

  if (user) {
    const initial = user.name ? user.name.charAt(0).toUpperCase() : 'U';
    if (avatarEl) avatarEl.textContent = initial;
    if (nameEl)   nameEl.textContent   = user.name || 'User';
  } else {
    if (avatarEl) avatarEl.textContent = 'G';
    if (nameEl)   nameEl.textContent   = 'Guest';
  }
}

/* ── Animated Streak & Completion Ring ───────────────────────────────────── */
function updateCompletionRing() {
  const fill  = $('ring-fill');
  const label = $('streak-label');
  if (!fill || !label) return;

  const { pct, done, total } = state.getTodayStats();
  const circumference = 56.548; // 2 * π * 9
  const offset = circumference - (circumference * pct / 100);

  fill.style.strokeDashoffset = offset;
  label.textContent = total ? `${pct}% Today` : '0% Today';
}

/* ── Workspace Render Orchestration ─────────────────────────────────────── */
function renderWorkspace() {
  updateProfileUI();

  // 1. Sync workspace switcher tabs ("Personal Life" vs "Deep Work")
  $$('.ws-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.workspace === state.activeWorkspace);
  });

  // 2. Sync view toggle buttons
  $$('.view-toggle-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === state.currentView);
  });

  // 3. Update active workspace titles
  const titleMap = {
    personal: 'Personal Life',
    work:     'Deep Work',
  };
  const subMap = {
    personal: 'Organize habits, fitness, and daily errands.',
    work:     'Deep work sprints, code focus, and quarterly milestones.',
  };

  const wsTitle = $('ws-title');
  const wsSub   = $('ws-subtitle');
  if (wsTitle) wsTitle.textContent = titleMap[state.activeWorkspace] || 'Workspace';
  if (wsSub)   wsSub.textContent   = subMap[state.activeWorkspace]   || '';

  // 4. Update streak completion ring
  updateCompletionRing();

  // 5. Render active view module
  const appView = $('app-view');
  if (!appView) return;

  switch (state.currentView) {
    case 'list':     renderListView(appView, state);     break;
    case 'board':    renderBoardView(appView, state);    break;
    case 'calendar': renderCalendarView(appView, state); break;
    default:         renderListView(appView, state);     break;
  }
}

/* ── Web Audio API Zero-Asset Chime Synthesis ────────────────────────────── */
function playPomodoroChime() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    const playNote = (freq, startTime, duration) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.3, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + duration);
    };

    const now = ctx.currentTime;
    // 2-stage harmonic chime
    playNote(523.25, now, 0.4);       // C5
    playNote(659.25, now + 0.15, 0.6); // E5
  } catch (err) {
    console.warn('Web Audio chime playback unavailable:', err);
  }
}

/* ── Web Notifications Permission & Alert Hook ────────────────────────────── */
function triggerNotification(title, body) {
  if (!('Notification' in window)) return;

  if (Notification.permission === 'granted') {
    new Notification(title, { body, icon: '/favicon.ico' });
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        new Notification(title, { body, icon: '/favicon.ico' });
      }
    });
  }
}

/* ── Pomodoro Focus Dock Timer ───────────────────────────────────────────── */
let pomoInterval = null;
let pomoSeconds = 25 * 60;

function initPomodoroDock() {
  const display  = $('pomo-display');
  const playBtn  = $('pomo-play-btn');
  const pauseBtn = $('pomo-pause-btn');
  const resetBtn = $('pomo-reset-btn');
  if (!display || !playBtn || !pauseBtn || !resetBtn) return;

  function updateDisplay() {
    const m = String(Math.floor(pomoSeconds / 60)).padStart(2, '0');
    const s = String(pomoSeconds % 60).padStart(2, '0');
    display.textContent = `${m}:${s}`;
  }

  playBtn.addEventListener('click', () => {
    // Request Notification permission on timer start
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }

    playBtn.style.display  = 'none';
    pauseBtn.style.display = 'inline-flex';

    if (!pomoInterval) {
      pomoInterval = setInterval(() => {
        if (pomoSeconds > 0) {
          pomoSeconds--;
          updateDisplay();
        } else {
          clearInterval(pomoInterval);
          pomoInterval = null;
          playBtn.style.display  = 'inline-flex';
          pauseBtn.style.display = 'none';

          // Synthesize chime via Web Audio API & fire browser notification
          playPomodoroChime();
          triggerNotification('Pomodoro Complete!', '25-minute focus session finished. Take a short break.');
        }
      }, 1000);
    }
  });

  pauseBtn.addEventListener('click', () => {
    clearInterval(pomoInterval);
    pomoInterval = null;
    playBtn.style.display  = 'inline-flex';
    pauseBtn.style.display = 'none';
  });

  resetBtn.addEventListener('click', () => {
    clearInterval(pomoInterval);
    pomoInterval = null;
    pomoSeconds = 25 * 60;
    updateDisplay();
    playBtn.style.display  = 'inline-flex';
    pauseBtn.style.display = 'none';
  });

  updateDisplay();
}

/* ── Natural Language Task Quick-Add Input Bar ────────────────────────────── */
function initNLPBar() {
  const input   = $('nlp-input');
  const preview = $('nlp-preview');
  const form    = $('nlp-form');
  if (!input || !preview || !form) return;

  input.addEventListener('input', () => {
    const parsed = parseNLP(input.value);
    const chips  = parsed ? nlpPreviewChips(parsed) : null;

    if (chips) {
      preview.classList.add('visible');
      preview.innerHTML = `
        <span class="nlp-preview-chip"><span>Task</span> ${esc(chips.titleChip)}</span>
        <span class="nlp-preview-chip"><span>Due</span> ${chips.dateChip}</span>
        <span class="nlp-preview-chip"><span>Priority</span> ${chips.priorityChip.toUpperCase()}</span>
        ${chips.tagChip ? `<span class="nlp-preview-chip"><span>Tag</span> ${chips.tagChip}</span>` : ''}`;
    } else {
      preview.classList.remove('visible');
      preview.innerHTML = '';
    }
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    const parsed = parseNLP(input.value);
    if (!parsed) return;

    // Auto-route tag to appropriate workspace if recognized
    const tagWsMap = {
      personal: 'personal', fitness: 'personal', health: 'personal', grocery: 'personal', reading: 'personal', mindset: 'personal',
      work: 'work', deepwork: 'work', code: 'work', planning: 'work', audio: 'work'
    };

    if (parsed.tag && tagWsMap[parsed.tag]) {
      state.activeWorkspace = tagWsMap[parsed.tag];
    }

    state.addTask({
      title: parsed.title,
      dueDate: parsed.dueDate,
      tag: parsed.tag,
      priority: parsed.priority || 'p3',
    });

    input.value = '';
    preview.classList.remove('visible');
    preview.innerHTML = '';
  });
}

/* ── Task Creation Modal (<dialog id="task-dialog">) ─────────────────────── */
function initTaskDialog() {
  const dialog    = $('task-dialog');
  const form      = $('task-form');
  const openBtn   = $('open-task-dialog-btn');
  const closeBtn  = $('close-dialog-btn');
  const dateInput = $('task-date-input');
  if (!dialog || !form) return;

  if (dateInput) dateInput.value = todayISO();

  if (openBtn)  openBtn.addEventListener('click',  () => dialog.showModal());
  if (closeBtn) closeBtn.addEventListener('click', () => dialog.close());

  dialog.addEventListener('click', e => {
    const r = dialog.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) {
      dialog.close();
    }
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    const titleEl    = $('task-title-input');
    const priorityEl = $('task-priority-select');
    const statusEl   = $('task-status-select');
    const dateEl     = $('task-date-input');
    const tagEl      = $('task-tag-input');
    if (!titleEl || !statusEl || !dateEl) return;

    const title = titleEl.value.trim();
    if (!title) return;

    state.addTask({
      title,
      priority: priorityEl ? priorityEl.value : 'p3',
      status:   statusEl.value,
      dueDate:  dateEl.value || todayISO(),
      tag:      tagEl ? tagEl.value.trim().toLowerCase() || null : null,
    });

    form.reset();
    if (dateEl) dateEl.value = todayISO();
    dialog.close();
  });
}

/* ── Authentication Modal Controller (<dialog id="auth-modal">) ──────────── */
function initAuthModal() {
  const modal       = $('auth-modal');
  const signinForm  = $('signin-form');
  const regForm     = $('register-form');
  const tabSignin   = $('tab-signin-btn');
  const tabRegister = $('tab-register-btn');
  const authTitle   = $('auth-modal-title');
  const authSub     = $('auth-modal-sub');
  const errorEl     = $('auth-error');
  const demoBtn     = $('auth-demo-btn');
  if (!modal) return;

  function showTab(type) {
    errorEl.classList.remove('visible');
    errorEl.textContent = '';

    if (type === 'signin') {
      tabSignin.classList.add('active');
      tabRegister.classList.remove('active');
      signinForm.style.display = 'flex';
      regForm.style.display    = 'none';
      if (authTitle) authTitle.textContent = 'Welcome back';
      if (authSub)   authSub.textContent   = 'Sign in to access your isolated workspace store.';
    } else {
      tabRegister.classList.add('active');
      tabSignin.classList.remove('active');
      regForm.style.display    = 'flex';
      signinForm.style.display = 'none';
      if (authTitle) authTitle.textContent = 'Create an Account';
      if (authSub)   authSub.textContent   = 'Setup your personal isolated workspace.';
    }
  }

  if (tabSignin)   tabSignin.addEventListener('click',   () => showTab('signin'));
  if (tabRegister) tabRegister.addEventListener('click', () => showTab('register'));

  // Nav bar triggers
  $$('#nav-signin-btn, #hero-register-btn, #footer-signin-btn, #footer-register-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const isReg = btn.id.includes('register');
      showTab(isReg ? 'register' : 'signin');
      modal.showModal();
    });
  });

  // Close dialog on backdrop click
  modal.addEventListener('click', e => {
    const r = modal.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) {
      modal.close();
    }
  });

  // Sign In submit handler
  if (signinForm) {
    signinForm.addEventListener('submit', e => {
      e.preventDefault();
      const email = $('signin-email').value;
      const pass  = $('signin-password').value;

      try {
        auth.login({ email, password: pass });
        modal.close();
        state.reloadForUser();
        showSurface('app-surface');
      } catch (err) {
        errorEl.textContent = err.message;
        errorEl.classList.add('visible');
      }
    });
  }

  // Register submit handler
  if (regForm) {
    regForm.addEventListener('submit', e => {
      e.preventDefault();
      const name  = $('register-name').value;
      const email = $('register-email').value;
      const pass  = $('register-password').value;

      try {
        auth.register({ name, email, password: pass });
        modal.close();
        state.reloadForUser();
        showSurface('app-surface');
      } catch (err) {
        errorEl.textContent = err.message;
        errorEl.classList.add('visible');
      }
    });
  }

  // Demo Mode trigger
  if (demoBtn) {
    demoBtn.addEventListener('click', () => {
      auth.startDemo();
      modal.close();
      state.reloadForUser();
      showSurface('app-surface');
    });
  }
}

/* ── Interactive FAQ Accordion ────────────────────────────────────────────── */
function initFAQAccordion() {
  $$('.faq-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
      trigger.setAttribute('aria-expanded', !isExpanded);
      const item = trigger.closest('.faq-item');
      if (item) {
        item.classList.toggle('open', !isExpanded);
      }
    });
  });
}

/* ── Global View Click & Event Delegation ────────────────────────────────── */
function initAppViewDelegation() {
  const appView = $('app-view');
  if (!appView) return;

  appView.addEventListener('click', e => {
    const container =
      e.target.closest('.task-item')    ||
      e.target.closest('.board-card')   ||
      e.target.closest('.cal-task-pill');
    if (!container) return;

    const id = container.dataset.id;
    if (!id) return;

    // Delete task trigger
    if (e.target.closest('.delete-task-btn')) {
      state.deleteTask(id);
      return;
    }

    // Toggle task completion trigger
    if (e.target.classList.contains('task-checkbox')) {
      e.preventDefault();
      state.toggleTaskCompletion(id);
    }
  });
}

/* ── Landing Page Actions & Template Shelf ───────────────────────────────── */
function initLanding() {
  // "Launch App" and "Try Demo" CTA buttons
  $$('[data-action="open-demo"]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (!auth.isAuthenticated) {
        auth.startDemo();
        state.reloadForUser();
      }
      showSurface('app-surface');
    });
  });

  // Template Showcase "Load Template" buttons
  $$('[data-template]').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.template;
      const tpl = TEMPLATES[key];
      if (!tpl) return;

      if (!auth.isAuthenticated) {
        auth.startDemo();
        state.reloadForUser();
      }

      const today = todayISO();
      const seededTasks = tpl.tasks.map(t => ({ ...t, dueDate: today }));

      state.seedTemplate(tpl.workspace, seededTasks);
      showSurface('app-surface');
    });
  });
}

/* ── Application Bootstrap ───────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Render vector SVG icons into data-icon slots
  mountIcons();

  // 2. Subscribe workspace renderer to state observer
  state.subscribe(renderWorkspace);

  // 3. Bind workspace scope tabs ("Personal Life" vs "Deep Work")
  $$('.ws-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => state.setWorkspace(btn.dataset.workspace));
  });

  // 4. Bind view mode toggles (List, Board, Calendar)
  $$('.view-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => state.setView(btn.dataset.view));
  });

  // 5. Bind "Back to main page" button
  const backBtn = $('ws-back-btn');
  if (backBtn) {
    backBtn.addEventListener('click', () => showSurface('landing-surface'));
  }

  // 6. Bind Sign Out button
  const signOutBtn = $('sign-out-btn');
  if (signOutBtn) {
    signOutBtn.addEventListener('click', () => {
      auth.logout();
      state.reloadForUser();
      showSurface('landing-surface');
    });
  }

  // 7. Initialize UI modules
  initLanding();
  initAuthModal();
  initFAQAccordion();
  initNLPBar();
  initTaskDialog();
  initPomodoroDock();
  initAppViewDelegation();

  // 8. Initial Surface Routing
  if (auth.isAuthenticated) {
    showSurface('app-surface');
  } else {
    showSurface('landing-surface');
  }
});

function esc(s) {
  if (!s) return '';
  const d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}
