document.addEventListener("DOMContentLoaded", () => {
    // Navigasi untuk "About Us"
    const aboutUsLink = document.querySelector('a[href="#"]:nth-child(3)');
    aboutUsLink.addEventListener('click', (e) => {
        e.preventDefault(); // Mencegah tindakan default
        window.location.href = 'about-us.html'; // Arahkan ke halaman About Us
    });

    // Fungsi tombol "Carrier" dan "Explore Opportunities"
    const carrierButton = document.querySelector('.bg-white:nth-child(1)');
    const exploreOpportunitiesButton = document.querySelector('.bg-white:nth-child(3)');

    carrierButton.addEventListener('click', () => {
        alert('Redirecting to the Carrier page...');
        window.location.href = 'carrier.html'; // Arahkan ke halaman Carrier
    });

    exploreOpportunitiesButton.addEventListener('click', () => {
        alert('Redirecting to the Opportunities page...');
        window.location.href = 'opportunities.html'; // Arahkan ke halaman Opportunities
    });

    // Statistik interaktif (contoh untuk mengupdate data secara dinamis)
    const statsData = [
        { label: "Travelers Engaged Every Month", value: "5 Million" },
        { label: "Personalized Travel Notifications Sent Every Day", value: "24 Million" },
        { label: "Daily Interactions on Travel Tips & Guides", value: "17 Million" },
        { label: "Exclusive Travel Packages & Partnerships", value: "11" },
    ];

    const statsContainers = document.querySelectorAll('.grid.grid-cols-2 > div');
    statsContainers.forEach((container, index) => {
        const data = statsData[index];
        const valueElement = container.querySelector('.text-3xl');
        const labelElement = container.querySelector('.text-gray-600');
        valueElement.textContent = data.value;
        labelElement.textContent = data.label;
    });

    // Footer navigasi
    const footerLinks = document.querySelectorAll('footer a');
    footerLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.textContent.toLowerCase().replace(' ', '-');
            alert(`Redirecting to the ${link.textContent} page...`);
            window.location.href = `${target}.html`; // Redirect to respective page
        });
    });

    // Pencarian (dummy action)
    const searchButton = document.querySelector('.p-2.rounded-full.ml-4 img');
    searchButton.addEventListener('click', () => {
        alert('Search functionality is not implemented yet.');
        // Implement search functionality here if needed
    });

    const logoButton = document.querySelector('nav img[alt="Logo"]');
    logoButton.addEventListener('click', () => {
        window.location.href = 'home.html'; // Redirect to Home page
    });

    // Redirect to Going To page when the Going To button is clicked
    const goingToButton = document.querySelector('.flex.items-center.flex-1.gap-3 span.text-gray-600');
    goingToButton.addEventListener('click', () => {
        window.location.href = 'goingto.html'; // Redirect to Going To page
    });

    // Redirect to Dates page when the Dates button is clicked
    const datesButton = document.querySelector('.flex.items-center.flex-1.gap-3:nth-child(3) span.text-gray-600');
    datesButton.addEventListener('click', () => {
        window.location.href = 'dates.html'; // Redirect to Dates page
    });

    // Redirect to About Us page when the About Us link is clicked
    const aboutUsButton = document.getElementById('about-us');
    aboutUsButton.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default navigation
        window.location.href = 'aboutus.html'; // Redirect to About Us page
    });
    
    // Redirect to Payment page when Guests button is clicked
    const guestsButton = document.querySelector('.flex.items-center.flex-1.gap-3:nth-child(3) span.text-gray-600');
    guestsButton.addEventListener('click', () => {
        window.location.href = 'payment.html'; // Redirect to Payment page
    });
});

