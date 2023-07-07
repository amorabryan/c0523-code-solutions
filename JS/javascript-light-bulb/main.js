let clicked = 1;

const $lightOn = document.querySelector('.light-on');

$lightOn.addEventListener('click', function changeLightMode() {
  clicked++;
  if (clicked % 2 === 0) {
    $lightOn.className = 'light-' + 'on';
    document.body.style.background = 'rgb(254,249,241)';
  } else {
    $lightOn.className = 'light-' + 'off';
    document.body.style.background = 'rgb(17,17,17)';
  }
});
