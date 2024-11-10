document.addEventListener("DOMContentLoaded", () => {
    // Navigasi Logo ke Home
    const logoButton = document.querySelector('nav img[alt="Logo"]');
    logoButton.addEventListener('click', () => {
        window.location.href = 'home.html'; // Arahkan ke halaman Home
    });

    // Navigasi "Going To" ke Halaman Going To
    const goingToButton = document.querySelector('div.flex.items-center.space-x-2 img[alt="Going to"]');
    goingToButton.addEventListener('click', () => {
        window.location.href = 'goingto.html'; // Arahkan ke halaman Going To
    });

    // Navigasi "Dates" ke Halaman Dates
    const datesButton = document.querySelector('div.flex.items-center.space-x-2 span:nth-child(1)');
    datesButton.addEventListener('click', () => {
        window.location.href = 'dates.html'; // Arahkan ke halaman Dates
    });

    const guestsButton = document.querySelector('div.flex.items-center.space-x-2:nth-child(3) span');
    guestsButton.addEventListener('click', () => {
        window.location.href = 'payment.html'; // Arahkan ke halaman Payment
    });

    // Copy Invoice Link
    const copyLinkButton = document.querySelector('.text-bright-blue.flex.items-center');
    copyLinkButton.addEventListener('click', () => {
        const invoiceLink = "https://example.com/invoice/42344-0002"; // Ganti dengan tautan asli
        navigator.clipboard.writeText(invoiceLink).then(() => {
            alert("Invoice link copied to clipboard!");
        }).catch(() => {
            alert("Failed to copy the link.");
        });
    });

    // Send Invoice Button
    const sendInvoiceButton = document.querySelector('button.bg-bright-green');
    sendInvoiceButton.addEventListener('click', () => {
        alert("Invoice has been sent to the customer.");
        // Tambahkan logika server untuk mengirim email faktur
    });

    // Edit Invoice Button
    const editInvoiceButton = document.querySelector('button.border.border-gray-300:nth-child(2)');
    editInvoiceButton.addEventListener('click', () => {
        window.location.href = "details_payment.html"; // Ganti dengan URL halaman payment details
    });

    // Add Note Button
    const addNoteButton = document.querySelector('button.border.border-gray-300:nth-child(3)');
    addNoteButton.addEventListener('click', () => {
        const note = prompt("Enter your note:");
        if (note) {
            alert(`Note added: "${note}"`);
            // Tambahkan logika untuk menyimpan catatan ke server
        }
    });

    // Ask a Question Button
    const askQuestionButton = document.querySelector('button.w-full.bg-bright-green.text-white:nth-of-type(2)');
    askQuestionButton.addEventListener('click', () => {
        alert("Redirecting to help center...");
        window.location.href = "help-center.html"; // Ganti dengan URL halaman bantuan
    });

    // Confirm Button
    const confirmButton = document.querySelector('button.w-full.bg-bright-green.text-white:last-child');
    confirmButton.addEventListener('click', () => {
        const confirmation = confirm("Are you sure you want to confirm this invoice?");
        if (confirmation) {
            alert("Invoice confirmed successfully.");
            // Tambahkan logika server untuk mengonfirmasi faktur
        }
    });

    // See Details Button
    const seeDetailsButton = document.querySelector('button.w-full.mt-6.bg-bright-green.text-white');
    seeDetailsButton.addEventListener('click', () => {
        window.location.href = "details_payment.html"; // Ganti dengan URL halaman detail
    });

    // Customize Columns
    const customizeColumnsButton = document.querySelector('.text-bright-blue.flex.items-center');
    customizeColumnsButton.addEventListener('click', () => {
        alert("Opening column customization...");
        // Tambahkan modal atau navigasi halaman untuk penyesuaian kolom
    });

    // Remove Items from Invoice
    const removeButtons = document.querySelectorAll('.text-gray-500.flex.items-center');
    removeButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const itemRow = button.closest('tr');
            const description = itemRow.querySelector('td:first-child').textContent.trim();
            itemRow.remove();
            alert(`${description} has been removed from the invoice.`);
            // Tambahkan logika untuk memperbarui total faktur di server
        });
    });
});
