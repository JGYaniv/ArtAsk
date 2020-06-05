import { combineReducers } from 'redux'
import modalReducer from './ui/modal_reducer'
import taskFormReducer from './ui/task_form_reducer'

export default combineReducers({
    modal: modalReducer,
    task_form: taskFormReducer
})