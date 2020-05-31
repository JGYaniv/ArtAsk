import * as sessionApiUtil from '../utils/session_api_utils'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'

export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
})

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

export const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const login = user => dispatch => (
    sessionApiUtil.login(user)
        .then(user => dispatch(receiveCurrentUser(user)))
        .then(() => window.localStorage.setItem('currentUser', {
            email: user.email,
            account_type: 'client',
        }), errors => (
            dispatch(receiveErrors(errors.responseJSON))
        ))
)

export const logout = () => dispatch => (
    sessionApiUtil.logout()
        .then(() => dispatch(logoutCurrentUser()))
        .then(() => window.localStorage.setItem('currentUser', ""))
)