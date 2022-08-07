const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = [];
const TODOS_KEY = "toDos";

function deleteToDo(event) {
  const targetList = event.target.parentElement;
  const targetListId = targetList.id;

  targetList.remove();
}

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintNewToDo(newToDoObject) {
  const newList = document.createElement("li");
  newList.id = newToDoObject.id;
  const newSpan = document.createElement("span");
  newSpan.innerText = newToDoObject.text;
  const newButton = document.createElement("button");
  newButton.innerText = "❌";
  newButton.addEventListener("click", deleteToDo);
  newList.appendChild(newSpan);
  newList.appendChild(newButton);
  toDoList.appendChild(newList);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  const newToDoObject = {
    text: newToDo,
    id: Date.now(),
  };
  toDoInput.value = "";
  toDos.push(newToDoObject);
  paintNewToDo(newToDoObject);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintNewToDo);
}
