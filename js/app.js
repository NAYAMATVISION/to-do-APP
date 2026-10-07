import { state }              from './state.js';
import { auth }               from './auth.js';
import { renderListView }     from './views/listView.js';
import { renderBoardView }    from './views/boardView.js';
import { renderCalendarView } from './views/calendarView.js';
import { icons }              from './utils/icons.js';
import { parseNLP, nlpPreviewChips } from './utils/nlpParser.js';
import { todayISO }           from './utils/dateHelpers.js';
import { initAuraCanvas, startAura, setAuraTint, resetAuraTint } from './utils/auraCanvas.js';
import { decryptText, bindHoverDecrypt, initKineticWordCycler } from './utils/textEffects.js';
import { initTiltPhysics }     from './utils/tiltPhysics.js';
import { initBreathingEngine } from './utils/breathingEngine.js';
import { initPhilosophySection } from './utils/philosophyLens.js';

/* ── Preset Template Definitions per Domain ──────────────────────────────── */
const TEMPLATES = {
  fitness: {
    label: 'Fitness & Health',
    domain: 'fitness',
    tasks: [
      { title: 'Morning 20-min workout & stretch', status: 'backlog',     tag: 'fitness', priority: 'p1' },
      { title: 'Drink 8 glasses of water',         status: 'backlog',     tag: 'health',  priority: 'p3' },
      { title: 'Evening core & flexibility',      status: 'backlog',     tag: 'fitness', priority: 'p2' },
      { title: 'Track daily nutrition & macros',   status: 'in-progress', tag: 'health',  priority: 'p2' },
    ],
  },
  habits: {
    label: 'Habit Formation',
    domain: 'habits',
    tasks: [
      { title: 'Read 25 pages non-fiction',       status: 'backlog',     tag: 'reading',  priority: 'p3' },
      { title: 'Daily reflection journal',       status: 'in-progress', tag: 'mindset',  priority: 'p2' },
      { title: '10-min mindfulness session',     status: 'backlog',     tag: 'health',   priority: 'p3' },
    ],
  },
  deepwork: {
    label: 'Deep Work Sprint',
    domain: 'deepwork',
    tasks: [
      { title: '2-hour uninterrupted focus sprint', status: 'in-progress', tag: 'deepwork', priority: 'p1' },
      { title: 'Audit architecture code & tests',   status: 'backlog',     tag: 'code',     priority: 'p2' },
      { title: 'Review Q4 product roadmap OKRs',    status: 'backlog',     tag: 'planning', priority: 'p2' },
    ],
  },
  errands: {
    label: 'Grocery & Errands',
    domain: 'errands',
    tasks: [
      { title: 'Pantry essentials restock',       status: 'backlog',     tag: 'grocery', priority: 'p2' },
      { title: 'Pick up prescription at pharmacy',status: 'backlog',     tag: 'health',  priority: 'p1' },
      { title: 'Weekly meal prep items & greens', status: 'backlog',     tag: 'grocery', priority: 'p3' },
    ],
  },
};

/* ── DOM Domain Meta Configuration Map ───────────────────────────────────── */
const DOMAIN_META = {
  fitness: {
    name: 'Fitness & Health',
    desc: 'Track active movement, hydration, and stretching goals.',
    icon: 'fitness',
    metricIcon: 'flame',
    actionLabel: 'Quick Hydrate & Stretch',
  },
  habits: {
    name: 'Habit Formation',
    desc: 'Build daily consistency for reading, journaling, and mindfulness.',
    icon: 'target',
    metricIcon: 'activity',
    actionLabel: 'Log Daily Routine',
  },
  deepwork: {
    name: 'Deep Work Sprint',
    desc: 'High-leverage focus sessions, technical execution, and OKRs.',
    icon: 'brain',
    metricIcon: 'clock',
    actionLabel: 'Add Urgent Blocker (!p1)',
  },
  errands: {
    name: 'Grocery & Errands',
    desc: 'Manage pantry restocks, pharmacy runs, and household errands.',
    icon: 'shopping',
    metricIcon: 'checkCircle',
    actionLabel: 'Clear Done Items',
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

/* ── Zero-Dependency IntersectionObserver Scroll Reveal ─────────────────── */
function initScrollReveals() {
  const elements = $$('.reveal-on-scroll');
  if (!elements.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    elements.forEach(el => observer.observe(el));
  } else {
    elements.forEach(el => el.classList.add('is-revealed'));
  }
}

/* ── Scroll-Triggered Rolling Numerical Stat Counters ────────────────────── */
function initRollingCounters() {
  const counterElements = $$('[data-target]');
  if (!counterElements.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.target, 10);
          const suffix = el.dataset.suffix || '';
          animateCounter(el, target, suffix);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.2 });

    counterElements.forEach(el => observer.observe(el));
  }
}

function animateCounter(el, targetNum, suffix = '') {
  let start = 0;
  const duration = 1200;
  const startTime = performance.now();

  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(easeOut * targetNum);

    el.textContent = `${current}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = `${targetNum}${suffix}`;
    }
  }

  requestAnimationFrame(update);
}

/* ── Native View Transitions SPA Router ──────────────────────────────────── */
export function switchSurface(surface) {
  const surfaceId = (surface === 'app' || surface === 'app-surface') ? 'app-surface' : 'landing-surface';

  if (surfaceId === 'app-surface') {
    state.currentView = 'list';
    if (typeof state.syncUser === 'function') {
      state.syncUser();
    } else {
      state.reloadForUser();
    }
  }

  showSurface(surfaceId);
  syncLandingHeaderAuth();
}

function showSurface(surfaceId) {
  const landing = $('landing-surface');
  const app = $('app-surface');

  const updateDom = () => {
    if (surfaceId === 'app-surface') {
      landing.classList.add('surface-hidden');
      app.classList.remove('surface-hidden');
      renderWorkspace();
    } else {
      app.classList.add('surface-hidden');
      landing.classList.remove('surface-hidden');
      startAura();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if ('startViewTransition' in document) {
    document.startViewTransition(updateDom);
  } else {
    updateDom();
  }
}

/* ── User Session & Profile UI Synchronization ────────────────────────────── */
export function syncLandingHeaderAuth() {
  const user = typeof auth.getCurrentUser === 'function' ? auth.getCurrentUser() : auth.currentUser;
  const guestState = $('landing-nav-guest');
  const userCapsule = $('landing-nav-user');
  const avatarEl = $('landing-user-avatar');
  const nameEl = $('landing-user-name');

  if (user && guestState && userCapsule) {
    guestState.style.display = 'none';
    userCapsule.style.display = 'flex';

    let initials = user.initials;
    if (!initials) {
      if (user.name) {
        const parts = user.name.trim().split(/\s+/);
        initials = parts.length >= 2
          ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
          : user.name.slice(0, 2).toUpperCase();
      } else {
        initials = 'U';
      }
    }

    if (avatarEl) avatarEl.textContent = initials;
    if (nameEl) nameEl.textContent = user.name || 'User';
  } else if (guestState && userCapsule) {
    userCapsule.style.display = 'none';
    guestState.style.display = 'flex';
    if (avatarEl) avatarEl.textContent = '';
    if (nameEl) nameEl.textContent = '';
  }
}

function updateProfileUI() {
  const user = typeof auth.getCurrentUser === 'function' ? auth.getCurrentUser() : auth.currentUser;
  const avatarEl = $('user-avatar-initial');
  const nameEl   = $('user-display-name');

  if (user) {
    let initials = user.initials;
    if (!initials) {
      if (user.name) {
        const parts = user.name.trim().split(/\s+/);
        initials = parts.length >= 2
          ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
          : user.name.slice(0, 2).toUpperCase();
      } else {
        initials = 'U';
      }
    }
    if (avatarEl) avatarEl.textContent = initials;
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

/* ── Domain Banner & Ribbon Update ───────────────────────────────────────── */
function updateDomainBannerUI() {
  const meta = DOMAIN_META[state.activeDomain] || DOMAIN_META.fitness;
  const counts = state.getDomainTaskCounts();
  const { done, total } = state.getTodayStats();

  const fitBadge = $('badge-fitness');
  const habBadge = $('badge-habits');
  const dwBadge  = $('badge-deepwork');
  const errBadge = $('badge-errands');
  if (fitBadge) fitBadge.textContent = counts.fitness;
  if (habBadge) habBadge.textContent = counts.habits;
  if (dwBadge)  dwBadge.textContent  = counts.deepwork;
  if (errBadge) errBadge.textContent = counts.errands;

  const titleName = $('domain-name');
  const titleIcon = $('domain-icon');
  const descEl    = $('domain-desc');
  if (titleName) titleName.textContent = meta.name;
  if (descEl)    descEl.textContent    = meta.desc;
  if (titleIcon) {
    titleIcon.dataset.icon = meta.icon;
    titleIcon.innerHTML = icons[meta.icon] || '';
  }

  const metricText = $('domain-metric-text');
  if (metricText) {
    if (state.activeDomain === 'fitness') {
      metricText.textContent = `Active Movement: ${done}/${total} done`;
    } else if (state.activeDomain === 'habits') {
      metricText.textContent = `Habit Consistency: ${done}/${total} today`;
    } else if (state.activeDomain === 'deepwork') {
      metricText.textContent = `Deep Work Focus: ${done}/${total} completed`;
    } else if (state.activeDomain === 'errands') {
      metricText.textContent = `Checklist Clearance: ${done}/${total} cleared`;
    }
  }

  const actionLabel = $('domain-action-label');
  if (actionLabel) actionLabel.textContent = meta.actionLabel;
}

/* ── Workspace Render Orchestration ─────────────────────────────────────── */
function renderWorkspace() {
  updateProfileUI();

  $$('.ws-domain-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.domain === state.activeDomain);
  });

  $$('.view-toggle-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === state.currentView);
  });

  updateDomainBannerUI();
  updateCompletionRing();

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
    new Notification(title, { body });
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        new Notification(title, { body });
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

    const tagDomainMap = {
      fitness: 'fitness', health: 'fitness', workout: 'fitness', stretch: 'fitness', water: 'fitness',
      habits: 'habits', reading: 'habits', mindset: 'habits', journal: 'habits',
      deepwork: 'deepwork', code: 'deepwork', planning: 'deepwork', sprint: 'deepwork', focus: 'deepwork',
      grocery: 'errands', errands: 'errands', shopping: 'errands', pantry: 'errands'
    };

    if (parsed.tag && tagDomainMap[parsed.tag]) {
      state.setDomain(tagDomainMap[parsed.tag]);
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

  $$('#nav-signin-btn, #hero-register-btn, #footer-signin-btn, #footer-register-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const isReg = btn.id.includes('register');
      showTab(isReg ? 'register' : 'signin');
      modal.showModal();
    });
  });

  modal.addEventListener('click', e => {
    const r = modal.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) {
      modal.close();
    }
  });

  if (signinForm) {
    signinForm.addEventListener('submit', e => {
      e.preventDefault();
      const email = $('signin-email').value;
      const pass  = $('signin-password').value;

      try {
        auth.login({ email, password: pass });
        modal.close();
        if (typeof state.syncUser === 'function') state.syncUser();
        else state.reloadForUser();
        switchSurface('app');
      } catch (err) {
        errorEl.textContent = err.message;
        errorEl.classList.add('visible');
      }
    });
  }

  if (regForm) {
    regForm.addEventListener('submit', e => {
      e.preventDefault();
      const name  = $('register-name').value;
      const email = $('register-email').value;
      const pass  = $('register-password').value;

      try {
        auth.register({ name, email, password: pass });
        modal.close();
        if (typeof state.syncUser === 'function') state.syncUser();
        else state.reloadForUser();
        switchSurface('app');
      } catch (err) {
        errorEl.textContent = err.message;
        errorEl.classList.add('visible');
      }
    });
  }

  if (demoBtn) {
    demoBtn.addEventListener('click', () => {
      auth.startDemo();
      modal.close();
      if (typeof state.syncUser === 'function') state.syncUser();
      else state.reloadForUser();
      switchSurface('app');
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

    if (e.target.closest('.delete-task-btn')) {
      state.deleteTask(id);
      return;
    }

    if (e.target.classList.contains('task-checkbox')) {
      e.preventDefault();
      state.toggleTaskCompletion(id);
    }
  });
}

/* ── Landing Page Actions & Template Shelf ───────────────────────────────── */
function initLanding() {
  $$('[data-action="open-demo"]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (!auth.isAuthenticated) {
        auth.startDemo();
        if (typeof state.syncUser === 'function') state.syncUser();
        else state.reloadForUser();
      }
      switchSurface('app');
    });
  });

  $$('[data-template]').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.template;
      const tpl = TEMPLATES[key];
      if (!tpl) return;

      if (!auth.isAuthenticated) {
        auth.startDemo();
        if (typeof state.syncUser === 'function') state.syncUser();
        else state.reloadForUser();
      }

      const today = todayISO();
      const seededTasks = tpl.tasks.map(t => ({ ...t, dueDate: today }));

      state.seedTemplate(tpl.domain, seededTasks);
      switchSurface('app');
    });
  });

  const landingOpenWsBtn = $('landing-open-ws-btn');
  if (landingOpenWsBtn) {
    landingOpenWsBtn.addEventListener('click', (e) => {
      e.preventDefault();
      switchSurface('app');
    });
  }

  const landingSignOutBtn = $('landing-signout-btn');
  if (landingSignOutBtn) {
    landingSignOutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      auth.logout();
      if (typeof state.syncUser === 'function') state.syncUser();
      else state.reloadForUser();
      syncLandingHeaderAuth();
    });
  }
}

/* ── 3-Pillar Manifesto Hover Canvas Aura Shift ───────────────────────────── */
function initPillarMicroInteractions() {
  $$('.pillar-card[data-tint]').forEach(card => {
    const tint = card.dataset.tint;
    card.addEventListener('mouseenter', () => setAuraTint(tint));
    card.addEventListener('mouseleave', () => resetAuraTint());
    card.addEventListener('click', () => setAuraTint(tint));
  });
}

/* ── Cognitive Drag Index Self-Audit Checklist ────────────────────────────── */
function initCognitiveDragAudit() {
  const form = $('audit-form');
  const scoreText = $('audit-score-text');
  const recTitle  = $('audit-rec-title');
  const recDesc   = $('audit-rec-desc');
  const seedBtn   = $('audit-seed-btn');
  if (!form || !scoreText || !recTitle || !recDesc || !seedBtn) return;

  function updateAudit() {
    const checked = form.querySelectorAll('.audit-checkbox-input:checked');
    const count = checked.length;

    let scoreLabel = '0% \u2013 Calm Horizon';
    let titleStr   = 'Recommended Preset: Balanced Life Horizon';
    let descStr    = 'Your current setup shows zero cognitive drag. Explore all 4 domain workspaces.';
    let targetDomain = 'fitness';

    if (count === 1) {
      scoreLabel = '33% \u2013 Low Drag';
      titleStr   = 'Recommended Preset: Habit Formation + Fitness';
      descStr    = 'Strengthen personal routines and health habits before workload escalates.';
      targetDomain = 'habits';
    } else if (count === 2) {
      scoreLabel = '66% \u2013 Moderate Drag';
      titleStr   = 'Recommended Preset: Deep Work Sprint + Habit Formation';
      descStr    = 'Isolate focus sprints with strict 25-minute Pomodoro intervals.';
      targetDomain = 'deepwork';
    } else if (count === 3) {
      scoreLabel = '100% \u2013 Severe Drag';
      titleStr   = 'Recommended Preset: Deep Work Sprint + Urgent Clearance';
      descStr    = 'High cognitive fragmentation detected. Seeding urgent focus & errand clearance.';
      targetDomain = 'deepwork';
    }

    scoreText.textContent = scoreLabel;
    recTitle.textContent  = titleStr;
    recDesc.textContent   = descStr;

    seedBtn.style.display = count > 0 ? 'inline-flex' : 'none';
    seedBtn.dataset.targetDomain = targetDomain;
  }

  form.querySelectorAll('.audit-checkbox-input').forEach(chk => {
    chk.addEventListener('change', updateAudit);
  });

  seedBtn.addEventListener('click', () => {
    if (!auth.isAuthenticated) {
      auth.startDemo();
      if (typeof state.syncUser === 'function') state.syncUser();
      else state.reloadForUser();
    }

    const domain = seedBtn.dataset.targetDomain || 'deepwork';
    const tpl = TEMPLATES[domain] || TEMPLATES.deepwork;
    const today = todayISO();
    const seeded = tpl.tasks.map(t => ({ ...t, dueDate: today }));

    state.seedTemplate(domain, seeded);
    switchSurface('app');
  });

  updateAudit();
}

/* ── Application Bootstrap ───────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Render vector SVG icons into data-icon slots
  mountIcons();

  // 2. Initialize Ambient Canvas Fluid Aura
  initAuraCanvas('aura-canvas');

  // 3. Initialize 3D Perspective Card Tilt Physics & Glare
  initTiltPhysics('.template-card, .feature-card');

  // 4. Bind Hover Decrypt Scramble to titles and navigation headers
  bindHoverDecrypt('.decrypt-on-hover, .section-title, .nav-brand, .template-name');

  // 5. Initialize Kinetic Word Cycler in Hero Headline
  initKineticWordCycler('kinetic-word-switcher', [
    'Deep Work Sprints',
    'Daily Habit Routines',
    'Fitness & Movement',
    'Grocery & Errands'
  ], 3200);

  // 6. Trigger Hero Eyebrow Initial Decrypt Scramble
  const heroEyebrow = document.querySelector('.hero-eyebrow');
  if (heroEyebrow) {
    decryptText(heroEyebrow, null, 25);
  }

  // 6. Initialize IntersectionObserver Scroll Reveals & Rolling Stat Counters
  initScrollReveals();
  initRollingCounters();

  // 7. Subscribe workspace renderer to state observer
  state.subscribe(renderWorkspace);

  // 8. Bind 4-domain ribbon buttons (fitness, habits, deepwork, errands)
  $$('.ws-domain-btn').forEach(btn => {
    btn.addEventListener('click', () => state.setDomain(btn.dataset.domain));
  });

  // 9. Bind domain banner quick action button
  const domainActionBtn = $('domain-quick-action-btn');
  if (domainActionBtn) {
    domainActionBtn.addEventListener('click', () => state.triggerDomainAction(state.activeDomain));
  }

  // 10. Bind view mode toggles (List, Board, Calendar)
  $$('.view-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => state.setView(btn.dataset.view));
  });

  // 11. Bind "Back to main page" button
  const backBtn = $('ws-back-btn');
  if (backBtn) {
    backBtn.addEventListener('click', () => switchSurface('landing'));
  }

  // 12. Bind Sign Out button
  const signOutBtn = $('sign-out-btn');
  if (signOutBtn) {
    signOutBtn.addEventListener('click', () => {
      auth.logout();
      if (typeof state.syncUser === 'function') state.syncUser();
      else state.reloadForUser();
      switchSurface('landing');
    });
  }

  // 13. Initialize UI modules
  initLanding();
  initAuthModal();
  initFAQAccordion();
  initNLPBar();
  initTaskDialog();
  initPomodoroDock();
  initAppViewDelegation();
  initPillarMicroInteractions();
  initBreathingEngine();
  initCognitiveDragAudit();
  initPhilosophySection();

  // 14. Initial Surface Routing — Always land on Home Page on reload
  switchSurface('landing');
});

function esc(s) {
  if (!s) return '';
  const d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}
