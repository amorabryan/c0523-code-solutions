/* exported firstChars */
function firstChars(length, string) {
  if (string.length <= length) {
    return string;
  }
  return string.slice(0, length);
}
