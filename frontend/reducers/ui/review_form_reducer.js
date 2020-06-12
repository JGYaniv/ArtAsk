import { TASK_TO_REVIEW_FORM } from '../../actions/reviews_actions'

export default (defaultState={}, action) => {
    Object.freeze(defaultState)
    switch(action.type){
        case TASK_TO_REVIEW_FORM:
            return action.task;
        default:
            return defaultState;
    }
}