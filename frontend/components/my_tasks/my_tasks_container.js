import React from 'react'
import {connect} from 'redux'
import MyTasks from './my_tasks'
import {getTasks, deleteTasks} from '../../actions/tasks_actions'

const mapStateToProps = state => ({
    tasks = state.entities.tasks,
    currentUser = state.session.currentUser,
    artists = state.entitites.users,
    taskTypes = state.entities.taskTypes
})

const mapDispatchToProps = dispatch => ({
    getTasks: (userId) => dispatch(getTasks(userId)),
    deleteTask: (taskId) => dispatch(deleteTask(taskId))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyTasks)