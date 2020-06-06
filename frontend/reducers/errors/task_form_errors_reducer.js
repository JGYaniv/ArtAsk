import { RECEIVE_TASK_FORM_ERRORS, CLEAR_TASK_FORM_ERRORS, RECEIVE_TASK_FORM } from '../../actions/task_form_actions'

export default (initialState = [], action) => {
    Object.freeze(initialState)
    switch (action.type) {
        case RECEIVE_TASK_FORM_ERRORS:
            return action.errors
        case RECEIVE_TASK_FORM:
            return []
        case CLEAR_TASK_FORM_ERRORS:
            return [];
        default:
            return initialState;
    }
}