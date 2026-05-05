        // Mobile navigation toggle
        document.addEventListener('DOMContentLoaded', () => {
            const mobileNavToggle = document.getElementById('mobileNavToggle');
            const navLinks = document.getElementById('navLinks');
            
            mobileNavToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
            
            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Close mobile nav if open
                    if (navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                    }
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 70, // Adjust for fixed header
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Highlight active section in navigation
            window.addEventListener('scroll', () => {
                const sections = document.querySelectorAll('section');
                let currentSection = '';
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop - 100;
                    const sectionHeight = section.offsetHeight;
                    
                    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                        currentSection = '#' + section.getAttribute('id');
                    }
                });
                
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === currentSection) {
                        link.classList.add('active');
                    }
                });
            });
        });