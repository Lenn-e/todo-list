const todoDetailsDisplay = document.querySelector(".todo-details");

const userInterfaceTodo = (() => {
    const renderTodoItemDetails = (todo) => {
        const html = `
            <h2>${todo.getContent()}</h2>
            <p>${todo.getTodoID()}</p>
        `;
        todoDetailsDisplay.innerHTML = html;
    }

    return {
        renderTodoItemDetails,
    };
})();

export default userInterfaceTodo;