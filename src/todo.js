const Todo = (content) => {
    let checked = false;

    const getContent = function() {
        return content;
    }

    const isChecked = function() {
        return checked;
    }
    
    const toggleChecked = function() {
        checked = !checked;
    }

    return {
        getContent,
        isChecked,
        toggleChecked,
    };
};

export default Todo