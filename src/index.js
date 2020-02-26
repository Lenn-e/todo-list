import Todo from './todo';
import {TodoContainer, TodoContainerTimePeriod} from './todo-container';
import organizer from './organizer';
import userInterface from './user-interface';

window.org = organizer;
window.org.createProjectContainer("trip");
userInterface.renderProjectMenu(window.org.getProjectContainers());