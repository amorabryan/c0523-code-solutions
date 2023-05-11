/* exported isVowel */
function isVowel(char) {
  return (
    char.toLowerCase() === 'a' ||
    char.toLowerCase() === 'e' ||
    char.toLowerCase() === 'i' ||
    char.toLowerCase() === 'o' ||
    char.toLowerCase() === 'u' ||
    false
  );
}
