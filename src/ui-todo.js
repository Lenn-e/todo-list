import flatpickr from "flatpickr";
import dateFunctions from "./date-functions";

const todoDetailsDisplay = document.querySelector(".todo-details");
const todoModal = document.querySelector(".todo-modal");

const userInterfaceTodo = (() => {
    const clearDetailsDisplay = () => todoDetailsDisplay.innerHTML = '';

    const toggleTodoModal = () => {
        todoModal.classList.toggle("show-todo-modal");
    }

    const renderTodoItemDetails = (todo) => {
        const html = `
            <button clsas="details-item" id="close-todo-modal-btn">X</button>
            <div class="todo-item details-item"  data-todoid="${todo.getTodoID()}">
                <div class="checkbox ${todo.isChecked() ? "checked" : ""} ${todo.getPriority()} clickable">
                </div>
                <div class="todo-item-name ${todo.isChecked() ? "checked" : ""}">
                    ${todo.getText()}
                </div>
            </div>
            <input class="todo-due-date details-item" type="text" placeholder="${todo.getDueDate()}" readonly="readonly">
            <textarea class="details-item todo-note">${todo.getNote()}</textarea>
            <button class="details-item" id="change-todo-button">Apply Changes</button>
            <button class="details-item" id="delete-todo-button">Delete</button>
        `;
        
        todoDetailsDisplay.innerHTML = html;
        todoDetailsDisplay.setAttribute("data-todoid", todo.getTodoID());
        flatpickr(".todo-due-date", {});
        toggleTodoModal();
    }

    return {
        renderTodoItemDetails,
        clearDetailsDisplay,
        toggleTodoModal
    };
})();

export default userInterfaceTodo;