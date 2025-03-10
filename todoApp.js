
// delete todo
const todoListUl = document.querySelector("#todo-list ul");
todoListUl.addEventListener('click', function(event){
    if (event.target.className == 'mark-done') {
        const clickedButton = event.target;
        const todoToRemove = clickedButton.parentElement;
        console.log(`Congratulations on finishing the todo '${todoToRemove.children[0].textContent}'`)
        todoToRemove.parentElement.removeChild(todoToRemove);
    }
});

// add todo
const addForm = document.forms['add-todo'];
addForm.addEventListener('submit', function(event){
    event.preventDefault();
    const inputField = addForm.querySelector('input[type="text"]');
    const todoValue = inputField.value;
    if(todoValue.length == 0) {
        return;
    }
    
    inputField.value = ""  // clear the input field

    // create elements
    const liToInsert = document.createElement("li");
    const spanTodoValueToInsert = document.createElement("span");
    spanTodoValueToInsert.textContent = todoValue;
    spanTodoValueToInsert.classList.add("name");

    const spanButtonToInsert = document.createElement("span");
    spanButtonToInsert.textContent = "Mark Done";
    spanButtonToInsert.classList.add('mark-done');

    // append span tags to li
    liToInsert.appendChild(spanTodoValueToInsert);
    liToInsert.appendChild(spanButtonToInsert);
    todoListUl.appendChild(liToInsert);
});

// hide todos
const hideTodosCheckbox = document.querySelector('input[type="checkbox"]');
hideTodosCheckbox.addEventListener('change', function(event){
    const liTodos = document.querySelectorAll("#todo-list li");
    liTodos.forEach(function(li){
        const currentDisplay = li.style.display;
        li.style.display = (hideTodosCheckbox.checked) ? 'none': 'inherit';
    });
});

//search todos
const searchBar = document.forms['search-todos'].querySelector('input[type="text"]');
console.log(searchBar);
searchBar.addEventListener('keyup', function(event){
    console.log("Some key was pressed!");
    Array.from(todoListUl.children).forEach(function(li){
        const searchQuery = searchBar.value.toLowerCase();
        const todoDescription = li.firstElementChild.textContent.toLowerCase();
        console.log(`Searching for ${searchQuery} inside ${todoDescription}`)
        li.style.display = (todoDescription.includes(searchQuery)) ? 'inherit' : 'none';
    });
});



// buttons.forEach(function(button){
//     let markDoneClickListener = function(e){
//         const liToDelete = e.target.parentElement;
//         liToDelete.parentElement.removeChild(liToDelete);
//     }
//     button.addEventListener('click', markDoneClickListener);
// })
