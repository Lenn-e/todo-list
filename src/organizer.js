import {TodoContainer, TodoContainerTimePeriod} from './todo-container';

const organizer = (() => {
    const todayContainer = TodoContainerTimePeriod("Today", 1);
    const nextWeekContainer = TodoContainerTimePeriod("Next 7 days", 7);
    const projectContainers = [todayContainer, nextWeekContainer];
    const currentContainer = todayContainer;

    const getTodayContainer = () => todayContainer;

    const getNextWeekContainer = () => nextWeekContainer;

    const getProjectContainer = (projectName) => projectContainers.find(project => project.name = projectName);

    const createProjectContainer = (projectName) => {
        projectContainers.push(TodoContainer(projectName));
    };
    
    const changeCurrentContainer = (container) => {
        currentContainer = container;
    };

    const getCurrentContainer = () => currentContainer;

    const getProjectContainers = () => projectContainers;

    return {
        getTodayContainer,
        getNextWeekContainer,
        getProjectContainer,
        createProjectContainer,
        changeCurrentContainer,
        getCurrentContainer,
        getProjectContainers
    }
})();

export default organizer;