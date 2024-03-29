// addToDoController.js

const addToDoController = {
    // Function to handle adding new to-do item
    handleAddToDo: function () {
        // Display add new item form (e.g., show a modal or toggle a hidden form)
        const form = document.getElementById('addTodoForm');
        form.style.display = 'block'; // Assuming the form is initially hidden

        // Add form submit listener
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default form submission behavior

            // Get form data
            const formData = new FormData(form);

            // Pass form data to model to add new to-do item
            toDoModel.addNewToDo(formData);

            // Reset form fields to prevent duplicate entries
            form.reset();

            // Hide the form after submission (optional)
            form.style.display = 'none';
        });
    }
};
