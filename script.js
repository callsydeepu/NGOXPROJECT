// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav a[href^="#"]:not([href="causes.html"])');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                const mobileNav = document.querySelector('.mobile-nav');
                if (mobileNav && mobileNav.classList.contains('active')) {
                    mobileNav.classList.remove('active');
                }
            }
        });
    });
    
    // Mobile menu functionality
    function initializeMobileMenu() {
        // Check if elements already exist
        let hamburger = document.querySelector('.hamburger');
        let mobileNav = document.querySelector('.mobile-nav');
        
        // Only create if they don't exist
        if (!hamburger || !mobileNav) {
            createMobileMenuElements();
        }
        
        // Attach event listeners
        attachMobileMenuEvents();
    }
    
    function createMobileMenuElements() {
        const header = document.querySelector('.header');
        const headerContent = document.querySelector('.header-content');
        const nav = document.querySelector('.nav');
        const donateBtn = document.querySelector('.donate-btn.primary');
        
        // Create hamburger button
        const hamburger = document.createElement('button');
        hamburger.className = 'hamburger';
        hamburger.setAttribute('aria-label', 'Toggle navigation menu');
        hamburger.innerHTML = `
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
        `;
        headerContent.appendChild(hamburger);
        
        // Create mobile navigation
        const mobileNav = document.createElement('div');
        mobileNav.className = 'mobile-nav';
        
        // Clone navigation for mobile
        if (nav) {
            const mobileNavContent = nav.cloneNode(true);
            mobileNav.appendChild(mobileNavContent);
        }
        
        // Clone donate button for mobile
        if (donateBtn) {
            const mobileDonateBtn = donateBtn.cloneNode(true);
            mobileNav.appendChild(mobileDonateBtn);
        }
        
        header.appendChild(mobileNav);
    }
    
    function attachMobileMenuEvents() {
        const hamburger = document.querySelector('.hamburger');
        const mobileNav = document.querySelector('.mobile-nav');
        
        if (!hamburger || !mobileNav) return;
        
        // Remove existing event listeners to prevent duplicates
        const newHamburger = hamburger.cloneNode(true);
        hamburger.parentNode.replaceChild(newHamburger, hamburger);
        
        // Add click handler for hamburger
        newHamburger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const isActive = mobileNav.classList.contains('active');
            
            if (isActive) {
                mobileNav.classList.remove('active');
                newHamburger.classList.remove('active');
            } else {
                mobileNav.classList.add('active');
                newHamburger.classList.add('active');
            }
        });
        
        // Add event listeners to mobile nav links
        const mobileNavLinks = mobileNav.querySelectorAll('a');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Close mobile menu when link is clicked
                mobileNav.classList.remove('active');
                newHamburger.classList.remove('active');
                
                // Handle smooth scrolling for anchor links
                if (this.getAttribute('href').startsWith('#')) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    
                    if (targetSection) {
                        targetSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileNav.contains(e.target) && !newHamburger.contains(e.target)) {
                if (mobileNav.classList.contains('active')) {
                    mobileNav.classList.remove('active');
                    newHamburger.classList.remove('active');
                }
            }
        });
    }
    
    // Initialize mobile menu
    initializeMobileMenu();
    
    // Handle window resize for mobile menu
    function handleResize() {
        const mobileNav = document.querySelector('.mobile-nav');
        const hamburger = document.querySelector('.hamburger');
        
        if (window.innerWidth > 768) {
            if (mobileNav) {
                mobileNav.classList.remove('active');
            }
            if (hamburger) {
                hamburger.classList.remove('active');
            }
        }
    }
    
    window.addEventListener('resize', handleResize);
    
    // Add functionality for social media icons
    const footerSocialIcons = document.querySelectorAll('.footer .social-icon');
    footerSocialIcons.forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.preventDefault();
            
            const platform = this.getAttribute('data-platform');
            let url = '';
            
            switch(platform) {
                case 'facebook':
                    url = 'https://facebook.com/srivinayakafoundation';
                    break;
                case 'instagram':
                    url = 'https://instagram.com/srivinayakafoundation';
                    break;
                case 'twitter':
                    url = 'https://twitter.com/srivinayakafoundation';
                    break;
                case 'linkedin':
                    url = 'https://linkedin.com/company/srivinayakafoundation';
                    break;
            }
            
            if (url) {
                window.open(url, '_blank');
            }
            
            // Add click animation
            this.style.transform = 'scale(0.95) translateY(-2px)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
    
    // Keep existing social icons functionality for other sections
    const socialIcons = document.querySelectorAll('.social-icon:not(.footer .social-icon)');
    socialIcons.forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.preventDefault();
            
            const platform = this.getAttribute('data-platform');
            let url = '';
            
            switch(platform) {
                case 'facebook':
                    url = 'https://facebook.com/srivinayakafoundation';
                    break;
                case 'instagram':
                    url = 'https://instagram.com/srivinayakafoundation';
                    break;
                case 'twitter':
                    url = 'https://twitter.com/srivinayakafoundation';
                    break;
                case 'whatsapp':
                    url = 'https://wa.me/919876543210';
                    break;
                case 'youtube':
                    url = 'https://youtube.com/@srivinayakafoundation';
                    break;
                case 'linkedin':
                    url = 'https://linkedin.com/company/srivinayakafoundation';
                    break;
            }
            
            if (url) {
                window.open(url, '_blank');
            }
            
            // Add click animation
            this.style.transform = 'scale(0.95) translateY(-3px)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
        
        // Add hover effect for better user experience
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    // Add click handlers for donate buttons
    const donateButtons = document.querySelectorAll('.donate-btn');
    
    donateButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Enhanced button animation with ripple effect
            this.style.transform = 'scale(0.95)';
            this.style.boxShadow = '0 2px 8px rgba(255, 152, 105, 0.4)';
            
            // Create ripple effect
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.6)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.left = '50%';
            ripple.style.top = '50%';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.marginLeft = '-10px';
            ripple.style.marginTop = '-10px';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                this.style.transform = '';
                this.style.boxShadow = '';
                if (ripple.parentNode) {
                    ripple.parentNode.removeChild(ripple);
                }
            }, 600);
            
            // Show donation modal instead of alert
            showDonationModal();
        });
        
        // Enhanced hover effects
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
    
    // Donation Modal functionality
    function showDonationModal() {
        const modal = document.createElement('div');
        modal.className = 'donation-modal';
        modal.innerHTML = `
            <div class="modal-overlay">
                <div class="modal-content">
                    <button class="modal-close">&times;</button>
                    <div class="modal-header">
                        <h2>Make a Donation</h2>
                        <p>Your contribution makes a difference in someone's life</p>
                    </div>
                    <div class="donation-amounts">
                        <button class="amount-btn" data-amount="500">₹500</button>
                        <button class="amount-btn" data-amount="1000">₹1,000</button>
                        <button class="amount-btn" data-amount="2500">₹2,500</button>
                        <button class="amount-btn" data-amount="5000">₹5,000</button>
                    </div>
                    <div class="custom-amount">
                        <input type="number" placeholder="Enter custom amount" class="amount-input">
                    </div>
                    <div class="donation-methods">
                        <h3>Choose Payment Method</h3>
                        <div class="payment-options">
                            <button class="payment-btn" data-method="upi">
                                <span class="payment-icon">📱</span>
                                UPI
                            </button>
                            <button class="payment-btn" data-method="card">
                                <span class="payment-icon">💳</span>
                                Card
                            </button>
                            <button class="payment-btn" data-method="netbanking">
                                <span class="payment-icon">🏦</span>
                                Net Banking
                            </button>
                        </div>
                    </div>
                    <button class="proceed-btn">Proceed to Donate</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Modal animations
        setTimeout(() => {
            modal.querySelector('.modal-overlay').style.opacity = '1';
            modal.querySelector('.modal-content').style.transform = 'translateY(0) scale(1)';
        }, 10);
        
        // Modal event listeners
        const closeModal = () => {
            modal.querySelector('.modal-overlay').style.opacity = '0';
            modal.querySelector('.modal-content').style.transform = 'translateY(-50px) scale(0.9)';
            setTimeout(() => {
                document.body.removeChild(modal);
            }, 300);
        };
        
        modal.querySelector('.modal-close').addEventListener('click', closeModal);
        modal.querySelector('.modal-overlay').addEventListener('click', (e) => {
            if (e.target === modal.querySelector('.modal-overlay')) {
                closeModal();
            }
        });
        
        // Amount selection
        const amountBtns = modal.querySelectorAll('.amount-btn');
        const amountInput = modal.querySelector('.amount-input');
        
        amountBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                amountBtns.forEach(b => b.classList.remove('selected'));
                this.classList.add('selected');
                amountInput.value = this.dataset.amount;
            });
        });
        
        // Payment method selection
        const paymentBtns = modal.querySelectorAll('.payment-btn');
        paymentBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                paymentBtns.forEach(b => b.classList.remove('selected'));
                this.classList.add('selected');
            });
        });
        
        // Proceed button
        modal.querySelector('.proceed-btn').addEventListener('click', function() {
            const selectedAmount = amountInput.value || modal.querySelector('.amount-btn.selected')?.dataset.amount;
            const selectedMethod = modal.querySelector('.payment-btn.selected')?.dataset.method;
            
            if (!selectedAmount) {
                alert('Please select or enter an amount');
                return;
            }
            
            if (!selectedMethod) {
                alert('Please select a payment method');
                return;
            }
            
            // Simulate payment processing
            this.textContent = 'Processing...';
            this.disabled = true;
            
            setTimeout(() => {
                closeModal();
                showThankYouMessage(selectedAmount);
            }, 2000);
        });
    }
    
    // Thank you message
    function showThankYouMessage(amount) {
        const thankYou = document.createElement('div');
        thankYou.className = 'thank-you-message';
        thankYou.innerHTML = `
            <div class="thank-you-content">
                <div class="success-icon">✓</div>
                <h2>Thank You!</h2>
                <p>Your donation of ₹${amount} will make a real difference.</p>
                <p>You will receive a confirmation email shortly.</p>
            </div>
        `;
        
        document.body.appendChild(thankYou);
        
        setTimeout(() => {
            thankYou.style.opacity = '1';
            thankYou.style.transform = 'translateY(0)';
        }, 10);
        
        setTimeout(() => {
            thankYou.style.opacity = '0';
            thankYou.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                document.body.removeChild(thankYou);
            }, 300);
        }, 4000);
    }
    
    // Add hover effects for cause cards
    const existingCauseCards = document.querySelectorAll('.cause-card');
    
    existingCauseCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px)';
            this.style.transition = 'transform 0.3s ease';
            this.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
        });
        
        // Add click effect
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.98) translateY(-8px)';
            setTimeout(() => {
                this.style.transform = 'translateY(-12px)';
            }, 150);
        });
    });
    
    // Make cause cards clickable to navigate to causes page
    // Cause cards now scroll to causes section instead
    const clickableCauseCards = document.querySelectorAll('.cause-card');
    clickableCauseCards.forEach(card => {
        card.addEventListener('click', function() {
            const causesSection = document.querySelector('#causes');
            if (causesSection) {
                causesSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll animation for stats
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add counter animation for stats
                const statValue = entry.target.querySelector('.stat-value');
                if (statValue && !statValue.dataset.animated) {
                    animateCounter(statValue);
                    statValue.dataset.animated = 'true';
                }
            }
        });
    }, observerOptions);
    
    // Counter animation function
    function animateCounter(element) {
        const text = element.textContent;
        const hasLakh = text.includes('Lakh');
        const hasCr = text.includes('Cr');
        const hasRupee = text.includes('₹');
        
        // Extract number
        let numberStr = text.replace(/[^\d.]/g, '');
        let targetNumber = parseFloat(numberStr);
        
        if (isNaN(targetNumber)) return;
        
        let currentNumber = 0;
        const increment = targetNumber / 60; // 60 steps for smoother animation
        const duration = 2000; // 2 seconds
        const stepTime = duration / 60;
        
        const timer = setInterval(() => {
            currentNumber += increment;
            
            if (currentNumber >= targetNumber) {
                currentNumber = targetNumber;
                clearInterval(timer);
            }
            
            let displayNumber = currentNumber.toFixed(2);
            let displayText = displayNumber;
            
            if (hasRupee) displayText = '₹' + displayText;
            if (hasCr) displayText += ' Cr+';
            else if (hasLakh) displayText += ' Lakh+';
            else displayText += '+';
            
            element.textContent = displayText;
        }, stepTime);
    }
    
    // Observe stats items
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
    
    // Enhanced loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.8s ease';
    
    // Add progress bar
    const progressBar = document.createElement('div');
    progressBar.className = 'loading-progress';
    progressBar.innerHTML = '<div class="progress-fill"></div>';
    document.body.appendChild(progressBar);
    
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 90) progress = 90;
        progressBar.querySelector('.progress-fill').style.width = progress + '%';
    }, 100);
    
    window.addEventListener('load', function() {
        clearInterval(progressInterval);
        progressBar.querySelector('.progress-fill').style.width = '100%';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
            progressBar.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(progressBar);
            }, 500);
        }, 300);
    });
    
    // Smooth scroll enhancement
    function smoothScrollTo(target, duration = 1000) {
        const targetPosition = target.offsetTop - 100; // Account for header
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;
        
        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }
        
        function easeInOutQuad(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }
        
        requestAnimationFrame(animation);
    }
    
    // Update smooth scrolling for navigation links
    const enhancedNavLinks = document.querySelectorAll('.nav a[href^="#"]:not([href="causes.html"])');
    
    enhancedNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                smoothScrollTo(targetSection);
                
                // Close mobile menu if open
                const mobileNav = document.querySelector('.mobile-nav');
                if (mobileNav && mobileNav.classList.contains('active')) {
                    mobileNav.classList.remove('active');
                }
            }
        });
    });
    
    // Add scroll-to-top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.title = 'Back to top';
    document.body.appendChild(scrollToTopBtn);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    
    scrollToTopBtn.addEventListener('click', function() {
        smoothScrollTo(document.body, 800);
    });
    
    // Add loading animation
    // (This section is now handled above with enhanced loading)
    
    // Quick Contact form functionality
    const quickContactForm = document.getElementById('quickContactForm');
    const quickFormSuccess = document.getElementById('quickFormSuccess');
    
    if (quickContactForm) {
        quickContactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(quickContactForm);
            const data = Object.fromEntries(formData);
            
            // Validate required fields
            const requiredFields = ['name', 'email', 'phone', 'address', 'caseDescription'];
            let isValid = true;
            
            requiredFields.forEach(field => {
                const input = document.getElementById(field);
                if (!data[field] || data[field].trim() === '') {
                    input.style.borderColor = '#ef4444';
                    input.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
                    isValid = false;
                } else {
                    input.style.borderColor = '#22c55e';
                    input.style.boxShadow = '0 0 0 3px rgba(34, 197, 94, 0.1)';
                }
            });
            
            if (!isValid) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }
            
            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                document.getElementById('email').style.borderColor = '#ef4444';
                document.getElementById('email').style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Show loading state
            const submitBtn = quickContactForm.querySelector('.send-message-btn');
            const btnText = submitBtn.querySelector('.btn-text');
            const originalText = btnText.textContent;
            
            submitBtn.disabled = true;
            btnText.textContent = 'Sending...';
            submitBtn.style.background = '#9ca3af';
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                console.log('Form submitted:', data);
                
                // Hide form and show success message
                quickContactForm.style.display = 'none';
                quickFormSuccess.style.display = 'block';
                
                showNotification('Message sent successfully!', 'success');
                
                // Reset form after showing success
                setTimeout(() => {
                    quickContactForm.reset();
                    quickContactForm.style.display = 'flex';
                    quickFormSuccess.style.display = 'none';
                    
                    // Reset button state
                    submitBtn.disabled = false;
                    btnText.textContent = originalText;
                    submitBtn.style.background = '#22c55e';
                }, 3000);
                
            }, 2000); // Simulate 2 second processing time
        });
    }
    
    // Notification system
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">${type === 'success' ? '✓' : type === 'error' ? '✗' : 'ℹ'}</span>
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
            notification.style.opacity = '1';
        }, 10);
        
        const closeNotification = () => {
            notification.style.transform = 'translateX(100%)';
            notification.style.opacity = '0';
            setTimeout(() => {
                if (notification.parentNode) {
                    document.body.removeChild(notification);
                }
            }, 300);
        };
        
        notification.querySelector('.notification-close').addEventListener('click', closeNotification);
        
        setTimeout(closeNotification, 5000); // Auto close after 5 seconds
        
        // Real-time validation
        const inputs = quickContactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.hasAttribute('required') && !this.value.trim()) {
                    this.style.borderColor = '#ef4444';
                    this.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
                } else if (this.type === 'email' && this.value) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (emailRegex.test(this.value)) {
                        this.style.borderColor = '#22c55e';
                        this.style.boxShadow = '0 0 0 3px rgba(34, 197, 94, 0.1)';
                    } else {
                        this.style.borderColor = '#ef4444';
                        this.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
                    }
                } else if (this.value.trim()) {
                    this.style.borderColor = '#22c55e';
                    this.style.boxShadow = '0 0 0 3px rgba(34, 197, 94, 0.1)';
                } else {
                    this.style.borderColor = '#d1d5db';
                    this.style.boxShadow = 'none';
                }
            });
            
            input.addEventListener('focus', function() {
                this.style.borderColor = '#3b82f6';
                this.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
            });
        });
    
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // ESC key to close modals
        if (e.key === 'Escape') {
            const modal = document.querySelector('.donation-modal');
            if (modal) {
                modal.querySelector('.modal-close').click();
            }
        }
        
        // Enter key on buttons
        if (e.key === 'Enter' && e.target.tagName === 'BUTTON') {
            e.target.click();
        }
    });
    
    // Add click functionality for contact options
    const contactOptions = document.querySelectorAll('.contact-option');
    contactOptions.forEach(option => {
        option.addEventListener('click', function() {
            const optionType = this.classList[1]; // whatsapp, instagram, phone, email, address
            
            switch(optionType) {
                case 'whatsapp':
                    window.open('https://wa.me/919876543210', '_blank');
                    break;
                case 'instagram':
                    window.open('https://instagram.com/srivinayakafoundation', '_blank');
                    break;
                case 'phone':
                    window.location.href = 'tel:+919876543210';
                    break;
                case 'email':
                    window.location.href = 'mailto:office@vinayaka.foundation';
                    break;
                case 'address':
                    window.open('https://maps.google.com/?q=No.6,+Dhanammal+Street,+Spurtank+Road,+Chetpet,+Chennai+600-031', '_blank');
                    break;
            }
            
            // Add click animation
            this.style.transform = 'scale(0.98)';
            this.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
            setTimeout(() => {
                this.style.transform = '';
                this.style.boxShadow = '';
            }, 150);
        });
    });
});