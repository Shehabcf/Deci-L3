const form = document.getElementById('orderForm');
const totalDiv = document.getElementById('total h3');
const sizeSelect = document.getElementById('size');
const toppingsCheckboxes = document.querySelectorAll('input[name="toppings"]');

function calculateTotal() {
    let total = 0;

    // Add size price
    const selectedSize = sizeSelect.options[sizeSelect.selectedIndex];
    total += parseFloat(selectedSize.dataset.price);

    // Add toppings price
    toppingsCheckboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            total += 2; // Each topping costs $2
        }
    });

    // Update total display
    document.querySelector('#total h3').textContent = `Total: $${total}`;
}

form.addEventListener('change', calculateTotal);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Order Placed! Enjoy your pizza!');
});
