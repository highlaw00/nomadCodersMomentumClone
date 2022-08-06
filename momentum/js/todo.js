const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newToDo) {
  const newList = document.createElement("li");
  const newSpan = document.createElement("span");
  newSpan.innerText = newToDo;
  const newButton = document.createElement("button");
  newButton.innerText = "❌";
  newList.appendChild(newSpan);
  newList.appendChild(newButton);
  toDoList.appendChild(newList);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
