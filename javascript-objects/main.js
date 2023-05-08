const student = {
  firstName: 'Bryan',
  lastName: 'Amora',
  age: 28,
};

const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
console.log('value of student.livesInIrvine:', student.livesInIrvine);
student.previousOccupation = 'Elementary School Coach';
console.log('value of student.previousOccupation:', student.previousOccupation);

console.log('value of student:', student);

const vehicle = {
  make: 'Honda',
  model: 'Civic Hatchback',
  year: '2017',
};

vehicle['color'] = 'white';
console.log('value of vehicle["color"]:', vehicle['color']);
vehicle['isConvertible'] = false;
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);

console.log('value of vehicle:', vehicle);

const pet = {
  name: 'John Cena',
  type: 'hamster',
};

delete pet.name;
delete pet['type'];

console.log('value of pet:', pet);
