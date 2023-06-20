const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];
console.log('In order:');
values.forEach((value) => console.log(value));
console.log('Reverse order:');
values.forEach((value, index) => {
  const last = values[values.length - 1 - index];
  console.log(last);
});
