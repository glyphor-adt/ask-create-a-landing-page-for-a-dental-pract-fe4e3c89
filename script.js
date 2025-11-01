// JavaScript for Haslet TX Dental Practice landing page

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission
        alert('Thank you for reaching out! We will get back to you shortly.');
        form.reset();
    });
});