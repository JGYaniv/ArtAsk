import * as taskTypesApiUtils from '../utils/task_types_api_utils'

export const RECEIVE_TASK_TYPES = "RECEIVE_TASK_TYPES"
export const RECEIVE_TASK_TYPE = "RECEIVE_TASK_TYPE"

export const receiveTaskTypes = (taskTypes) => ({
    type: RECEIVE_TASK_TYPES,
    taskTypes
})

export const receiveTaskType = (taskType) => ({
    type: RECEIVE_TASK_TYPE,
    taskType
})

export const getTaskTypes = () => dispatch => {
    taskTypesApiUtils.getTaskTypes()
        .then(taskTypes => {
            dispatch(receiveTaskTypes(taskTypes))})
}

export const getTaskType = taskTypeId => dispatch => (
    taskTypesApiUtils.getTaskType(taskTypeId)
        .then(taskType => dispatch(receiveTaskType(taskType)))
)