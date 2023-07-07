document.addEventListener('DOMContentLoaded', function (event) {
  const $img = document.querySelectorAll('.img');
  const $faCircle = document.querySelectorAll('.fa-circle');
  const $prevButton = document.querySelector('.button-previous');
  const $nextButton = document.querySelector('.button-next');

  let currentImageIndex = 0;

  $img[currentImageIndex].classList.remove('hidden');
  $faCircle[currentImageIndex].classList.replace('far', 'fa');

  function goToNextImage() {
    $img[currentImageIndex].classList.add('hidden');
    $faCircle[currentImageIndex].classList.replace('fa', 'far');

    currentImageIndex = (currentImageIndex + 1) % $img.length;

    $img[currentImageIndex].classList.remove('hidden');
    $faCircle[currentImageIndex].classList.replace('far', 'fa');
  }

  function goToPreviousImage() {
    $img[currentImageIndex].classList.add('hidden');
    $faCircle[currentImageIndex].classList.replace('fa', 'far');

    currentImageIndex = (currentImageIndex - 1 + $img.length) % $img.length;

    $img[currentImageIndex].classList.remove('hidden');
    $faCircle[currentImageIndex].classList.replace('far', 'fa');
  }

  function updateActiveImage(index) {
    $img[currentImageIndex].classList.add('hidden');
    $faCircle[currentImageIndex].classList.replace('far', 'fa');

    currentImageIndex = index;

    $img[currentImageIndex].classList.remove('hidden');
    $faCircle[currentImageIndex].classList.replace('fa', 'far');
  }

  $nextButton.addEventListener('click', goToNextImage);
  $prevButton.addEventListener('click', goToPreviousImage);

  setInterval(goToNextImage, 3000);

  $faCircle.forEach(function ($faCircle, index) {
    $faCircle.addEventListener('click', function () {
      updateActiveImage(index);
    });
  });
});
