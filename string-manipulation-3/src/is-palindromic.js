/* exported isPalindromic */
function isPalindromic(string) {
  const newString = string.split(' ').join('').replace(' ', '');
  const reverseString = newString.split('').reverse().join('');
  return reverseString === string.replace(' ', '');
}
