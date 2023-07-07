/* exported isAnagram */
function isAnagram(firstString, secondString) {
  const newFirst = firstString
    .split('')
    .join('')
    .replace(' ', '')
    .replace(' ', '');
  const sortFirst = newFirst.split('').sort().join('');
  const newSecond = secondString
    .split('')
    .join('')
    .replace(' ', '')
    .replace(' ', '');
  const sortSecond = newSecond.split('').sort().join('');
  return sortFirst === sortSecond;
}
