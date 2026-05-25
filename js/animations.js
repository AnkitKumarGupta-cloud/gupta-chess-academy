/* ── REVEAL ANIMATIONS ── */
function initReveal() {
  const els = document.querySelectorAll('.page.active .reveal:not(.visible)');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 70);
        obs.unobserve(e.target);
      }
    });
  }, { threshold:0.1 });
  els.forEach(el => obs.observe(el));
}
