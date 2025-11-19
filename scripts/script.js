// ===========================
// Theme Toggle Functionality
// ===========================
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);

// Update icon based on current theme
function updateThemeIcon() {
    const theme = html.getAttribute('data-theme');
    const icon = themeToggle.querySelector('i');
    
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Initialize icon
updateThemeIcon();

// Toggle theme
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon();
});

// ===========================
// Mobile Menu Toggle
// ===========================
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===========================
// Navbar Scroll Effect
// ===========================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class when scrolling down
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ===========================
// Active Navigation Link
// ===========================
const sections = document.querySelectorAll('section[id]');

function updateActiveLink() {
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// ===========================
// Smooth Scrolling
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 70;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Typing Animation
// ===========================
const typingText = document.querySelector('.typing-text');
const texts = [
    'Passionate Engineer',
    'IoT Enthusiast',
    'ML Developer',
    'Embedded Systems Designer',
    'Problem Solver'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 150;

function typeText() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 150;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        // Pause at the end of the text
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingSpeed = 500;
    }
    
    setTimeout(typeText, typingSpeed);
}

// Start typing animation after page load
window.addEventListener('load', () => {
    setTimeout(typeText, 1000);
});

// ===========================
// Scroll Animations (Intersection Observer)
// ===========================
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            
            // Animate skill progress bars
            if (entry.target.classList.contains('skill-card')) {
                const progressBar = entry.target.querySelector('.skill-progress');
                if (progressBar) {
                    const progress = progressBar.getAttribute('data-progress');
                    progressBar.style.setProperty('--progress-width', progress + '%');
                    progressBar.style.width = progress + '%';
                }
            }
        }
    });
}, observerOptions);

// Observe elements for scroll animations
const animateOnScroll = document.querySelectorAll('.skill-category, .project-card, .education-card, .about-content, .contact-container');
animateOnScroll.forEach(el => {
    el.classList.add('scroll-animate');
    observer.observe(el);
});

// Observe skill cards separately for progress bar animation
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => observer.observe(card));

// ===========================
// Form Validation & Submission
// ===========================
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(field) {
    const value = field.value.trim();
    const formGroup = field.closest('.form-group');
    const errorMessage = formGroup.querySelector('.error-message');
    
    // Remove previous error state
    formGroup.classList.remove('error');
    
    // Check if field is empty
    if (value === '') {
        formGroup.classList.add('error');
        errorMessage.textContent = 'This field is required';
        return false;
    }
    
    // Email specific validation
    if (field.type === 'email' && !emailRegex.test(value)) {
        formGroup.classList.add('error');
        errorMessage.textContent = 'Please enter a valid email address';
        return false;
    }
    
    // Message length validation
    if (field.id === 'message' && value.length < 10) {
        formGroup.classList.add('error');
        errorMessage.textContent = 'Message must be at least 10 characters long';
        return false;
    }
    
    return true;
}

// Real-time validation on input
const formFields = contactForm.querySelectorAll('input, textarea');
formFields.forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
        const formGroup = field.closest('.form-group');
        if (formGroup.classList.contains('error')) {
            validateField(field);
        }
    });
});

// Form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Validate all fields
    let isValid = true;
    formFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    if (!isValid) {
        formStatus.className = 'form-status error';
        formStatus.textContent = 'Please fix the errors above and try again.';
        return;
    }
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        subject: document.getElementById('subject').value.trim(),
        message: document.getElementById('message').value.trim()
    };
    
    // Simulate form submission (replace with actual backend integration)
    const submitBtn = contactForm.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const originalText = btnText.textContent;
    
    // Disable button and show loading state
    submitBtn.disabled = true;
    btnText.textContent = 'Sending...';
    
    // Simulate API call
    setTimeout(() => {
        // Success scenario
        formStatus.className = 'form-status success';
        formStatus.textContent = 'Thank you for your message! I will get back to you soon.';
        
        // Reset form
        contactForm.reset();
        
        // Reset button
        submitBtn.disabled = false;
        btnText.textContent = originalText;
        
        // Clear status message after 5 seconds
        setTimeout(() => {
            formStatus.className = 'form-status';
            formStatus.style.display = 'none';
        }, 5000);
        
        // Log form data (for debugging)
        console.log('Form submitted with data:', formData);
        
        // TODO: Replace the setTimeout above with actual backend API call
        // Example:
        // fetch('your-backend-api-url', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(formData)
        // })
        // .then(response => response.json())
        // .then(data => {
        //     formStatus.className = 'form-status success';
        //     formStatus.textContent = 'Thank you for your message!';
        //     contactForm.reset();
        // })
        // .catch(error => {
        //     formStatus.className = 'form-status error';
        //     formStatus.textContent = 'Something went wrong. Please try again.';
        // })
        // .finally(() => {
        //     submitBtn.disabled = false;
        //     btnText.textContent = originalText;
        // });
        
    }, 2000);
});

// ===========================
// Project Cards 3D Tilt Effect
// ===========================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ===========================
// Scroll to Top Button (Optional Enhancement)
// ===========================
let scrollToTopBtn = null;

function createScrollToTopButton() {
    scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .scroll-to-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: var(--gradient-1);
            color: white;
            font-size: 1.2rem;
            box-shadow: var(--shadow-lg);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 999;
        }
        
        .scroll-to-top.visible {
            opacity: 1;
            visibility: visible;
        }
        
        .scroll-to-top:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-xl);
        }
        
        @media (max-width: 768px) {
            .scroll-to-top {
                width: 45px;
                height: 45px;
                bottom: 20px;
                right: 20px;
                font-size: 1rem;
            }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(scrollToTopBtn);
    
    // Show/hide button on scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top on click
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Create scroll to top button
createScrollToTopButton();

// ===========================
// Preloader (Optional Enhancement)
// ===========================
function createPreloader() {
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.innerHTML = `
        <div class="loader">
            <div class="loader-circle"></div>
        </div>
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        .preloader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--bg-primary);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            transition: opacity 0.5s ease, visibility 0.5s ease;
        }
        
        .preloader.hidden {
            opacity: 0;
            visibility: hidden;
        }
        
        .loader {
            width: 60px;
            height: 60px;
            position: relative;
        }
        
        .loader-circle {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 4px solid var(--border-color);
            border-top-color: var(--primary-color);
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
    `;
    
    document.head.appendChild(style);
    document.body.prepend(preloader);
    
    // Hide preloader after page loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
            setTimeout(() => {
                preloader.remove();
            }, 500);
        }, 500);
    });
}

// Create preloader
createPreloader();

// ===========================
// Console Welcome Message
// ===========================
console.log('%c👋 Hello, Developer!', 'color: #6C63FF; font-size: 24px; font-weight: bold;');
console.log('%c🚀 Welcome to Pratik Bhosale\'s Portfolio', 'color: #667eea; font-size: 16px;');
console.log('%c💼 Interested in collaboration? Let\'s connect!', 'color: #4a5568; font-size: 14px;');
console.log('%c📧 pratik.bhosale@mitaoe.ac.in', 'color: #6C63FF; font-size: 14px;');

// ===========================
// Performance Optimization
// ===========================

// Lazy load images (if you add images later)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Call lazy load if needed
lazyLoadImages();

// ===========================
// Accessibility Enhancements
// ===========================

// Skip to main content link
function createSkipLink() {
    const skipLink = document.createElement('a');
    skipLink.href = '#about';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    
    const style = document.createElement('style');
    style.textContent = `
        .skip-link {
            position: absolute;
            top: -100px;
            left: 0;
            background: var(--primary-color);
            color: white;
            padding: 0.8rem 1.5rem;
            text-decoration: none;
            border-radius: 0 0 var(--border-radius-sm) 0;
            z-index: 10000;
            transition: top 0.3s ease;
        }
        
        .skip-link:focus {
            top: 0;
        }
    `;
    
    document.head.appendChild(style);
    document.body.prepend(skipLink);
}

createSkipLink();

// ===========================
// Easter Egg (Konami Code)
// ===========================
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        // Easter egg triggered
        document.body.style.animation = 'rainbow 2s linear infinite';
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
        
        setTimeout(() => {
            document.body.style.animation = '';
        }, 10000);
        
        console.log('%c🎉 Konami Code Activated! 🎉', 'color: #f093fb; font-size: 20px; font-weight: bold;');
    }
});

// ===========================
// Initialize Everything
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio initialized successfully! ✅');
    
    // Update active link on page load
    updateActiveLink();
    
    // Add loaded class to body for animations
    document.body.classList.add('loaded');
});
