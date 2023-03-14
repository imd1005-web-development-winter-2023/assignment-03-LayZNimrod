//
//  JS File
//  You may remove the code below - it's just boilerplate
//

// Array of todo that are provided by the user
const todoArray = [];
// The ul for the list of todo item
const todoList = document.querySelector(".todo-items");
// The form where we intake todo item
const todoForm = document.querySelector(".add-todo");
// The form text element that has the name the user provided
const todoName = document.querySelector("#todo-label");


const message = document.querySelector(".message");

//
// FUNCTIONS
//

// Handle the event when a user submits the form
function addTodoItem(e) {
  // Stop browser default form submission
  e.preventDefault();
  // Get the text from the input field
  const listEntry = todoName.value;
  // Add the user defined entry to our array
  todoArray.push(listEntry);
  // Draw the list of todo
  renderList(todoArray, todoList);
  // Reset the form so that the text field name is cleared
  todoForm.reset();
}

function listClickHander(event) {
  // Check if the click event is from a button or something else
  if (event.target.type !== "BUTTON") {
    return;
  }

  console.log(hello);
  const indexFromDataAttribute = event.target.dataset.itemIndex;

  message.textContent = indexFromDataAttribute;
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
    const buttonItem= document.createElement("button");
    listItem.textContent = items[i];
    buttonItem.id="click";
    buttonItem.type="button";
    buttonItem.textContent="button "+(i+1);
    buttonItem.value="button "+(i+1);
  
    buttonItem.dataset.itemIndex = i;
    // On the last item in the list, add the annimation class
    if (i === items.length - 1) {
      listItem.classList.add("new-item-annimate");
    }
    // Add the list item to the list
    itemsList.appendChild(listItem);
    itemsList.appendChild(buttonItem);
  }
}

// 
// EVENT LISTENERS AND INITIALISION
// 

// Add the submit form handler
todoForm.addEventListener("click", listClickHander);

// Add the submit form handler
todoForm.addEventListener("submit", addTodoItem);


// Draw the list
renderList(todoArray, todoList);
