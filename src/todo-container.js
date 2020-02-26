const TodoContainer = (name) => {
    const todos = [];

    const getName = () => {
        return name;
    }

    const getTodos = () => {
        return todos;
    }

    const addTodo = (todo) => {
        todos.push(todo);
    }

    return {
        getTodos,
        addTodo,
        getName
    }
};

const TodoContainerTimePeriod = (name, timePeriod) => {
    const prototype = TodoContainer(name);

    const findTodosFromPeriod = () => {
        console.log(timePeriod);
    };

    return Object.assign({}, prototype, {findTodosFromPeriod});
}


export {TodoContainer, TodoContainerTimePeriod};