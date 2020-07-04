import { connect } from 'react-redux'
import TaskExplorer from './task_explorer'
import {getTaskTypes} from '../../actions/task_types_actions'
import { getUsers} from '../../actions/users_actions'
import { selectTaskType, clearTaskForm} from '../../actions/task_form_actions'

const filterArtists = users => {
    let artists = Object.values(users)
    let filteredArtists = artists.filter(user => user.account_type === "artist")
    return filteredArtists
}

const mapStateToProps = state => ({
    taskTypes: state.entities.taskTypes,
    taskTypesArr: Object.values(state.entities.taskTypes),
    artists: filterArtists(state.entities.users)
})

const mapDispatchToProps = dispatch => ({
    getTaskTypes: () => dispatch(getTaskTypes()),
    selectTaskType: taskType => dispatch(selectTaskType(taskType)),
    clearTaskForm: () => dispatch(clearTaskForm()),
    getUsers: () => dispatch(getUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskExplorer)