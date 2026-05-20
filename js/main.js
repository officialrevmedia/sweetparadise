/* Sweet Paradise Bakery & Deli — main.js */

(function () {
  'use strict';

  // ----- Mobile drawer
  const toggle = document.querySelector('[data-drawer-open]');
  const close  = document.querySelector('[data-drawer-close]');
  const drawer = document.querySelector('[data-drawer]');

  function openDrawer()  { drawer && drawer.classList.add('is-open');  document.body.style.overflow = 'hidden'; }
  function closeDrawer() { drawer && drawer.classList.remove('is-open'); document.body.style.overflow = ''; }

  toggle && toggle.addEventListener('click', openDrawer);
  close  && close.addEventListener('click', closeDrawer);

  // Close on link click
  drawer && drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDrawer));

  // ----- FAQ accordion
  document.querySelectorAll('.faq__item').forEach(item => {
    const q = item.querySelector('.faq__q');
    q && q.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      // optional: close siblings
      item.parentElement.querySelectorAll('.faq__item.is-open').forEach(s => s.classList.remove('is-open'));
      if (!isOpen) item.classList.add('is-open');
    });
  });

  // ----- Scroll reveal (IntersectionObserver)
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.animationPlayState = 'running';
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(el => {
      el.style.animationPlayState = 'paused';
      io.observe(el);
    });
  }

  // ----- Live "Open today" status
  // Hamilton: M-Su 7:00–20:00
  // Waterdown: M-F 9:00–19:00, Sa-Su 8:00–19:00
  function statusFor(location) {
    const now = new Date();
    const day = now.getDay(); // 0=Sun
    const minutes = now.getHours() * 60 + now.getMinutes();
    let open, close;
    if (location === 'hamilton') { open = 7 * 60;  close = 20 * 60; }
    else if (location === 'waterdown') {
      if (day === 0 || day === 6) { open = 8 * 60; close = 19 * 60; }
      else                         { open = 9 * 60; close = 19 * 60; }
    }
    if (minutes >= open && minutes < close) {
      return { open: true, label: 'Open now' };
    }
    return { open: false, label: 'Closed' };
  }

  document.querySelectorAll('[data-status]').forEach(el => {
    const s = statusFor(el.getAttribute('data-status'));
    el.textContent = s.label;
    if (!s.open) {
      el.style.color = 'var(--tomato)';
      el.style.setProperty('--dot-color', 'var(--tomato)');
      const dot = el.querySelector('::before');
    }
  });

  // ----- Sticky nav shadow on scroll
  const nav = document.querySelector('.nav');
  if (nav) {
    let lastY = 0;
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y > 40) nav.style.boxShadow = '0 4px 24px -16px rgba(42, 26, 16, 0.25)';
      else nav.style.boxShadow = 'none';
      lastY = y;
    }, { passive: true });
  }

  // ----- Filter chips (pastries, specials, etc.)
  // Skip product-list which handles its own (search + filter combined)
  document.querySelectorAll('[data-filter-group]').forEach(group => {
    if (group.dataset.filterGroup === 'products') return;
    const targetKey = group.dataset.filterGroup;
    const target = document.querySelector('[data-filter-target="' + targetKey + '"]');
    if (!target) return;
    const items = Array.from(target.children);
    group.querySelectorAll('.chip').forEach(chip => {
      chip.addEventListener('click', () => {
        group.querySelectorAll('.chip').forEach(c => c.classList.remove('is-active'));
        chip.classList.add('is-active');
        const f = (chip.dataset.filter || 'all').toLowerCase();
        items.forEach(it => {
          const tag = (it.dataset.tag || '').toLowerCase();
          const show = (f === 'all') || tag.split(/\s+/).includes(f);
          it.style.display = show ? '' : 'none';
        });
      });
    });
  });

})();
