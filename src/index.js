import Todo from './todo';
import {TodoContainer, TodoContainerTimePeriod} from './todo-container';
import organizer from './organizer';
import userInterface from './user-interface';

const projectListDisplay = document.querySelector(".project-list");
const projectNameInput = document.querySelector(".project-name-input");
const createProjectBtn = document.querySelector(".create-project-btn");
const createTodoField = document.querySelector(".create-todo-field");

const controller = (() => {
    function displayContainer(event) {
        let container = event.target;
        container = organizer.getProjectContainer(event.target.id);
        userInterface.renderContainer(container);
    }

    function createNewProject(event) {
        const projectName = projectNameInput.value;
        const project = organizer.createProjectContainer(projectName);
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

    return{
        displayContainer,
        createNewProject,
        createNewTodo,
    };
})();

projectListDisplay.addEventListener('click', controller.displayContainer);
createProjectBtn.addEventListener('click', controller.createNewProject);
createTodoField.addEventListener('click', controller.createNewTodo);

window.org = organizer;
window.org.createProjectContainer("trip");
window.org.getProjectContainer("project-0").addTodo(Todo("some task"));
window.org.getProjectContainer("project-0").addTodo(Todo("proj 0"));
window.org.getProjectContainer("project-0").addTodo(Todo("do it"));
window.org.getProjectContainer("project-1").addTodo(Todo("idk do something"));
window.org.getProjectContainer("project-1").addTodo(Todo("proj 1"));
window.org.getProjectContainer("project-1").addTodo(Todo("idk do shahahahaing"));
window.org.getProjectContainer("project-2").addTodo(Todo("cook"));
window.org.getProjectContainer("project-2").addTodo(Todo("proj 2"));
window.org.getProjectContainer("project-2").addTodo(Todo("workout"));
userInterface.renderProjectList(window.org.getProjectContainers());