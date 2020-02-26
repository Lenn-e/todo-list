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
window.org.getProjectContainer("project-1").addTodo(Todo("idk do something"));
window.org.getProjectContainer("project-1").addTodo(Todo("idk fasdfing"));
window.org.getProjectContainer("project-1").addTodo(Todo("idk do shahahahaing"));
userInterface.renderProjectMenu(window.org.getProjectContainers());