/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  const bothInitials = person.firstName.charAt(0) + person.lastName.charAt(0);
  return bothInitials;
}
