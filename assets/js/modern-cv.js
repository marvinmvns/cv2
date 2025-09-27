// Ultra-Modern CV Interactive Features
// Advanced animations, smooth scrolling, and modern interactions

document.addEventListener('DOMContentLoaded', function() {

    // =========================================================================
    // SMOOTH SCROLL NAVIGATION
    // =========================================================================

    // Create floating navigation menu
    const createFloatingNav = () => {
        const nav = document.createElement('nav');
        nav.className = 'floating-nav';
        nav.innerHTML = `
            <div class="nav-container">
                <a href="#summary" class="nav-item active" data-section="summary">
                    <i class="fas fa-user"></i>
                    <span>Perfil</span>
                </a>
                <a href="#experience" class="nav-item" data-section="experience">
                    <i class="fas fa-briefcase"></i>
                    <span>Experiência</span>
                </a>
                <a href="#skills" class="nav-item" data-section="skills">
                    <i class="fas fa-code"></i>
                    <span>Habilidades</span>
                </a>
                <a href="#education" class="nav-item" data-section="education">
                    <i class="fas fa-graduation-cap"></i>
                    <span>Formação</span>
                </a>
                <a href="#contact" class="nav-item" data-section="contact">
                    <i class="fas fa-envelope"></i>
                    <span>Contato</span>
                </a>
            </div>
        `;
        document.body.appendChild(nav);

        // Add floating nav styles
        const style = document.createElement('style');
        style.textContent = `
            .floating-nav {
                position: fixed;
                top: 50%;
                right: 2rem;
                transform: translateY(-50%);
                z-index: 1000;
                backdrop-filter: blur(20px);
                background: rgba(255, 255, 255, 0.1);
                border-radius: 50px;
                border: 1px solid rgba(255, 255, 255, 0.2);
                padding: 1rem 0.5rem;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
                transition: all 0.3s ease;
            }

            .floating-nav:hover {
                background: rgba(255, 255, 255, 0.15);
                transform: translateY(-50%) scale(1.05);
            }

            .nav-container {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
            }

            .nav-item {
                display: flex;
                align-items: center;
                padding: 0.75rem;
                color: rgba(255, 255, 255, 0.7);
                text-decoration: none;
                border-radius: 25px;
                transition: all 0.3s ease;
                position: relative;
                overflow: hidden;
            }

            .nav-item::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, #06ffa5, #00d4ff);
                opacity: 0;
                transition: opacity 0.3s ease;
            }

            .nav-item i {
                font-size: 1rem;
                margin-right: 0.5rem;
                z-index: 1;
                position: relative;
            }

            .nav-item span {
                font-size: 0.8rem;
                font-weight: 500;
                white-space: nowrap;
                z-index: 1;
                position: relative;
                opacity: 0;
                transform: translateX(-10px);
                transition: all 0.3s ease;
            }

            .nav-item:hover,
            .nav-item.active {
                color: white;
                transform: translateX(-5px);
            }

            .nav-item:hover::before,
            .nav-item.active::before {
                opacity: 1;
            }

            .floating-nav:hover .nav-item span {
                opacity: 1;
                transform: translateX(0);
            }

            @media (max-width: 768px) {
                .floating-nav {
                    display: none;
                }
            }
        `;
        document.head.appendChild(style);
    };

    // =========================================================================
    // SCROLL ANIMATIONS & INTERSECTION OBSERVER
    // =========================================================================

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Update active nav item
                const section = entry.target.closest('[data-section]') || entry.target;
                const sectionId = section.getAttribute('data-section') || section.id;
                updateActiveNavItem(sectionId);

                // Animate progress bars when skills section is visible
                if (entry.target.classList.contains('skills-section')) {
                    animateProgressBars();
                }
            }
        });
    }, observerOptions);

    // Observe all sections and animated elements
    const observeElements = () => {
        const elements = document.querySelectorAll(`
            .resume-section,
            .resume-timeline-item,
            .resume-skill-item,
            .summary-highlights .highlight-item,
            .badge
        `);

        elements.forEach(el => {
            observer.observe(el);
        });
    };

    // =========================================================================
    // INTERACTIVE PROGRESS BARS
    // =========================================================================

    const animateProgressBars = () => {
        const progressBars = document.querySelectorAll('.progress-bar');

        progressBars.forEach((bar, index) => {
            const width = bar.style.width || bar.getAttribute('style')?.match(/width:\s*(\d+%)/)?.[1] || '0%';
            bar.style.setProperty('--progress-width', width);

            setTimeout(() => {
                bar.style.width = width;
                bar.classList.add('animated');
            }, index * 200);
        });
    };

    // =========================================================================
    // PARALLAX EFFECTS
    // =========================================================================

    let ticking = false;

    const updateParallax = () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.resume-wrapper::before, .resume-wrapper::after');

        parallaxElements.forEach((el, index) => {
            const speed = 0.5 + (index * 0.2);
            const yPos = -(scrolled * speed);
            el.style.transform = `translateY(${yPos}px)`;
        });

        ticking = false;
    };

    const requestParallaxUpdate = () => {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    };

    // =========================================================================
    // INTERACTIVE ELEMENTS
    // =========================================================================

    const addInteractiveFeatures = () => {
        // Profile picture click effect
        const picture = document.querySelector('.picture');
        if (picture) {
            picture.addEventListener('click', () => {
                picture.style.animation = 'bounce-in 0.6s ease-out';
                setTimeout(() => {
                    picture.style.animation = '';
                }, 600);
            });
        }

        // Badge hover effects with particle explosion
        const badges = document.querySelectorAll('.badge');
        badges.forEach(badge => {
            badge.addEventListener('mouseenter', () => {
                createParticleExplosion(badge);
            });
        });

        // Timeline item hover effects
        const timelineItems = document.querySelectorAll('.resume-timeline-item');
        timelineItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'translateX(10px) scale(1.02)';
            });

            item.addEventListener('mouseleave', () => {
                item.style.transform = '';
            });
        });
    };

    // =========================================================================
    // PARTICLE EFFECTS
    // =========================================================================

    const createParticleExplosion = (element) => {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        for (let i = 0; i < 6; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: linear-gradient(45deg, #06ffa5, #00d4ff);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                left: ${centerX}px;
                top: ${centerY}px;
            `;

            document.body.appendChild(particle);

            const angle = (i / 6) * Math.PI * 2;
            const distance = 50 + Math.random() * 30;
            const endX = centerX + Math.cos(angle) * distance;
            const endY = centerY + Math.sin(angle) * distance;

            particle.animate([
                { transform: 'translate(0, 0) scale(1)', opacity: 1 },
                { transform: `translate(${endX - centerX}px, ${endY - centerY}px) scale(0)`, opacity: 0 }
            ], {
                duration: 800,
                easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
            }).onfinish = () => particle.remove();
        }
    };

    // =========================================================================
    // SMOOTH SCROLLING
    // =========================================================================

    const initSmoothScrolling = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    };

    // =========================================================================
    // NAVIGATION HELPERS
    // =========================================================================

    const updateActiveNavItem = (sectionId) => {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-section') === sectionId) {
                item.classList.add('active');
            }
        });
    };

    // =========================================================================
    // PERFORMANCE MONITORING
    // =========================================================================

    const throttle = (func, limit) => {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    };

    // =========================================================================
    // DARK MODE FUNCTIONALITY
    // =========================================================================

        const initDarkMode = () => {
        const themeToggle = document.getElementById('themeToggle');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

        // Get saved theme or use system preference
        const savedTheme = localStorage.getItem('theme') || (prefersDark.matches ? 'dark' : 'light');

        // Apply initial theme
        document.documentElement.setAttribute('data-theme', savedTheme);

        // Theme toggle functionality (guard if toggle exists)
        if (!themeToggle) return;
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);

            // Add celebration effect
            createThemeChangeEffect();
        });

        // Listen for system theme changes
        prefersDark.addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
            }
        });
    };

    const createThemeChangeEffect = () => {
        const colors = ['#06ffa5', '#00d4ff', '#667eea', '#764ba2'];

        for (let i = 0; i < 12; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 8px;
                height: 8px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                border-radius: 50%;
                pointer-events: none;
                z-index: 10001;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            `;

            document.body.appendChild(particle);

            const angle = (i / 12) * Math.PI * 2;
            const distance = 100 + Math.random() * 100;
            const endX = Math.cos(angle) * distance;
            const endY = Math.sin(angle) * distance;

            particle.animate([
                {
                    transform: 'translate(-50%, -50%) scale(0)',
                    opacity: 1
                },
                {
                    transform: `translate(calc(-50% + ${endX}px), calc(-50% + ${endY}px)) scale(1)`,
                    opacity: 1,
                    offset: 0.7
                },
                {
                    transform: `translate(calc(-50% + ${endX}px), calc(-50% + ${endY}px)) scale(0)`,
                    opacity: 0
                }
            ], {
                duration: 1000,
                easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
            }).onfinish = () => particle.remove();
        }
    };

    // =========================================================================
    // INITIALIZATION
    // =========================================================================

    const init = () => {
        createFloatingNav();
        observeElements();
        addInteractiveFeatures();
        initSmoothScrolling();
        initDarkMode();

        // Add scroll event listeners
        window.addEventListener('scroll', throttle(requestParallaxUpdate, 16));

        // Initial animations
        setTimeout(() => {
            document.body.classList.add('loaded');
        }, 100);

        console.log('🚀 Ultra-Modern CV initialized successfully!');
    };

    // Start the magic
    init();
});

// =========================================================================
// ADDITIONAL CSS FOR DYNAMIC FEATURES
// =========================================================================

const additionalStyles = `
    body {
        transition: all 0.3s ease;
    }

    body.loaded .resume-wrapper-inner {
        animation: bounce-in 1s ease-out;
    }

    .visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }

    .progress-bar.animated {
        transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* Custom scrollbar */
    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.1);
    }

    ::-webkit-scrollbar-thumb {
        background: linear-gradient(135deg, #06ffa5, #00d4ff);
        border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(135deg, #00d4ff, #06ffa5);
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);
