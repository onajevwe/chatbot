document.addEventListener("DOMContentLoaded", function () {
    var myInput = document.getElementById("inputPassword4");
    var confirmPassword = document.getElementById("confirmPassword");
    var firstName = document.querySelector("input[placeholder='First name']");
    var lastName = document.querySelector("input[placeholder='Last name']");
    var email = document.getElementById("inputEmail4");
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");

    function myFunction() {
        var x = document.getElementById("inputPassword4");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }

    // Show password checkbox event listener
    var showPasswordCheckbox = document.getElementById("showPasswordCheckbox");
    if (showPasswordCheckbox) {
        showPasswordCheckbox.addEventListener("click", myFunction);
    }

    // When the user clicks on the password field, show the message box
    myInput.onfocus = function () {
        document.getElementById("passwordRules").style.display = "block";
    };

    // When the user clicks outside of the password field, hide the message box
    myInput.onblur = function () {
        document.getElementById("passwordRules").style.display = "none";
    };

    // When the user starts to type something inside the password field
    myInput.onkeyup = function () {
        validatePassword();
    };

    // Function to validate email format
    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    // Function to validate password rules and match
    function validatePassword() {
        var isPasswordValid = true;

        // Validate lowercase letters
        var lowerCaseLetters = /[a-z]/g;
        if (myInput.value.match(lowerCaseLetters)) {
            letter.classList.add("valid");
            letter.classList.remove("invalid");
        } else {
            letter.classList.add("invalid");
            letter.classList.remove("valid");
            isPasswordValid = false;
        }

        // Validate capital letters
        var upperCaseLetters = /[A-Z]/g;
        if (myInput.value.match(upperCaseLetters)) {
            capital.classList.add("valid");
            capital.classList.remove("invalid");
        } else {
            capital.classList.add("invalid");
            capital.classList.remove("valid");
            isPasswordValid = false;
        }

        // Validate numbers
        var numbers = /[0-9]/g;
        if (myInput.value.match(numbers)) {
            number.classList.add("valid");
            number.classList.remove("invalid");
        } else {
            number.classList.add("invalid");
            number.classList.remove("valid");
            isPasswordValid = false;
        }

        // Validate length
        if (myInput.value.length >= 8) {
            length.classList.add("valid");
            length.classList.remove("invalid");
        } else {
            length.classList.add("invalid");
            length.classList.remove("valid");
            isPasswordValid = false;
        }

        // Check if passwords match
        if (myInput.value !== confirmPassword.value) {
            confirmPassword.setCustomValidity("Passwords do not match");
            isPasswordValid = false;
        } else {
            confirmPassword.setCustomValidity("");
        }

        return isPasswordValid;
    }

    // Form submission validation
    var signupForm = document.getElementById("signupForm");
    signupForm.addEventListener("submit", function (event) {
        alert('Submit event fired!');
        var isValid = true;

        // Validate first name
        if (firstName.value.trim() === "") {
            firstName.classList.add("is-invalid");
            isValid = false;
        } else {
            firstName.classList.remove("is-invalid");
        }

        // Validate last name
        if (lastName.value.trim() === "") {
            lastName.classList.add("is-invalid");
            isValid = false;
        } else {
            lastName.classList.remove("is-invalid");
        }

        // Validate email
        if (!validateEmail(email.value)) {
            email.classList.add("is-invalid");
            isValid = false;
        } else {
            email.classList.remove("is-invalid");
        }

        // Validate password
        var isPasswordValid = validatePassword();
        if (!isPasswordValid) {
            myInput.classList.add("is-invalid");
            isValid = false;
        } else {
            myInput.classList.remove("is-invalid");
        }

        // Prevent form submission if any validation fails
        if (!isValid) {
            event.preventDefault();
            event.stopPropagation();
            console.log('Form submission prevented due to validation errors.');
        } else {
            // Store the first name in local storage
            localStorage.setItem('firstName', firstName.value);
            // Redirect to profile.html if all validations pass
            console.log('All validations passed. Redirecting to profile.html...');
            window.location.href = 'profile.html';
        }

        signupForm.classList.add('was-validated');
    });
});
