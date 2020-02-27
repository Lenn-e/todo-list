import userInterface from './user-interface';
import organizer from './organizer';
import { TodoContainer } from './todo-container';
import Todo from './todo';

const displayController = (() => {
    const projectNameInput = document.querySelector(".project-name-input");

    function displayContainer(event) {
        let container = event.target;
        container = organizer.getProjectContainer(event.target.id);
        userInterface.renderContainer(container);
    }

    function createNewProject(event) {
        const projectName = projectNameInput.value;
        const project = TodoContainer(projectName);
        organizer.storeProjectContainer(project);
        userInterface.renderProjectListEntry(project);
    }

    function createNewTodo(event) {
        if(event.target.classList.contains("create-todo-btn")) {
            const projectID = this.getAttribute("data-projectid");
            const todoContent = this.querySelector("input").value;
            
            const currentProject = organizer.getProjectContainer(projectID);
            const todo = Todo(todoContent);
            currentProject.addTodo(todo);

            userInterface.renderTodoItem(todo);
        }
    }

    function displayTodoDetails(event) {
        const todoItem = event.target;
        if(todoItem.classList.contains("todo-item")) {
            const todoID = todoItem.getAttribute("data-todoid");
            const todo = organizer.getTodoByID(todoID);
            userInterface.renderTodoItemDetails(todo);
        }
    }

    return{
        displayContainer,
        createNewProject,
        createNewTodo,
        displayTodoDetails,
    };
})();

export default displayController;