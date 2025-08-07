document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Toggle mobile menu
    toggle.addEventListener('click', function(e) {
        e.stopPropagation();
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        navLinks.classList.toggle('active');
        this.textContent = isExpanded ? '☰' : '✕';
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking outside or on a link
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-container') && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
            toggle.textContent = '☰';
            document.body.style.overflow = '';
        }
    });

    // Add index to menu items for animation
    document.querySelectorAll('.nav-links li').forEach((item, index) => {
        item.style.setProperty('--i', index + 1);
    });
});