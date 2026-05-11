// ===========================
// Smooth Scroll
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Buy Buttons
// ===========================

const buyButtons = document.querySelectorAll('.car-card button');

buyButtons.forEach(button => {
    button.addEventListener('click', () => {

        const carName =
            button.parentElement.querySelector('h4').innerText;

        alert(`You selected ${carName}`);
    });
});

// ===========================
// Navbar Shadow On Scroll
// ===========================

const navbar = document.querySelector('.main-nav');

window.addEventListener('scroll', () => {

    if (window.scrollY > 50) {
        navbar.style.boxShadow =
            '0 2px 15px rgba(255,255,255,0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }

});

// ===========================
// Reveal Animation
// ===========================

const cards = document.querySelectorAll(
    '.feature-card, .car-card, .review-card'
);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add('show');

        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => {

    card.classList.add('hidden');

    observer.observe(card);

});

// ===========================
// Hero Text Animation
// ===========================

window.addEventListener('load', () => {

    const heroText = document.querySelector('.hero-text');

    heroText.style.opacity = '1';
    heroText.style.transform = 'translateY(0)';

});
