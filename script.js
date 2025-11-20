// ============================================
// Mobile Navigation Menu
// ============================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// ============================================
// Smooth Scroll for Navigation Links
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Navbar Scroll Effect
// ============================================

const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(26, 54, 93, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(26, 54, 93, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// ============================================
// Counter Animation for Statistics
// ============================================

function animateCounter(element, target, duration = 2000, prefix = '', suffix = '') {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = prefix + target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = prefix + Math.floor(current) + suffix;
        }
    }, 16);
}

function observeCounters() {
    const counters = document.querySelectorAll('.stat-number[data-target], .stat-value[data-target]');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                const target = parseInt(entry.target.getAttribute('data-target'));
                const prefix = entry.target.textContent.includes('$') ? '$' : '';
                const suffix = entry.target.textContent.includes('%') ? '%' : '';
                animateCounter(entry.target, target, 2000, prefix, suffix);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// Initialize counter observation
observeCounters();

// ============================================
// FAQ Accordion
// ============================================

const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isExpanded = question.getAttribute('aria-expanded') === 'true';
        
        // Close all other FAQ items
        faqQuestions.forEach(q => {
            if (q !== question) {
                q.setAttribute('aria-expanded', 'false');
                q.parentElement.classList.remove('active');
            }
        });
        
        // Toggle current FAQ item
        if (isExpanded) {
            question.setAttribute('aria-expanded', 'false');
            faqItem.classList.remove('active');
        } else {
            question.setAttribute('aria-expanded', 'true');
            faqItem.classList.add('active');
        }
    });
    
    // Keyboard navigation
    question.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            question.click();
        }
    });
});

// ============================================
// ROI Calculator
// ============================================

const missedCallsSlider = document.getElementById('missed-calls');
const missedCallsValue = document.getElementById('missed-calls-value');
const customerValueInput = document.getElementById('customer-value');
const resultAmount = document.getElementById('result-amount');

function calculateROI() {
    const missedCalls = parseInt(missedCallsSlider.value);
    const customerValue = parseFloat(customerValueInput.value) || 0;
    
    // Calculate monthly lost revenue
    // Assumes 4.33 weeks per month
    const weeklyLostRevenue = missedCalls * customerValue;
    const monthlyLostRevenue = weeklyLostRevenue * 4.33;
    
    // Format the result
    const formattedAmount = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(monthlyLostRevenue);
    
    resultAmount.textContent = formattedAmount;
}

if (missedCallsSlider && missedCallsValue && customerValueInput && resultAmount) {
    // Update slider display value
    missedCallsSlider.addEventListener('input', (e) => {
        missedCallsValue.textContent = e.target.value;
        calculateROI();
    });
    
    // Update calculation when customer value changes
    customerValueInput.addEventListener('input', calculateROI);
    
    // Initial calculation
    calculateROI();
}

// ============================================
// Fade-in Animation on Scroll
// ============================================

function observeFadeIn() {
    const fadeElements = document.querySelectorAll('.solution-card, .feature-item, .testimonial-card, .step');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    fadeElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Initialize fade-in animation
observeFadeIn();

// ============================================
// Form Validation (if using form instead of iframe)
// ============================================

function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], select[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#dc3545';
        } else {
            input.style.borderColor = '';
        }
    });
    
    return isValid;
}

// ============================================
// Lazy Loading for Images (if images are added)
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// Performance: Debounce function for scroll events
// ============================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events if needed
const debouncedScroll = debounce(() => {
    // Additional scroll-based functionality can go here
}, 10);

// ============================================
// Initialize on DOM Load
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // All initialization code is already in place
    console.log('Voice Agent Website initialized');
});

// ============================================
// Error Handling for Cal.com iframe
// ============================================

window.addEventListener('error', (e) => {
    if (e.target && e.target.tagName === 'IFRAME') {
        console.warn('Cal.com iframe failed to load. Please check the URL.');
    }
}, true);

