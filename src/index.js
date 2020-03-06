import Todo from './todo';
import TodoContainer from './todo-container';
import organizer from './organizer';
import userInterface from './user-interface';
import displayController from './display-controller';
import localStorageFunctions from './local-storage';

import 'flatpickr/dist/themes/dark.css';
import '@fortawesome/fontawesome-free/js/all';

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
createTodoField.addEventListener('click', displayController.showTodoInputs);
projectTodoList.addEventListener('click', displayController.displayTodoDetails);
projectTodoList.addEventListener('click', displayController.checkTodo);
projectTodoList.addEventListener('click', displayController.deleteTodo);
todoDetails.addEventListener('click', displayController.deleteTodo);
todoDetails.addEventListener('click', displayController.checkTodo);
todoDetails.addEventListener('click', displayController.applyTodoChanges);
todoModal.addEventListener('click', displayController.closeTodoModal);

const initializeOrganizer = (() => {
    if(localStorage.projectList) {
        localStorageFunctions.restoreOrganizer();
        userInterface.renderContainer(organizer.getProjectContainers()[0]);
        userInterface.renderProjectList(organizer.getProjectContainers());
    } else {
        const defaultContainer = TodoContainer("Stuff I need to do");
        organizer.storeProjectContainer(defaultContainer)
        
        const todo = Todo("Decide to get stuff done", "2020-03-11", "low", "this is a note");
        todo.toggleChecked();
        defaultContainer.addTodo(todo);
        defaultContainer.addTodo(Todo(`Click on the <i class="fas fa-info-circle"></i> icon to expand details`, "2020-03-20", "medium", "this is a note too"));
        defaultContainer.addTodo(Todo("Check off items by clicking on the colored squares", "2020-04-15", "low", "hello from the other side"));
        defaultContainer.addTodo(Todo(`Delete items by clicking on the <i class="fas fa-trash-alt"></i> icon`, "2020-03-03", "high", "badumts"));
        defaultContainer.addTodo(Todo("Become a master of productivity", "2020-02-03", "high", "ripplee"));
    
        userInterface.renderContainer(defaultContainer);
        userInterface.renderProjectList([defaultContainer]);
    }
})();