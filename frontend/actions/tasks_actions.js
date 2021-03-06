import * as tasksApiUtil from '../utils/tasks_api_utils'
import {clearTaskForm} from  './task_form_actions'
import {receiveUsers} from './users_actions'
import { openModal} from './modal_actions'
import { taskToReviewForm } from './reviews_actions'
export const REMOVE_TASK = 'REMOVE_TASK';
export const RECEIVE_TASK = 'RECEIVE_TASK';
export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const RECEIVE_TASKS_ERRORS = 'RECEIVE_TASKS_ERRORS';
export const CLEAR_TASKS_ERRORS = 'CLEAR_TASK_ERRORS';

export const receiveTask = task => {
    return ({
        type: RECEIVE_TASK,
        task: task
    })
}

export const receiveTasks = res => {
    return {
    type: RECEIVE_TASKS,
    ...res
}}

export const receiveTasksErrors = errors => ({
    type: RECEIVE_TASKS_ERRORS,
    errors
})

export const removeTask = taskId => {
    return {
    type: REMOVE_TASK,
    taskId
}}

export const clearTasksErrors = () => ({
    type: CLEAR_TASKS_ERRORS,
})

export const getTask = taskId => dispatch => (
    tasksApiUtil.getTask(taskId)
        .then(task => dispatch(receiveTask(task)))
)

export const getTasks = (userId) => dispatch => (
    tasksApiUtil.getTasks(userId)
        .then(res => dispatch(receiveTasks(res)))
)

export const postTask = task => dispatch => (
    tasksApiUtil.postTask(task)
        .then(task => dispatch(receiveTask(task)))
        .then(() => {
            return dispatch(clearTaskForm())})
        .fail(errors => {
            dispatch(receiveTasksErrors(errors.responseJSON))
        })
)

export const updateTask = task => dispatch => (
    tasksApiUtil.updateTask(task)
        .then(task => {
            dispatch(receiveTask(task))
        })
        .then(() => dispatch(taskToReviewForm(task)))
        .then(() => dispatch(openModal("reviewTask")))
        .fail(errors => {
            dispatch(receiveTasksErrors(errors.responseJSON))
        })
)

export const deleteTask = taskId => dispatch => {
    return tasksApiUtil.deleteTask(taskId)
        .then(() => dispatch(removeTask(taskId)))
}