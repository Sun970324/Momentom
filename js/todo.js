const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.querySelector("#todo-list");
const createList = document.createElement("li")

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value
  toDoInput.value=""
  console.log(newToDo);
  createList.textContent = newToDo
  toDoList.appendChild(createList)
}

toDoForm.addEventListener("submit", handleToDoSubmit);
