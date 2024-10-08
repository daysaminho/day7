document.addEventListener("DOMContentLoaded", function() {

    function updateCartTotal() {
        let total = 0;
        document.querySelectorAll('.item').forEach(item => {
            let price = parseFloat(item.querySelector('.total-price').textContent.replace('$', ''));
            let quantity = parseInt(item.querySelector('input').value, 10);
            total += price * quantity;
        });
        document.querySelector('.title').textContent = `Shopping Bag - Total: $${total.toFixed(2)}`;
    }

    let plusButtons = document.querySelectorAll(".plus-btn");
    plusButtons.forEach(button => {
        button.addEventListener("click", function() {
            let input = button.nextElementSibling;
            let currentValue = parseInt(input.value, 10);
            input.value = currentValue + 1;
            updateCartTotal();
        });
    });

    let minusButtons = document.querySelectorAll(".minus-btn");
    minusButtons.forEach(button => {
        button.addEventListener("click", function() {
            let input = button.previousElementSibling;
            let currentValue = parseInt(input.value, 10);
            if (currentValue > 1) {
                input.value = currentValue - 1;
                updateCartTotal();
            }
        });
    });

    let deleteButtons = document.querySelectorAll(".delete-btn");
    deleteButtons.forEach(button => {
        button.addEventListener("click", function() {
            let item = button.closest(".item");
            item.remove();
            updateCartTotal();
        });
    });

    let likeButtons = document.querySelectorAll(".like-btn");
    likeButtons.forEach(button => {
        button.addEventListener("click", function() {
            button.classList.toggle("is-active");
        });
    });

    updateCartTotal();
});
