const form = document.getElementById("signupForm");

if (!form) {
    throw new Error("Signup form not found.");
}

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const successMessage = document.getElementById("successMessage");

const clearMessages = () => {
    if (nameError) nameError.textContent = "";
    if (emailError) emailError.textContent = "";
    if (passwordError) passwordError.textContent = "";
    if (confirmPasswordError) confirmPasswordError.textContent = "";
    if (successMessage) successMessage.textContent = "";
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearMessages();

    if (!nameInput || !emailInput || !passwordInput || !confirmPasswordInput) {
        return;
    }

    const fullName = nameInput.value.trim();
    if (fullName === "") {
        if (nameError) nameError.textContent = "Please enter your full name.";
        return;
    }

    const email = emailInput.value.trim();
    if (email === "") {
        if (emailError) emailError.textContent = "Please enter your email.";
        return;
    }

    if (!emailPattern.test(email)) {
        if (emailError) emailError.textContent = "Please enter a valid email address.";
        return;
    }

    const password = passwordInput.value;
    if (password.trim() === "") {
        if (passwordError) passwordError.textContent = "Please enter a password.";
        return;
    }

    if (password.length < 6) {
        if (passwordError) passwordError.textContent = "Password must be at least 6 characters.";
        return;
    }

    const confirmPassword = confirmPasswordInput.value;
    if (confirmPassword.trim() === "") {
        if (confirmPasswordError) confirmPasswordError.textContent = "Please confirm your password.";
        return;
    }

    if (password !== confirmPassword) {
        if (confirmPasswordError) confirmPasswordError.textContent = "Passwords do not match.";
        return;
    }

    if (successMessage) {
        successMessage.textContent = "Account created successfully!";
    }

    form.reset();
});

