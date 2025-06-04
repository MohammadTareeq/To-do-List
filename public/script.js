let filter = 'all'; // 'all' | 'active' | 'completed'

function setFilter(newFilter) {
  filter = newFilter;
  fetchTodos();
}

async function fetchTodos() {
  const res = await fetch('/api/todos');
  const todos = await res.json();
  const list = document.getElementById('todoList');
  const emptyState = document.getElementById('emptyState');
  const count = document.getElementById('count');

  // Filter based on selected filter
  let filtered = todos;
  if (filter === 'active') filtered = todos.filter(todo => !todo.completed);
  if (filter === 'completed') filtered = todos.filter(todo => todo.completed);

  // Clear UI
  list.innerHTML = '';

  // Show empty state if nothing
  if (filtered.length === 0) {
    emptyState.style.display = 'block';
    count.textContent = '';
  } else {
    emptyState.style.display = 'none';
    count.textContent = `Showing ${filtered.length} ${filter} task(s)`;

    filtered.forEach(todo => {
      const li = document.createElement('li');

      li.innerHTML = `
        <input type="checkbox" ${todo.completed ? 'checked' : ''} onchange="toggleTodo(${todo.id})" />
        <span style="flex:1; margin-left: 10px; text-decoration: ${todo.completed ? 'line-through' : 'none'};">
          ${todo.text}
        </span>
        <button onclick="deleteTodo(${todo.id})">🗑️</button>
      `;

      list.appendChild(li);
    });
  }
}

async function addTodo() {
  const input = document.getElementById('todoInput');
  const text = input.value.trim();
  if (!text) return;

  await fetch('/api/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text })
  });

  input.value = '';
  fetchTodos();
}

async function deleteTodo(id) {
  await fetch(`/api/todos/${id}`, { method: 'DELETE' });
  fetchTodos();
}

async function toggleTodo(id) {
  await fetch(`/api/todos/${id}`, {
    method: 'PUT'
  });
  fetchTodos();
}

fetchTodos(); // Initial load
