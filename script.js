// Portfolio JavaScript
// Author: Julie Jancickova
// Year: 2025

// Smooth scroll functionality (if needed in the future)
document.addEventListener('DOMContentLoaded', function() {
    
    // Add smooth scroll to all links (future use)
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Optional: Add subtle parallax effect to photo on scroll
    const photo = document.querySelector('.photo-container img');
    
    if (photo) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.3;
            photo.style.transform = `translateY(${rate}px)`;
        });
    }

    // Log portfolio load
    console.log('Portfolio loaded successfully - Julie Jancickova © 2025');
});
