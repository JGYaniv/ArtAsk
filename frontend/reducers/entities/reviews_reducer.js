import { RECEIVE_REVIEWS } from '../../actions/reviews_actions'
import { RECEIVE_TASK_TYPE } from '../../actions/task_types_actions'

export default (initialState = {}, action) => {
    Object.freeze(initialState)
    switch(action.type){
        case RECEIVE_REVIEWS:
            return action.reviews;
        case RECEIVE_TASK_TYPE:
            return action.reviews;
        default:
            return initialState;
    }
}