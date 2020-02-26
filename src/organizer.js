import {TodoContainer, TodoContainerTimePeriod} from './todo-container';

const organizer = (() => {
    const todayContainer = TodoContainerTimePeriod("Today", 1);
    const nextWeekContainer = TodoContainerTimePeriod("Next 7 days", 7);
    const projectContainers = {};
    const currentContainer = todayContainer;

    const getTodayContainer = () => todayContainer;

    const getNextWeekContainer = () => nextWeekContainer;

    const getProjectContainer = (projectName) => projectContainers[projectName];

    const createProjectContainer = (projectName) => {
        projectContainers.projectName = TodoContainer(projectName);
    }

    const changeCurrentContainer = (container) => {
        currentContainer = container;
    }

    const getCurrentContainer = () => currentContainer;

    return {
        getTodayContainer,
        getNextWeekContainer,
        getProjectContainer,
        createProjectContainer,
        changeCurrentContainer,
        getCurrentContainer
    }
})();

export default organizer;