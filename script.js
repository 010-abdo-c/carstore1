// ======================================
// DOM ELEMENTS
// ======================================

const navbar =
document.querySelector('.main-nav');

const heroText =
document.querySelector('.hero-text');

const cards =
document.querySelectorAll(
'.feature-card, .car-card, .review-card, .about-card'
);

const buyButtons =
document.querySelectorAll('.car-card button');

const navLinks =
document.querySelectorAll('a[href^="#"]');

// ======================================
// SMOOTH SCROLL
// ======================================

navLinks.forEach(link => {

    link.addEventListener('click', function(e) {

        e.preventDefault();

        const targetId =
        this.getAttribute('href');

        const targetSection =
        document.querySelector(targetId);

        if(targetSection){

            targetSection.scrollIntoView({

                behavior: 'smooth'
            });
        }

    });

});

// ======================================
// WHATSAPP BUY BUTTONS
// ======================================

buyButtons.forEach(button => {

    button.addEventListener('click', () => {

        // ==========================
        // GET CAR CARD
        // ==========================

        const carCard =
        button.parentElement;

        // ==========================
        // GET CAR NAME
        // ==========================

        const carName =
        carCard.querySelector('h4').innerText;

        // ==========================
        // GET PRICE
        // ==========================

        const carPrice =
        carCard.querySelector('p').innerText;

        // ==========================
        // WHATSAPP MESSAGE
        // ==========================

        const message =

`Hello,
I want to buy:

🚗 Car: ${carName}
💰 ${carPrice}

Please contact me.`;

        // ==========================
        // WHATSAPP LINK
        // ==========================

        const whatsappLink =

`https://wa.me/201093598928?text=${encodeURIComponent(message)}`;

        // ==========================
        // OPEN WHATSAPP
        // ==========================

        window.open(
            whatsappLink,
            '_blank'
        );

    });

});

// ======================================
// NAVBAR SHADOW ON SCROLL
// ======================================

window.addEventListener('scroll', () => {

    if(window.scrollY > 50){

        navbar.style.boxShadow =
        '0 5px 20px rgba(0,0,0,0.5)';

        navbar.style.background =
        'rgba(0,0,0,0.95)';

    }

    else{

        navbar.style.boxShadow =
        'none';

        navbar.style.background =
        'rgba(0,0,0,0.85)';
    }

});

// ======================================
// REVEAL ANIMATION
// ======================================

const observer = new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add('show');

        }

    });

},

{
    threshold: 0.15
}

);

// ======================================
// ADD HIDDEN CLASS
// ======================================

cards.forEach(card => {

    card.classList.add('hidden');

    observer.observe(card);

});

// ======================================
// HERO ANIMATION
// ======================================

window.addEventListener('load', () => {

    heroText.style.opacity = '1';

    heroText.style.transform =
    'translateY(0)';

});

// ======================================
// ACTIVE NAV LINK
// ======================================

window.addEventListener('scroll', () => {

    let current = '';

    document.querySelectorAll('section')
    .forEach(section => {

        const sectionTop =
        section.offsetTop - 200;

        if(scrollY >= sectionTop){

            current = section.getAttribute('id');
        }

    });

    navLinks.forEach(link => {

        link.classList.remove('active');

        if(
            link.getAttribute('href')
            === `#${current}`
        ){

            link.classList.add('active');
        }

    });

});

// ======================================
// DOM CREATED ELEMENT
// ======================================

const whatsappBtn =
document.createElement('a');

whatsappBtn.href =
'https://wa.me/201093598928';

whatsappBtn.target =
'_blank';

whatsappBtn.innerHTML =
'💬';

whatsappBtn.classList.add(
'floating-whatsapp'
);

document.body.appendChild(
whatsappBtn
);
