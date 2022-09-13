// input: array of objects
// output: array of objects
// rules:
//  sort by year of publication from earliest to latest
// algo:
//  try:
//  sort array
//    in callback, coerce the 'published' value of each object to string

function callb(a, b) {
  return Number(a.published) - Number(b.published);
}
function sortBooks(arr) {
  return arr.sort(callb);
}


// tests:
let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];
console.log(books);
console.log(sortBooks(books));
