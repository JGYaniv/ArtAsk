import * as usersApiUtil from '../utils/users_api_utils'
import {login, logout, receiveCurrentUser, receiveSessionErrors} from './session_actions'
import { clearTaskForm } from './task_form_actions';
import { receiveReviews } from './reviews_actions';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USERS_ERRORS = 'RECEIVE_USERS_ERRORS';
export const CLEAR_USER_ERRORS = 'CLEAR_USER_ERRORS';
export const RECEIVE_CURRENT_ARTIST = 'RECEIVE_CURRENT_ARTIST';

export const receiveArtistUser = artist => {
    return({
        type: RECEIVE_CURRENT_ARTIST,
        artistId: artistId
    })
}

export const receiveUser = user => {
    return ({
        type: RECEIVE_USER,
        user: user
})}

export const receiveUsers = res => {
    return ({
    type: RECEIVE_USERS,
    ...res
})}

export const receiveUsersErrors = errors => ({
    type: RECEIVE_USERS_ERRORS,
    errors
})

export const clearUsersErrors = () => ({
    type: CLEAR_USER_ERRORS,
})

export const getUser = userId => dispatch => (
    usersApiUtil.getUser(userId)
        .then(res => dispatch(receiveUsers(res)))
)

export const getUsers = () => dispatch => (
    usersApiUtil.getUsers()
        .then(res => dispatch(receiveUsers(res)))
)

export const postUser = user => dispatch => (
    usersApiUtil.postUser(user)
        .then(user => {
            dispatch(receiveCurrentUser(user))
            window.localStorage.setItem('currentUser', JSON.stringify(user))
        })
        .then(() => {dispatch(login(user))})
        .fail(errors => {
            dispatch(receiveSessionErrors(errors.responseJSON))
        })
)

export const updateUser = user => dispatch => (
    usersApiUtil.updateUser(user)
        .then(user => {
            dispatch(receiveCurrentUser(user))
            window.localStorage.setItem('currentUser', JSON.stringify(user))
        })
        .fail(errors => {
            dispatch(receiveSessionErrors(errors.responseJSON))
        })
)

export const deleteUser = userId => dispatch => {
    usersApiUtil.deleteUser(userId)
        .then(() => dispatch(logout()))
}