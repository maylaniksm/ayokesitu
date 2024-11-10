document.addEventListener("DOMContentLoaded", () => {
    // Fungsi Pencarian
    const searchInput = document.querySelector('input[type="search"]');
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.trim();
            if (query) {
                alert(`Searching for: ${query}`);
                // Arahkan ke halaman pencarian
                window.location.href = `search.html?query=${encodeURIComponent(query)}`;
            } else {
                alert("Please enter a destination to search.");
            }
        }
    });

    // Navigasi Tabs
    const navTabs = document.querySelectorAll('.flex.justify-center button');
    navTabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            // Highlight tab yang aktif
            navTabs.forEach((t) => t.classList.remove('text-bright-blue', 'border-b-2', 'border-bright-blue'));
            tab.classList.add('text-bright-blue', 'border-b-2', 'border-bright-blue');

            // Simulasi perubahan konten (dapat diganti dengan fetch data)
            alert(`You selected: ${tab.textContent}`);
        });
    });

    // Navigasi pada Footer
    const footerLinks = document.querySelectorAll('footer nav a');
    footerLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.textContent.toLowerCase().replace(' ', '-');
            alert(`Redirecting to ${link.textContent} page...`);
            window.location.href = `${target}.html`;
        });
    });

    // Interaksi Travel Packages (tampilkan detail paket)
    const travelPackages = document.querySelectorAll('.grid > div');
    travelPackages.forEach((packageDiv) => {
        packageDiv.addEventListener('click', () => {
            const packageTitle = packageDiv.querySelector('h3').textContent;
            alert(`Redirecting to details page for ${packageTitle}`);
            window.location.href = `details.html?package=${encodeURIComponent(packageTitle)}`;
        });
    });

    // Arahkan ke halaman Home saat logo diklik
    const logoButton = document.querySelector('nav img[alt="Logo"]');
    logoButton.addEventListener('click', () => {
        window.location.href = 'home.html'; // Halaman Home
    });

    // Arahkan ke halaman Dates saat tombol Dates diklik
    const datesButton = document.querySelector('.flex.items-center.gap-2:nth-child(2) span');
    datesButton.addEventListener('click', () => {
        window.location.href = 'dates.html'; // Halaman Dates
    });

    // Arahkan ke halaman About Us saat tombol About Us diklik
    const aboutUsButton = document.getElementById('about-us');
    aboutUsButton.addEventListener('click', (e) => {
        e.preventDefault(); // Mencegah navigasi default
        window.location.href = 'aboutus.html'; // Halaman About Us
    });

    // Arahkan ke halaman Payment saat tombol Guest diklik
    const guestButton = document.querySelector('.flex.items-center.gap-2:nth-child(3) span');
    guestButton.addEventListener('click', () => {
        window.location.href = 'payment.html';
    });
});

    