import Todo from './todo';
import { TodoContainerTimePeriod } from './todo-container';
import organizer from './organizer';
import userInterface from './user-interface';
import displayController from './display-controller';

const projectListDisplay = document.querySelector(".project-list");
const createProjectBtn = document.querySelector(".create-project-btn");
const createTodoField = document.querySelector(".create-todo-field");
const projectTodoList = document.querySelector(".project-todo-list");

projectListDisplay.addEventListener('click', displayController.displayContainer);
createProjectBtn.addEventListener('click', displayController.createNewProject);
createTodoField.addEventListener('click', displayController.createNewTodo);
projectTodoList.addEventListener('click', displayController.displayTodoDetails);

organizer.initializeOrganizer(TodoContainerTimePeriod("Today", 1), TodoContainerTimePeriod("Next 7 days", 7));

organizer.getProjectContainer("project-0").addTodo(Todo("some task"));
organizer.getProjectContainer("project-0").addTodo(Todo("proj 0"));
organizer.getProjectContainer("project-0").addTodo(Todo("do it"));
organizer.getProjectContainer("project-1").addTodo(Todo("idk do something"));
organizer.getProjectContainer("project-1").addTodo(Todo("proj 1"));
organizer.getProjectContainer("project-1").addTodo(Todo("idk do shahahahaing"));
userInterface.renderProjectList(organizer.getProjectContainers());