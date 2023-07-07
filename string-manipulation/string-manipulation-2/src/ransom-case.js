/* exported ransomCase */
function ransomCase(string) {
  const splitString = string.toLowerCase().split('');
  for (let i = 1; i < string.length; i += 2) {
    splitString[i] = splitString[i].toUpperCase();
  }
  return splitString.join('');
}
