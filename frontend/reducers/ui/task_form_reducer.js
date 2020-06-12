import { 
    SELECT_TASK_TYPE, 
    CLEAR_TASK_TYPE, 
    RECEIVE_DESCRIBE_FORM,
    UPDATE_DESCRIBE_FORM,
    RECEIVE_ARTIST_FORM,
    RECEIVE_TIME_FORM,
    RECEIVE_TASK_FORM,
    RECEIVE_FORM_STEP,
    RECEIVE_FOCUS_SECTION,
    CLEAR_TASK_FORM
} from '../../actions/task_form_actions'

import { RECEIVE_TASK } from '../../actions/tasks_actions'

const emptyState = {
    task_type_id: "",
    form_step: "",
    focus_section: "",
    describe: {
        interest: "",
        street_address: "",
        apartment_number: "",
        size: "",
        revisions: "",
        details: ""
    },
    select_artist: {
        artist_id: ""
    },
    select_time: {
        start_date: ""
    }
}


export default (initialState = {}, action) => {
    Object.freeze(initialState)
    Object.freeze(emptyState)

    let newState;
    switch (action.type) {
        case SELECT_TASK_TYPE:
            let defaultCopy = Object.assign({}, emptyState)
            newState = Object.assign({}, defaultCopy, { task_type_id: action.taskType.id })
            window.localStorage.setItem("task_form", JSON.stringify(newState))
            return newState;
        case RECEIVE_DESCRIBE_FORM:
            return Object.assign({}, initialState, {describe: action.describe});
        case UPDATE_DESCRIBE_FORM:
            newState = Object.assign({}, initialState)
            let changeKeys = Object.keys(action.describeAttributes)
            changeKeys.forEach(key => {
                newState.describe[key] = action.describeAttributes[key]
            })
            return newState;
        case RECEIVE_ARTIST_FORM:
            newState = Object.assign({}, initialState, { select_artist: action.artist })
            return newState;
        case RECEIVE_TIME_FORM:
            return Object.assign({}, initialState, { select_time: action.time });
        case RECEIVE_TASK_FORM:
            return Object.assign({}, initialState, action.taskForm);
        case RECEIVE_FORM_STEP:
            return Object.assign({}, initialState, { form_step: action.formStep });
        case RECEIVE_FOCUS_SECTION:
            return Object.assign({}, initialState, { focus_section: action.focusSection });
        case CLEAR_TASK_TYPE:
            return Object.assign({}, initialState, { task_type_id: "" });
        case CLEAR_TASK_FORM:
            window.localStorage.setItem("task_form", "")
            return {};
        case RECEIVE_TASK:
            window.localStorage.setItem("task_form", "")
            return {};
        default:
            return initialState;
    }
}