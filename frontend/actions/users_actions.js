import * as usersApiUtil from '../utils/users_api_utils'
import {login, receiveCurrentUser, receiveSessionErrors} from './session_actions'

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USERS_ERRORS = 'RECEIVE_USERS_ERRORS';

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})

export const receiveUsers = users => ({
    type: RECEIVE_USER,
    users
})

export const receiveUsersErrors = errors => ({
    type: RECEIVE_USERS_ERRORS,
    errors
})

export const getUser = userId => dispatch => (
    usersApiUtil.getUser(userId)
        .then(user => dispatch(receiveUser(user)))
)

export const getUsers = () => dispatch => (
    usersApiUtil.getUsers()
        .then(users => dispatch(receiveUsers(users)))
)

export const postUser = user => dispatch => (
    usersApiUtil.postUser(user)
        .then(user => {
            dispatch(receiveCurrentUser(user))
        })
        .then(() => {dispatch(login(user))})
        .fail(errors => {
            dispatch(receiveSessionErrors(errors.responseJSON))
        })
)