const projectListDisplay = document.querySelector(".project-list");

const userInterface = (() => {
    const createProjectMenuItem = (container) => {
        return `
        <li>
            ${container.getName()}
        </li>`;
    };

    const clearProjectList = () => {
        projectListDisplay.innerHTML = '';
    }

    const renderProjectMenu = (projectContainers) => {
        const html = projectContainers.map(container => {
            return createProjectMenuItem(container);
        }).join('');

        clearProjectList();
        projectListDisplay.innerHTML = html;
    };

    return {
        renderProjectMenu,
    };
})();

export default userInterface;