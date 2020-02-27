const projectListDisplay = document.querySelector(".project-list");
const todosListDisplay = document.querySelector(".project-todos");
const createTodoField = document.querySelector(".create-todo-field");

const userInterface = (() => {
    const createProjectListItemHtml = (container) => {
        return `
        <li id="${container.getProjectID()}">
            ${container.getName()}
        </li>`;
    };

    const renderProjectList = (projectContainers) => {
        const html = projectContainers.map(container => {
            return createProjectListItemHtml(container);
        }).join('');

        projectListDisplay.innerHTML = html;
    };

    const createTodoItemHtml = (todo) => {
        return `
        <li>
            ${todo.getContent()}
        </li>
        `
    }

    const createTodoInputField = (container) => {
        const html = `
            <span class="create-todo-btn">+</span>
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
        todosListDisplay.innerHTML = html;
    }

    const renderProjectListEntry = (container) => {
        const listItem = createProjectListItemHtml(container);
        projectListDisplay.innerHTML += listItem;
    }

    const renderTodoItem = (todo) => {
        const todoItemHtml = createTodoItemHtml(todo);
        todosListDisplay.innerHTML += todoItemHtml;
    } 

    return {
        renderProjectList,
        renderContainer,
        renderProjectListEntry,
        renderTodoItem
    };
})();

export default userInterface;