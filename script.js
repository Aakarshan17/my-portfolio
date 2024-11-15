document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.toggle-details');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const details = this.previousElementSibling;
            if (details.style.display === 'none') {
                details.style.display = 'block';
                this.textContent = 'Hide Details';
            } else {
                details.style.display = 'none';
                this.textContent = 'Show Details';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const errorMessage = document.getElementById('formError');

    form.addEventListener('submit', function(event) {
        // Prevent default form submission
        event.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        // Basic validation
        if (name === '' || email === '' || message === '') {
            errorMessage.textContent = "All fields are required!";
            errorMessage.style.display = 'block';
        } else if (!validateEmail(email)) {
            errorMessage.textContent = "Please enter a valid email address!";
            errorMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'none';
            alert('Form submitted successfully!');
        }
    });

    //validate email
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
