const sections = document.querySelectorAll('.panel-section[id]');
const navLinks = document.querySelectorAll('.sidebar-nav a');
const visualFrames = document.querySelectorAll('.visual-frame');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('is-active', link.dataset.section === id);
      });
      visualFrames.forEach(frame => {
        frame.classList.toggle('is-active', frame.dataset.visual === id);
      });
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });

sections.forEach(section => sectionObserver.observe(section));

const projetoRows = document.querySelectorAll('.projeto-row[data-project]');
const visualShots = document.querySelectorAll('.visual-shot');

const projetoObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const project = entry.target.dataset.project;
      visualShots.forEach(shot => {
        shot.classList.toggle('is-shown', shot.dataset.project === project);
      });
    }
  });
}, { rootMargin: '-45% 0px -45% 0px' });

projetoRows.forEach(row => projetoObserver.observe(row));