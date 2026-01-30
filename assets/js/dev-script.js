
  // Page load par counters start kariye
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".counter").forEach(counter => {
      const target = +counter.getAttribute("data-target");
      let count = 0;
      const increment = target / 200;

      const updateCount = () => {
        count += increment;
        if (count < target) {
          counter.innerText = Math.ceil(count) + "+"; // plus sign add
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = target + "+"; // final value with +
        }
      };

      updateCount();
    });
  });



        // Mobile menu functionality
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const closeMenuButton = document.getElementById('close-menu');
        const menuOverlay = document.getElementById('menu-overlay');

        function openMenu() {
            mobileMenu.classList.add('active');
            menuOverlay.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        function closeMenu() {
            mobileMenu.classList.remove('active');
            menuOverlay.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }

        mobileMenuButton.addEventListener('click', openMenu);
        closeMenuButton.addEventListener('click', closeMenu);
        menuOverlay.addEventListener('click', closeMenu);

        // Close menu when clicking on navigation links
        const mobileNavLinks = document.querySelectorAll('#mobile-menu a');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Smooth scrolling for navigation links
        const navLinks = document.querySelectorAll('a[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 70; // Summary for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Add scroll effect to navbar
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('nav');
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-lg');
            } else {
                navbar.classList.remove('shadow-lg');
            }
        });

        // Add animation on scroll
        const observerOptions = {
            threshold: 0.1,
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

        // Observe sections for animation
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });

        // Form interaction
        const emailInput = document.querySelector('input[type="email"]');
        const submitButton = document.querySelector('.cta-button');

        emailInput.addEventListener('focus', function() {
            this.parentElement.classList.add('ring-2', 'ring-blue-500');
        });

        emailInput.addEventListener('blur', function() {
            this.parentElement.classList.remove('ring-2', 'ring-blue-500');
        });

        submitButton.addEventListener('click', function(e) {
            e.preventDefault();
            const email = emailInput.value;
            
            if (email && email.includes('@')) {
                // Simulate form submission
                this.textContent = 'SUBMITTED!';
                this.classList.add('bg-green-600');
                setTimeout(() => {
                    this.textContent = 'REQUIRE OFFER';
                    this.classList.remove('bg-green-600');
                }, 2000);
            } else {
                // Show error state
                emailInput.classList.add('border-red-500');
                setTimeout(() => {
                    emailInput.classList.remove('border-red-500');
                }, 2000);
            }
        });
