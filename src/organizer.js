const organizer = (() => {
    let todayContainer;
    let nextWeekContainer;
    let projectContainers;

    const initializeOrganizer = (today, nextWeek) => {
        todayContainer = today;
        nextWeekContainer = nextWeek;
        projectContainers = [todayContainer, nextWeekContainer];
    }
    
    const getTodayContainer = () => todayContainer;

    const getNextWeekContainer = () => nextWeekContainer;

    const getProjectContainer = (projectID) => projectContainers.find(project => project.getProjectID() === projectID);

    const storeProjectContainer = (project) => {
        projectContainers.push(project);
    };

    const getProjectContainers = () => projectContainers;

    return {
        initializeOrganizer,
        getTodayContainer,
        getNextWeekContainer,
        getProjectContainer,
        storeProjectContainer,
        getProjectContainers
    }
})();

export default organizer;