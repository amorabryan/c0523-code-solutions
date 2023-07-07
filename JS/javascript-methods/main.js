const num1 = 5;
const num2 = 8;
const num3 = 7;
const maximumValue = Math.max(num1, num2, num3);
console.log('maximumValue:', maximumValue);

const heroes = ['spider-man', 'batman', 'venom', 'John Cena'];
let randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);

const randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

const library = [
  {
    title:
      'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON',
    author: 'Lindsay Bassett',
  },
  {
    title: 'JSON Quick Syntax Reference',
    author: 'Wallace Jackson',
  },
  {
    title:
      "Build APIs You Won't Hate: Everyone and their dog wants an API, so you should probably learn how to build them",
    author: 'Phil Sturgeon & Laura Bohill',
  },
];

const lastBook = library.pop();
console.log('lastBook:', lastBook);

const firstBook = library.shift();
console.log('firstBook:', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};

const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

const fullName = 'Bryan Amora';
const firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);

const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
