import * as sessionApiUtil from '../utils/session_api_utils'
import {receiveUser} from './users_actions'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
})

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

export const login = user => dispatch => (
    sessionApiUtil.login(user)
        .then(user => dispatch(receiveUser(user)))
        .catch(errors => console.log(errors))
)

export const logout = userId => dispatch => (
    sessionApiUtil.logout()
        .then(user => dispatch(logoutCurrentUser()))
)

export const postUser = user => dispatch => (
    usersApiUtil.postUser(user)
        .then(user => dispatch(receiveUser(user)))
)