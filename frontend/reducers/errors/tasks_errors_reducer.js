import { RECEIVE_TASKS_ERRORS, CLEAR_TASKS_ERRORS, RECEIVE_TASK } from '../../actions/tasks_actions'

export default (initialState = [], action) => {
    Object.freeze(initialState)
    switch (action.type) {
        case RECEIVE_TASKS_ERRORS:
            console.log(action.errors)
            return action.errors || [];
        case RECEIVE_TASK:
            return [];
        case CLEAR_TASKS_ERRORS:
            return [];
        default:
            return initialState;
    }
}