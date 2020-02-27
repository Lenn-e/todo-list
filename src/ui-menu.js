const userInterfaceMenu = (() => {
    const projectListDisplay = document.querySelector(".project-list");

    const createProjectListItemHtml = (container) => {
        return `
        <li id="${container.getProjectID()}">
            ${container.getName()}
        </li>`;
    };

    const renderProjectList = (projectContainers) => {
        const html = projectContainers.map(container => {
            return createProjectListItemHtml(container);
        }).join('');

        projectListDisplay.innerHTML = html;
    };

    const renderProjectListEntry = (container) => {
        const listItem = createProjectListItemHtml(container);
        projectListDisplay.innerHTML += listItem;
    }

    return {
        renderProjectList,
        renderProjectListEntry
    };
})();

export default userInterfaceMenu;