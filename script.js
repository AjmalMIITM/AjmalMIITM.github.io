// Initialize Feather Icons
feather.replace();

// Dynamic Mouse Follow Effect for Cards
// This calculates the position of the mouse relative to the card
// and moves the "glow" background accordingly.
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Scroll Reveal Animation
// This watches elements with class "reveal" and adds "active" when they appear on screen.
const observerOptions = {
    threshold: 0.15, // Trigger when 15% of element is visible
    rootMargin: "0px 0px -50px 0px" // Offset the trigger slightly
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Note: We don't remove the class, so it doesn't animate out when scrolling up
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});
