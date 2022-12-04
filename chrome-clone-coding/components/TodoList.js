const todoForm = document.querySelector('.todo_form');
const todo = document.querySelector('.todo');
const todoList = document.querySelector('.todo_list');
const savedTodo = window.localStorage.getItem(`todo`);
const list = document.createElement('div');
const button = document.createElement('button');

if (savedTodo) {
  button.className = 'delete';
  list.innerHTML = `📍 ${savedTodo}`;
  button.innerHTML = 'X';
  todoList.appendChild(list);
  todoList.appendChild(button);
}

const handleSubmit = () => {
  button.className = 'delete';
  list.innerHTML += `📍 ${savedTodo}`;
  button.innerHTML = 'X';
  todoList.appendChild(list);
  todoList.appendChild(button);
  window.localStorage.setItem(`todo`, `${todo.value}`);
  todo.value = '';
};

const handleDelete = (e) => {
  const li = e.target.parentElement;
  li.remove();
};

todoForm.addEventListener('submit', handleSubmit);
button.addEventListener('click', handleDelete);
