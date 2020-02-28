const organizer = (() => {
    let defaultContainer;
    let projectContainers;

    const initializeOrganizer = (defaultCont) => {
        defaultContainer = defaultCont;
        projectContainers = [defaultContainer];
    }

    const getProjectContainer = (projectID) => projectContainers.find(project => project.getProjectID() === projectID);

    const storeProjectContainer = (project) => {
        projectContainers.push(project);
    };

    const getProjectContainers = () => projectContainers;

    const getTodoByID = (ID) => {
        let todo;
        projectContainers.some(project => {
            const tempTodo = project.getTodos().find(todo => todo.getTodoID() === ID);
            if(tempTodo) {
                todo = tempTodo;
                return true;
            }
        });

        return todo;
    };

    return {
        initializeOrganizer,
        getProjectContainer,
        storeProjectContainer,
        getProjectContainers,
        getTodoByID
    }
})();

export default organizer;