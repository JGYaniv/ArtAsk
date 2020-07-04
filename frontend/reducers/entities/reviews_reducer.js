import { RECEIVE_REVIEWS } from '../../actions/reviews_actions'
import { RECEIVE_TASK_TYPE } from '../../actions/task_types_actions'
import { RECEIVE_USER, RECEIVE_USERS } from '../../actions/users_actions'

export default (initialState = {}, action) => {
    Object.freeze(initialState)
    switch(action.type){
        case RECEIVE_USER:
            return Object.assign({}, initialState, action.reviews);
        case RECEIVE_USERS:
            return Object.assign({}, initialState, action.reviews);
        case RECEIVE_REVIEWS:
            return Object.assign({}, initialState, action.reviews);
        case RECEIVE_TASK_TYPE:
            return Object.assign({}, initialState, action.reviews);
        default:
            return initialState;
    }
}