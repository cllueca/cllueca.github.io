// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

navToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// Header shrink on scroll
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
    header.style.borderBottomColor = window.scrollY > 40
        ? 'rgba(42,37,32,.9)'
        : 'var(--border)';
});

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));

// Add reveal class dynamically to key elements
document.querySelectorAll(
    '.teaser-card, .blog-item, .timeline-block, .edu-item, .contact-item'
).forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${i * 60}ms`;
    observer.observe(el);
});

// ---- HERO KEYWORD CAROUSEL ----
(function () {
    const carousel = document.getElementById('heroCarousel');
    const dotsWrap = document.getElementById('carouselDots');
    if (!carousel || !dotsWrap) return;

    const slides = Array.from(carousel.querySelectorAll('span'));
    let current = 0;
    let timer;

    // Build dots
    slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Slide ${i + 1}`);
        dot.addEventListener('click', () => { goTo(i); resetTimer(); });
        dotsWrap.appendChild(dot);
    });

    const dots = Array.from(dotsWrap.querySelectorAll('.carousel-dot'));

    function goTo(index) {
        slides[current].classList.remove('carousel-active');
        dots[current].classList.remove('active');
        current = (index + slides.length) % slides.length;
        slides[current].classList.add('carousel-active');
        dots[current].classList.add('active');
    }

    function resetTimer() {
        clearInterval(timer);
        timer = setInterval(() => goTo(current + 1), 2200);
    }

    goTo(0);
    resetTimer();
})();