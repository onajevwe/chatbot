document.addEventListener('DOMContentLoaded', function () {
    const togglePassword = document.querySelector('.password-toggle-icon');
    const passwordInput = document.querySelector('#inputPassword5');

    togglePassword.addEventListener('click', function () {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.querySelector('i').classList.toggle('fa-eye');
        this.querySelector('i').classList.toggle('fa-eye-slash');
    });
});