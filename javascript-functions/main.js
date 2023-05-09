function convertMinutesToSeconds(minutes) {
  const conversion = minutes * 60;
  return conversion;
}
console.log('conversion result:', convertMinutesToSeconds(5));

function greet(name) {
  const greeting = 'Hey, ' + name;
  return greeting;
}
console.log('greeting result:', greet('Beavis'));

function getArea(width, height) {
  const area = width * height;
  return area;
}
console.log('area result:', getArea(17, 42));

function getFirstName(person) {
  const name = person.firstName;
  return name;
}
console.log(
  'name result:',
  getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' })
);

function getLastElement(array) {
  const list = array[array.length - 1];
  return list;
}
console.log(
  'list result:',
  getLastElement(['propane', 'and', 'propane', 'accessories'])
);
