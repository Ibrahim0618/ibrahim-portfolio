const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '×' : '☰';
});

navMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  });
});

const skillCards = document.querySelectorAll('.skill-card');
const popover = document.getElementById('skillPopover');
const popoverTitle = document.getElementById('skillPopoverTitle');
const popoverNote = document.getElementById('skillPopoverNote');
const closePopover = document.getElementById('closeSkillPopover');

skillCards.forEach((card) => {
  card.addEventListener('click', () => {
    skillCards.forEach((item) => item.classList.remove('active'));
    card.classList.add('active');
    popoverTitle.textContent = card.dataset.skill;
    popoverNote.textContent = card.dataset.note;
    popover.classList.add('selected');
    popover.style.boxShadow = '0 0 18px #a855f72b';
  });
});

closePopover.addEventListener('click', () => {
  skillCards.forEach((item) => item.classList.remove('active'));
  popoverTitle.textContent = 'Select a skill';
  popoverNote.textContent = 'Click a skill to see a short note.';
  popover.style.boxShadow = 'none';
});

document.querySelectorAll('a[href*="YOUR_INSTAGRAM_USERNAME"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const toast = document.getElementById('toast');
    toast.textContent = 'Replace YOUR_INSTAGRAM_USERNAME in index.html with your Instagram username.';
    toast.classList.add('show');
    window.setTimeout(() => toast.classList.remove('show'), 3200);
  });
});
