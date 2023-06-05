let count = 4;

const countdown = function startCountdown() {
  const $countdownDisplay = document.querySelector('.countdown-display');
  count--;
  $countdownDisplay.textContent = count;
  if (count < 1) {
    $countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(countdown);
  }
};

setInterval(countdown, 1000);
