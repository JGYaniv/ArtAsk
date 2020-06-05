export const SELECT_TASK_TYPE = 'SELECT_TASK_TYPE';
export const CLEAR_TASK_TYPE = 'CLEAR_TASK_TYPE';

export const selectTaskType = taskType => ({
    type: SELECT_TASK_TYPE,
    taskType
})

export const clearTaskType = () => ({
    type: CLEAR_TASK_TYPE
})