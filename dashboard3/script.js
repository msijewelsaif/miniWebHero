// JavaScript to handle simple actions such as interaction or animations (if needed)

// Example: Sidebar link highlight on click
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(item => item.classList.remove('active'));
        link.classList.add('active');
    });
});

// Example: You can expand with more JS interactions or effects
