// assets/js/scripts.js

/**
 * Nexovia - Main Scripts
 * Developer: Osman Temiz Team
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. UI Elements ---
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const header = document.getElementById('main-header');
    
    // --- 2. Mobile Menu Logic ---
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                // Menü açıldığında header'ı matlaştır
                header.classList.add('bg-nexovia-dark');
            } else {
                mobileMenu.classList.add('hidden');
                // Menü kapandığında scroll durumuna göre header eski haline döner
                if(window.scrollY <= 10) header.classList.remove('bg-nexovia-dark');
            }
        });

        // Close menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // --- 3. Glass Header Effect ---
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                header.classList.add('glass-nav');
                header.classList.remove('py-5');
                header.classList.add('py-3'); // Küçülme efekti
            } else {
                header.classList.remove('glass-nav');
                header.classList.add('py-5');
                header.classList.remove('py-3');
            }
        });
    }

    // --- 4. Intersection Observer (Scroll Reveal) ---
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px"
    };

    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-visible');
                revealOnScroll.unobserve(entry.target); // Trigger once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-hidden').forEach((el) => {
        revealOnScroll.observe(el);
    });

    // Console Signature
    console.log("%c Crafted by Nexovia ", "background: #6366F1; color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;");
});