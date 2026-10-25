const { addBook, getBooks, deleteBook, reset } = require('./books');

beforeEach(() => reset());

test('book does get added', () => {
  const book = addBook('Python Basics', 'Guido');
  expect(book.title).toBe('Python Basics');
  expect(getBooks().length).toBe(1);
});

test('book does get deleted', () => {
  const book = addBook('Java', 'Gosling');
  expect(deleteBook(book.id)).toBe(true);
  expect(getBooks().length).toBe(0);
});

test('wrong id does not get deleted', () => {
  expect(deleteBook(99)).toBe(false);
});
