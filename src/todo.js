let todoIndex = 0;

const Todo = (content) => {
    const todoID = `todo-${todoIndex++}`;
    let checked = false;

    const getTodoID = () => {
        return todoID;
    }

    const getContent = function() {
        return content;
    };

    const isChecked = function() {
        return checked;
    };
    
    const toggleChecked = function() {
        checked = !checked;
    };

    return {
        getTodoID,
        getContent,
        isChecked,
        toggleChecked,
    };
};

export default Todo