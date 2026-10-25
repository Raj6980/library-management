let books = [];
let nextId = 1;

function addBook(title, author) {
  const book = { id: nextId++, title, author };
  books.push(book);
  return book;
}

function getBooks() {
  return books;
}

function deleteBook(id) {
  const before = books.length;
  books = books.filter(b => b.id !== id);
  return books.length < before;
}

function reset() {
  books = [];
  nextId = 1;
}

module.exports = { addBook, getBooks, deleteBook, reset };
