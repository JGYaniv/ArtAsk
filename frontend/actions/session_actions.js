import * as sessionApiUtil from '../utils/session_api_utils'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'

export const receiveCurrentUser = user => {
    return({
    type: RECEIVE_CURRENT_USER,
    user
})}

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

export const receiveSessionErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

//login hard coded for client user type

export const login = user => dispatch => (
    sessionApiUtil.login(user)
        .then(res => {
            dispatch(receiveCurrentUser(res))
            window.localStorage.setItem('currentUser', JSON.stringify(res))
        }, errors => (
            dispatch(receiveSessionErrors(errors.responseJSON))
        ))
)

export const logout = () => dispatch => (
    sessionApiUtil.logout()
        .then(() => {
            dispatch(logoutCurrentUser())})
        .then(() => window.localStorage.setItem('currentUser', ""))
)