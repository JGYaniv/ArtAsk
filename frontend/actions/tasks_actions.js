import * as tasksApiUtil from '../utils/tasks_api_utils'
import {clearTaskForm} from  './task_form_actions'

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

export const receiveTasks = tasks => ({
    type: RECEIVE_TASK,
    tasks
})

export const receiveTasksErrors = errors => ({
    type: RECEIVE_TASKS_ERRORS,
    errors
})

export const clearTasksErrors = () => ({
    type: CLEAR_TASKS_ERRORS,
})

export const getTask = taskId => dispatch => (
    tasksApiUtil.getTask(taskId)
        .then(task => dispatch(receiveTask(task)))
)

export const getTasks = (userId) => dispatch => (
    tasksApiUtil.getTasks(userId)
        .then(tasks => dispatch(receiveTasks(tasks)))
)

export const postTask = task => dispatch => (
    tasksApiUtil.postTask(task)
        .then(task => dispatch(receiveTask(task)))
        .then(() => dispatch(clearTaskForm()))
        .fail(errors => {
            dispatch(receiveTasksErrors(errors.responseJSON))
        })
)

export const updateTask = task => dispatch => (
    tasksApiUtil.updateTask(task)
        .then(task => {
            dispatch(receiveTask(task))
        })
        .fail(errors => {
            dispatch(receiveTasksErrors(errors.responseJSON))
        })
)

export const deleteTask = taskId => dispatch => {
    tasksApiUtil.deleteTask(taskId)
        .then(() => dispatch(logout()))
}