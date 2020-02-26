const projectListDisplay = document.querySelector(".project-list");
const todosListDisplay = document.querySelector(".project-todos");

const userInterface = (() => {
    const createProjectMenuItemHtml = (container) => {
        return `
        <li id="${container.getProjectID()}">
            ${container.getName()}
        </li>`;
    };

    const clearListDisplay = (listDisplay) => {
        listDisplay.innerHTML = '';
    }

    const renderProjectMenu = (projectContainers) => {
        const html = projectContainers.map(container => {
            return createProjectMenuItemHtml(container);
        }).join('');

        clearListDisplay(projectListDisplay);
        projectListDisplay.innerHTML = html;
    };

    const createTodoItemHtml = (todo) => {
        return `
        <li>
            ${todo.getContent()}
        </li>
        `
    }

    const renderContainer = (container) => {
        const html = container.getTodos().map(todo => {
            return createTodoItemHtml(todo);
        }).join('');
        clearListDisplay(todosListDisplay);
        todosListDisplay.innerHTML = html;
    }

    return {
        renderProjectMenu,
        renderContainer
    };
})();

export default userInterface;