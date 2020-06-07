import {combineReducers} from 'redux'
import usersReducer from './entities/users_reducer'
import taskTypesReducer from './entities/task_types_reducer'
import reviewsReducer from './entities/reviews_reducer'

export default combineReducers({
    users: usersReducer,
    taskTypes: taskTypesReducer,
    reviews: reviewsReducer
})
