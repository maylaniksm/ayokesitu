document.addEventListener("DOMContentLoaded", () => {
    // Handle the search functionality in the navigation bar
    const goingToInput = document.querySelector('.flex.items-center.space-x-2 span:nth-child(2)');
    const datesInput = document.querySelector('.flex.items-center.space-x-2.hidden.md\\:flex span:nth-child(2)');
    const guestsInput = document.querySelector('.flex.items-center.space-x-2:last-child span:nth-child(2)');

    goingToInput.addEventListener('click', () => {
        window.location.href = 'goingto.html'; // Halaman Going To
    });

    // Arahkan ke halaman "Dates"
    datesInput.addEventListener('click', () => {
        window.location.href = 'dates.html'; // Halaman Dates
    });

    // Navigasi "Guest" ke Halaman Payment
    guestsInput.addEventListener('click', () => {
        window.location.href = 'payment.html'; // Halaman Payment
    });

    const aboutUsButton = document.getElementById('about-us');
    aboutUsButton.addEventListener('click', (e) => {
        e.preventDefault(); // Mencegah navigasi default jika link memiliki atribut href
        window.location.href = 'aboutus.html'; // Halaman About Us
    });

    // Handle "See details" button clicks for trip cards
    const seeDetailsButtons = document.querySelectorAll('.text-bright-blue.text-sm');
    seeDetailsButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const destinationName = e.target.closest('.flex.justify-between.items-center').querySelector('h3').innerText;
            alert(`Redirecting to details page for ${destinationName}`);
            // Redirect to trip details page
            window.location.href = `details.html?destination=${encodeURIComponent(destinationName)}`;
        });
    });

    // Handle "Learn More" buttons
    const learnMoreButtons = document.querySelectorAll('button.bg-bright-green');
    learnMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Redirecting to more information page...');
            // Redirect to the appropriate page (e.g., FAQ, policy, etc.)
            window.location.href = 'learn-more.html';
        });
    });

    // Handle subscription form
    const subscriptionInput = document.querySelector('input[type="email"]');
    const subscriptionButton = document.querySelector('button.bg-bright-green');

    subscriptionButton.addEventListener('click', (e) => {
        e.preventDefault();
        const email = subscriptionInput.value.trim();
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
        } else {
            alert(`Thank you for subscribing! Updates will be sent to ${email}.`);
            // Add logic to send email to the server
        }
    });

    // Validate email input
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Add navigation to "See more" links
    const seeMoreLinks = document.querySelectorAll('a.text-bright-blue');
    seeMoreLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Redirecting to more destinations...');
            window.location.href = 'explore.html';
        });
    });

    // Add interactivity to pagination buttons
    const backPageButton = document.querySelector('button:contains("Back Page")');
    const nextPageButton = document.querySelector('button:contains("Next Page")');

    backPageButton?.addEventListener('click', () => {
        alert('Redirecting to the previous page...');
        // Add logic for pagination (e.g., load previous set of destinations)
    });

    nextPageButton?.addEventListener('click', () => {
        alert('Redirecting to the next page...');
        // Add logic for pagination (e.g., load next set of destinations)
    });

    // Simulate customer review ratings (dynamic data loading can be added here)
    const ratings = document.querySelectorAll('.flex.justify-between span:nth-child(2)');
    ratings.forEach((rating, index) => {
        console.log(`Customer ${index + 1} rating: ${rating.innerText}`);
    });
});

