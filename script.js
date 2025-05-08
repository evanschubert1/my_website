document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuButton.addEventListener('click', function() {
        // Toggle active class on mobile menu button
        this.classList.toggle('active');
        // Toggle active class on nav links
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuButton.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}); 