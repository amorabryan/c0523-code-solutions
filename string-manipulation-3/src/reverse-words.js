/* exported reverseWords */
function reverseWords(string) {
  const newString = string
    .split('')
    .reverse()
    .join('')
    .split(' ')
    .reverse()
    .join(' ');
  return newString;
}
