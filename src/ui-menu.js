const userInterfaceMenu = (() => {
    const projectListDisplay = document.querySelector(".project-list");

    const createProjectListItemHtml = (container) => {
        return `
        <li class="project-list-item clickable" id="${container.getProjectID()}">
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

    const highlightProjectItem = (containerID) => {
        projectListDisplay.childNodes.forEach(projectItem => {
            // ignore text nodes (type = 3)
            if(projectItem.nodeType != 3) {
                if(projectItem.id === containerID) {
                    projectItem.classList.add("selected");
                } else {
                    projectItem.classList.remove("selected");
                }
            }
        });
    }

    return {
        renderProjectList,
        renderProjectListEntry,
        highlightProjectItem
    };
})();

export default userInterfaceMenu;