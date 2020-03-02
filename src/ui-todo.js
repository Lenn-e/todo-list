const todoDetailsDisplay = document.querySelector(".todo-details");
const todoModal = document.querySelector(".todo-modal");

const userInterfaceTodo = (() => {
    const clearDetailsDisplay = () => todoDetailsDisplay.innerHTML = '';

    const toggleTodoModal = () => {
        todoModal.classList.toggle("show-todo-modal");
    }

    const renderTodoItemDetails = (todo) => {
        const html = `
            <button id="close-todo-modal-btn">X</button>
            <h2>${todo.getText()}</h2>
            <p>${todo.getDueDate()}</p>\
            <p>${todo.getPriority()}</p>\
            <p>${todo.getNote()}</p>\
            <button id="delete-todo-button">Delete</button>
        `;
        todoDetailsDisplay.innerHTML = html;
        todoDetailsDisplay.setAttribute("data-todoid", todo.getTodoID());
        toggleTodoModal();
    }

    return {
        renderTodoItemDetails,
        clearDetailsDisplay,
        toggleTodoModal
    };
})();

export default userInterfaceTodo;