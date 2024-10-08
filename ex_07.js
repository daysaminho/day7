const title = document.querySelector('h1');
const words = title.textContent.split(' ');
let interval;

function shuffleWords() {
    const shuffled = words.sort(() => 0.5 - Math.random());
    title.textContent = shuffled.join(' ');
}

function startShuffle() {
    interval = setInterval(shuffleWords, 2000);
}

function stopShuffle() {
    clearInterval(interval);
}

title.addEventListener('mouseenter', stopShuffle);
title.addEventListener('mouseleave', startShuffle);

title.addEventListener('click', () => {
    navigator.clipboard.writeText(title.textContent);
    stopShuffle();
});

startShuffle();
