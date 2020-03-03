import { compareAsc, parseISO } from "date-fns";

const dateFunctions = (() => {

    const convertToDateObj = (stringDate) => {
        return parseISO(stringDate, "yyyy-MM-dd", new Date());
    }

    const isDue = (todoDate) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        todoDate = convertToDateObj(todoDate);
        if(compareAsc(today, todoDate) < 0) {
            return false;
        }
        return true;
    }

    return {
        isDue
    };
})();

export default dateFunctions;