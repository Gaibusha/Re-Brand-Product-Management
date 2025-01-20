function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = section.id === sectionId ? 'block' : 'none';
    });
}

// Show the default section (Dashboard) on page load
window.onload = () => showSection('dashboard');



// Form validation example
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = form.querySelector('input[name="name"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const message = form.querySelector('textarea[name="message"]').value;

    if (!name || !email || !message) {
        alert('All fields are required!');
        return;
    }

    if (!validateEmail(email)) {
        alert('Invalid email address!');
        return;
    }

    alert('Message sent successfully!');
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}



// Live search example
const searchInput = document.querySelector('.search-input');
const productList = document.querySelector('.product-list tbody');

searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase();
    const rows = productList.querySelectorAll('tr');
    rows.forEach((row) => {
        const productName = row.querySelector('td:first-child').textContent.toLowerCase();
        if (productName.includes(filter)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});



