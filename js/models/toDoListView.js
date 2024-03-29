// toDoListView.js

// Delegate click event on "Add New To-Do" button to controller
document.getElementById('add').addEventListener('click', function () {
    // Call controller function to handle adding new to-do item
    addToDoController.handleAddToDo();
});
