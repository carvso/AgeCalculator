ScrollReveal({
    reset: true,
    distance: '100px',
    duration: 3000,
    delay: 350
});

ScrollReveal().reveal('.main-content-wrapper', { origin: 'top' });
ScrollReveal().reveal('.day, .month, .year', { origin: 'bottom' });
ScrollReveal().reveal('.sub-btn', { origin: 'left' });
ScrollReveal().reveal('.tag', { origin: 'right' });