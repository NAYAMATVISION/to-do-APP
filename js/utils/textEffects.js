/**
 * Kinetic Editorial Text Animation System
 * Features:
 * 1. HTML-safe Decrypt Scrambler with styled character glimmers (.scramble-glyph).
 * 2. Dynamic Kinetic Word Cycler (morphs phrases with character scramble).
 * 3. Interactive Hover Decrypt Binds.
 */

const GLYPHS = ['—', '✦', '✧', '/', '\\', '_', '[', ']', '*', '░', '▒', '▓', '°', '⚡'];

/**
 * Scramble-decrypts simple text inside an element or child container.
 * @param {HTMLElement} element
 * @param {string} targetText
 * @param {number} speedMs
 */
export function decryptText(element, targetText = null, speedMs = 25) {
  if (!element) return;
  const finalString = targetText || element.dataset.originalText || element.textContent.trim();
  if (!element.dataset.originalText) {
    element.dataset.originalText = finalString;
  }

  let step = 0;
  const length = finalString.length;

  if (element._decryptInterval) {
    clearInterval(element._decryptInterval);
  }

  element._decryptInterval = setInterval(() => {
    let outputHtml = '';
    for (let i = 0; i < length; i++) {
      if (finalString[i] === ' ') {
        outputHtml += ' ';
      } else if (i < step) {
        outputHtml += escapeHtml(finalString[i]);
      } else {
        const randomGlyph = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        outputHtml += `<span class="scramble-glyph">${randomGlyph}</span>`;
      }
    }

    element.innerHTML = outputHtml;
    step += 2;

    if (step >= length + 2) {
      clearInterval(element._decryptInterval);
      element._decryptInterval = null;
      element.innerHTML = escapeHtml(finalString);
    }
  }, speedMs);
}

/**
 * Initializes a continuous kinetic word cycler that morphs between phrases.
 * @param {string|HTMLElement} elementOrId
 * @param {Array<string>} phrases
 * @param {number} intervalMs
 */
export function initKineticWordCycler(elementOrId, phrases = [], intervalMs = 3200) {
  const element = typeof elementOrId === 'string' ? document.getElementById(elementOrId) : elementOrId;
  if (!element || !phrases.length) return;

  let currentIndex = 0;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % phrases.length;
    const nextPhrase = phrases[currentIndex];
    decryptText(element, nextPhrase, 30);
  }, intervalMs);
}

/**
 * Binds hover decrypt scramble to all elements matching a CSS selector.
 * @param {string} selector
 */
export function bindHoverDecrypt(selector) {
  document.querySelectorAll(selector).forEach(el => {
    if (!el.dataset.originalText) {
      el.dataset.originalText = el.textContent.trim();
    }

    el.addEventListener('mouseenter', () => {
      decryptText(el, el.dataset.originalText, 25);
    });
  });
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
