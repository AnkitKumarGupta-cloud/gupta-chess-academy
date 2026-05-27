/* ── REVEAL ANIMATIONS ── */
function initReveal() {
  // Works for both single-page (.page.active .reveal) and multi-page (.reveal)
  const els = document.querySelectorAll('.reveal:not(.visible)');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 70);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}
document.addEventListener('DOMContentLoaded', initReveal);
