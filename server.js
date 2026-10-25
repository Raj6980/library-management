const express = require('express');
const { addBook, getBooks, deleteBook } = require('./books');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Library Management System chal raha hai!');
});

app.get('/books', (req, res) => {
  res.json(getBooks());
});

app.post('/books', (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ error: 'title aur author zaroori hai' });
  }
  res.status(201).json(addBook(title, author));
});

app.delete('/books/:id', (req, res) => {
  const ok = deleteBook(Number(req.params.id));
  res.status(ok ? 200 : 404).json({ deleted: ok });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(Server port ${PORT} par chal raha hai));
