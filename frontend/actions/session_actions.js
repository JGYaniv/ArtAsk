import * as sessionApiUtil from '../utils/session_api_utils'
import { closeModal } from './modal_actions'
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS'

export const receiveCurrentUser = res => {
    return({
    type: RECEIVE_CURRENT_USER,
    ...res
})}

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

export const receiveSessionErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const clearSessionErrors = () => ({
    type: CLEAR_SESSION_ERRORS
})

//login hard coded for client user type

export const login = user => dispatch => (
    sessionApiUtil.login(user)
        .then(res => {
            dispatch(receiveCurrentUser(res))
            window.localStorage.setItem('currentUser', JSON.stringify(res.user))
        }, errors => (
            dispatch(receiveSessionErrors(errors.responseJSON))
        ))
        .then(() => dispatch(closeModal()))
)

export const logout = () => dispatch => (
    sessionApiUtil.logout()
        .then(() => {
            dispatch(logoutCurrentUser())})
        .then(() => window.localStorage.setItem('currentUser', ""))
        .then(() => window.localStorage.setItem('task_form', ''))
)