/* ========================================= */
/* 1. DOM ELEMENTS                           */
/* ========================================= */
const navbar = document.querySelector('.main-nav');
const heroText = document.querySelector('.hero-text');
const cards = document.querySelectorAll('.feature-card, .car-card, .review-card, .about-card');
const buyButtons = document.querySelectorAll('.car-card button');
const navLinks = document.querySelectorAll('a[href^="#"]');
const contactForm = document.querySelector('#contact-form');

/* ========================================= */
/* 2. SMOOTH SCROLL                          */
/* ========================================= */
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#') && targetId.length > 1) {
            e.preventDefault();
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

/* ========================================= */
/* 3. WHATSAPP BUY BUTTONS (Catalog)         */
/* ========================================= */
buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const carCard = button.closest('.car-card');
        const carName = carCard.querySelector('h4').innerText;
        const carPrice = carCard.querySelector('p').innerText;

        const message = `Hello,\nI am interested in buying:\n\n🚗 Car: ${carName}\n💰 ${carPrice}\n\nPlease provide more details.`;
        const whatsappLink = `https://wa.me/201093598928?text=${encodeURIComponent(message)}`;

        window.open(whatsappLink, '_blank');
    });
});

/* ========================================= */
/* 4. CONTACT FORM AUTOMATION                */
/* ========================================= */
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = contactForm.querySelector('#username').value;
        const phone = contactForm.querySelector('#phonenum').value;
        const email = contactForm.querySelector('#email').value;
        const visitDate = contactForm.querySelector('#date1').value;
        
        // Get selected vehicles
        const vehicleCheckboxes = contactForm.querySelectorAll('input[name="vehicle[]"]:checked');
        let selectedVehicles = [];
        vehicleCheckboxes.forEach((cb) => {
            selectedVehicles.push(cb.value);
        });
        const vehiclesText = selectedVehicles.length > 0 ? selectedVehicles.join(', ') : 'None selected';

        const whatsappMessage = `*New Appointment Request*\n\n` +
            `*Name:* ${name}\n` +
            `*Phone:* ${phone}\n` +
            `*Email:* ${email}\n` +
            `*Visit Date:* ${visitDate}\n` +
            `*Interested in:* ${vehiclesText}`;

        window.open(`https://wa.me/201093598928?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    });
}

/* ========================================= */
/* 5. SCROLL EFFECTS (Navbar & Active Links) */
/* ========================================= */
window.addEventListener('scroll', () => {
    // Navbar Background Toggle
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
            navbar.style.background = 'rgba(0,0,0,0.95)';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.background = 'rgba(0,0,0,0.85)';
        }
    }

    // Active Link State
    let current = '';
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 200;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (current && link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

/* ========================================= */
/* 6. REVEAL ANIMATIONS (Intersection Obs)   */
/* ========================================= */
const observerOptions = { threshold: 0.15 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

cards.forEach(card => {
    card.classList.add('hidden');
    observer.observe(card);
});

/* ========================================= */
/* 7. PAGE LOAD INITIALIZATION               */
/* ========================================= */
window.addEventListener('load', () => {
    if (heroText) {
        heroText.style.opacity = '1';
        heroText.style.transform = 'translateY(0)';
    }
});

/* ========================================= */
/* 8. FLOATING WHATSAPP CREATION             */
/* ========================================= */
const createFloatingBtn = () => {
    const whatsappBtn = document.createElement('a');
    whatsappBtn.href = 'https://wa.me/201093598928';
    whatsappBtn.target = '_blank';
    whatsappBtn.innerHTML = '💬'; 
    whatsappBtn.classList.add('floating-whatsapp');
    whatsappBtn.style.cssText = 'position: fixed; bottom: 20px; right: 20px; font-size: 30px; background-color: #25d366; color: white; border-radius: 50%; padding: 15px; text-decoration: none; box-shadow: 2px 2px 10px rgba(0,0,0,0.2); z-index: 1000;';
    document.body.appendChild(whatsappBtn);
};

createFloatingBtn();
