function createBook(title, author, description) {
  return {
    title,
    author,
    description,
    read: false,

    getDescription() {
      return this.description;
    },
    readBook() {
      this.read = true;
  };
}

let firstBook = createBook('Mythos', 'Stephen Fry', 'a classic book');
let secondBook = createBook(
  'Me Talk Pretty One Day',
  'David Sedaris',
  "Me Talk Pretty one day was written by David Sedaris.");
let thirdBook = createBook(
  'Aunts aren\'t Gentlemen',
  'PG Wodehouse',
  'A book about people');

console.log(firstBook.getDescription());
console.log(secondBook.getDescription());
console.log(thirdBook.getDescription());
