/* ── MULTI-PAGE NAVIGATION ── */
/* nav() kept for any legacy inline calls — redirects to the correct page */
function nav(id) {
  var map = {
    home:    'index.html',
    about:   'about.html',
    courses: 'courses.html',
    blog:    'blog.html',
    contact: 'contact.html'
  };
  if (map[id]) window.location.href = map[id];
  return false;
}

/* ── HAMBURGER ── */
function toggleMenu(forceClose) {
  var ham = document.getElementById('hamburger');
  var mn  = document.getElementById('mobile-nav');
  var isOpen = ham.classList.contains('open');
  if (forceClose || isOpen) {
    ham.classList.remove('open');
    mn.classList.remove('open');
  } else {
    ham.classList.add('open');
    mn.classList.add('open');
  }
}

/* close mobile nav on outside click */
document.addEventListener('click', function(e) {
  var ham = document.getElementById('hamburger');
  var mn  = document.getElementById('mobile-nav');
  if (mn && mn.classList.contains('open') && !ham.contains(e.target) && !mn.contains(e.target)) {
    toggleMenu(true);
  }
});

/* ── SCROLL HEADER ── */
window.addEventListener('scroll', function() {
  var header = document.getElementById('header');
  if (header) header.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });
