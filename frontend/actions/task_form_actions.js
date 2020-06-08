export const SELECT_TASK_TYPE = 'SELECT_TASK_TYPE';
export const CLEAR_TASK_TYPE = 'CLEAR_TASK_TYPE';
export const RECEIVE_DESCRIBE_FORM = 'UPDATE_DESCRIBE_FORM';
export const RECEIVE_ARTIST_FORM = 'RECEIVE_ARTIST_FORM';
export const RECEIVE_TIME_FORM = 'RECEIVE_TIME_FORM';
export const RECEIVE_TASK_FORM = 'RECEIVE_TASK_FORM';
export const RECEIVE_TASK_FORM_ERRORS = 'RECEIVE_TASK_FORM_ERRORS'
export const CLEAR_TASK_FORM_ERRORS = 'CLEAR_TASK_FORM_ERRORS'
export const RECEIVE_FORM_STEP = 'RECEIVE_FORM_STEP'

export const selectTaskType = taskType => ({
    type: SELECT_TASK_TYPE,
    taskType
})

export const receiveTaskForm = taskForm => {
    return {
    type: RECEIVE_TASK_FORM,
    taskForm
}}

export const receiveFormStep = formStep => {
    return {
    type: RECEIVE_FORM_STEP,
        formStep
}}

export const receiveDescribeForm = describe => {
    return {
    type: RECEIVE_DESCRIBE_FORM,
    describe
}}

export const receiveArtistForm = artist => ({
    type: RECEIVE_ARTIST_FORM,
    artist
})

export const receiveTimeForm = time => ({
    type: RECEIVE_TIME_FORM,
    time
})

export const clearTaskType = () => ({
    type: CLEAR_TASK_TYPE
})

export const receiveTaskFormErrors = errors => ({
    type: RECEIVE_TASK_FORM_ERRORS,
    errors
})

export const clearTaskFormErrors = () => ({
    type: CLEAR_TASK_FORM_ERRORS
})