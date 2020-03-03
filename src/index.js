import Todo from './todo';
import TodoContainer from './todo-container';
import organizer from './organizer';
import userInterface from './user-interface';
import displayController from './display-controller';
import localStorageFunctions from './local-storage';

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
    if(localStorage.projectList) {
        localStorageFunctions.restoreOrganizer();
        userInterface.renderContainer(organizer.getProjectContainers()[0]);
        userInterface.renderProjectList(organizer.getProjectContainers());
    } else {
        const defaultContainer = TodoContainer("Stuff I need to do");
        organizer.storeProjectContainer(defaultContainer)
        
        const todo = Todo("some task", "2020-03-11", "low", "this is a note");
        todo.toggleChecked();
        defaultContainer.addTodo(todo);
        defaultContainer.addTodo(Todo("proj 0", "2020-03-20", "medium", "this is a note too"));
        defaultContainer.addTodo(Todo("do it", "2020-04-15", "low", "hello from the other side"));
        defaultContainer.addTodo(Todo("hehe", "2020-03-03", "high", "badumts"));
        defaultContainer.addTodo(Todo("oops", "2020-02-03", "high", "ripple"));
    
        userInterface.renderContainer(defaultContainer);
        userInterface.renderProjectList([defaultContainer]);
    }
})();