let todoIndex = localStorage.todoIndex || 0;

const Todo = (text, dueDate, priority, note) => {
    const todoID = `todo-${localStorage.todoIndex = ++todoIndex}`;
    let checked = false;

    const getTodoID = () => todoID;

    const getText = () => text || '';

    const getDueDate = () => dueDate || '';

    const getPriority = () => priority || '';

    const getNote = () => note || '';

    const isChecked = () => checked;
    
    const toggleChecked = () => {
        checked = !checked;
    };

    return {
        getTodoID,
        getText,
        getDueDate,
        getPriority,
        getNote,
        isChecked,
        toggleChecked,
    };
};

export default Todo