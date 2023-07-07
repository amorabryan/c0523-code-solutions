/* exported getValues */
function getValues(object) {
  const array = [];
  for (const i in object) {
    array.push(object[i]);
  }
  return array;
}
