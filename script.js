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
