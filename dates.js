document.addEventListener("DOMContentLoaded", () => {
    // Fungsi pencarian di Hero Section
    const destinationInput = document.querySelector('input[placeholder="Explore your next Destination"]');
    const departureInput = document.querySelector('input[placeholder="Departure"]');
    const returnInput = document.querySelector('input[placeholder="Return"]');

    destinationInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            const destination = destinationInput.value.trim();
            if (destination) {
                alert(`Searching for: ${destination}`);
                // Arahkan ke halaman hasil pencarian
                window.location.href = `search.html?destination=${encodeURIComponent(destination)}`;
            } else {
                alert("Please enter a destination to search.");
            }
        }
    });

    departureInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            alert(`Departure: ${departureInput.value}`);
        }
    });

    returnInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            alert(`Return: ${returnInput.value}`);
        }
    });

    // Fungsi interaksi promo (animasi zoom-in saat hover)
    const promoImages = document.querySelectorAll('.grid img');
    promoImages.forEach((promo) => {
        promo.addEventListener('mouseover', () => {
            promo.classList.add('scale-105');
        });
        promo.addEventListener('mouseout', () => {
            promo.classList.remove('scale-105');
        });

        promo.addEventListener('click', () => {
            const promoAlt = promo.getAttribute('alt');
            alert(`You clicked on: ${promoAlt}`);
            // Arahkan ke halaman promo terkait jika ada
            window.location.href = `promo-details.html?promo=${encodeURIComponent(promoAlt)}`;
        });
    });

    // Fungsi klaim kupon
    const couponButton = document.querySelector('.bg-mint-green');
    couponButton.addEventListener('click', () => {
        alert('Coupon code "AYOKESITU!!" has been claimed. Enjoy your discount!');
        // Tambahkan logika untuk mengklaim kupon di server jika diperlukan
    });

    // Redirect to Home page when the logo is clicked
    const logoButton = document.querySelector('nav img[alt="Logo"]');
    logoButton.addEventListener('click', () => {
        window.location.href = 'home.html'; // Redirect to Home page
    });

    // Redirect to Going To page when the Going To button is clicked
    const goingToButton = document.querySelector('.flex.items-center.flex-1.gap-3 span.text-gray-600');
    goingToButton.addEventListener('click', () => {
        window.location.href = 'goingto.html'; // Redirect to Going To page
    });

    // Redirect to Payment page when Guests button is clicked
    const guestsButton = document.querySelector('.flex.items-center.flex-1.gap-3:nth-child(3) span.text-gray-600');
    guestsButton.addEventListener('click', () => {
        window.location.href = 'payment.html'; // Redirect to Payment page
    });
});
