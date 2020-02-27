import userInterfaceMenu from './ui-menu';
import userInterfaceContainer from './ui-container';

const userInterface = (() => {
    return Object.assign(
        {},
        userInterfaceMenu,
        userInterfaceContainer
    );
})();

export default userInterface;