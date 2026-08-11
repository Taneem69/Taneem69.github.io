/* ============================================================
   main.js  |  Portfolio interactions & animations
   ============================================================ */

/* ── Navbar scroll effect ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.background = window.scrollY > 50
    ? 'rgba(8,13,26,0.97)'
    : 'rgba(8,13,26,0.85)';
}, { passive: true });

/* ── Active nav link on scroll ── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navLinks.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === `#${current}`) a.classList.add('active');
  });
}, { passive: true });

/* ── Hamburger menu ── */
const hamburger = document.querySelector('.hamburger');
const navLinksList = document.querySelector('.nav-links');

hamburger?.addEventListener('click', (e) => {
  e.stopPropagation();
  const isOpen = navLinksList.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
  // animate hamburger to X
  const spans = hamburger.querySelectorAll('span');
  if (isOpen) {
    spans[0].style.transform = 'translateY(7px) rotate(45deg)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
  } else {
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
});

// Close on outside tap/click
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target)) {
    navLinksList.classList.remove('open');
    hamburger?.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
});

// Close menu when a nav link is tapped on mobile
navLinks.forEach(a => {
  a.addEventListener('click', () => {
    navLinksList.classList.remove('open');
    hamburger?.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  });
});

/* ── Scroll-triggered fade-up animations ── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

/* ── Smooth scroll for nav links ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      navLinksList.classList.remove('open');
    }
  });
});

/* ── Typewriter effect for hero role ── */
const roles = [
  'Software Engineering Student',
  'Full-Stack Developer',
  'React & Next.js Developer',
  'NestJS & ASP.NET Developer',
  'AI / ML Enthusiast',
];
let roleIdx = 0, charIdx = 0, deleting = false;
const roleEl = document.querySelector('.hero-role');
function typeWriter() {
  const current = roles[roleIdx];
  if (!deleting) {
    roleEl.textContent = current.slice(0, charIdx + 1);
    charIdx++;
    if (charIdx === current.length) {
      deleting = true;
      setTimeout(typeWriter, 1800);
      return;
    }
  } else {
    roleEl.textContent = current.slice(0, charIdx - 1);
    charIdx--;
    if (charIdx === 0) {
      deleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
    }
  }
  setTimeout(typeWriter, deleting ? 45 : 80);
}
if (roleEl) setTimeout(typeWriter, 800);

/* ── Counter animation for stats ── */
function animateCounter(el, target, duration = 1400) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) { start = target; clearInterval(timer); }
    el.textContent = Number.isInteger(target)
      ? Math.floor(start).toString()
      : start.toFixed(2);
  }, 16);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('[data-count]').forEach(el => {
        animateCounter(el, parseFloat(el.dataset.count));
      });
      statsObserver.disconnect();
    }
  });
}, { threshold: 0.5 });
const statsSection = document.querySelector('.hero-stats');
if (statsSection) statsObserver.observe(statsSection);
