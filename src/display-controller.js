import userInterface from './user-interface';
import organizer from './organizer';
import TodoContainer from './todo-container';
import Todo from './todo';

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

    return {
        extractNewTodoInputs,
        saveTodo
    };
})();

const displayController = (() => {
    const projectNameInput = document.querySelector(".project-name-input");

    function displayContainer(event) {
        let container = event.target;
        container = organizer.getProjectContainer(event.target.id);
        userInterface.renderContainer(container);
    }

    function createNewProject(event) {
        if(event.target.classList.contains("create-project-btn") || event.code == 'Enter') {
            const projectName = projectNameInput.value;
            const project = TodoContainer(projectName);
            organizer.storeProjectContainer(project);
            userInterface.renderProjectListEntry(project);
        }
    }

    function createNewTodo(event) {
        if(event.target.classList.contains("create-todo-btn") || event.code == 'Enter') {
            // get inputs from DOM and create new todo
            let todo = helperFunctions.extractNewTodoInputs(this);
            todo = Todo(...Object.values(todo));
            // store it into the currently open project
            helperFunctions.saveTodo(todo, this.getAttribute("data-projectid"));
            // add it to the list display
            userInterface.renderTodoItem(todo);
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
    }

    function deleteTodo(event) {
        if(event.target.id === "delete-todo-button") {
            const todoID = this.getAttribute("data-todoid");
            organizer.deleteTodoByID(todoID);
            userInterface.removeTodoItem(todoID);
            userInterface.toggleTodoModal();
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
        }
    }

    return{
        displayContainer,
        createNewProject,
        createNewTodo,
        displayTodoDetails,
        deleteTodo,
        closeTodoModal,
        checkTodo
    };
})();

export default displayController;