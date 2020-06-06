import sessionErrors from './errors/session_errors_reducer'
import usersErrors from './errors/users_errors_reducer'
import tasksErrors from './errors/tasks_errors_reducer'
import taskFormErrors from './errors/task_form_errors_reducer'

import {combineReducers} from 'redux'

export default combineReducers({
    session: sessionErrors,
    user: usersErrors,
    tasks: tasksErrors,
    task_form: taskFormErrors
})