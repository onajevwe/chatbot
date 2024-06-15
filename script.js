document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;
    let errorMessageElement = document.getElementById('error-message');

    // Password policy
    let minLength = 8;
    let uppercase = /[A-Z]/;
    let lowercase = /[a-z]/;
    let number = /[0-9]/;
    let specialChar = /[!@#$%^&*(),.?":{}|<>]/;

    // Reset error styles and message
    document.getElementById('password').classList.remove('error');
    document.getElementById('confirm-password').classList.remove('error');
    errorMessageElement.textContent = '';

    let errorMessage = ''; // Initialize error message

    // Check password policies and set error message accordingly
    if (password !== confirmPassword) {
        errorMessage = 'Passwords do not match!';
    } else if (password.length < minLength) {
        errorMessage = 'Password must be at least ' + minLength + ' characters long.';
    } else if (!uppercase.test(password)) {
        errorMessage = 'Password must contain at least one uppercase letter.';
    } else if (!lowercase.test(password)) {
        errorMessage = 'Password must contain at least one lowercase letter.';
    } else if (!number.test(password)) {
        errorMessage = 'Password must contain at least one number.';
    } else if (!specialChar.test(password)) {
        errorMessage = 'Password must contain at least one special character.';
    }

    if (errorMessage) {
        // If there's an error, apply error styles and show error message
        document.getElementById('password').classList.add('error');
        document.getElementById('confirm-password').classList.add('error');
        errorMessageElement.textContent = errorMessage;
    } else {
        // If no errors, show success message
        alert('Sign up successful!');
        // You can add code here to handle the form submission,
        // such as sending the data to a server
    }
    // Assuming you have this logic after validating and submitting the form
    let preferredName = document.getElementById('preferred-name').value;
    sessionStorage.setItem('preferredName', preferredName);

});
