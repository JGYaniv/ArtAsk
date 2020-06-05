import { RECEIVE_TASK, RECEIVE_TASKS } from '../../actions/tasks_actions'

export default (initialState = {}, action) => {
    Object.freeze(initialState)
    switch (action.type) {
        case RECEIVE_TASK:
            return Object.assign({}, initialState, { [action.task.id]: action.task })
        case RECEIVE_TASKS:
            return Object.assign({}, initialState, action.tasks)
        default:
            return initialState;
    }
}