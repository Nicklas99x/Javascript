let startTime;
let interval;
let isRunning = false;

const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const centisecondsDisplay = document.getElementById('centiseconds');

startButton.addEventListener('click', startStopwatch);
stopButton.addEventListener('click', stopStopwatch);

function startStopwatch() {
    if (!isRunning) {
        startTime = new Date().getTime();
        interval = setInterval(updateTime, 10);
        isRunning = true;
    }
}

function stopStopwatch() {
    if (isRunning) {
        clearInterval(interval);
        isRunning = false;
    }
}

function updateTime() {
    const currentTime = new Date().getTime();
    const elapsedTime = new Date(currentTime - startTime);
    const minutes = elapsedTime.getUTCMinutes();
    const seconds = elapsedTime.getUTCSeconds();
    const centiseconds = Math.floor(elapsedTime.getUTCMilliseconds() / 10);

    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
    centisecondsDisplay.textContent = String(centiseconds).padStart(2, '0');

    if (centiseconds % 100 === 0) {
        document.body.style.backgroundColor = getRandomColor();
    }

    if (elapsedTime >= 60000) {
        stopStopwatch();
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
