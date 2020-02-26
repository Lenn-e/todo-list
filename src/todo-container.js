const TodoContainer = () => {
    const todos = [];

    const getTodos = () => {
        return todos;
    }

    const addTodo = (todo) => {
        todos.push(todo);
    }

    return {
        getTodos,
        addTodo
    }
};

const TodoContainerTimePeriod = (timePeriod) => {
    const prototype = TodoContainer();

    const findTodosFromPeriod = () => {
        console.log(timePeriod);
    };

    return Object.assign({}, prototype, {findTodosFromPeriod});
}


export {TodoContainer, TodoContainerTimePeriod};