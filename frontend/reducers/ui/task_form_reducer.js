import { 
    SELECT_TASK_TYPE, 
    CLEAR_TASK_TYPE, 
    RECEIVE_DESCRIBE_FORM,
    RECEIVE_ARTIST_FORM,
    RECEIVE_TIME_FORM
} from '../../actions/task_form_actions'

const defaultState = {
    task_type_id: "",
    form_step: "",
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
        start_date: "",
        end_date: ""
    }
}

export default (initialState = defaultState, action) => {
    Object.freeze(initialState)
    switch (action.type) {
        case SELECT_TASK_TYPE:
            return Object.assign({}, initialState, {task_type_id: action.taskType.id})
        case RECEIVE_DESCRIBE_FORM:
            debugger
            return Object.assign({}, initialState, {describe: action.describe})
        case RECEIVE_ARTIST_FORM:
            return Object.assign({}, initialState, {select_artist: action.artist})
        case RECEIVE_TIME_FORM:
            return Object.assign({}, initialState, {select_time: action.time})
        case CLEAR_TASK_TYPE:
            return {}
        default:
            return initialState;
    }
}