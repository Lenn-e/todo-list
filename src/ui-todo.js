const todoDetailsDisplay = document.querySelector(".todo-details");

const userInterfaceTodo = (() => {
    const clearDetailsDisplay = () => todoDetailsDisplay.innerHTML = '';

    const renderTodoItemDetails = (todo) => {
        const html = `
            <h2>${todo.getText()}</h2>
            <p>${todo.getDueDate()}</p>\
            <p>${todo.getPriority()}</p>\
            <p>${todo.getNote()}</p>\
            <button id="delete-todo-button">Delete</button>
        `;
        todoDetailsDisplay.innerHTML = html;
        todoDetailsDisplay.setAttribute("data-todoid", todo.getTodoID());
    }

    return {
        renderTodoItemDetails,
        clearDetailsDisplay
    };
})();

export default userInterfaceTodo;