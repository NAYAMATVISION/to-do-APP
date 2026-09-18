// Application entry point

// Application entry point
document.addEventListener('DOMContentLoaded', () => {
  console.log('Roadmap App initialized');

  const viewButtons = document.querySelectorAll('.view-btn');
  viewButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      viewButtons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      console.log(`Switched to: ${e.target.dataset.view}`);
    });
  });
});