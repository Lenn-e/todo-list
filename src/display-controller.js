import userInterface from './user-interface';
import organizer from './organizer';
import TodoContainer from './todo-container';
import Todo from './todo';
import localStorageFunctions from './local-storage';

const helperFunctions = (() => {
    const extractNewTodoInputs = (createTodoContainer) => {
        const todo = {};
        
        todo.todoName = createTodoContainer.querySelector("#todo-name").value;
        todo.todoDueDate = createTodoContainer.querySelector("#todo-due-date").value;
        todo.todoPriority = createTodoContainer.querySelector("#todo-priority").value;
        todo.todoNote = createTodoContainer.querySelector("#todo-note").value;

        return todo;
    }

    const saveTodo = (todo, currentProjectID) => {
        const currentProject = organizer.getProjectContainer(currentProjectID);
        currentProject.addTodo(todo);
    }

    const checkForEmptyValues = (valuesObj) => {
        return Object.keys(valuesObj).some(key => {
            if(!valuesObj[key]) {
                alert("Please choose a valid " + key);
                return true;
            }
        });
    }

    const extractTodoChanges = (todoDetailsContainer) => {
        const newValues = {};
        newValues.dueDate = todoDetailsContainer.querySelector(".todo-due-date").value;
        newValues.note = todoDetailsContainer.querySelector(".todo-note").value;
        return newValues;
    }

    const saveTodoChanges = (todo, newValues) => {
        Object.keys(newValues).forEach(key => {
            if(newValues[key]) {
                todo[`set${key.charAt(0).toUpperCase() + key.slice(1)}`](newValues[key]);
            }
        });
    }

    const refreshCurrentProject = () => {
        const projectID = document.querySelector(".create-todo-field").getAttribute('data-projectid');
        const container = organizer.getProjectContainer(projectID);
        userInterface.renderContainer(container);
    }

    return {
        extractNewTodoInputs,
        saveTodo,
        checkForEmptyValues,
        extractTodoChanges,
        saveTodoChanges,
        refreshCurrentProject,
        
    };
})();

const displayController = (() => {
    function displayContainer(event) {
        let container = event.target;
        container = organizer.getProjectContainer(event.target.id);
        userInterface.renderContainer(container);
    }

    function createNewProject(event) {
        if(event.target.classList.contains("create-project-btn") || event.code == 'Enter') {
            const projectNameInput = document.querySelector(".project-name-input");
            const projectName = projectNameInput.value;
            if(helperFunctions.checkForEmptyValues({projectName})) {
                return;
            }
            const project = TodoContainer(projectName);
            organizer.storeProjectContainer(project);
            userInterface.renderProjectListEntry(project);
            localStorageFunctions.saveProjectListToLS();
        }
    }

    function createNewTodo(event) {
        if(event.target.classList.contains("create-todo-btn") || event.code == 'Enter') {
            // get inputs from DOM and create new todo
            let todo = helperFunctions.extractNewTodoInputs(this);
            if(helperFunctions.checkForEmptyValues(todo)) {
                return;
            }
            todo = Todo(...Object.values(todo));
            // store it into the currently open project
            helperFunctions.saveTodo(todo, this.getAttribute("data-projectid"));
            // add it to the list display
            userInterface.renderTodoItem(todo);
            localStorageFunctions.saveProjectListToLS();
        }
    }

    function displayTodoDetails(event) {
        const todoItem = event.target;
        if(todoItem.classList.contains("todo-item") || todoItem.classList.contains("todo-item-name")) {
            let todoID;
            if(todoItem.classList.contains("todo-item")) {
                todoID = todoItem.getAttribute("data-todoid");
            } else {
                todoID = todoItem.parentNode.getAttribute("data-todoid");
            }
            const todo = organizer.getTodoByID(todoID);
            userInterface.renderTodoItemDetails(todo);
        }
        event.stopPropagation();
    }

    function deleteTodo(event) {
        if(event.target.id === "delete-todo-button") {
            const todoID = this.getAttribute("data-todoid");
            organizer.deleteTodoByID(todoID);
            userInterface.removeTodoItem(todoID);
            userInterface.toggleTodoModal();
            localStorageFunctions.saveProjectListToLS();
        }
    }

    function applyTodoChanges(event) {
        if(event.target.id === "change-todo-button") {
            const todoID = this.getAttribute("data-todoid");
            const todo = organizer.getTodoByID(todoID);
            const newValues = helperFunctions.extractTodoChanges(this);
            helperFunctions.saveTodoChanges(todo, newValues);
            helperFunctions.refreshCurrentProject();
            userInterface.toggleTodoModal();
            localStorageFunctions.saveProjectListToLS();
        }
    }
    
    function closeTodoModal(event) {
        if(event.target.classList.contains("todo-modal") || event.target.id == "close-todo-modal-btn") {
            userInterface.toggleTodoModal();
        }
    }

    function checkTodo(event) {
        const checkbox = event.target;
        if(checkbox.classList.contains("checkbox")) {
            const todoID = checkbox.parentNode.getAttribute("data-todoid")
            userInterface.checkTodo(todoID);
            organizer.getTodoByID(todoID).toggleChecked();
            localStorageFunctions.saveProjectListToLS();
        }
        
    }

    function showTodoInputs(event) {
        if(event.target.id == "todo-name") {
            // add border and background to name input field
            // remove display none class from date, priority and note inputs
            this.querySelectorAll(".todo-input").forEach(input => input.classList.add("active"));
        }
        event.stopPropagation();
    }

    function hideTodoInputs(event) {
        this.querySelectorAll(".todo-input").forEach(input => input.classList.remove("active"));
    }

    return{
        displayContainer,
        createNewProject,
        createNewTodo,
        displayTodoDetails,
        deleteTodo,
        applyTodoChanges,
        closeTodoModal,
        checkTodo,
        showTodoInputs,
        hideTodoInputs
    };
})();

export default displayController;