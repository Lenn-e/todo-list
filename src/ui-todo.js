const todoDetailsDisplay = document.querySelector(".todo-details");

const userInterfaceTodo = (() => {
    const renderTodoItemDetails = (todo) => {
        const html = `
            <h2>${todo.getText()}</h2>
            <p>${todo.getDueDate()}</p>\
            <p>${todo.getPriority()}</p>\
            <p>${todo.getNote()}</p>\
        `;
        todoDetailsDisplay.innerHTML = html;
    }

    return {
        renderTodoItemDetails,
    };
})();

export default userInterfaceTodo;