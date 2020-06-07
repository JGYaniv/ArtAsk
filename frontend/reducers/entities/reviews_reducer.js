import { RECEIVE_REVIEWS } from '../../actions/reviews_actions'

export default (initialState = {}, action) => {
    Object.freeze(initialState)
    switch(action.type){
        case RECEIVE_REVIEWS:
            return action.reviews;
        default:
            return initialState;
    }
}