const todoForm = document.querySelector(".todo__form");
const todoInput = document.querySelector(".todo__input");
const todoList = document.querySelector(".todo__list");

let toDos = [];

function saveTodo() {
  localStorage.setItem("할일", JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((item) => item.id !== parseInt(li.id));
  saveTodo();
}

function paintTodoList(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  li.appendChild(checkBox);
  li.appendChild(span);
  todoList.appendChild(li);
  span.innerText = newTodo.text;
  checkBox.addEventListener("click", deleteTodo);
}

function todoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObject = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObject);
  paintTodoList(newTodoObject);
  saveTodo();
}

todoForm.addEventListener("submit", todoSubmit);

const savedTodo = localStorage.getItem("할일");

if (savedTodo !== null) {
  const parsedTodos = JSON.parse(savedTodo);
  parsedTodos.forEach(paintTodoList);
}
