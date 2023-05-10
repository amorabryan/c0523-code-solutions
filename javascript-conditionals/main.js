/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  }
  return false;
}

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;
}

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  }
  return false;
}

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  }
  return false;
}

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  }
  return false;
}

function isOldEnoughToDrinkAndDrive(person) {
  return window.open(
    'https://s3.us-west-1.amazonaws.com/lfz-lms-prod/exercise-instructions-assets/Learning-Fuze/curriculum/0cee428ffbe38c71483bc9b93d867ac166fc0845/assets/drink-and-drive.png'
  );
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH >= 0 && pH < 7) {
    return 'acid';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  }
  return 'invalid pH level';
}

function introduceWarnerBro(name) {
  let text = '';
  switch (name) {
    case 'yakko':
    case 'wakko':
      text = "We're the Warner Brothers!";
      break;
    case 'dot':
      text = "I'm cute~";
      break;
    default:
      text = 'Goodnight everybody!';
  }
  return text;
}

function recommendMovie(genre) {
  let text = '';
  switch (genre) {
    case 'action':
      text = 'The Raid';
      break;
    case 'comedy':
      text = 'Airplane';
      break;
    case 'horror':
      text = 'The Exorcist';
      break;
    case 'drama':
      text = 'Whiplash';
      break;
    case 'musical':
      text = "Singin' In the Rain";
      break;
    case 'sci-fi':
      text = 'Primer';
      break;
    default:
      text =
        'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi.';
  }
  return text;
}
