/**
 * Mindful 4-7-8 Breathing Engine Component
 * Controls guided 4s Inhale -> 7s Hold -> 8s Exhale cycles.
 * Features Web Audio API zero-asset pure sine-wave tone synthesis (220 Hz -> 440 Hz glide).
 */

let isActive = false;
let currentPhaseIndex = 0;
let phaseTimeout = null;
let tickInterval = null;
let secondsRemaining = 0;
let totalCyclesCompleted = 0;

const PHASES = [
  { name: 'inhale', label: 'Inhale clarity...', duration: 4, startFreq: 220, endFreq: 440, cssClass: 'phase-inhale' },
  { name: 'hold',   label: 'Hold still...',     duration: 7, startFreq: 440, endFreq: 440, cssClass: 'phase-hold' },
  { name: 'exhale', label: 'Exhale fragmentation...', duration: 8, startFreq: 440, endFreq: 220, cssClass: 'phase-exhale' }
];

let uiElements = {
  container: null,
  ringInner: null,
  statusText: null,
  timerText: null,
  startBtn: null,
  counterBadge: null
};

/**
 * Initializes the breathing engine DOM elements & event listeners.
 */
export function initBreathingEngine(config = {}) {
  uiElements.container    = document.getElementById(config.containerId || 'breathing-dock');
  uiElements.ringInner    = document.getElementById(config.ringInnerId || 'breathing-ring-inner');
  uiElements.statusText   = document.getElementById(config.statusTextId || 'breathing-status-text');
  uiElements.timerText    = document.getElementById(config.timerTextId || 'breathing-timer-text');
  uiElements.startBtn     = document.getElementById(config.startBtnId || 'breathing-start-btn');
  uiElements.counterBadge = document.getElementById(config.counterBadgeId || 'breathing-counter-badge');

  if (uiElements.startBtn) {
    uiElements.startBtn.addEventListener('click', toggleBreathingCycle);
  }
}

export function toggleBreathingCycle() {
  if (isActive) {
    stopBreathingCycle();
  } else {
    startBreathingCycle();
  }
}

export function startBreathingCycle() {
  if (isActive) return;
  isActive = true;
  currentPhaseIndex = 0;
  totalCyclesCompleted = 0;

  if (uiElements.startBtn) {
    uiElements.startBtn.classList.add('active');
    uiElements.startBtn.innerHTML = `
      <span class="icon-slot" data-icon="checkCircle" aria-hidden="true"></span>
      Stop Mindful Pause`;
  }

  if (uiElements.container) {
    uiElements.container.classList.add('is-breathing');
  }

  runPhase(0);
}

export function stopBreathingCycle() {
  isActive = false;
  if (phaseTimeout) clearTimeout(phaseTimeout);
  if (tickInterval) clearInterval(tickInterval);

  if (uiElements.container) {
    uiElements.container.classList.remove('is-breathing', 'phase-inhale', 'phase-hold', 'phase-exhale');
  }

  if (uiElements.statusText) {
    uiElements.statusText.textContent = 'Ready for mindful pause';
  }

  if (uiElements.timerText) {
    uiElements.timerText.textContent = '4 • 7 • 8';
  }

  if (uiElements.startBtn) {
    uiElements.startBtn.classList.remove('active');
    uiElements.startBtn.innerHTML = `
      <span class="icon-slot" data-icon="spark" aria-hidden="true"></span>
      Start Mindful Pause`;
  }
}

function runPhase(index) {
  if (!isActive) return;

  currentPhaseIndex = index;
  const phase = PHASES[index];
  secondsRemaining = phase.duration;

  // Update CSS phase state class
  if (uiElements.container) {
    uiElements.container.classList.remove('phase-inhale', 'phase-hold', 'phase-exhale');
    uiElements.container.classList.add(phase.cssClass);
  }

  // Update text readouts
  if (uiElements.statusText) {
    uiElements.statusText.textContent = phase.label;
  }
  if (uiElements.timerText) {
    uiElements.timerText.textContent = `${secondsRemaining}s`;
  }

  // Synthesize soft sine wave tone glide
  playToneGlide(phase.startFreq, phase.endFreq, 1.2);

  // Countdown timer interval
  if (tickInterval) clearInterval(tickInterval);
  tickInterval = setInterval(() => {
    secondsRemaining--;
    if (secondsRemaining >= 0 && uiElements.timerText) {
      uiElements.timerText.textContent = `${secondsRemaining}s`;
    }
  }, 1000);

  // Schedule next phase transition
  if (phaseTimeout) clearTimeout(phaseTimeout);
  phaseTimeout = setTimeout(() => {
    if (!isActive) return;
    const nextIndex = (index + 1) % PHASES.length;
    if (nextIndex === 0) {
      totalCyclesCompleted++;
      if (uiElements.counterBadge) {
        uiElements.counterBadge.textContent = `${totalCyclesCompleted} Cycle${totalCyclesCompleted > 1 ? 's' : ''}`;
      }
    }
    runPhase(nextIndex);
  }, phase.duration * 1000);
}

/**
 * Web Audio API Zero-Asset Pure Sine Wave Glide Synthesizer
 * Plays a soothing sine wave tone gliding from startFreq to endFreq with a smooth gain envelope.
 */
function playToneGlide(startFreq, endFreq, durationSec = 1.0) {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';

    const now = ctx.currentTime;
    osc.frequency.setValueAtTime(startFreq, now);
    if (startFreq !== endFreq) {
      osc.frequency.exponentialRampToValueAtTime(endFreq, now + durationSec);
    }

    // Soft gentle gain envelope (fade in -> hold -> fade out)
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(0.12, now + 0.15);
    gain.gain.setValueAtTime(0.12, now + durationSec - 0.2);
    gain.gain.exponentialRampToValueAtTime(0.001, now + durationSec);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + durationSec);
  } catch (err) {
    console.warn('Web Audio breathing tone unavailable:', err);
  }
}
