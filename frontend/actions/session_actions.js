import * as sessionApiUtil from '../utils/session_api_utils'

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
        .then(user => dispatch(receiveCurrentUser(user)))
)

export const logout = () => dispatch => (
    sessionApiUtil.logout()
        .then(() => dispatch(logoutCurrentUser()))
        .then(() => window.localStorage.setItem('currentUser', null))
)