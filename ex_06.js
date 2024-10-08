const robot = document.getElementById('robot');
const speechBubble = document.getElementById('speech-bubble');
const screenText = document.getElementById('screen-text');
const leftEye = document.querySelector('.eye-left-iris');
const rightEye = document.querySelector('.eye-right-iris');
const robotInput = document.getElementById('robot-input');

let clickCount = 0;

robot.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;
    screenText.textContent = `X: ${clientX}, Y: ${clientY}`;
});

robot.addEventListener('click', () => {
    speechBubble.textContent = 'Ooch, that hurts!';
    setTimeout(() => {
        speechBubble.textContent = '';
    }, 2000);
});

robotInput.addEventListener('input', () => {
    screenText.textContent = 'Don\'t worry, I\'ll handle it!';
    setTimeout(() => {
        screenText.textContent = '';
    }, 2000);
});


leftEye.addEventListener('click', handleEyeClick);
rightEye.addEventListener('click', handleEyeClick);

function handleEyeClick() {
    clickCount++;
    if (clickCount >= 10) {
        changeIrisColor();
        clickCount = 0; 
    }
}

function changeIrisColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    leftEye.setAttribute('fill', randomColor);
    rightEye.setAttribute('fill', randomColor);
}
