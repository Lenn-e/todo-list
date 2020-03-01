let projectIndex = 0;

const TodoContainer = (name) => {
    const projectID = `project-${projectIndex++}`;
    const todos = [];

    const getProjectID = () => {
        return projectID;
    }

    const getName = () => {
        return name;
    };

    const getTodos = () => {
        return todos;
    };

    const addTodo = (todo) => {
        todos.push(todo);
    };

    const removeTodo = (todoID) => {
        const index = todos.findIndex(todo => {
            return todo.getTodoID() === todoID;
        })

        todos.splice(index, 1);
    }

    return {
        getProjectID,
        getTodos,
        addTodo,
        getName,
        removeTodo
    };
};

export default TodoContainer;