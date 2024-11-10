document.addEventListener("DOMContentLoaded", () => {
    // Personal Information Validation
    const nameInput = document.querySelector('input[placeholder="Your Name"]');
    const emailInput = document.querySelector('input[placeholder="Email"]');
    const phoneInput = document.querySelector('input[placeholder="Phone Number"]');

    nameInput.addEventListener("blur", () => {
        if (!nameInput.value.trim()) {
            alert("Please enter your name.");
        }
    });

    emailInput.addEventListener("blur", () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            alert("Please enter a valid email address.");
        }
    });

    phoneInput.addEventListener("blur", () => {
        const phoneRegex = /^\d{10,15}$/;
        if (!phoneRegex.test(phoneInput.value.trim())) {
            alert("Please enter a valid phone number.");
        }
    });

    // Payment Method Selection
    const paymentMethods = document.querySelectorAll('input[name="payment"]');
    paymentMethods.forEach((method) => {
        method.addEventListener("change", () => {
            const selectedMethod = method.nextElementSibling.textContent.trim();
            alert(`You selected: ${selectedMethod}`);
        });
    });

    // Voucher Input
    const voucherInput = document.querySelector('input[placeholder="Select Voucher"]');
    voucherInput.addEventListener("blur", () => {
        if (!voucherInput.value.trim()) {
            alert("Please enter a voucher code if applicable.");
        }
    });

    // Pay Now Button
    const payNowButton = document.querySelector('.w-full.bg-bright-green');
    payNowButton.addEventListener("click", (e) => {
        e.preventDefault();

        // Validate all required fields
        if (!nameInput.value.trim() || !emailInput.value.trim() || !phoneInput.value.trim()) {
            alert("Please fill in all required personal information.");
            return;
        }

        const selectedPaymentMethod = Array.from(paymentMethods).find((method) => method.checked);
        if (!selectedPaymentMethod) {
            alert("Please select a payment method.");
            return;
        }

        alert("Payment successful. Thank you for your purchase!");
        // Add logic to send payment data to the server here
    });

    // Remove Item Buttons
    const removeButtons = document.querySelectorAll('.text-gray-500.flex.items-center');
    removeButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const itemRow = button.closest('.flex.items-center.justify-between');
            const itemName = itemRow.querySelector('.font-medium').textContent.trim();
            itemRow.remove();
            alert(`${itemName} has been removed from your cart.`);
        });
    });

    // Navigation Buttons
    const logo = document.querySelector('nav img[alt="Logo"]');
    const goingToButton = document.querySelector('.flex.items-center.space-x-2:nth-child(1) span');
    const datesButton = document.querySelector('.flex.items-center.space-x-2:nth-child(2) span');
    const guestsButton = document.querySelector('.flex.items-center.space-x-2:nth-child(3) span');

    logo.addEventListener("click", () => {
        window.location.href = "home.html"; // Redirect to home page
    });

    goingToButton.addEventListener("click", () => {
        window.location.href = "goingto.html"; // Redirect to Going To page
    });

    datesButton.addEventListener("click", () => {
        window.location.href = "dates.html"; // Redirect to Dates page
    });
   
    guestsButton.addEventListener("click", () => {
        window.location.href = "payment.html"; // Redirect to Payment page
    });
});
