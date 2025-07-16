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
        const header = document.querySelector('.header');
        const headerContent = document.querySelector('.header-content');
        const nav = document.querySelector('.nav');
        const donateBtn = document.querySelector('.donate-btn.primary');
        
        // Create mobile menu elements if they don't exist
        if (!document.querySelector('.hamburger')) {
            // Create hamburger button
            const hamburger = document.createElement('div');
            hamburger.className = 'hamburger';
            hamburger.innerHTML = '☰';
            headerContent.appendChild(hamburger);
            
            // Create mobile navigation
            const mobileNav = document.createElement('div');
            mobileNav.className = 'mobile-nav';
            
            // Clone navigation and donate button for mobile
            const mobileNavContent = nav.cloneNode(true);
            const mobileDonateBtn = donateBtn.cloneNode(true);
            
            mobileNav.appendChild(mobileNavContent);
            mobileNav.appendChild(mobileDonateBtn);
            header.appendChild(mobileNav);
            
            // Update mobile nav links for causes page
            const mobileNavCausesLink = mobileNav.querySelector('a[href="#causes"]');
            if (mobileNavCausesLink) {
                mobileNavCausesLink.href = 'causes.html';
            }
            
            // Add click handler for hamburger
            hamburger.addEventListener('click', function() {
                mobileNav.classList.toggle('active');
                hamburger.innerHTML = mobileNav.classList.contains('active') ? '✕' : '☰';
            });
            
            // Add click handlers for mobile nav links
            const mobileNavLinks = mobileNav.querySelectorAll('a');
            mobileNavLinks.forEach(link => {
                link.addEventListener('click', function() {
                    mobileNav.classList.remove('active');
                    hamburger.innerHTML = '☰';
                });
            });
            
            // Close mobile menu when clicking outside
            document.addEventListener('click', function(e) {
                if (!header.contains(e.target) && mobileNav.classList.contains('active')) {
                    mobileNav.classList.remove('active');
                    hamburger.innerHTML = '☰';
                }
            });
        }
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
                hamburger.innerHTML = '☰';
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
            // Add a subtle animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Here you would typically redirect to a donation page
            console.log('Donate button clicked');
            alert('Thank you for your interest in donating! This would redirect to a donation page.');
        });
    });
    
    // Add hover effects for cause cards
    const existingCauseCards = document.querySelectorAll('.cause-card');
    
    existingCauseCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        // Add click effect
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.98) translateY(-5px)';
            setTimeout(() => {
                this.style.transform = 'translateY(-8px)';
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
            }
        });
    }, observerOptions);
    
    // Observe stats items
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
    
    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    window.addEventListener('load', function() {
        document.body.style.opacity = '1';
    });
    
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
                    isValid = false;
                } else {
                    input.style.borderColor = '#d1d5db';
                }
            });
            
            if (!isValid) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                document.getElementById('email').style.borderColor = '#ef4444';
                alert('Please enter a valid email address.');
                return;
            }
            
            // Show loading state
            const submitBtn = quickContactForm.querySelector('.send-message-btn');
            const btnText = submitBtn.querySelector('.btn-text');
            
            submitBtn.disabled = true;
            btnText.textContent = 'Sending...';
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                console.log('Form submitted:', data);
                
                // Hide form and show success message
                quickContactForm.style.display = 'none';
                quickFormSuccess.style.display = 'block';
                
                // Reset form after showing success
                setTimeout(() => {
                    quickContactForm.reset();
                    quickContactForm.style.display = 'flex';
                    quickFormSuccess.style.display = 'none';
                    
                    // Reset button state
                    submitBtn.disabled = false;
                    btnText.textContent = 'Send Message';
                }, 3000);
                
            }, 2000); // Simulate 2 second processing time
        });
        
        // Real-time validation
        const inputs = quickContactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.hasAttribute('required') && !this.value.trim()) {
                    this.style.borderColor = '#ef4444';
                } else if (this.type === 'email' && this.value) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    this.style.borderColor = emailRegex.test(this.value) ? '#22c55e' : '#ef4444';
                } else if (this.value.trim()) {
                    this.style.borderColor = '#22c55e';
                } else {
                    this.style.borderColor = '#d1d5db';
                }
            });
            
            input.addEventListener('focus', function() {
                this.style.borderColor = '#3b82f6';
            });
        });
    }
    
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
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
});