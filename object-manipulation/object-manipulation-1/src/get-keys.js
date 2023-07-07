/* exported getKeys */
function getKeys(object) {
  const array = [];
  for (const i in object) {
    array.push(i);
  }
  return array;
}
