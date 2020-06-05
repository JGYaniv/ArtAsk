import { SELECT_TASK_TYPE, CLEAR_TASK_TYPE } from '../../actions/task_form_actions'

export default (initialState = {}, action) => {
    Object.freeze(initialState)
    switch (action.type) {
        case SELECT_TASK_TYPE:
            return {task_type_id: action.taskType.id}
        case CLEAR_TASK_TYPE:
            return {}
        default:
            return initialState;
    }
}