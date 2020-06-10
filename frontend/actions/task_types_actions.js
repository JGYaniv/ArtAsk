import * as taskTypesApiUtils from '../utils/task_types_api_utils'
import {receiveUsers} from './users_actions'
import {receiveReviews} from './reviews_actions'

export const RECEIVE_TASK_TYPES = "RECEIVE_TASK_TYPES"
export const RECEIVE_TASK_TYPE = "RECEIVE_TASK_TYPE"

export const receiveTaskTypes = (taskTypes) => ({
    type: RECEIVE_TASK_TYPES,
    taskTypes
})

export const receiveTaskType = (res) => ({
    type: RECEIVE_TASK_TYPE,
    ...res
})

export const getTaskTypes = () => dispatch => {
    taskTypesApiUtils.getTaskTypes()
        .then(taskTypes => {
            dispatch(receiveTaskTypes(taskTypes))})
}

export const getTaskType = taskTypeId => dispatch => (
    taskTypesApiUtils.getTaskType(taskTypeId)
        .then(res => dispatch(receiveTaskType(res)))
)

export const getTaskTypeArtists = taskTypeId => dispatch => (
    taskTypesApiUtils.getTaskTypeArtists(taskTypeId)
        .then(res => {
            dispatch(receiveReviews(res))
        })
)

// export const getTaskTypeReviews = taskTypeId => dispatch => {
//     return taskTypesApiUtils.getTaskTypeReviews(taskTypeId)
//         .then(reviews => dispatch(receiveReviews(reviews)))
// }