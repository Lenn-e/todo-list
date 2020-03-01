import flatpickr from "flatpickr";

const userInterfaceContainer = (() => {
    const todoListDisplay = document.querySelector(".project-todo-list");
    const createTodoField = document.querySelector(".create-todo-field");

    const createTodoItemHtml = (todo) => {
        return `
        <li class="todo-item clickable" data-todoid="${todo.getTodoID()}">
            ${todo.getText()}
        </li>
        `
    }

    const createTodoInputField = (container) => {
        // create input for name, dateDue, priority and note
        const html = `
            <div>
                <span class="create-todo-btn clickable">+</span>
                <input id="todo-name" type="text" class="todo-input">
            </div>

            <input id="todo-due-date" class="todo-input" type="text" placeholder="Select Date.." readonly="readonly">

            <label for="priority">Set priority</label>
            <select id="todo-priority" class="todo-input">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>

            <textarea id="todo-note" placeholder="Write a note" class="todo-input"></textarea>
        `;
        
        createTodoField.setAttribute("data-projectid", container.getProjectID());
        createTodoField.innerHTML = html;

        flatpickr("#todo-due-date", {});
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