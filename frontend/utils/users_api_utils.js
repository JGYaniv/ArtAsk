export const getUser = (userId) => (
    $.ajax({
        url: `/api/users/${userId}`,
        method: 'get'
    })
)

export const getUsers = () => (
    $.ajax({
        url: `/api/users`,
        method: 'get'
    })
)

export const postUser = (user) => (
    $.ajax({
        url: `/api/users`,
        method: 'post',
        data: { user: user }
    })
)

export const updateUser = (user) => {
    return $.ajax({
        url: `/api/users/${user.id}`,
        method: 'patch',
        data: { user: user }
    })
}

export const deleteUser = (userId) => (
    $.ajax({
        url: `/api/users/${userId}`,
        method: 'delete'
    })
)