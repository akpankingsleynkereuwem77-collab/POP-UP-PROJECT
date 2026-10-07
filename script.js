// Get the form
const form = document.getElementById("signupForm");

// Get the inputs
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

// Get the error messages
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

// Get success message
const successMessage = document.getElementById("successMessage");


// When the form is submitted
form.addEventListener("submit", function(event) {

    // Stop the page from refreshing
    event.preventDefault();

    // Clear old messages
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    successMessage.textContent = "";


    // Check name
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Please enter your full name.";
        return;
    }


    // Check email
    if (emailInput.value.trim() === "") {
        emailError.textContent = "Please enter your email.";
        return;
    }


    // Check password
    if (passwordInput.value.trim() === "") {
        passwordError.textContent = "Please enter a password.";
        return;
    }


    // Check password length
    if (passwordInput.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        return;
    }


    // Check confirm password
    if (confirmPasswordInput.value.trim() === "") {
        confirmPasswordError.textContent = "Please confirm your password.";
        return;
    }


    // Check if passwords match
    if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordError.textContent = "Passwords do not match.";
        return;
    }


    // Account was successfully created
    successMessage.textContent = "Account created successfully!";


    // Clear the form
    form.reset();

});

