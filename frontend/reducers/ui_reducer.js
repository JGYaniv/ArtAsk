import { combineReducers } from 'redux'
import modalReducer from './ui/modal_reducer'
import taskFormReducer from './ui/task_form_reducer'
import reviewFormReducer from './ui/review_form_reducer'
import artistPageReducer from './ui/artist_page_reducer'

export default combineReducers({
    modal: modalReducer,
    task_form: taskFormReducer,
    review_form: reviewFormReducer,
    artist_page: artistPageReducer
})