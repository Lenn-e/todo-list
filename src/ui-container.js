import flatpickr from "flatpickr";

const userInterfaceContainer = (() => {
    const todoListDisplay = document.querySelector(".project-todo-list");
    const createTodoField = document.querySelector(".create-todo-field");

    const getTodoNodeByID = (ID) => {
        return todoListDisplay.querySelector(`.todo-item[data-todoid=${ID}`);
    }

    const createTodoItemHtml = (todo) => {
        const html = `
        <li class="todo-item clickable" data-todoid="${todo.getTodoID()}">
            <div class="checkbox ${todo.isChecked() ? "checked" : ""} ${todo.getPriority()}">
            </div>
            <div class="todo-item-name ${todo.isChecked() ? "checked" : ""}">
                ${todo.getText()}
            </div>
            <div class="date-due">
                date due<br>${todo.getDueDate()}
            </div>
        </li>
        `
        return html;
    }

    const createTodoInputField = (container) => {
        // create input for name, dateDue, priority and note
        const html = `
            <div class="input-name-field">
                <span class="create-todo-btn clickable">+</span>
                <input id="todo-name" type="text" class="todo-input" placeholder="Todo name">
            </div>

            <input id="todo-due-date" class="todo-input" type="text" placeholder="Select Date" readonly="readonly">

            <label for="priority">Set priority</label>
            <select id="todo-priority" class="todo-input">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>

            <input id="todo-note" class="todo-input" placeholder="Write a note" type="text">
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

    const removeTodoItem = (todoID) => {
        const todo = getTodoNodeByID(todoID);
        todoListDisplay.removeChild(todo);
    }

    const checkTodo = (todoID) => {
        const todo = getTodoNodeByID(todoID);
        todo.querySelector(".checkbox").classList.toggle("checked");
        todo.querySelector(".todo-item-name").classList.toggle("checked");
    }

    return {
        renderContainer,
        renderTodoItem,
        removeTodoItem,
        checkTodo
    };
})();

export default userInterfaceContainer;