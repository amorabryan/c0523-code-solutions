/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  let array = string.split('');
  const newString = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = newString;
  array = array.join('').toString();
  return array;
}
