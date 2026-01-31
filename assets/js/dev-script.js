// \    <!-- nav bar script -->

        // Navbar Scroll Effect
        const navbar = document.getElementById("navbar");
        let lastScrollTop = 0;
        let ticking = false;

        function updateNavbar(scrollTop) {
            if (scrollTop > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        }

        function onScroll() {
            lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (!ticking) {
                window.requestAnimationFrame(() => {
                    updateNavbar(lastScrollTop);
                    ticking = false;
                });

                ticking = true;
            }
        }

        window.addEventListener("scroll", onScroll);

        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById("mobileMenuBtn");
        const mobileMenu = document.getElementById("mobileMenu");
        const closeMobileMenu = document.getElementById("closeMobileMenu");
        const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

        function openMobileMenu() {
            mobileMenu.classList.add("active");
            mobileMenuBtn.classList.add("active");
            document.body.style.overflow = "hidden";
        }

        function closeMobileMenuFunc() {
            mobileMenu.classList.remove("active");
            mobileMenuBtn.classList.remove("active");
            document.body.style.overflow = "";
        }

        mobileMenuBtn.addEventListener("click", () => {
            if (mobileMenu.classList.contains("active")) {
                closeMobileMenuFunc();
            } else {
                openMobileMenu();
            }
        });

        closeMobileMenu.addEventListener("click", closeMobileMenuFunc);

        mobileNavLinks.forEach((link) => {
            link.addEventListener("click", () => {
                closeMobileMenuFunc();
            });
        });

        mobileMenu.addEventListener("click", (e) => {
            if (e.target === mobileMenu) {
                closeMobileMenuFunc();
            }
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && mobileMenu.classList.contains("active")) {
                closeMobileMenuFunc();
            }
        });

        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener("click", function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute("href"));

                if (target) {
                    const navbarHeight = navbar.offsetHeight;
                    const targetPosition = target.offsetTop - navbarHeight - 20;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: "smooth",
                    });
                }
            });
        });

        const sections = document.querySelectorAll("section[id]");
        const navLinks = document.querySelectorAll(".nav-link");

        function highlightNavigation() {
            const scrollY = window.pageYOffset;

            sections.forEach((section) => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 100;
                const sectionId = section.getAttribute("id");

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLinks.forEach((link) => {
                        link.classList.remove("active");
                        if (link.getAttribute("href") === `#${sectionId}`) {
                            link.classList.add("active");
                        }
                    });
                }
            });
        }

        window.addEventListener("scroll", highlightNavigation);

        const hero = document.querySelector(".h-screen");

        if (hero) {
            window.addEventListener("scroll", () => {
                const scrolled = window.pageYOffset;
                const parallax = scrolled * 0.5;
                hero.style.transform = `translateY(${parallax}px)`;
            });
        }

        document.addEventListener("DOMContentLoaded", () => {
            updateNavbar(window.pageYOffset || document.documentElement.scrollTop);

            highlightNavigation();

            const observerOptions = {
                threshold: 0.1,
                rootMargin: "0px 0px -100px 0px",
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = "1";
                        entry.target.style.transform = "translateY(0)";
                    }
                });
            }, observerOptions);

            sections.forEach((section) => {
                section.style.opacity = "0";
                section.style.transform = "translateY(30px)";
                section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
                observer.observe(section);
            });
        });

        function createRipple(event) {
            const button = event.currentTarget;
            const ripple = document.createElement("span");
            const diameter = Math.max(button.clientWidth, button.clientHeight);
            const radius = diameter / 2;

            ripple.style.width = ripple.style.height = `${diameter}px`;
            ripple.style.left = `${event.clientX - button.offsetLeft - radius}px`;
            ripple.style.top = `${event.clientY - button.offsetTop - radius}px`;
            ripple.classList.add("ripple");

            const existingRipple = button.getElementsByClassName("ripple")[0];
            if (existingRipple) {
                existingRipple.remove();
            }

            button.appendChild(ripple);
        }

        const buttons = document.querySelectorAll(".cta-button, .mobile-cta-button");
        buttons.forEach((button) => {
            button.addEventListener("click", createRipple);
        });

        const style = document.createElement("style");
        style.textContent = `
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.4);
    transform: scale(0);
    animation: ripple-animation 0.6s ease-out;
    pointer-events: none;
  }

  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
        document.head.appendChild(style);

   
    // <!-- nav bar script -->

    // <!-- faq section  -->

        const faqToggles = document.querySelectorAll(".faq-toggle");

        faqToggles.forEach(toggle => {
            toggle.addEventListener("click", () => {
                const item = toggle.parentElement;
                const content = toggle.nextElementSibling;

                document.querySelectorAll(".faq-item").forEach(other => {
                    if (other !== item) {
                        other.classList.remove("active");
                        other.querySelector(".faq-content").style.maxHeight = null;
                    }
                });

                item.classList.toggle("active");

                if (item.classList.contains("active")) {
                    content.style.maxHeight = content.scrollHeight + "px";
                } else {
                    content.style.maxHeight = null;
                }
            });
        });

        // Open first FAQ by default
        document.querySelector(".faq-toggle").click();
   
    // <!--end faq section  -->

         // Data Gathering section slider
        const sliderContainer = document.getElementById('sliderContainer');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const currentSlideEl = document.getElementById('currentSlide');
        const totalSlidesEl = document.getElementById('totalSlides');

        const cards = document.querySelectorAll('.process-card');
        const totalSlides = cards.length;
        let currentSlide = 0;

        totalSlidesEl.textContent = totalSlides.toString().padStart(2, '0');

        function updateSlideCounter() {
            currentSlideEl.textContent = (currentSlide + 1).toString().padStart(2, '0');
        }

        function scrollToSlide(index) {
            const cardWidth = cards[0].offsetWidth + 24; 
            sliderContainer.scrollLeft = index * cardWidth;
            currentSlide = index;
            updateSlideCounter();
        }

        prevBtn.addEventListener('click', () => {
            if (currentSlide > 0) {
                scrollToSlide(currentSlide - 1);
            }
        });

        nextBtn.addEventListener('click', () => {
            if (currentSlide < totalSlides - 1) {
                scrollToSlide(currentSlide + 1);
            }
        });

        let scrollTimeout;
        sliderContainer.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                const cardWidth = cards[0].offsetWidth + 24;
                const scrolled = sliderContainer.scrollLeft;
                const newIndex = Math.round(scrolled / cardWidth);
                if (newIndex !== currentSlide) {
                    currentSlide = newIndex;
                    updateSlideCounter();
                }
            }, 100);
        });

        let startX = 0;
        let scrollLeft = 0;

        sliderContainer.addEventListener('touchstart', (e) => {
            startX = e.touches[0].pageX - sliderContainer.offsetLeft;
            scrollLeft = sliderContainer.scrollLeft;
        });

        sliderContainer.addEventListener('touchmove', (e) => {
            if (!startX) return;
            const x = e.touches[0].pageX - sliderContainer.offsetLeft;
            const walk = (x - startX) * 2;
            sliderContainer.scrollLeft = scrollLeft - walk;
        });

        sliderContainer.addEventListener('touchend', () => {
            startX = 0;
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                prevBtn.click();
            } else if (e.key === 'ArrowRight') {
                nextBtn.click();
            }
        });
        // end Data Gathering section slider

        // Ideal Tech Stack We Use for
          function switchTab(category) {
            document.querySelectorAll('.tech-content').forEach(content => {
                content.classList.remove('active');
            });

            document.querySelectorAll('.menu-item').forEach(item => {
                item.classList.remove('active');
            });

            document.getElementById(category + '-content').classList.add('active');

            event.currentTarget.classList.add('active');
        }
        //end Ideal Tech Stack We Use for