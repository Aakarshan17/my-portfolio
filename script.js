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
