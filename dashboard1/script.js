// Display alerts for menu items
document.querySelectorAll('nav a').forEach((menuItem) => {
    menuItem.addEventListener('click', (event) => {
        event.preventDefault();
        alert(`${menuItem.textContent} Clicked`);
    });
});

// Simulate notifications
let notifications = 5;
const notificationIcon = document.querySelector('.material-icons:nth-child(1)');
notificationIcon.addEventListener('click', () => {
    notifications--;
    alert(`You have ${notifications} notifications remaining.`);
});

// Account functionality
const accountIcon = document.querySelector('.material-icons:nth-child(2)');
accountIcon.addEventListener('click', () => {
    alert('Navigating to account settings...');
});

// Dynamic data update for cards
setInterval(() => {
    const salesCard = document.querySelector('.grid div:nth-child(2) p:nth-child(2)');
    const randomSales = Math.floor(Math.random() * 10000);
    salesCard.textContent = `$${randomSales}`;
}, 5000);

// Notification button functionality
const notificationButton = document.querySelectorAll('button span.material-icons')[0];
notificationButton.addEventListener('click', () => {
    alert('You have new notifications!');
});

// Account settings button functionality
const accountButton = document.querySelectorAll('button span.material-icons')[1];
accountButton.addEventListener('click', () => {
    alert('Navigating to account settings...');
});

// Card buttons functionality
document.querySelectorAll('.grid button').forEach((button, index) => {
    button.addEventListener('click', () => {
        const actions = ['Users Details', 'Sales Report', 'Messages Inbox'];
        alert(`${actions[index]} button clicked!`);
    });
});
