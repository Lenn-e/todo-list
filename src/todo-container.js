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

const TodoContainerTimePeriod = (name, timePeriod) => {
    const prototype = TodoContainer(name);

    const findTodosFromPeriod = () => {
        console.log(timePeriod);
    };

    return Object.assign({}, prototype, {findTodosFromPeriod});
}


export {TodoContainer, TodoContainerTimePeriod};