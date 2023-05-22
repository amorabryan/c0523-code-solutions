let clicked = 0;

const $buttonHot = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');

$buttonHot.addEventListener('click', function () {
  clicked++;
  $clickCount.textContent = 'Clicks: ' + clicked;
  if (clicked < 4) {
    $buttonHot.className = 'hot-button ' + 'cold';
  } else if (clicked < 7) {
    $buttonHot.className = 'hot-button ' + 'cool';
  } else if (clicked < 10) {
    $buttonHot.className = 'hot-button ' + 'tepid';
  } else if (clicked < 13) {
    $buttonHot.className = 'hot-button ' + 'warm';
  } else if (clicked < 16) {
    $buttonHot.className = 'hot-button ' + 'hot';
  } else if (clicked > 16) {
    $buttonHot.className = 'hot-button ' + 'nuclear';
  }
});
