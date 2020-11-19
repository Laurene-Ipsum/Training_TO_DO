const addButton = document.querySelector(".addButton");
let input = document.querySelector(".input");
const container = document.querySelector(".container");

// Ajout variable du l'icône 'delete' let image = document.getElementById('image'); //

// Permet de creer l'objet item
class item {
  //  il ne peut y avoir qu'un seul "constructor" dans l'objet item, auquel on doit ajouter une méthode
  constructor(itemName) {
    // this renvoit a l'objet item et qui va ajouter les proprietes d'itemName
    this.createDiv(itemName);
  }
  createDiv(itemName) {
    //  CREER LA DIV DE LA TODO
    let itemBox = document.createElement("div");
    itemBox.classList.add("item");
    // CREER L INPUT DE LA DIV
    let todo = document.createElement("input");
    todo.value = itemName;
    todo.disabled = true;
    todo.classList.add("item_input");
    todo.type = "text";

    // CREER LE BOUTON EDIT DE LA DIV
    let editButton = document.createElement("button");
    editButton.innerHTML = "✎";
    editButton.classList.add("editButton");
    // CREER LE BOUTON
    let removeButton = document.createElement("button");
    removeButton.innerHTML = "✘";
    removeButton.classList.add("removeButton");
    // CREER LE BOUTON BARRER
    let barrerButton = document.createElement("button");
    barrerButton.innerHTML = "✔";
    barrerButton.classList.add("barrerButton");

    // CONTAINER CREER L ENFANT QUI EST UNE DIV
    container.appendChild(itemBox);
    // ITEBOX CREER
    itemBox.appendChild(todo);
    itemBox.appendChild(barrerButton);
    itemBox.appendChild(editButton);
    itemBox.appendChild(removeButton);

    // this définit dans une fonction fléchée renvoie a l'objet en amont ici item et affecte le bouton EDIT pour modifier l'input de la todo
    //permet de changer le contenu de la barre Itemname avec la méthode edit en utilisant les parametre todo
    editButton.addEventListener("click", () => this.edit(todo));
    // bouton Remove qui supprime les enfants de container
    removeButton.addEventListener("click", () => this.remove(itemBox));


    // BOUTON REFRESH AFIN DE SUPPRIMER TOUTES LES TODO
    let refresh = document.querySelector(".refresh");

    refresh.addEventListener("click", function () {
      container.removeChild(itemBox);
    });

    let boolean = false;
    barrerButton.addEventListener("click", function () {
      boolean = !boolean;
      todo.style.textDecoration = "line-through";
      if (boolean === false) {
        todo.style.textDecoration = "none";
      }
    });
  }
  // edit est une méthode utiliser pour changer la valeur boolean de disable
  edit(editTodo) {
    editTodo.disabled = !editTodo.disabled;
  }

  remove(itemBox) {
    container.removeChild(itemBox);
  }

  barrer(todoInput) {
    todoInput.style.textDecoration = "line-through";
  }
}
// si la valeur de l'input est different de vide (false,) alors new item = la valeur
function check() {
  if (input.value != "") {
    new item(input.value);
    //  permet de revider l'input apres avoir entrer une valeur
    input.value = "";
  }
}
// bouton ajouter qui utilise la fonction check pour verifier la valeur de l'input si vide pas de nouvelle tache autrement nouvelle tache
addButton.addEventListener("click", check);
// Event qui permet d'utiliser la touche entrée afin de creer une novuelle tache sans passer par le bouton ajouter, utilisant la fonction check pour ne pas creer une tache vide
window.addEventListener("keydown", (e) => {
  if (e.which == 13) {
    check();
  }
});

new item("ooo");
//
