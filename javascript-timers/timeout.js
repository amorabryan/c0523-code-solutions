function delay() {
  const $message = document.querySelector('.message');
  $message.textContent = 'Hello There';
}

setTimeout(delay, 2000);
