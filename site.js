(() => {
  /* ===========================================================
     EDIT: coaches shown by the ◀ ▶ slider in Section 2
     =========================================================== */
  const COACHES = [
    // photo: file next to index.html — if it's missing, the chess-glyph fallback card shows instead
    { verb: 'FOUNDED',  name: 'MINU GUPTA',      role: 'FOUNDER · GUPTA CHESS ACADEMY',              photo: 'coach1.jpg', glyph: '\u265B' },
    { verb: 'COACHED',  name: 'ANKIT',           role: 'FOUNDER & HEAD COACH · DISTRICT FINALIST · 10+ YRS', photo: 'coach2.jpg', glyph: '\u265A' },
    { verb: 'TRAINED',  name: 'SANSKAR AGRAWAL', role: 'CO-FOUNDER · RAPID & BLITZ · 1800+ CHESS.COM',  photo: 'coach3.jpg', glyph: '\u265E' },
    { verb: 'MENTORED', name: 'SATYAM PRAKASH',  role: 'FIDE RATED COACH · 1847',                     photo: 'coach4.jpg', glyph: '\u265C' }
  ];

  const root = document.documentElement;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const G = window.gsap, ST = window.ScrollTrigger;
  const motion = !!(G && ST) && !reduce;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  if (!motion) {
    root.classList.remove('anim');
    if (!G && !reduce) root.classList.add('no-gsap');
  }

  /* ---------- ticker content ---------- */
  const glyphs = ['\u265E', '\u265D', '\u265C', '\u265B'];
  $$('.track').forEach((tr, t) => {
    let set = '';
    for (let j = 0; j < 12; j++) {
      set += `<span class="g">${glyphs[(j + t) % 4]}\uFE0E</span>`;
      set += `<span>${j % 2 ? 'LEARN · PLAY · WIN' : 'GUPTA CHESS ACADEMY'}</span>`;
    }
    tr.innerHTML = `<div class="tk-set">${set}</div><div class="tk-set">${set}</div>`;
  });

  /* ---------- fit giant headlines edge to edge ---------- */
  function fit() {
    $$('[data-fit]').forEach(el => {
      const box = el.parentElement;
      const meas = $('[data-measure]', el) || el;
      el.style.fontSize = '100px';
      const w = meas.offsetWidth || 1;
      let size = 100 * box.clientWidth / w;
      if (el.dataset.fit === 'hero') {
        const cs = getComputedStyle(el);
        const v = (k, d) => { const n = parseFloat(cs.getPropertyValue(k)); return isNaN(n) ? d : n; };
        const H = box.clientHeight, kbf = v('--kbf', .03), khf = v('--khf', 1.3);
        const circleTop = v('--ccy', .6) + v('--cwf', 1.02) / 2;      // circle top, in king heights
        let kh;
        if (v('--gapf', 1) > 0) {
          // CHECK ♚ MATE: king height is tied to the type size, so both shrink together if height runs out
          size = Math.min(size, H * .97 / (kbf + khf * Math.max(1, circleTop)));
          kh = khf * size;
        } else {
          // one unbroken word spanning the width; the king stands in front of it and fills the height above
          // --wf < 1 leaves room either side so the king, not the word, dominates (desktop)
          const lift = v('--lift', 0), kmax = v('--kmax', 2.6), ct = Math.max(1, circleTop);
          // the word never grows so big that the king can't reach full height (wide, short screens)
          size = Math.min(size * v('--wf', 1), H * v('--fmax', .45), H * .98 / (kmax * ct + kbf + lift));
          // a negative --kbf drops the king's base below the word, into the row underneath
          kh = Math.min(size * v('--kmax', 2.6), (H * .98 - (kbf + v('--lift', 0)) * size) / Math.max(1, circleTop));
        }
        el.style.setProperty('--kh', Math.max(60, kh) + 'px');
      }
      if (el.dataset.fit === 'lp') size = Math.min(size, window.innerHeight * .3);
      el.style.fontSize = Math.max(size, 20) + 'px';
      if (el.dataset.fit === 'hero') {
        // centre the king and circle on the gap between CHECK and MATE (or on the word, on phones)
        const gap = $('.gap', el), sr = el.getBoundingClientRect(), gr = gap.getBoundingClientRect();
        const kx = gr.width > 1 ? gr.left + gr.width / 2 - sr.left : sr.width / 2;
        el.style.setProperty('--kx', kx + 'px');
      }
    });
  }

  /* ---------- stacked sticky panels ---------- */
  const panels = $$('.panel');
  function layout() {
    fit();
    const ih = window.innerHeight;
    panels.forEach(p => {
      const inner = $('.panel-inner', p);
      const h = p.offsetHeight;
      if (!p.classList.contains('last')) p.style.top = Math.min(0, ih - h) + 'px';
      inner.style.transformOrigin = `50% ${h > ih ? h - ih / 2 : h / 2}px`;
    });
  }
  layout();

  /* ---------- smooth scroll ---------- */
  let lenis = null;
  if (motion && window.Lenis) {
    lenis = new Lenis({ lerp: 0.08, smoothWheel: true, wheelMultiplier: 1 });
    lenis.on('scroll', ST.update);
    G.ticker.add(t => lenis.raf(t * 1000));
    G.ticker.lagSmoothing(0);
  }

  function go(id) {
    const t = id === 'top' ? document.getElementById('top') : document.getElementById(id);
    if (!t) return;
    if (lenis) lenis.scrollTo(t, { duration: 1.6, easing: x => 1 - Math.pow(1 - x, 4) });
    else t.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  }

  window.addEventListener('load', () => { if (location.hash.length > 1) setTimeout(() => go(decodeURIComponent(location.hash.slice(1))), 350); });

  /* ---------- menu overlay ---------- */
  const menu = $('#menu'), menuBtn = $('#menuBtn');
  function openMenu() {
    document.body.classList.add('menu-open');
    menu.setAttribute('aria-hidden', 'false');
    menuBtn.setAttribute('aria-expanded', 'true');
    lenis && lenis.stop();
  }
  function closeMenu() {
    if (!document.body.classList.contains('menu-open')) return;
    document.body.classList.remove('menu-open');
    menu.setAttribute('aria-hidden', 'true');
    menuBtn.setAttribute('aria-expanded', 'false');
    lenis && lenis.start();
  }
  menuBtn.addEventListener('click', openMenu);
  $('#menuClose').addEventListener('click', closeMenu);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

  $$('[data-go]').forEach(a => a.addEventListener('click', e => {
    e.preventDefault();
    const wasOpen = document.body.classList.contains('menu-open');
    closeMenu();
    setTimeout(() => go(a.dataset.go), wasOpen ? 450 : 0);
    if (a.closest('.links')) $$('.links a').forEach(x => x.classList.toggle('active', x === a));
    if (a.classList.contains('tab')) $$('.tab').forEach(x => x.classList.toggle('on', x === a));
    if (a.dataset.program && $('#d-program')) { $('#d-program').value = a.dataset.program.replace('&amp;', '&'); $('#d-program').dispatchEvent(new Event('change', { bubbles: true })); }
    if (a.dataset.where && $('#d-where')) { $('#d-where').value = a.dataset.where; $('#d-where').dispatchEvent(new Event('change', { bubbles: true })); }
  }));


  /* ---------- book-a-demo form -> WhatsApp ---------- */
  if ($('#demoForm')) {

  const dForm = $('#demoForm'), dSubmit = $('#dSubmit'), dErr = $('#dError');
  const WA = 'https://wa.me/918660813472';
  const val = n => { const el = dForm.elements[n]; return el ? (el.value || '').trim() : ''; };
  function demoMessage() {
    const lines = ['Hi Gupta Chess Academy! I would like to book a free demo class.', '',
      `Student: ${val('name') || '-'}`,
      `Age: ${val('age') || '-'}`,
      `Phone: ${val('phone') || '-'}`];
    if (val('program')) lines.push(`Interested in: ${val('program')}`);
    if (val('where')) lines.push(`Branch: ${val('where')}`);
    return lines.join('\n');
  }
  function syncLink() { dSubmit.href = `${WA}?text=${encodeURIComponent(demoMessage())}`; }
  function checkDemo() {
    const problems = [];
    const mark = (name, bad) => { const f = dForm.elements[name]; const box = (f.length ? f[0] : f).closest('.field'); box.classList.toggle('bad', bad); if (bad) problems.push(name); };
    mark('name', val('name').length < 2);
    const age = +val('age'); mark('age', !(age >= 4 && age <= 99));
    mark('phone', val('phone').replace(/\D/g, '').length < 10);
    return problems;
  }
  const labels = { name: 'the student’s name', age: 'an age between 4 and 99', phone: 'a 10-digit phone number' };
  dForm.addEventListener('input', () => { syncLink(); if (!dErr.hidden) { const p = checkDemo(); if (!p.length) dErr.hidden = true; } });
  dForm.addEventListener('change', syncLink);
  dForm.addEventListener('submit', e => { e.preventDefault(); dSubmit.click(); });
  dSubmit.addEventListener('click', e => {
    syncLink();
    const p = checkDemo();
    if (p.length) {
      e.preventDefault();
      dErr.textContent = 'Please add ' + p.map(k => labels[k]).join(', ').replace(/, ([^,]*)$/, ' and $1') + '.';
      dErr.hidden = false;
      const first = dForm.elements[p[0]]; (first.length ? first[0] : first).focus({ preventScroll: true });
      return;
    }
    dErr.hidden = true;
  });
  syncLink();

  { // arriving from a program / branch button on another page: /contact?program=..&where=..
    const qs = new URLSearchParams(location.search);
    if (qs.get('program')) $('#d-program').value = qs.get('program');
    if (qs.get('where')) $('#d-where').value = qs.get('where');
    syncLink();
  }
  }

  /* ---------- mobile sticky "book a demo" bar ---------- */
  const mCta = $('#mCta');
  function ctaState() {
    const h = window.innerHeight, heroGone = window.scrollY > h * .5;
    const demoEl = $('#p-demo'), demoTop = demoEl ? demoEl.getBoundingClientRect().top : Infinity;
    const show = heroGone && demoTop > h * .9 && $('#p-contact').getBoundingClientRect().top > h * .6;
    mCta.classList.toggle('show', show);
    mCta.setAttribute('aria-hidden', show ? 'false' : 'true');
    $$('a', mCta).forEach(a => a.tabIndex = show ? 0 : -1);
  }
  window.addEventListener('scroll', ctaState, { passive: true });
  window.addEventListener('resize', ctaState);
  ctaState();

  /* ---------- coach slider ---------- */
  if ($('#p-founder')) {

  let idx = 0, busy = false;
  const credEls = ['.coach-photo', '.cred-l', '.cred-r', '.cred-role'].map(s => $(s));
  function applyCoach(i) {
    const c = COACHES[i];
    $('.cred-verb').textContent = c.verb;
    $('.cred-name').textContent = c.name;
    $('.cred-role').textContent = c.role;
    $('.gal-n').textContent = String(i + 1).padStart(2, '0');
    $('.sr-live').textContent = `${c.name}, ${c.role}`;
    $('.cp-glyph').textContent = c.glyph + '\uFE0E';
    const img = $('.coach-photo img');
    img.style.opacity = 0;
    img.alt = `Portrait of ${c.name.charAt(0) + c.name.slice(1).toLowerCase().replace(/ (\w)/g, (m, x) => ' ' + x.toUpperCase())}`;
    img.src = c.photo;
    $$('.f-dots i').forEach((d, k) => d.classList.toggle('on', k === i));
  }
  function slide(dir) {
    if (busy) return;
    idx = (idx + dir + COACHES.length) % COACHES.length;
    if (!motion) { applyCoach(idx); return; }
    busy = true;
    G.timeline({ onComplete: () => { busy = false; } })
      .to(credEls, { x: -dir * 110, opacity: 0, duration: .35, ease: 'power2.in', stagger: .03 })
      .add(() => applyCoach(idx))
      .fromTo(credEls, { x: dir * 110, opacity: 0 }, { x: 0, opacity: 1, duration: .75, ease: 'power3.out', stagger: .05 });
    G.timeline()
      .to('.card-img', { y: -18, rotation: dir * 3, duration: .4, ease: 'power2.out', stagger: .04 })
      .to('.card-img', { y: 0, rotation: 0, duration: .8, ease: 'elastic.out(1,.6)', stagger: .04 });
  }
  $('.arrow.prev').addEventListener('click', () => slide(-1));
  $('.arrow.next').addEventListener('click', () => slide(1));

  // swipe (touch), drag (mouse) and sideways scroll (trackpad / shift + wheel) anywhere on the card
  const fPanel = $('#p-founder'), fInner = $('.panel-inner', fPanel);
  let dragX = null, dragY = 0, dx = 0, horiz = false;
  fInner.addEventListener('pointerdown', e => {
    if (e.button > 0 || e.target.closest('a, button')) return;
    if (e.pointerType === 'mouse') e.preventDefault();
    dragX = e.clientX; dragY = e.clientY; dx = 0; horiz = false;
  });
  window.addEventListener('pointermove', e => {
    if (dragX === null) return;
    dx = e.clientX - dragX;
    if (!horiz && Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(e.clientY - dragY)) { horiz = true; fPanel.classList.add('dragging'); }
    if (horiz && !busy && window.gsap && !reduce) window.gsap.set(credEls, { x: dx * .35, opacity: 1 - Math.min(Math.abs(dx) / 600, .4) });
  });
  const endDrag = () => {
    if (dragX === null) return;
    const moved = horiz ? dx : 0;
    dragX = null; horiz = false; fPanel.classList.remove('dragging');
    if (Math.abs(moved) > 60) slide(moved < 0 ? 1 : -1);
    else if (window.gsap && !reduce && !busy) window.gsap.to(credEls, { x: 0, opacity: 1, duration: .5, ease: 'power3.out' });
  };
  window.addEventListener('pointerup', endDrag);
  window.addEventListener('pointercancel', endDrag);
  let wAcc = 0, wLock = 0, wReset;
  fInner.addEventListener('wheel', e => {
    const x = e.deltaX || (e.shiftKey ? e.deltaY : 0);
    if (!x || Math.abs(x) < Math.abs(e.shiftKey ? 0 : e.deltaY)) return;
    e.preventDefault();
    clearTimeout(wReset); wReset = setTimeout(() => { wAcc = 0; }, 200);
    if (Date.now() < wLock) return;
    wAcc += x;
    if (Math.abs(wAcc) > 40 && !busy) { slide(wAcc > 0 ? 1 : -1); wAcc = 0; wLock = Date.now() + 700; }
  }, { passive: false });
  // arrow keys while the coaches card is on screen
  document.addEventListener('keydown', e => {
    if ((e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') || e.target.closest('input, textarea')) return;
    const r = fInner.getBoundingClientRect();
    if (r.top < innerHeight * .5 && r.bottom > innerHeight * .5) slide(e.key === 'ArrowRight' ? 1 : -1);
  });

  }

  if (!motion) {
    window.addEventListener('resize', layout);
    if (document.fonts) document.fonts.ready.then(layout);
    return;
  }

  /* ===========================================================
     MOTION (GSAP)
     =========================================================== */
  G.registerPlugin(ST);
  G.config({ nullTargetWarn: false });

  // keep ScrollTrigger measurements correct with sticky panels
  ST.addEventListener('refreshInit', () => {
    panels.forEach(p => { if (!p.classList.contains('last')) p.style.position = 'static'; });
    layout();
  });
  ST.addEventListener('refresh', () => panels.forEach(p => { p.style.position = ''; }));

  /* ---------- hero intro states ---------- */
  G.set('.h-title .ch > span', { yPercent: 110, y: 0 });
  G.set('.h-circle-fill', { scale: 0 });
  G.set('.h-fade', { opacity: 0, y: 18 });
  G.set('.king-wrap', { opacity: 0, y: 90 });
  root.classList.remove('anim');

  function intro() {
    G.timeline({ delay: .1 })
      .to('.h-circle-fill', { scale: 1, duration: 1.6, ease: 'expo.out' }, 0)
      .to('.h-title .ch > span', { yPercent: 0, duration: 1.25, ease: 'power4.out', stagger: .06 }, .15)
      .to('.king-wrap', { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }, .45)
      .to('.h-fade', { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: .06 }, .55);
  }
  let started = false;
  const start = () => { if (started) return; started = true; layout(); ST.refresh(); intro(); };
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(start);
  setTimeout(start, 1500);

  /* ---------- king: mouse parallax + scroll drift ---------- */
  const hero = $('#p-hero');
  if (hero) {
  const kx = G.quickTo('.king-par', 'x', { duration: .9, ease: 'power3' });
  const ky = G.quickTo('.king-par', 'y', { duration: .9, ease: 'power3' });
  const cx = G.quickTo('.h-circle', 'x', { duration: 1.2, ease: 'power3' });
  const cy = G.quickTo('.h-circle', 'y', { duration: 1.2, ease: 'power3' });
  if (window.matchMedia('(hover: hover)').matches) {
    hero.addEventListener('pointermove', e => {
      const r = hero.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - .5, ny = (e.clientY - r.top) / r.height - .5;
      kx(nx * 14); ky(ny * 10); cx(nx * -18); cy(ny * -12);
    });
    hero.addEventListener('pointerleave', () => { kx(0); ky(0); cx(0); cy(0); });
  }
  G.to('.king-wrap', { yPercent: -12, ease: 'none',
    scrollTrigger: { trigger: panels[1] || '#p-hero', start: 'top bottom', end: 'top top', scrub: true } });
  G.to('.h-title', { yPercent: 10, ease: 'none',
    scrollTrigger: { trigger: panels[1] || '#p-hero', start: 'top bottom', end: 'top top', scrub: true } });

  }

  /* ---------- tickers (speed up while scrolling) ---------- */
  const tickTweens = $$('.strip').map((s, i) => {
    const tr = $('.track', s);
    return i % 2
      ? G.fromTo(tr, { xPercent: -50 }, { xPercent: 0, duration: 40, ease: 'none', repeat: -1 })
      : G.to(tr, { xPercent: -50, duration: 36, ease: 'none', repeat: -1 });
  });
  let lastY = window.scrollY, speed = 1;
  G.ticker.add(() => {
    const y = window.scrollY, v = Math.abs(y - lastY); lastY = y;
    const target = 1 + Math.min(v / 5, 6);
    speed += (target - speed) * (target > speed ? .18 : .035);
    tickTweens.forEach(t => t.timeScale(speed));
  });

  /* ---------- rotating badge ---------- */
  const badgeSpin = G.to('.badge-ring', { rotation: 360, duration: 16, ease: 'none', repeat: -1, transformOrigin: '50% 50%' });
  const badge = $('#badge') || document.createElement('i');
  badge.addEventListener('mouseenter', () => G.to(badgeSpin, { timeScale: 5, duration: .5, ease: 'power2.out' }));
  badge.addEventListener('mouseleave', () => G.to(badgeSpin, { timeScale: 1, duration: 1.2, ease: 'power2.out' }));
  badge.addEventListener('click', () => { location.href = '/contact#demo'; });

  /* ---------- stacked-slide transitions + responsive bits ---------- */
  const mm = G.matchMedia();
  mm.add({ desk: '(min-width: 641px)', mob: '(max-width: 640px)' }, ctx => {
    const { mob } = ctx.conditions;
    panels.forEach((p, i) => {
      if (i === panels.length - 1) return;
      const inner = $('.panel-inner', p), shade = $('.shade', p);
      G.timeline({ scrollTrigger: { trigger: panels[i + 1], start: 'top bottom', end: 'top top', scrub: true } })
        .to(inner, { scale: mob ? .95 : .92, ease: 'none' }, 0)
        .to(shade, { opacity: mob ? .4 : .62, ease: 'none' }, 0);
    });

    // fanned cards spread as they enter
    if ($('#p-founder')) {

    const spread = mob ? [-62, -22, 22, 62] : [-98, -34, 34, 98];
    const rots = [-15, -5, 5, 15], ys = [34, 6, 0, 30];
    G.fromTo('.card', { xPercent: 0, rotation: 0, y: 60 }, {
      xPercent: i => spread[i], rotation: i => rots[i], y: i => ys[i], ease: 'none',
      scrollTrigger: { trigger: '#p-founder', start: 'top 98%', end: 'top 20%', scrub: 1 }
    });

    // credit slides in horizontally
    G.fromTo('.cred-l-wrap', { xPercent: mob ? -30 : -45, opacity: 0 }, { xPercent: 0, opacity: 1, ease: 'none',
      scrollTrigger: { trigger: '.credit', start: 'top 100%', end: 'top 40%', scrub: 1 } });
    G.fromTo('.cred-r-wrap', { xPercent: mob ? 30 : 45, opacity: 0 }, { xPercent: 0, opacity: 1, ease: 'none',
      scrollTrigger: { trigger: '.credit', start: 'top 95%', end: 'top 35%', scrub: 1 } });
    }
  });

  /* ---------- mask slide-up reveals ---------- */
  const lines = $$('.m > span').filter(s => !s.closest('.menu'));
  G.set(lines, { yPercent: 105, y: 0 });
  ST.batch(lines, {
    start: 'top 92%', once: true,
    onEnter: batch => G.to(batch, { yPercent: 0, duration: 1, ease: 'power4.out', stagger: .09 })
  });

  /* ---------- misc entrances ---------- */
  G.from('.p-card', { y: 70, opacity: 0, duration: 1.1, ease: 'power3.out', stagger: .1,
    scrollTrigger: { trigger: '.p-grid', start: 'top 88%' } });
  G.from('.tab', { y: 20, opacity: 0, duration: .9, ease: 'power3.out', stagger: .08,
    scrollTrigger: { trigger: '.tabs', start: 'top 90%' } });
  G.from('.br-card', { y: 50, opacity: 0, duration: 1, ease: 'power3.out', stagger: .1,
    scrollTrigger: { trigger: '.br-grid', start: 'top 90%' } });
  G.from('.edge-fig', { y: 50, opacity: 0, duration: 1.1, ease: 'power3.out', stagger: .12,
    scrollTrigger: { trigger: '.edge-media', start: 'top 90%' } });
  G.from('.why, .edge-item', { y: 30, opacity: 0, duration: .9, ease: 'power3.out', stagger: .06,
    scrollTrigger: { trigger: '.why-wrap', start: 'top 85%' } });
  G.from('.c-grid > div', { y: 30, opacity: 0, duration: .9, ease: 'power3.out', stagger: .08,
    scrollTrigger: { trigger: '.c-grid', start: 'top 92%' } });
  G.from('.info .faint', { scale: .6, opacity: 0, ease: 'none',
    scrollTrigger: { trigger: '#p-info', start: 'top bottom', end: 'top top', scrub: true } });

  /* ---------- image parallax ---------- */
  G.fromTo('.why-fig img', { yPercent: -6 }, { yPercent: 6, ease: 'none',
    scrollTrigger: { trigger: '.why-fig', start: 'top bottom', end: 'bottom top', scrub: true } });
  G.fromTo('.stats-bg img', { yPercent: -6 }, { yPercent: 6, ease: 'none',
    scrollTrigger: { trigger: '.stats', start: 'top bottom', end: 'bottom top', scrub: true } });
  G.fromTo('.c-bg img', { scale: 1.15 }, { scale: 1, ease: 'none', transformOrigin: '50% 100%',
    scrollTrigger: { trigger: '#p-contact', start: 'top bottom', end: 'top top', scrub: true } });

  /* ---------- count-up numbers ---------- */
  $$('[data-count]').forEach(el => {
    const end = +el.dataset.count, o = { v: 0 };
    el.textContent = '0';
    ST.create({ trigger: el, start: 'top 88%', once: true,
      onEnter: () => G.to(o, { v: end, duration: 2.2, ease: 'power3.out',
        onUpdate: () => { el.textContent = Math.round(o.v); } }) });
  });

  /* ---------- active nav dot follows scroll ---------- */
  const spy = [['founder', 0], ['programs', 1], ['achievements', 2], ['branches', 4]].filter(([id]) => document.getElementById(id));
  G.from('.demo-card', { y: 60, opacity: 0, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: '.demo-card', start: 'top 90%' } });
  G.from('.steps li', { x: -30, opacity: 0, duration: .8, ease: 'power3.out', stagger: .08, scrollTrigger: { trigger: '.steps', start: 'top 90%' } });
  const navLinks = $$('.links a');
  spy.forEach(([id, n]) => ST.create({
    trigger: '#' + id, start: 'top 55%', end: () => '+=' + window.innerHeight,
    onToggle: s => { if (s.isActive) navLinks.forEach((a, k) => a.classList.toggle('active', k === n)); }
  }));

  window.addEventListener('load', () => ST.refresh());
})();