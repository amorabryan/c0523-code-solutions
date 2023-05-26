const $tabContainer = document.querySelector('.tab-container');
const $tab = document.querySelectorAll('.tab');
const $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (let tabIndex = 0; tabIndex < $tab.length; tabIndex++) {
      if ($tab[tabIndex] === event.target) {
        $tab[tabIndex].className = 'tab' + ' active';
      } else {
        $tab[tabIndex].className = 'tab';
      }
    }

    const $dataView = event.target.getAttribute('data-view');

    for (let viewIndex = 0; viewIndex < $view.length; viewIndex++) {
      if ($view[viewIndex].getAttribute('data-view') === $dataView) {
        $view[viewIndex].classList.remove('hidden');
      } else {
        $view[viewIndex].classList.add('hidden');
      }
    }
  }
});
