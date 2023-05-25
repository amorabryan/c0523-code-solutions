const $tabContainer = document.querySelector('.tab-container');
const $tab = document.querySelectorAll('.tab');
const $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  const $dataView = event.target.getAttribute('data-view');
  if (event.target.matches('.tab')) {
    for (let i = 0; i < $tab.length; i++) {
      if ($tab[i] === event.target) {
        $tab[i].className = 'tab' + ' active';
      } else {
        $tab[i].className = 'tab';
      }
    }
    for (let j = 0; j < $view.length; j++) {
      if ($view[j].getAttribute('data-view') === $dataView) {
        $view[j].classList.remove('hidden');
      } else {
        $view[j].classList.add('hidden');
      }
    }
  }
});
