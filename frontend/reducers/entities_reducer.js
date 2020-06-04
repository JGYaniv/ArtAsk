import {combineReducers} from 'redux'
import usersReducer from './users_reducer'
import taskTypesReducer from './task_types_reducer'

export default combineReducers({
    users: usersReducer,
    taskTypes: taskTypesReducer
})
