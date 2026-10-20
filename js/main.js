/* ==========================================================
   Violets' Giving Circle - site scripts
   1) Mobile menu toggle
   2) Photo carousel on the home page (auto-rotates every 6s)
   ========================================================== */

// ---- 1) Mobile menu ----
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();

// ---- 2) Carousel ----
(function () {
  var carousel = document.querySelector('.carousel');
  if (!carousel) return;

  var slides = carousel.querySelectorAll('.carousel-slide');
  var dotsWrap = carousel.querySelector('.carousel-dots');
  var current = 0;
  var timer = null;
  var INTERVAL_MS = 6000;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // build dots
  var dots = [];
  slides.forEach(function (_, i) {
    var b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('aria-label', 'Show photo ' + (i + 1));
    b.addEventListener('click', function () { show(i); restart(); });
    dotsWrap.appendChild(b);
    dots.push(b);
  });

  function show(i) {
    current = (i + slides.length) % slides.length;
    slides.forEach(function (s, idx) { s.classList.toggle('active', idx === current); });
    dots.forEach(function (d, idx) { d.classList.toggle('active', idx === current); });
  }

  function start() {
    if (reduceMotion || slides.length < 2) return;
    timer = setInterval(function () { show(current + 1); }, INTERVAL_MS);
  }
  function stop() { clearInterval(timer); }
  function restart() { stop(); start(); }

  carousel.querySelector('.prev').addEventListener('click', function () { show(current - 1); restart(); });
  carousel.querySelector('.next').addEventListener('click', function () { show(current + 1); restart(); });
  carousel.addEventListener('mouseenter', stop);
  carousel.addEventListener('mouseleave', start);

  show(0);
  start();
})();
