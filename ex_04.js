document.addEventListener("DOMContentLoaded", function() {
    
    let plusButtons = document.querySelectorAll(".plus-btn");
    plusButtons.forEach(button => {
        button.addEventListener("click", function() {
            let input = button.nextElementSibling;
            let currentValue = parseInt(input.value, 10);
            input.value = currentValue + 1;
        });
    });

    
    let minusButtons = document.querySelectorAll(".minus-btn");
    minusButtons.forEach(button => {
        button.addEventListener("click", function() {
            let input = button.previousElementSibling;
            let currentValue = parseInt(input.value, 10);
            if (currentValue > 1) {
                input.value = currentValue - 1;
            }
        });
    });

    
    let deleteButtons = document.querySelectorAll(".delete-btn");
    deleteButtons.forEach(button => {
        button.addEventListener("click", function() {
            let item = button.closest(".item"); 
            item.remove();
        });
    });

    let likeButtons = document.querySelectorAll(".like-btn");
    likeButtons.forEach(button => {
        button.addEventListener("click", function() {
           
            button.classList.toggle("is-active");
           
            let item = button.closest(".item");
            
            item.classList.add("animated");
        });
    });
});
