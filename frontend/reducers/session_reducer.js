import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions'

export default (initialState={}, action) => {
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return { currentUser: action.user }
        case LOGOUT_CURRENT_USER:
            return {currentUser: null}
        default:
            return initialState;
    }
}