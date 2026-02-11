// OpenFlow — Interactive JavaScript

// Hamburger Menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
});

// Smooth scroll function
function scrollTo(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Contact form submission
function contactUs() {
    const email = document.getElementById('email').value;
    const packageSelected = document.getElementById('package').value;

    if (!email || !packageSelected) {
        alert('Bitte gib deine Email und das gewünschte Paket an.');
        return;
    }

    // In production, this would send to a backend
    // For now, show a success message
    const message = `Danke! Wir werden dich unter ${email} kontaktieren.\n\nGewähltes Paket: ${packageSelected}`;
    alert(message);
    
    // Reset form
    document.getElementById('email').value = '';
    document.getElementById('package').value = '';
}

// Intersection Observer für Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and service items
document.addEventListener('DOMContentLoaded', () => {
    const animatableElements = document.querySelectorAll(
        '.why-card, .process-step, .service-card'
    );
    
    animatableElements.forEach(element => {
        observer.observe(element);
    });

    // Add keyboard support for CTA buttons
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                button.click();
            }
        });
    });
});

// Add active nav link highlighting on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${section.id}` && section.id) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Parallax effect for hero section (optional enhancement)
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero && window.scrollY < window.innerHeight) {
        hero.style.backgroundPosition = `0% ${window.scrollY * 0.5}px`;
    }
});

// Mobile menu could be added here if needed in future
console.log('🦞 OpenFlow loaded successfully');
