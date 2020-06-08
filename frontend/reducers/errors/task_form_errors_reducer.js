import { 
    RECEIVE_TASK_FORM_ERRORS, 
    CLEAR_TASK_FORM_ERRORS, 
    RECEIVE_TASK_FORM_ERROR, 
    CLEAR_TASK_FORM_ERROR, 
    RECEIVE_TASK_FORM 
} from '../../actions/task_form_actions'

export default (initialState = [], action) => {
    Object.freeze(initialState)
    switch (action.type) {
        case RECEIVE_TASK_FORM_ERRORS:
            return action.errors
        case RECEIVE_TASK_FORM_ERROR:
            return Object.assign([], initialState, [action.errorType])
        case RECEIVE_TASK_FORM:
            return []
        case CLEAR_TASK_FORM_ERRORS:
            return [];
        case CLEAR_TASK_FORM_ERROR:
            let initialErrors = Object.assign([], initialState)
            let selectedErrors = []
            initialErrors.forEach(error => {
                if (error != action.errorType){ selectedErrors.push(error) }
            })
            return selectedErrors
        default:
            return initialState;
    }
}