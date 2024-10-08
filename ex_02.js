let add90 = document.querySelector('#rotate-add-90');
let add45 = document.querySelector('#rotate-add-45');
let reset = document.querySelector('#rotate-reset');
let sub45 = document.querySelector('#rotate-sub-45');
let sub90 = document.querySelector('#rotate-sub-90');
let circle = document.querySelector('#circle'); 
let currentRotation = 0; 

function rotateCircle(step) {
    currentRotation += step; 
    circle.style.transform = `rotate(${currentRotation}deg)`; 
}


add90.addEventListener("click", () => rotateCircle(90));
add45.addEventListener("click", () => rotateCircle(45));
reset.addEventListener("click", () => {
    currentRotation = 0; 
    circle.style.transform = `rotate(0deg)`;
});
sub45.addEventListener("click", () => rotateCircle(-45));
sub90.addEventListener("click", () => rotateCircle(-90));
