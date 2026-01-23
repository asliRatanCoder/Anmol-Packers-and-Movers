// Anmol Packers and Movers - Main JavaScript File

// ============================================
// Mobile Menu Toggle
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (event) {
            if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
});

// ============================================
// Sticky Header
// ============================================
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        }
    }
});

// ============================================
// Counter Animation
// ============================================
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60 FPS
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + (element.textContent.includes('%') ? '' : '+');
        }
    };

    updateCounter();
}

// Intersection Observer for counters
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            animateCounter(entry.target);
            entry.target.classList.add('counted');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
});

// ============================================
// Smooth Scroll for Anchor Links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// FAQ Accordion
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', function () {
            // Close other open items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });
});

// ============================================
// Gallery Filter
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (filterButtons.length > 0 && galleryItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function () {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');

                const filterValue = this.getAttribute('data-filter');

                galleryItems.forEach(item => {
                    if (filterValue === 'all') {
                        item.classList.remove('hide');
                        setTimeout(() => {
                            item.style.display = 'block';
                        }, 10);
                    } else {
                        const category = item.getAttribute('data-category');
                        if (category === filterValue) {
                            item.classList.remove('hide');
                            item.style.display = 'block';
                        } else {
                            item.classList.add('hide');
                            setTimeout(() => {
                                item.style.display = 'none';
                            }, 300);
                        }
                    }
                });
            });
        });
    }
});

// ============================================
// Gallery Lightbox
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');

    if (galleryItems.length > 0 && lightbox) {
        let currentIndex = 0;
        const visibleItems = Array.from(galleryItems).filter(item =>
            item.style.display !== 'none' && !item.classList.contains('hide')
        );

        function showImage(index) {
            const item = visibleItems[index];
            const img = item.querySelector('img');
            const overlay = item.querySelector('.gallery-overlay');

            lightboxImg.src = img.src;
            lightboxCaption.textContent = overlay.querySelector('h3').textContent;
            lightbox.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        galleryItems.forEach((item, index) => {
            item.addEventListener('click', function () {
                currentIndex = Array.from(visibleItems).indexOf(this);
                showImage(currentIndex);
            });
        });

        if (lightboxClose) {
            lightboxClose.addEventListener('click', function () {
                lightbox.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
        }

        if (lightboxPrev) {
            lightboxPrev.addEventListener('click', function () {
                currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
                showImage(currentIndex);
            });
        }

        if (lightboxNext) {
            lightboxNext.addEventListener('click', function () {
                currentIndex = (currentIndex + 1) % visibleItems.length;
                showImage(currentIndex);
            });
        }

        // Close lightbox when clicking outside the image
        lightbox.addEventListener('click', function (e) {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', function (e) {
            if (lightbox.style.display === 'block') {
                if (e.key === 'Escape') {
                    lightbox.style.display = 'none';
                    document.body.style.overflow = 'auto';
                } else if (e.key === 'ArrowLeft') {
                    currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
                    showImage(currentIndex);
                } else if (e.key === 'ArrowRight') {
                    currentIndex = (currentIndex + 1) % visibleItems.length;
                    showImage(currentIndex);
                }
            }
        });
    }
});

// ============================================
// Contact Form Validation and Submission
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    const quoteForm = document.getElementById('quoteForm');
    const formMessage = document.getElementById('formMessage');

    function showMessage(message, type) {
        if (formMessage) {
            formMessage.textContent = message;
            formMessage.className = 'form-message ' + type;
            formMessage.style.display = 'block';

            // Auto-hide after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);

            // Scroll to message
            formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }

    if (quoteForm) {
        quoteForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(quoteForm);
            const data = Object.fromEntries(formData);

            // Basic validation (only name and phone are required)
            if (!data.name || !data.phone) {
                showMessage('Please add your name and phone number.', 'error');
                return;
            }

            // Phone validation (Indian format)
            const phoneRegex = /^[6-9]\d{9}$/;
            const cleanPhone = data.phone.replace(/[^0-9]/g, '').slice(-10);

            if (!phoneRegex.test(cleanPhone)) {
                showMessage('Please enter a valid 10-digit mobile number.', 'error');
                return;
            }

            // Email validation (if provided)
            if (data.email) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(data.email)) {
                    showMessage('Please enter a valid email address.', 'error');
                    return;
                }
            }

            // Show loading state
            const submitButton = quoteForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerHTML;
            submitButton.innerHTML = '<span class="loading"></span> Opening WhatsApp...';
            submitButton.disabled = true;

            const messageLines = [
                'New Quote Request',
                `Name: ${data.name}`,
                `Phone: ${data.phone}`
            ];

            if (data.fromCity) messageLines.push(`From: ${data.fromCity}`);
            if (data.toCity) messageLines.push(`To: ${data.toCity}`);
            if (data.serviceType) messageLines.push(`Service: ${data.serviceType}`);
            if (data.movingDate) messageLines.push(`Date: ${data.movingDate}`);
            if (data.houseSize) messageLines.push(`Size: ${data.houseSize}`);
            if (data.message) messageLines.push(`Message: ${data.message}`);
            if (data.insurance) messageLines.push('Insurance: Interested');

            const whatsappNumber = '919650162532';
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageLines.join('\n'))}`;

            // Open WhatsApp chat with prefilled details
            window.open(whatsappURL, '_blank');

            showMessage('Opening WhatsApp chat. Please send your request.', 'success');

            // Restore button state
            submitButton.innerHTML = originalButtonText;
            submitButton.disabled = false;
        });
    }
});

// ============================================
// Scroll Reveal Animation
// ============================================
function reveal() {
    const reveals = document.querySelectorAll('.service-card, .choose-item, .testimonial-card, .stat-item, .mv-card, .team-feature, .diff-item');

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initial styles for reveal elements
document.addEventListener('DOMContentLoaded', function () {
    const reveals = document.querySelectorAll('.service-card, .choose-item, .testimonial-card, .stat-item, .mv-card, .team-feature, .diff-item');
    reveals.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
    });
});

window.addEventListener('scroll', reveal);
reveal(); // Call once on load

// ============================================
// Form Input Effects
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    const formInputs = document.querySelectorAll('.quote-form input, .quote-form select, .quote-form textarea');

    formInputs.forEach(input => {
        // Add focus effect
        input.addEventListener('focus', function () {
            this.parentElement.classList.add('focused');
        });

        // Remove focus effect
        input.addEventListener('blur', function () {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });

        // Check if already has value on page load
        if (input.value) {
            input.parentElement.classList.add('focused');
        }
    });
});

// ============================================
// Scroll to Top Button (Optional Enhancement)
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    // Create scroll to top button
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollButton.classList.add('scroll-to-top');
    scrollButton.setAttribute('aria-label', 'Scroll to top');

    // Add styles
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--secondary-color);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    `;

    document.body.appendChild(scrollButton);

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function () {
        if (window.scrollY > 500) {
            scrollButton.style.opacity = '1';
            scrollButton.style.visibility = 'visible';
        } else {
            scrollButton.style.opacity = '0';
            scrollButton.style.visibility = 'hidden';
        }
    });

    // Scroll to top on click
    scrollButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Hover effect
    scrollButton.addEventListener('mouseenter', function () {
        this.style.background = 'var(--primary-color)';
        this.style.transform = 'translateY(-5px)';
    });

    scrollButton.addEventListener('mouseleave', function () {
        this.style.background = 'var(--secondary-color)';
        this.style.transform = 'translateY(0)';
    });
});

// ============================================
// Lazy Loading for Images
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});

// ============================================
// Date Picker Min Date (Today)
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    const movingDateInput = document.getElementById('movingDate');
    if (movingDateInput) {
        const today = new Date().toISOString().split('T')[0];
        movingDateInput.setAttribute('min', today);
    }
});

// ============================================
// Phone Number Formatting
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, '');

            // Limit to 10 digits
            if (value.length > 10) {
                value = value.slice(0, 10);
            }

            e.target.value = value;
        });
    }
});

// ============================================
// Print Testimonials Slider Enhancement
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    const testimonialCards = document.querySelectorAll('.testimonial-card');

    if (testimonialCards.length > 0) {
        let currentTestimonial = 0;

        // Add navigation dots (optional)
        const dotsContainer = document.createElement('div');
        dotsContainer.classList.add('testimonial-dots');
        dotsContainer.style.cssText = 'text-align: center; margin-top: 30px;';

        testimonialCards.forEach((card, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.style.cssText = `
                display: inline-block;
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background: #ddd;
                margin: 0 5px;
                cursor: pointer;
                transition: all 0.3s ease;
            `;

            if (index === 0) {
                dot.style.background = 'var(--primary-color)';
                dot.style.width = '30px';
                dot.style.borderRadius = '6px';
            }

            dot.addEventListener('click', function () {
                // Update active dot styling (optional enhancement)
            });

            dotsContainer.appendChild(dot);
        });

        // Insert dots after testimonials slider (optional)
        const testimonialsSection = document.querySelector('.testimonials-slider');
        if (testimonialsSection) {
            testimonialsSection.parentElement.appendChild(dotsContainer);
        }
    }
});

// ============================================
// Service Area Tags Interaction
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    const areaTags = document.querySelectorAll('.area-tag');

    areaTags.forEach(tag => {
        tag.addEventListener('click', function () {
            // Could redirect to contact form with pre-filled location
            const location = this.textContent.trim();
            const contactURL = 'contact.html#quote';
            window.location.href = contactURL;

            // Store selected location in sessionStorage
            sessionStorage.setItem('selectedLocation', location);
        });
    });

    // Pre-fill form if location was selected
    const selectedLocation = sessionStorage.getItem('selectedLocation');
    const fromCityInput = document.getElementById('fromCity');

    if (selectedLocation && fromCityInput) {
        fromCityInput.value = selectedLocation;
        sessionStorage.removeItem('selectedLocation');
    }
});

// ============================================
// Video Thumbnail Play Button
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    const videoThumbnails = document.querySelectorAll('.video-thumbnail');

    videoThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function () {
            // You can add YouTube/Vimeo video player here
            alert('Video player would open here. Add your video URL in the HTML.');
        });
    });
});

// ============================================
// Active Page Highlight in Navigation
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a:not(.btn-quote)');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });
});

// ============================================
// Performance: Debounce Scroll Events
// ============================================
function debounce(func, wait = 10) {
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

// Apply debounce to scroll-heavy functions
window.addEventListener('scroll', debounce(reveal, 50));

// ============================================
// Dark/Light Mode Toggle
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';

    // Apply saved theme on page load
    if (currentTheme === 'dark') {
        htmlElement.setAttribute('data-theme', 'dark');
        updateThemeIcon(true);
    } else {
        htmlElement.removeAttribute('data-theme');
        updateThemeIcon(false);
    }

    // Theme toggle button click handler
    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            const isDarkMode = htmlElement.getAttribute('data-theme') === 'dark';

            if (isDarkMode) {
                // Switch to light mode
                htmlElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
                updateThemeIcon(false);
            } else {
                // Switch to dark mode
                htmlElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                updateThemeIcon(true);
            }
        });
    }

    // Update icon based on theme
    function updateThemeIcon(isDarkMode) {
        if (themeToggle) {
            const icon = themeToggle.querySelector('i');
            if (icon) {
                if (isDarkMode) {
                    // In dark mode, show sun icon to switch to light
                    icon.classList.remove('fa-moon');
                    icon.classList.add('fa-sun');
                } else {
                    // In light mode, show moon icon to switch to dark
                    icon.classList.remove('fa-sun');
                    icon.classList.add('fa-moon');
                }
            }
        }
    }
});

// ============================================
// Console Branding
// ============================================
// Auto Update Copyright Year
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

// ============================================
// Console Branding
// ============================================
console.log('%cAnmol Packers and Movers', 'color: #ff6b35; font-size: 24px; font-weight: bold;');
console.log('%cProfessional Moving Services Since 2011', 'color: #004e89; font-size: 14px;');
console.log('%cWebsite by GitHub Copilot', 'color: #666; font-size: 12px; font-style: italic;');
