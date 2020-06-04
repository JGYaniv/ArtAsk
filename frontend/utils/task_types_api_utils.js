export const getTaskTypes = () => (
    $.ajax({
        url: `/api/task_types`,
        method: 'get'
    })
)

export const getTaskType = (taskTypeId) => (
    $.ajax({
        url: `/api/task_types${taskTypeId}`,
        method: 'get'
    })
)