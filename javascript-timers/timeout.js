const $message = document.querySelector('.message');
function delay() {
  $message.textContent = 'Hello There';
}

setTimeout(delay, 2000);
