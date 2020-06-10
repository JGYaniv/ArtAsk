import { RECEIVE_TASK, RECEIVE_TASKS, REMOVE_TASK } from '../../actions/tasks_actions'

export default (initialState = {}, action) => {
    Object.freeze(initialState)
    switch (action.type) {
        case RECEIVE_TASK:
            return Object.assign({}, initialState, { [action.task.id]: action.task })
        case RECEIVE_TASKS:
            return Object.assign({}, initialState, action.tasks)
        case REMOVE_TASK:
            let copyState = Object.assign({}, initialState)
            const selects = {}
            Object.keys(copyState).forEach(taskId => {
                if (`${action.taskId}`!= taskId) {
                    selects[taskId] = copyState[taskId]
                }
            })
            return selects;
        default:
            return initialState;
    }
}