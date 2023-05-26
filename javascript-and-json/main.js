const books = [
  {
    isbn: '978-1-60309-344-6',
    title: 'The Fun Family',
    author: 'Benjamin Frisch',
  },
  {
    isbn: '978-1-60309-418-4',
    title: 'Super Tokyoland',
    author: 'Benjamin Reiss',
  },
  {
    isbn: '978-1-60309-527-3',
    title: 'But You Have Friends',
    author: 'Emilia McKenzie',
  },
];

console.log('first book:', books[0]);
console.log('second author:', books[1].author);
console.log('typeof third title:', typeof books[2].title);

const booksJSON = JSON.stringify(books);
console.log('JSON books:', booksJSON);
console.log('typeof booksJSON:', typeof booksJSON);

const student = '{"id": 11147, "name": "John"}';

console.log('students:', student);
console.log('typeof students:', typeof student);

const parseJSON = JSON.parse(student);
console.log('parseJSON:', parseJSON);
console.log('typeof parseJSON:', typeof parseJSON);
