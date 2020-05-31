import sessionErrors from './session_errors_reducer'
import usersErrors from './users_errors_reducer'
import {combineReducers} from 'redux'

export default combineReducers({
    session: sessionErrors,
    user: usersErrors
})