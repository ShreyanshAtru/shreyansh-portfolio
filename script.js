const dockLinks = [...document.querySelectorAll('.utility-dock a')];
const sections = ['top', 'work', 'about', 'contact'].map((id) => document.getElementById(id));
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      dockLinks.forEach((link) => link.classList.toggle('active', link.hash === `#${entry.target.id}` || (entry.target.id === 'top' && link.hash === '#top')));
    }
  });
}, { rootMargin: '-35% 0px -55% 0px' });
sections.filter(Boolean).forEach((section) => observer.observe(section));
