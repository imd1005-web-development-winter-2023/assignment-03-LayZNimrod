//
//  JS File
//  You may remove the code below - it's just boilerplate
//

// Array of pokemons that are provided by the user
const pokemons = [];
// The ul for the list of pokemon
const pokeList = document.querySelector(".todo-items");
// The form where we intake pokemon
const pokeForm = document.querySelector(".add-todo");
// The form text element that has the name the user provided
const pokeName = document.querySelector("#Todo-Label");

//
// FUNCTIONS
//

// Handle the event when a user submits the form
function addTodoItem(e) {
  // Stop browser default form submission
  e.preventDefault();
  // Get the text from the input field
  const pokemonName = pokeName.value;
  // Add the user defined pokemon to our array
  pokemons.push(pokemonName);
  // Draw the list of pokemons
  renderList(pokemons, pokeList);
  // Reset the form so that the text field name is cleared
  pokeForm.reset();
}

// Draw the list of items
// Step 1: remove all of the children in the UL list
// Step 2: for each entry in the array add the array item to the list
function renderList(items, itemsList) {
  // Clear all of the entries in the list
  while (itemsList.firstChild) {
    itemsList.removeChild(itemsList.firstChild);
  }

  // For each item in the list add a list item
  for (let i = 0; i < items.length; i++) {
    // Create the list item and add the text
    const listItem = document.createElement("li");
    listItem.textContent = items[i];
    // On the last item in the list, add the annimation class
    if (i === items.length - 1) {
      listItem.classList.add("new-item-annimate");
    }
    // Add the list item to the list
    itemsList.appendChild(listItem);
  }
}

//
// EVENT LISTENERS AND INITIALISION
//

// Add the submit form handler
pokeForm.addEventListener("submit", addTodoItem);

// Draw the list
renderList(pokemons, pokeList);
