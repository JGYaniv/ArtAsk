export const getTaskTypes = () => (
    $.ajax({
        url: `/api/task_types`,
        method: 'get'
    })
)

export const getTaskType = (taskTypeId) => (
    $.ajax({
        url: `/api/task_types/${taskTypeId}`,
        method: 'get'
    })
)

export const getTaskTypeArtists = (taskTypeId) => (
    $.ajax({
        url: `/api/task_types/${taskTypeId}/artists`,
        method: 'get'
    })
)

export const getTaskTypeReviews = (taskTypeId) => {
    return $.ajax({
        url: `/api/task_types/${taskTypeId}/reviews`,
        method: 'get'
    })
}