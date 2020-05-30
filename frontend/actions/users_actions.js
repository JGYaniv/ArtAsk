import * as usersApiUtil from '../utils/users_api_utils'

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})

export const receiveUsers = users => ({
    type: RECEIVE_USER,
    users
})

export const getUser = userId => dispatch => (
    usersApiUtil.getUser(userId)
        .then(user => dispatch(receiveUser(user)))
)

export const getUsers = () => dispatch => (
    usersApiUtil.getUsers()
        .then(user => dispatch(receiveUser(user)))
)

