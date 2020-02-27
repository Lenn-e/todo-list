import {TodoContainer, TodoContainerTimePeriod} from './todo-container';

const organizer = (() => {
    const todayContainer = TodoContainerTimePeriod("Today", 1);
    const nextWeekContainer = TodoContainerTimePeriod("Next 7 days", 7);
    const projectContainers = [todayContainer, nextWeekContainer];

    const getTodayContainer = () => todayContainer;

    const getNextWeekContainer = () => nextWeekContainer;

    const getProjectContainer = (projectID) => projectContainers.find(project => project.getProjectID() === projectID);

    const createProjectContainer = (projectName) => {
        const project = TodoContainer(projectName);
        projectContainers.push(project);

        return project;
    };

    const getProjectContainers = () => projectContainers;

    return {
        getTodayContainer,
        getNextWeekContainer,
        getProjectContainer,
        createProjectContainer,
        getProjectContainers
    }
})();

export default organizer;