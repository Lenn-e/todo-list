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

    return {
        getProjectID,
        getTodos,
        addTodo,
        getName
    };
};

export default TodoContainer;