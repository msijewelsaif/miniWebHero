// JavaScript for interaction and custom behavior (animations, button clicks, etc.)

// Example: Sidebar active link toggle
const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(item => item.classList.remove('active'));
        link.classList.add('active');
    });
});

// Example: Alert for button click
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert("Button clicked!");
    });
});

// Optionally, add animations or interactive behaviors as per the requirements.
