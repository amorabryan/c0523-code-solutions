let count = 4;
const $countdownDisplay = document.querySelector('.countdown-display');

const countdown = function startCountdown() {
  count--;
  $countdownDisplay.textContent = count;
  if (count < 1) {
    $countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(interval);
  }
};

const interval = setInterval(countdown, 1000);
