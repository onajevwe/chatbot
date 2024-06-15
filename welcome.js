document.addEventListener('DOMContentLoaded', function() {
    let preferredName = sessionStorage.getItem('preferredName');
    let welcomeMessage = document.getElementById('welcome-message');
    if (preferredName) {
        welcomeMessage.textContent = `Welcome, ${preferredName}!`;
    } else {
        welcomeMessage.textContent = 'Welcome!';
    }
});
