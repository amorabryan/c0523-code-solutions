const $phrase = document.querySelector('.phrase');
const $span = $phrase.querySelectorAll('span');

let currentIndex = 0;

$span[currentIndex].classList.add('underline');

document.addEventListener('keydown', function (event) {
  const keyPressed = event.key;
  const currentChar = $span[currentIndex].textContent;
  const currentSpan = $span[currentIndex];

  if (keyPressed === currentChar) {
    currentSpan.classList.add('correct');
    currentSpan.classList.remove('incorrect', 'underline');
    currentIndex++;

    if (currentIndex === $span.length) {
      $phrase.classList.add('completed');
    } else {
      $span[currentIndex].classList.add('underline');
    }
  } else {
    currentSpan.classList.add('incorrect');
  }
});
