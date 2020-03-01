import Todo from './todo';
import TodoContainer from './todo-container';
import organizer from './organizer';
import userInterface from './user-interface';
import displayController from './display-controller';

import 'flatpickr/dist/flatpickr.min.css';

const projectListDisplay = document.querySelector(".project-list");
const createProjectBtn = document.querySelector(".create-project-btn");
const createTodoField = document.querySelector(".create-todo-field");
const projectTodoList = document.querySelector(".project-todo-list");

projectListDisplay.addEventListener('click', displayController.displayContainer);
createProjectBtn.addEventListener('click', displayController.createNewProject);
createTodoField.addEventListener('click', displayController.createNewTodo);
projectTodoList.addEventListener('click', displayController.displayTodoDetails);

organizer.initializeOrganizer(TodoContainer("Stuff I need to do"));

organizer.getProjectContainer("project-0").addTodo(Todo("some task", "tomorrow", "low", "this is a note"));
organizer.getProjectContainer("project-0").addTodo(Todo("proj 0", "today", "medium", "this is a note too"));
organizer.getProjectContainer("project-0").addTodo(Todo("do it", "in a week", "low", "hello from the other side"));
userInterface.renderProjectList(organizer.getProjectContainers());