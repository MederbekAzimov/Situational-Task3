// script.js
document.getElementById('preorder-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const quantity = document.getElementById('quantity').value;

    if (name && email && quantity > 0) {
        alert('Thank you for your pre-order!');
    } else {
        alert('Please fill out all fields correctly.');
    }
});
