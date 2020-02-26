import Todo from './todo';
import {TodoContainer, TodoContainerTimePeriod} from './todo-container';
import organizer from './organizer';
import userInterface from './user-interface';

const projectListDisplay = document.querySelector(".project-list");

const controller = (() => {
    function displayContainer(event) {
        let container = event.target;
        container = organizer.getProjectContainer(event.target.id);
        userInterface.renderContainer(container);
    }

    return{
        displayContainer,
    };
})();

projectListDisplay.addEventListener('click', controller.displayContainer);


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
userInterface.renderProjectMenu(window.org.getProjectContainers());