const { addBook, getBooks, deleteBook, reset } = require('./books');

beforeEach(() => reset());

test('book add hoti hai', () => {
  const book = addBook('Python Basics', 'Guido');
  expect(book.title).toBe('Python Basics');
  expect(getBooks().length).toBe(1);
});

test('book delete hoti hai', () => {
  const book = addBook('Java', 'Gosling');
  expect(deleteBook(book.id)).toBe(true);
  expect(getBooks().length).toBe(0);
});

test('galat id delete nahi hoti', () => {
  expect(deleteBook(99)).toBe(false);
});
