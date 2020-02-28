const userInterfaceContainer = (() => {
    const todoListDisplay = document.querySelector(".project-todo-list");
    const createTodoField = document.querySelector(".create-todo-field");

    const createTodoItemHtml = (todo) => {
        return `
        <li class="todo-item clickable" data-todoid="${todo.getTodoID()}">
            ${todo.getContent()}
        </li>
        `
    }

    const createTodoInputField = (container) => {
        const html = `
            <span class="create-todo-btn clickable">+</span>
            <input type="text" class="todo-content-input">
        `;

        createTodoField.setAttribute("data-projectid", container.getProjectID());
        createTodoField.innerHTML = html;
    }

    const renderContainer = (container) => {
        const html = container.getTodos().map(todo => {
            return createTodoItemHtml(todo);
        }).join('');
        
        createTodoInputField(container);
        todoListDisplay.innerHTML = html;
    }

    const renderTodoItem = (todo) => {
        const todoItemHtml = createTodoItemHtml(todo);
        todoListDisplay.innerHTML += todoItemHtml;
    } 

    return {
        renderContainer,
        renderTodoItem
    };
})();

export default userInterfaceContainer;