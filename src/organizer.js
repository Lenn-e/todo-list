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

    const findProjectContainingTodoID = (ID) => {
        // look at all todos from all containers and return the container that includes the given todo ID
        const temp = projectContainers.find(project => {
            return project.getTodos().some(todo => {
                return todo.getTodoID() === ID;
            });
        });
        return temp;
    };

    const getTodoByID = (ID) => {
        return findProjectContainingTodoID(ID).getTodos().find(todo => todo.getTodoID() === ID);
    };

    const deleteTodoByID = (ID) => {
        findProjectContainingTodoID(ID).removeTodo(ID);
    };

    return {
        initializeOrganizer,
        getProjectContainer,
        storeProjectContainer,
        getProjectContainers,
        getTodoByID,
        deleteTodoByID
    }
})();

export default organizer;