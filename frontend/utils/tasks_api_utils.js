export const getTask = (taskId) => (
    $.ajax({
        url: `/api/tasks/${taskId}`,
        method: 'get'
    })
)

export const getTasks = (userId) => (
    $.ajax({
        url: `/api/users/${userId}/tasks`,
        method: 'get'
    })
)

export const postTask = (task) => {
    return $.ajax({
        url: `/api/tasks`,
        method: 'post',
        data: { task: task }
    })
}

export const updateTask = (task) => {
    return $.ajax({
        url: `/api/tasks/${task.id}`,
        method: 'patch',
        data: { task: task }
    })
}

export const deleteTask = (taskId) => (
    $.ajax({
        url: `/api/tasks/${taskId}`,
        method: 'delete'
    })
)
