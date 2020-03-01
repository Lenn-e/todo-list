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
        const projectName = projectNameInput.value;
        const project = TodoContainer(projectName);
        organizer.storeProjectContainer(project);
        userInterface.renderProjectListEntry(project);
    }

    function createNewTodo(event) {
        if(event.target.classList.contains("create-todo-btn")) {
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
        if(todoItem.classList.contains("todo-item")) {
            const todoID = todoItem.getAttribute("data-todoid");
            const todo = organizer.getTodoByID(todoID);
            userInterface.renderTodoItemDetails(todo);
        }
    }

    function deleteTodo(event) {
        if(event.target.id === "delete-todo-button") {
            const todoID = this.getAttribute("data-todoid");
            organizer.deleteTodoByID(todoID);
            userInterface.removeTodoItem(todoID);
            userInterface.clearDetailsDisplay();
        }
    }

    return{
        displayContainer,
        createNewProject,
        createNewTodo,
        displayTodoDetails,
        deleteTodo
    };
})();

export default displayController;