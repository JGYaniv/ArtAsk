import { RECEIVE_USER, RECEIVE_USERS } from '../../actions/users_actions'

export default (initialState = {}, action) => {
    Object.freeze(initialState)
    switch(action.type){
        case RECEIVE_USER:
            return Object.assign({}, initialState, {[action.user.id]: action.user})
        case RECEIVE_USERS:
            return Object.assign({}, initialState, action.users)
        default:
            return initialState;
    }
}