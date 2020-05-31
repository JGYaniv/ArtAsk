export const login = (user) => (
    $.ajax({
        url: `/api/session`,
        method: 'post',
        data: { user: user }
    })
)

export const logout = () => {
    return $.ajax({
        url: `/api/session`,
        method: 'delete'
    })
}