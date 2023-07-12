/* exported titleCase */
function titleCase(title) {
  const minorWords = [
    'and',
    'or',
    'nor',
    'but',
    'a',
    'an',
    'the',
    'as',
    'at',
    'by',
    'for',
    'in',
    'of',
    'on',
    'per',
    'to',
  ];
  let newStr = (title[0].toUpperCase() + title.slice(1).toLowerCase()).split(
    ' '
  );

  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i].includes('-')) {
      const hyphenSplit = newStr[i].split('-');
      hyphenSplit[0] =
        hyphenSplit[0].charAt(0).toUpperCase() +
        hyphenSplit[0].slice(1).toLowerCase();
      hyphenSplit[1] =
        hyphenSplit[1].charAt(0).toUpperCase() +
        hyphenSplit[1].slice(1).toLowerCase();
      newStr[i] = hyphenSplit.join('-');
    } else {
      if (
        !minorWords.includes(newStr[i]) ||
        (newStr[i - 1] !== undefined && newStr[i - 1].slice(-1) === ':')
      ) {
        newStr[i] =
          newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1).toLowerCase();
      }
    }
  }

  newStr = newStr
    .join(' ')
    .replace('Javascript', 'JavaScript')
    .replace('Api', 'API');
  return newStr;
}
