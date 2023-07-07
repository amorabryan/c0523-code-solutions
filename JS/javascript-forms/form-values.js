const $contactForm = document.querySelector('#contact-form');
const contactElement = $contactForm.elements;

$contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const messageData = {};
  const name = contactElement.name.name;
  const email = contactElement.email.name;
  const message = contactElement.message.name;

  const nameValue = contactElement.name.value;
  const emailValue = contactElement.email.value;
  const messageValue = contactElement.message.value;

  messageData[name] = nameValue;
  messageData[email] = emailValue;
  messageData[message] = messageValue;
  console.log('messageData:', messageData);
  $contactForm.reset();
});
