/**
 * Ambient Canvas Background Aura Component
 * Animates 4 breathing fluid radial orbs (Terracotta #c86d51, Sage #5e6b4e, Ochre #d9822b, Rose #b85444)
 * with mouse-tracking interactive physics and multi-stop radial gradients on requestAnimationFrame.
 * Supports dynamic interactive tint overrides (e.g., manifesto pillar card hover).
 */

let canvas = null;
let ctx = null;
let animFrameId = null;
let isRunning = false;

let width = 0;
let height = 0;
let startTime = Date.now();

let mouseX = 0;
let mouseY = 0;
let targetMouseX = 0;
let targetMouseY = 0;

// Dynamic Aura Tint Lerp State
let targetTintRgb = null; // { r, g, b } or null for default
let currentTintRgb = { r: 200, g: 109, b: 81 }; // lerps toward target

export function initAuraCanvas(containerId = 'aura-canvas') {
  canvas = document.getElementById(containerId);
  if (!canvas) return;

  ctx = canvas.getContext('2d');
  if (!ctx) return;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    if (mouseX === 0 && mouseY === 0) {
      mouseX = targetMouseX = width / 2;
      mouseY = targetMouseY = height / 2;
    }
  }

  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', (e) => {
    targetMouseX = e.clientX;
    targetMouseY = e.clientY;
  });

  resize();
  startAura();
}

export function startAura() {
  if (isRunning) return;
  isRunning = true;
  startTime = Date.now();
  render();
}

export function stopAura() {
  isRunning = false;
  if (animFrameId) {
    cancelAnimationFrame(animFrameId);
    animFrameId = null;
  }
}

/**
 * Dynamically shifts background canvas aura tint color smoothly.
 * @param {string} hexColor e.g. '#c86d51', '#5e6b4e', '#44546a'
 */
export function setAuraTint(hexColor) {
  if (!hexColor) {
    targetTintRgb = null;
    return;
  }
  targetTintRgb = hexToRgb(hexColor);
}

export function resetAuraTint() {
  targetTintRgb = null;
}

function hexToRgb(hex) {
  let c = hex.replace('#', '');
  if (c.length === 3) c = c.split('').map(x => x + x).join('');
  const num = parseInt(c, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255
  };
}

function render() {
  if (!isRunning || !ctx) return;

  const elapsed = (Date.now() - startTime) * 0.001;
  ctx.clearRect(0, 0, width, height);

  // Smooth exponential lerp toward mouse pointer
  mouseX += (targetMouseX - mouseX) * 0.04;
  mouseY += (targetMouseY - mouseY) * 0.04;

  const mOffsetX = (mouseX - width * 0.5);
  const mOffsetY = (mouseY - height * 0.5);

  // Determine active primary orb color based on tint override
  const primaryTarget = targetTintRgb || { r: 200, g: 109, b: 81 };
  currentTintRgb.r += (primaryTarget.r - currentTintRgb.r) * 0.05;
  currentTintRgb.g += (primaryTarget.g - currentTintRgb.g) * 0.05;
  currentTintRgb.b += (primaryTarget.b - currentTintRgb.b) * 0.05;

  const rR = Math.round(currentTintRgb.r);
  const rG = Math.round(currentTintRgb.g);
  const rB = Math.round(currentTintRgb.b);

  // Orb 1: Primary Interactive Tint Orb
  const x1 = width * 0.35 + Math.sin(elapsed * 0.45) * (width * 0.22) + mOffsetX * 0.12;
  const y1 = height * 0.32 + Math.cos(elapsed * 0.35) * (height * 0.18) + mOffsetY * 0.12;
  const r1 = Math.min(width, height) * 0.45 + Math.sin(elapsed * 0.6) * 45;

  const grad1 = ctx.createRadialGradient(x1, y1, 10, x1, y1, r1);
  grad1.addColorStop(0,    `rgba(${rR}, ${rG}, ${rB}, 0.48)`);
  grad1.addColorStop(0.35, `rgba(${rR}, ${rG}, ${rB}, 0.20)`);
  grad1.addColorStop(0.70, `rgba(${rR}, ${rG}, ${rB}, 0.05)`);
  grad1.addColorStop(1,    'rgba(247, 245, 240, 0)');

  ctx.fillStyle = grad1;
  ctx.beginPath();
  ctx.arc(x1, y1, r1, 0, Math.PI * 2);
  ctx.fill();

  // Orb 2: Sage / Olive (#5e6b4e)
  const x2 = width * 0.68 + Math.cos(elapsed * 0.38) * (width * 0.20) - mOffsetX * 0.10;
  const y2 = height * 0.52 + Math.sin(elapsed * 0.48) * (height * 0.18) - mOffsetY * 0.10;
  const r2 = Math.min(width, height) * 0.42 + Math.cos(elapsed * 0.5) * 40;

  const grad2 = ctx.createRadialGradient(x2, y2, 10, x2, y2, r2);
  grad2.addColorStop(0,    'rgba(94, 107, 78, 0.38)');
  grad2.addColorStop(0.35, 'rgba(94, 107, 78, 0.15)');
  grad2.addColorStop(0.70, 'rgba(94, 107, 78, 0.04)');
  grad2.addColorStop(1,    'rgba(247, 245, 240, 0)');

  ctx.fillStyle = grad2;
  ctx.beginPath();
  ctx.arc(x2, y2, r2, 0, Math.PI * 2);
  ctx.fill();

  // Orb 3: Warm Ochre (#d9822b)
  const x3 = width * 0.50 + Math.sin(elapsed * 0.30) * (width * 0.16) + mOffsetX * 0.06;
  const y3 = height * 0.78 + Math.cos(elapsed * 0.42) * (height * 0.14) + mOffsetY * 0.06;
  const r3 = Math.min(width, height) * 0.38 + Math.sin(elapsed * 0.4) * 35;

  const grad3 = ctx.createRadialGradient(x3, y3, 10, x3, y3, r3);
  grad3.addColorStop(0,    'rgba(217, 130, 43, 0.32)');
  grad3.addColorStop(0.40, 'rgba(217, 130, 43, 0.12)');
  grad3.addColorStop(0.75, 'rgba(217, 130, 43, 0.03)');
  grad3.addColorStop(1,    'rgba(247, 245, 240, 0)');

  ctx.fillStyle = grad3;
  ctx.beginPath();
  ctx.arc(x3, y3, r3, 0, Math.PI * 2);
  ctx.fill();

  // Orb 4: Soft Rose / Accent Rust (#b85444)
  const x4 = width * 0.18 + Math.cos(elapsed * 0.50) * (width * 0.12);
  const y4 = height * 0.65 + Math.sin(elapsed * 0.32) * (height * 0.15);
  const r4 = Math.min(width, height) * 0.30 + Math.cos(elapsed * 0.7) * 25;

  const grad4 = ctx.createRadialGradient(x4, y4, 10, x4, y4, r4);
  grad4.addColorStop(0,    'rgba(184, 84, 68, 0.28)');
  grad4.addColorStop(0.40, 'rgba(184, 84, 68, 0.10)');
  grad4.addColorStop(1,    'rgba(247, 245, 240, 0)');

  ctx.fillStyle = grad4;
  ctx.beginPath();
  ctx.arc(x4, y4, r4, 0, Math.PI * 2);
  ctx.fill();

  animFrameId = requestAnimationFrame(render);
}
