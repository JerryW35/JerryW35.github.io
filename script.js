// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile navigation menu toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Hamburger menu animation
            const bars = navToggle.querySelectorAll('.bar');
            bars.forEach(bar => bar.classList.toggle('active'));
        });
    }
    
    // Close mobile menu after clicking navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const bars = navToggle.querySelectorAll('.bar');
            bars.forEach(bar => bar.classList.remove('active'));
        });
    });
    
    // Navbar scroll effects
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add background blur effect
        if (scrollTop > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.backdropFilter = 'blur(20px)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Smooth scroll to anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70; // Consider navbar height
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Scroll animation for elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements that need animation
    const elementsToAnimate = document.querySelectorAll('.research-card, .publication-item, .education-item, .contact-item');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
    
    // Typewriter effect
    const typingText = document.querySelector('.typing-animation');
    if (typingText) {
        const text = typingText.textContent;
        typingText.textContent = '';
        
        let index = 0;
        const typeWriter = () => {
            if (index < text.length) {
                typingText.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 1000);
    }
    
    // Research card hover effects
    const researchCards = document.querySelectorAll('.research-card');
    researchCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Publication item hover effects
    const publicationItems = document.querySelectorAll('.publication-item');
    publicationItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(15px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) scale(1)';
        });
    });
    
    // Contact form handling
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show success message
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate sending process
            setTimeout(() => {
                submitBtn.textContent = 'Message Sent!';
                submitBtn.style.background = '#10B981';
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                    this.reset();
                }, 2000);
            }, 1000);
        });
    }
    
    // Social links hover effects
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.1)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Scroll indicator click event
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // Page load fade-in effect
    window.addEventListener('load', () => {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
    
    // Mobile specific handling
    if (window.innerWidth <= 768) {
        // Mobile optimization
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            heroTitle.style.fontSize = '2.5rem';
        }
        
        // Delay closing mobile menu after clicking, ensure animation completes
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                setTimeout(() => {
                    navMenu.classList.remove('active');
                }, 200);
            });
        });
    }
    
    // Performance optimization: throttle function
    function throttle(func, wait) {
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
    
    // Optimize scroll event performance
    const optimizedScrollHandler = throttle(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Update navbar styles
        if (scrollTop > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Show/hide back to top button (if needed)
        const backToTop = document.querySelector('.back-to-top');
        if (backToTop) {
            if (scrollTop > 500) {
                backToTop.style.display = 'block';
            } else {
                backToTop.style.display = 'none';
            }
        }
    }, 16);
    
    window.addEventListener('scroll', optimizedScrollHandler);
    
    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            const bars = navToggle.querySelectorAll('.bar');
            bars.forEach(bar => bar.classList.remove('active'));
        }
    });
    
    // Preload critical images
    const criticalImages = [
        'https://via.placeholder.com/200x200/4F46E5/FFFFFF?text=JS'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    // Display news from news_data.js with timeline and "Show More" functionality
    const newsContainer = document.getElementById('news-container');
    const newsToggleContainer = document.getElementById('news-toggle-container');
    const newsToggleBtn = document.getElementById('news-toggle-btn');
    
    const INITIAL_NEWS_COUNT = 3; // Number of news items to show initially
    let isExpanded = false;

    if (newsContainer && typeof newsData !== 'undefined') {
        newsContainer.innerHTML = ''; 
        
        newsData.forEach((item, index) => {
            const newsItem = document.createElement('div');
            newsItem.className = `news-item ${item.type || ''}`;
            if (index >= INITIAL_NEWS_COUNT) {
                newsItem.classList.add('hidden');
            }
            
            newsItem.innerHTML = `
                <div class="news-date">${item.date}</div>
                <div class="news-content">${item.content}</div>
            `;
            
            newsContainer.appendChild(newsItem);
            observer.observe(newsItem);
        });

        // Show toggle button if there are more items
        if (newsData.length > INITIAL_NEWS_COUNT) {
            newsToggleContainer.style.display = 'block';
            
            newsToggleBtn.addEventListener('click', () => {
                isExpanded = !isExpanded;
                const hiddenItems = newsContainer.querySelectorAll('.news-item');
                
                hiddenItems.forEach((item, index) => {
                    if (index >= INITIAL_NEWS_COUNT) {
                        item.classList.toggle('hidden');
                    }
                });

                newsToggleBtn.textContent = isExpanded ? 'Show Less' : 'Show More';
                
                // Optional: scroll back to news section top when collapsing
                if (!isExpanded) {
                    document.getElementById('news').scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
    } else if (newsContainer) {
        newsContainer.innerHTML = '<p class="error">News data not found.</p>';
    }
    
});
// Utility function: detect device type
function isMobile() {
    return window.innerWidth <= 768;
}

// Utility function: get element's distance from top
function getOffsetTop(element) {
    let offsetTop = 0;
    while(element) {
        offsetTop += element.offsetTop;
        element = element.offsetParent;
    }
    return offsetTop;
}

// Export useful functions for other scripts
window.siteUtils = {
    isMobile,
    getOffsetTop,
    throttle: function(func, wait) {
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
};
