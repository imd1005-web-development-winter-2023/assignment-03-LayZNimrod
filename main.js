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

const deleteButton = document.querySelector(".deleteButton");

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

var indexFromDataAttribute=0;

function listClickHander(event) {
  // Check if the click event is from a button or something else
  if (event.target.id == "click") {
    indexFromDataAttribute = event.target.dataset.itemIndex;

    message.textContent = indexFromDataAttribute;

    
  }

  if (event.target.id=="delete") {
    todoArray.splice(indexFromDataAttribute, 1);
    renderList(todoArray, todoList);
  }

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
    listItem = document.createElement("li");
    const buttonItem= document.createElement("button");
    buttonItem.id="click";
    buttonItem.type="button";
    buttonItem.textContent=items[i];
    buttonItem.dataset.itemIndex = i;
    // On the last item in the list, add the annimation class
    if (i === items.length - 1) {
      listItem.classList.add("new-item-annimate");
    }
    //append buttonItem to listItem
    listItem.appendChild(buttonItem);
    // Add the list item to the list
    itemsList.appendChild(listItem);
  }
}

// 
// EVENT LISTENERS AND INITIALISION
// 

// Add the submit form handler
addEventListener("click", listClickHander);

// Add the submit form handler
todoForm.addEventListener("submit", addTodoItem);


// Draw the list
renderList(todoArray, todoList);
