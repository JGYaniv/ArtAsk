import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions'

export default (initialState={}, action) => {
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return {
                currentUser: {
                    email: action.user.email,
                    first_name: action.user.first_name,
                    last_name: action.user.last_name
                }
            }
        case LOGOUT_CURRENT_USER:
            return {currentUser: null}
        default:
            return initialState;
    }
}