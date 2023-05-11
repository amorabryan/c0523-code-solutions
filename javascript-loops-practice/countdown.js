/* exported countdown */
function countdown(number) {
  const array = [];
  while (number >= 0) {
    array.push(number);
    number--;
  }
  return array;
}
