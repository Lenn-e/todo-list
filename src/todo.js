let todoIndex = localStorage.todoIndex || 0;

const Todo = (text, dueDate, priority, note) => {
    let todoID = `todo-${localStorage.todoIndex = ++todoIndex}`;
    let checked = false;

    const getTodoID = () => todoID;

    // used for restoring from local storage
    /* const setTodoID = (ID) => todoID = ID; */

    const getText = () => text || '';

    const getDueDate = () => dueDate || '';

    const getPriority = () => priority || '';

    const getNote = () => note || '';

    const isChecked = () => checked;
    
    const toggleChecked = () => {
        checked = !checked;
    };

    const exportForLocalStorage = () => {
        return {
            todoID,
            text,
            dueDate,
            priority,
            note,
            checked
        };
    }

    return {
        getTodoID,
        getText,
        getDueDate,
        getPriority,
        getNote,
        isChecked,
        toggleChecked,
        exportForLocalStorage
    };
};

export default Todo