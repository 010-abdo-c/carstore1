// ======================================
// DOM ELEMENTS
// ======================================
const navbar = document.querySelector('.main-nav');
const heroText = document.querySelector('.hero-text');
const cards = document.querySelectorAll('.feature-card, .car-card, .review-card, .about-card');
const navLinks = document.querySelectorAll('a[href^="#"]');

// ======================================
// UNIFIED SCROLL LOGIC
// ======================================
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Navbar Shadow & Background
    if (scrollPos > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
        navbar.style.background = 'rgba(0,0,0,0.95)';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.background = 'rgba(0,0,0,0.85)';
    }

    // Active Link Highlighting
    let current = '';
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (scrollPos >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ======================================
// REVEAL ANIMATION (INTERSECTION OBSERVER)
// ======================================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

cards.forEach(card => {
    card.classList.add('hidden');
    observer.observe(card);
});

// ======================================
// HERO ANIMATION ON LOAD
// ======================================
window.addEventListener('load', () => {
    heroText.style.opacity = '1';
    heroText.style.transform = 'translateY(0)';
});
