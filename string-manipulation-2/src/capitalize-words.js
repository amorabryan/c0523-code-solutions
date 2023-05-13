/* exported capitalizeWords */
function capitalizeWords(string) {
  const words = string.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] =
      words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }
  return words.join(' ');
}
