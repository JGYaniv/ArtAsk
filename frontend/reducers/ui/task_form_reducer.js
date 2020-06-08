import { 
    SELECT_TASK_TYPE, 
    CLEAR_TASK_TYPE, 
    RECEIVE_DESCRIBE_FORM,
    UPDATE_DESCRIBE_FORM,
    RECEIVE_ARTIST_FORM,
    RECEIVE_TIME_FORM,
    RECEIVE_TASK_FORM,
    RECEIVE_FORM_STEP,
    RECEIVE_FOCUS_SECTION
} from '../../actions/task_form_actions'

const defaultState = {
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
        start_time: ""
    }
}

const storeState = state => window.localStorage.setItem("task_form", JSON.stringify(state))

export default (initialState = defaultState, action) => {
    Object.freeze(initialState)
    switch (action.type) {
        case SELECT_TASK_TYPE:
            let newState1 = Object.assign({}, initialState, {task_type_id: action.taskType.id})
            // storeState(newState)
            return newState1;
        case RECEIVE_DESCRIBE_FORM:
            let newState2 = Object.assign({}, initialState, {describe: action.describe})
            // storeState(newState)
            return newState2;
        case UPDATE_DESCRIBE_FORM:
            let newState3 = Object.assign({}, initialState)
            let changeKeys = Object.keys(action.describeAttributes)
            changeKeys.forEach(key => {
                newState3.describe[key] = action.describeAttributes[key]
            })
            // storeState(newState)
            return newState3;
        case RECEIVE_ARTIST_FORM:
            let newState4 = Object.assign({}, initialState, { select_artist: action.artist })
            // storeState(newState)
            return newState4;
        case RECEIVE_TIME_FORM:
            let newState5 = Object.assign({}, initialState, { select_time: action.time })
            // storeState(newState)
            return newState5;
        case RECEIVE_TASK_FORM:
            let newState6 = Object.assign({}, initialState, action.taskForm)
            return newState6;
        case RECEIVE_FORM_STEP:
            let newState7 = Object.assign({}, initialState, { form_step: action.formStep })
            // storeState(newState)
            return newState7;
        case RECEIVE_FOCUS_SECTION:
            let newState9 = Object.assign({}, initialState, { focus_section: action.focusSection })
            // storeState(newState)
            return newState9;
        case CLEAR_TASK_TYPE:
            let newState10 = Object.assign({}, initialState, { task_type_id: "" })
            // storeState(newState)
            return newState10;
        default:
            return initialState;
    }
}