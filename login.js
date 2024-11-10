document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const forgotPasswordLink = document.querySelector('a[href="#"]');
    const signInButton = document.querySelector('button[type="submit"]');
    const googleSignInButton = document.querySelector('button:nth-child(8)');
    const facebookSignInButton = document.querySelector('button:nth-child(9)');

    // Dummy data for users
    const users = [
        { email: 'user1@example.com', password: 'password123' },
        { email: 'user2@example.com', password: 'mypassword456' },
        { email: 'user3@example.com', password: 'securepass789' }
    ];

    // Email and password validation with redirection
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form from submitting
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            emailInput.focus();
            return;
        }

        if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
            passwordInput.focus();
            return;
        }

        // Check against dummy data
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            // Redirect to the home page
            window.location.href = 'home.html'; // Change 'home.html' to your actual home page
        } else {
            alert('Invalid email or password. Please try again.');
        }
    });

    // Forgot password functionality
    forgotPasswordLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Redirecting to the password recovery page...');
        // Add your redirection logic here
    });

    // Google Sign-In mock
    googleSignInButton.addEventListener('click', () => {
        alert('Sign in with Google is not implemented yet.');
        // Add Google OAuth logic here
    });

    // Facebook Sign-In mock
    facebookSignInButton.addEventListener('click', () => {
        alert('Sign in with Facebook is not implemented yet.');
        // Add Facebook OAuth logic here
    });

    // Helper function to validate email
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
