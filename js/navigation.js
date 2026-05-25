/* ── PAGE NAVIGATION ── */
function nav(id, linkEl, closeMobile) {
  // hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // show target
  const pg = document.getElementById('page-' + id);
  if (pg) pg.classList.add('active');

  // update nav active state
  document.querySelectorAll('#main-nav a, #mobile-nav a').forEach(a => a.classList.remove('active'));
  if (linkEl) linkEl.classList.add('active');

  // close mobile menu
  if (closeMobile) toggleMenu(true);

  // scroll to top
  window.scrollTo({ top:0, behavior:'instant' });

  // kick off reveal animations
  setTimeout(initReveal, 60);
  return false;
}

/* ── HAMBURGER ── */
function toggleMenu(forceClose) {
  const ham = document.getElementById('hamburger');
  const mn  = document.getElementById('mobile-nav');
  const isOpen = ham.classList.contains('open');
  if (forceClose || isOpen) {
    ham.classList.remove('open');
    mn.classList.remove('open');
  } else {
    ham.classList.add('open');
    mn.classList.add('open');
  }
}

/* close mobile nav on outside click */
document.addEventListener('click', e => {
  const ham = document.getElementById('hamburger');
  const mn  = document.getElementById('mobile-nav');
  if (mn.classList.contains('open') && !ham.contains(e.target) && !mn.contains(e.target)) {
    toggleMenu(true);
  }
});

/* ── SCROLL HEADER ── */
window.addEventListener('scroll', () => {
  document.getElementById('header').classList.toggle('scrolled', window.scrollY > 20);
}, { passive:true });
