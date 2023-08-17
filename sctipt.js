console.log('Hello World');

const daysNumber = document.querySelector('#days_id')
const hoursNumber = document.querySelector('#hours_id')
const minutesNumber = document.querySelector('#minutes_id')
const secondsNumber = document.querySelector('#seconds_id')
const targetDate = new Date("2023-12-31T12:00:00").getTime();
const countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        console.log("Launch time has arrived!");
        return;
    }
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    daysNumber.textContent = days;
    hoursNumber.textContent = hours;
    minutesNumber.textContent = minutes;
    secondsNumber.textContent = seconds;
}

updateCountdown();