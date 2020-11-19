const addButton = document.querySelector(".addButton");
let input = document.querySelector(".input");
const container = document.querySelector(".container");
// Ajout variable du l'icône 'delete' let image = document.getElementById('image'); //



// Permet de creer la class et div Item et de lui ajouter la class item-input et tout ce qu'on voit
class item {
  constructor(itemName) {
    this.createDiv(itemName);
  }
  createDiv(itemName) {
    let itemBox = document.createElement("div");
    itemBox.classList.add("item");

    let todo = document.createElement("input");
    todo.value = itemName;
    todo.disabled = true;
    todo.classList.add("item_input");
    todo.type = "text";

    let editButton = document.createElement("button");
    editButton.innerHTML = ("✎");
    editButton.classList.add("editButton");

    let removeButton = document.createElement("button");
    removeButton.innerHTML = "✘";
    removeButton.classList.add("removeButton");

    container.appendChild(itemBox);

    itemBox.appendChild(todo);
    itemBox.appendChild(editButton);
    itemBox.appendChild(removeButton);

    editButton.addEventListener("click", () => this.edit(todo));

    removeButton.addEventListener("click", () => this.remove(itemBox));
  }

  edit(editTodo) {
    editTodo.disabled = !editTodo.disabled;
  }

  remove(itemBox) {
    container.removeChild(itemBox);
  }
}
// permet de pas faire un todo vide
function check() {
  if (input.value != "") {
    new item(input.value);
    // QU ES CE QUE C EST
    input.value = "";
  }
}
// bouton vert
addButton.addEventListener("click", check);

window.addEventListener("keydown", (e) => {
  if (e.which == 13) {
    check();
  }
});

new item("Faire un gâteau");


