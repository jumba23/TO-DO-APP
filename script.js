const input = document.querySelector("input");
const ul = document.querySelector("#toDoList");
const clearButton = document.querySelector("#clearList");

function createTodoListItem() {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const removeButton = document.createElement("button");
  clearButton.setAttribute("style", "display: show");
  span.textContent = input.value;
  removeButton.textContent = "X";
  li.appendChild(span);
  li.appendChild(removeButton);
  return li;
}

document.querySelector("#addForm").addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value === "") {
    return;
  }
  const li = createTodoListItem();
  ul.appendChild(li);
  input.value = "";
});

ul.addEventListener("click", (e) => {
  if (e.target.textContent === "X") {
    const button = e.target;
    const li = button.parentNode;
    li.remove();
  }
  if (ul.children.length === 0) {
    clearButton.setAttribute("style", "display: none");
  }
});

ul.addEventListener("mousedown", (e) => {
  const todoText = e.target;
  todoText.classList.toggle("line");
  line.classList.toggle("line");
});

function clearList() {
  ul.innerHTML = "";
  clearButton.setAttribute("style", "display: none");
}
