const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;
const FILE_PATH = './todos.json';

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// GET all todos
app.get('/api/todos', (req, res) => {
  fs.readFile(FILE_PATH, 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error reading todos');
    res.json(JSON.parse(data || '[]'));
  });
});

// CREATE a new todo
app.post('/api/todos', (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).send('Missing todo text');

  fs.readFile(FILE_PATH, 'utf8', (err, data) => {
    const todos = JSON.parse(data || '[]');
    const newTodo = { id: Date.now(), text, completed: false };
    todos.push(newTodo);

    fs.writeFile(FILE_PATH, JSON.stringify(todos, null, 2), err => {
      if (err) return res.status(500).send('Error saving todo');
      res.status(201).json(newTodo);
    });
  });
});

// DELETE a todo
app.delete('/api/todos/:id', (req, res) => {
  const id = Number(req.params.id);

  fs.readFile(FILE_PATH, 'utf8', (err, data) => {
    let todos = JSON.parse(data || '[]');
    todos = todos.filter(todo => todo.id !== id);

    fs.writeFile(FILE_PATH, JSON.stringify(todos, null, 2), err => {
      if (err) return res.status(500).send('Error deleting todo');
      res.status(200).json({ success: true });
    });
  });
});

// TOGGLE completion status of a todo
app.put('/api/todos/:id', (req, res) => {
  const id = Number(req.params.id);

  fs.readFile(FILE_PATH, 'utf8', (err, data) => {
    let todos = JSON.parse(data || '[]');
    todos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    fs.writeFile(FILE_PATH, JSON.stringify(todos, null, 2), err => {
      if (err) return res.status(500).send('Error updating todo');
      res.status(200).json({ success: true });
    });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
