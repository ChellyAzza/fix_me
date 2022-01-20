import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "./actiontypes";

const init = {
    tasks: [
        { id: Math.random(), action: "wake up", isDone: true },
        { id: Math.random(), action: "go out", isDone: true },
    ],
};

const reducer = (state = init, { type, payload }) => {
    switch (type) {
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((el) => el.id !== payload),
            };
        case ADD_TASK:
            return {
                ...state,
                tasks: state.tasks.push(payload),
            };
        case DONE_TASK:
            return {
                ...state,
                tasks: state.tasks.map((el) =>
                    el.id === payload ? {...el, isDone: !el.isDone } : el
                ),
            };
        default:
            return state;
    }
};
export default reducer;