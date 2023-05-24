const $modalContainer = document.querySelector('.modal-container');
const $modalLaunch = document.querySelector('.launch');
const $modalClose = document.querySelector('.close');

$modalLaunch.addEventListener('click', function () {
  $modalContainer.className = 'modal-container' + '-on';
});

$modalClose.addEventListener('click', function () {
  $modalContainer.className = 'modal-container';
});
