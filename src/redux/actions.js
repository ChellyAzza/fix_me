import { ADD_TASK, DELETE_TASK, DONE_TASK } from "./actiontypes";

export const deletetask = (id) => {
    return {
        type: DELETE_TASK,
        payload: id,
    };
};
export const addtask = (newtask) => {
    return {
        type: ADD_TASK,
        payload: newtask,
    };
};
export const donetask = (id) => {
    return {
        type: DONE_TASK,
        payload: id,
    };
};