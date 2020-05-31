
import { RECEIVE_USERS_ERRORS, RECEIVE_USER } from '../actions/users_actions'

export default (initialState = [], action) => {
    Object.freeze(initialState)
    switch (action.type) {
        case RECEIVE_USERS_ERRORS:
            return action.errors
        case RECEIVE_USER:
            return []
        default:
            return initialState;
    }
}