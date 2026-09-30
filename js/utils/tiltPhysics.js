/**
 * 3D Perspective Card Physics & Specular Glare Tracking
 * Applies real-time cursor perspective rotation (rotateX, rotateY)
 * and cursor-following specular glare reflection.
 */

export function initTiltPhysics(selector = '.template-card, .feature-card') {
  const cards = document.querySelectorAll(selector);

  cards.forEach(card => {
    // 1. Ensure card has relative positioning & 3D perspective
    card.style.transformStyle = 'preserve-3d';

    // 2. Ensure specular glare overlay element exists
    let glare = card.querySelector('.card-glare');
    if (!glare) {
      glare = document.createElement('div');
      glare.className = 'card-glare';
      glare.style.cssText = `
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        border-radius: inherit;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 2;
      `;
      card.appendChild(glare);
    }

    // 3. Mousemove 3D Tilt & Specular Glare Calculation
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const width = rect.width;
      const height = rect.height;

      const rotateX = ((y / height) - 0.5) * -14;
      const rotateY = ((x / width) - 0.5) * 14;

      card.style.transition = 'transform 0.08s cubic-bezier(0.16, 1, 0.3, 1)';
      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`;

      glare.style.opacity = '1';
      glare.style.background = `radial-gradient(circle at ${x.toFixed(1)}px ${y.toFixed(1)}px, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0) 65%)`;
    });

    // 4. Mouseleave Smooth Return
    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      glare.style.opacity = '0';
    });
  });
}
