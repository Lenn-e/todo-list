import flatpickr from "flatpickr";
import dateFunctions from "./date-functions";

const userInterfaceContainer = (() => {
    const todoListDisplay = document.querySelector(".project-todo-list");
    const createTodoField = document.querySelector(".create-todo-field");

    const getTodoNodesByID = (ID, parentNode) => {
        return parentNode.querySelectorAll(`.todo-item[data-todoid=${ID}`);
    }

    const createTodoItemHtml = (todo) => {
        const html = `
        <li class="todo-item clickable" data-todoid="${todo.getTodoID()}">
            <div class="checkbox ${todo.isChecked() ? "checked" : ""} ${todo.getPriority()}">
            </div>
            <div class="todo-item-name ${todo.isChecked() ? "checked" : ""}">
                ${todo.getText()}
            </div>
            <div class="date-due ${dateFunctions.isDue(todo.getDueDate()) ? "due" : ""}">
                ${dateFunctions.formatDate(todo.getDueDate())}
            </div>
        </li>
        `
        return html;
    }

    const createTodoInputField = (container) => {
        // create input for name, dateDue, priority and note
        const html = `
            <div class="input-name-field todo-input">
                <span class="create-todo-btn clickable">+</span>
                <input id="todo-name" type="text" class="" placeholder="Todo name">
            </div>

            <div class="todo-input date-priority-container">
                <input id="todo-due-date" type="text" placeholder="Select Date" readonly="readonly">
                <div>
                    <p>Set priority<p>
                    <select id="todo-priority">
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
            </div>

            <input id="todo-note" class="todo-input" placeholder="Write a note" type="text">
        `;
        
        createTodoField.setAttribute("data-projectid", container.getProjectID());
        createTodoField.innerHTML = html;

        flatpickr("#todo-due-date", {defaultDate: new Date()});
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
        const todo = getTodoNodesByID(todoID, todoListDisplay)[0];
        todoListDisplay.removeChild(todo);
    }

    const checkTodo = (todoID) => {
        const todoNodes = getTodoNodesByID(todoID, document);
        todoNodes.forEach(todoNode => {
            todoNode.querySelector(".checkbox").classList.toggle("checked");
            todoNode.querySelector(".todo-item-name").classList.toggle("checked");
        });
    }

    return {
        renderContainer,
        renderTodoItem,
        removeTodoItem,
        checkTodo
    };
})();

export default userInterfaceContainer;