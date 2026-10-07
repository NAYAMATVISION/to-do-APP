/**
 * philosophyLens.js — Interactive Split-Screen Lens Drag Math & Web Audio Soundscape Synthesizer
 * Komorebi Workspace — Pure Vanilla JavaScript (ES Module)
 */

/* ── 1. Interactive Split-Screen Lens Drag Math ────────────────────────────── */
export function initPhilosophyLens() {
  const lens = document.getElementById('philosophy-lens');
  const handle = document.getElementById('lens-drag-handle');
  if (!lens || !handle) return;

  let isDragging = false;

  function updateSplit(clientX) {
    const rect = lens.getBoundingClientRect();
    if (rect.width <= 0) return;

    let offsetX = clientX - rect.left;
    let percent = (offsetX / rect.width) * 100;

    // Clamp between 5% and 95% to preserve handle visibility
    percent = Math.max(5, Math.min(95, percent));

    lens.style.setProperty('--split-percent', `${percent.toFixed(2)}%`);
    handle.setAttribute('aria-valuenow', Math.round(percent));
  }

  function onPointerDown(e) {
    isDragging = true;
    lens.classList.add('is-dragging');
    if (handle.setPointerCapture && e.pointerId) {
      handle.setPointerCapture(e.pointerId);
    }
    updateSplit(e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : 0));
  }

  function onPointerMove(e) {
    if (!isDragging) return;
    const clientX = e.clientX !== undefined ? e.clientX : (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
    updateSplit(clientX);
  }

  function onPointerUp(e) {
    if (!isDragging) return;
    isDragging = false;
    lens.classList.remove('is-dragging');
    if (handle.releasePointerCapture && e.pointerId) {
      try { handle.releasePointerCapture(e.pointerId); } catch (_) {}
    }
  }

  // Pointer Events (Mouse, Touch, Stylus)
  handle.addEventListener('pointerdown', onPointerDown);
  window.addEventListener('pointermove', onPointerMove);
  window.addEventListener('pointerup', onPointerUp);
  window.addEventListener('pointercancel', onPointerUp);

  // Fallback for Touch/Mouse on Lens container click
  lens.addEventListener('click', (e) => {
    // Only move on direct click if not handle drag
    if (e.target.closest('#lens-drag-handle')) return;
    updateSplit(e.clientX);
  });

  // Keyboard Navigation Accessibility (Arrow Keys, Home, End)
  handle.addEventListener('keydown', (e) => {
    const currentStr = lens.style.getPropertyValue('--split-percent') || '50%';
    let current = parseFloat(currentStr);
    if (isNaN(current)) current = 50;

    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      e.preventDefault();
      const next = Math.max(5, current - 5);
      lens.style.setProperty('--split-percent', `${next}%`);
      handle.setAttribute('aria-valuenow', Math.round(next));
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      e.preventDefault();
      const next = Math.min(95, current + 5);
      lens.style.setProperty('--split-percent', `${next}%`);
      handle.setAttribute('aria-valuenow', Math.round(next));
    } else if (e.key === 'Home') {
      e.preventDefault();
      lens.style.setProperty('--split-percent', '5%');
      handle.setAttribute('aria-valuenow', 5);
    } else if (e.key === 'End') {
      e.preventDefault();
      lens.style.setProperty('--split-percent', '95%');
      handle.setAttribute('aria-valuenow', 95);
    }
  });
}

/* ── 2. Mindful Audio Ambience (Native Web Audio API Synthesizer) ──────────── */
class StillnessAudioEngine {
  constructor() {
    this.ctx = null;
    this.noiseNode = null;
    this.filterNode = null;
    this.gainNode = null;
    this.isPlaying = false;
  }

  initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
    } else {
      this.play();
    }
    return this.isPlaying;
  }

  play() {
    this.initContext();
    if (!this.ctx) return false;

    try {
      // 5-second buffer of procedural low-pass brown/pink focus soundscape
      const sampleRate = this.ctx.sampleRate;
      const bufferSize = sampleRate * 5;
      const buffer = this.ctx.createBuffer(1, bufferSize, sampleRate);
      const data = buffer.getChannelData(0);

      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        // Warm brown noise integration filter
        lastOut = (lastOut + (0.02 * white)) / 1.02;
        data[i] = lastOut * 3.5;
      }

      this.noiseNode = this.ctx.createBufferSource();
      this.noiseNode.buffer = buffer;
      this.noiseNode.loop = true;

      // Warm low-pass BiquadFilter (cutoff ~320Hz)
      this.filterNode = this.ctx.createBiquadFilter();
      this.filterNode.type = 'lowpass';
      this.filterNode.frequency.setValueAtTime(320, this.ctx.currentTime);

      // Smooth gain fade-in to prevent audio click
      this.gainNode = this.ctx.createGain();
      const now = this.ctx.currentTime;
      this.gainNode.gain.setValueAtTime(0.0001, now);
      this.gainNode.gain.exponentialRampToValueAtTime(0.12, now + 1.0);

      // Audio Graph Connection
      this.noiseNode.connect(this.filterNode);
      this.filterNode.connect(this.gainNode);
      this.gainNode.connect(this.ctx.destination);

      this.noiseNode.start(0);
      this.isPlaying = true;
      return true;
    } catch (err) {
      console.error('Web Audio Playback Error:', err);
      this.isPlaying = false;
      return false;
    }
  }

  stop() {
    if (!this.gainNode || !this.ctx || !this.isPlaying) {
      this.isPlaying = false;
      return false;
    }

    try {
      const now = this.ctx.currentTime;
      this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, now);
      this.gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.5);

      setTimeout(() => {
        if (this.noiseNode) {
          try { this.noiseNode.stop(); } catch (_) {}
          try { this.noiseNode.disconnect(); } catch (_) {}
          this.noiseNode = null;
        }
        this.isPlaying = false;
      }, 500);

      this.isPlaying = false;
      return false;
    } catch (err) {
      this.isPlaying = false;
      return false;
    }
  }
}

export const audioEngine = new StillnessAudioEngine();

export function initAudioAmbience() {
  const toggleBtn = document.getElementById('listen-stillness-btn');
  const labelEl = document.getElementById('stillness-audio-label');
  const statusEl = document.getElementById('stillness-audio-status');
  const visualEl = document.getElementById('stillness-audio-visual');

  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    const isPlaying = audioEngine.toggle();

    if (isPlaying) {
      toggleBtn.classList.add('is-active');
      if (labelEl) labelEl.textContent = 'Pause Focus Soundscape';
      if (statusEl) statusEl.textContent = 'Playing: Low-Pass Brown Noise (Native Web Audio)';
      if (visualEl) visualEl.classList.add('is-playing');
    } else {
      toggleBtn.classList.remove('is-active');
      if (labelEl) labelEl.textContent = 'Listen to Stillness';
      if (statusEl) statusEl.textContent = 'Native Brown/Pink Noise Focus Soundscape';
      if (visualEl) visualEl.classList.remove('is-playing');
    }
  });
}

export function initPhilosophySection() {
  initPhilosophyLens();
  initAudioAmbience();
}
