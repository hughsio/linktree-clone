// Add click animation to link cards
document.querySelectorAll('.link-card').forEach(card => {
    card.addEventListener('click', function(e) {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'translateY(-2px)';
        }, 100);
    });
});

// Add hover effect to social icons
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    icon.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.querySelectorAll('.link-card').forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}); 