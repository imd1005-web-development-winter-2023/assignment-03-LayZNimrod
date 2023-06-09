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
  // Idea for double array from my friend
  const listEntry = [todoName.value, false, false, false];
  // Add the user defined entry to our array
  todoArray.push(listEntry);

  // used to reset value
  document.querySelector("#todo-label").value=null;

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
    // indexfromdataattribute was a string for some reason so I use parseInt to make it an Int found out through looking up "dataset to int javascript" into google and getting as an autofill "parseint javascript"

    todoArray[indexFromDataAttribute][2]=true;
    renderList(todoArray, todoList);
  }

  if (event.target.id=="late") {
    
    if (todoArray[indexFromDataAttribute][1]===false){
      todoArray[indexFromDataAttribute][1]=true;
    } else{
      todoArray[indexFromDataAttribute][1]=false;
    }

    renderList(todoArray, todoList);



    //document.querySelector("button[name='button "+indexFromDataAttribute+"']").classList.add("buttonlate");
  }

  if (event.target.id=="done") {
    
    if (todoArray[indexFromDataAttribute][3]===false){
      todoArray[indexFromDataAttribute][3]=true;
    } else{
      todoArray[indexFromDataAttribute][3]=false;
    }

    renderList(todoArray, todoList);



    //document.querySelector("button[name='button "+indexFromDataAttribute+"']").classList.add("buttonlate");
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
    buttonItem.name="button "+i;
    buttonItem.textContent=items[i][0];
    buttonItem.dataset.itemIndex = i;

    if (todoArray[i][1]===true) {
      buttonItem.classList.add("buttonlate");
    }

    if (todoArray[i][2]===true) {
      buttonItem.classList.add("buttonselected");
    }
    
    if (todoArray[i][2]===true&&todoArray[i][1]===true){
      buttonItem.classList.add("buttonselectedlate");
    }
    if (todoArray[i][3]===true){
      buttonItem.classList.add("buttondone");
    }

    //append buttonItem to listItem
    listItem.appendChild(buttonItem);
    // Add the list item to the list
    itemsList.appendChild(listItem);
    console.table(items);
  }
  for (let i = 0; i < items.length; i++) {
    todoArray[i][2]=false;
  }
  
  if (items.length===0){
    const listItem = document.createElement("li");
    listItem.textContent = "Add Something To The List";
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
