import Todo from './todo';
import TodoContainer from './todo-container';
import organizer from './organizer';
import userInterface from './user-interface';
import displayController from './display-controller';

import 'flatpickr/dist/flatpickr.min.css';

const projectListDisplay = document.querySelector(".project-list");
const createProjectBtn = document.querySelector(".create-project-btn");
const projectNameInput = document.querySelector(".project-name-input");
const createTodoField = document.querySelector(".create-todo-field");
const projectTodoList = document.querySelector(".project-todo-list");
const todoDetails = document.querySelector(".todo-details");
const todoModal = document.querySelector(".todo-modal");

projectListDisplay.addEventListener('click', displayController.displayContainer);
createProjectBtn.addEventListener('click', displayController.createNewProject);
projectNameInput.addEventListener('keydown', displayController.createNewProject);
createTodoField.addEventListener('click', displayController.createNewTodo);
createTodoField.addEventListener('keydown', displayController.createNewTodo);
projectTodoList.addEventListener('click', displayController.displayTodoDetails);
projectTodoList.addEventListener('click', displayController.checkTodo);
todoDetails.addEventListener('click', displayController.deleteTodo);
todoModal.addEventListener('click', displayController.closeTodoModal);

const initializeOrganizer = (() => {
    const defaultContainer = TodoContainer("Stuff I need to do");
    organizer.storeProjectContainer(defaultContainer)
    
    const todo = Todo("some task", "tomorrow", "low", "this is a note");
    todo.toggleChecked();
    defaultContainer.addTodo(todo);
    defaultContainer.addTodo(Todo("proj 0", "today", "medium", "this is a note too"));
    defaultContainer.addTodo(Todo("do it", "in a week", "low", "hello from the other side"));

    userInterface.renderContainer(defaultContainer);
    userInterface.renderProjectList([defaultContainer]);
})();
