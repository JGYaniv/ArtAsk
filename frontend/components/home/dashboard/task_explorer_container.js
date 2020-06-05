import { connect } from 'react-redux'
import TaskExplorer from './task_explorer'
import {getTaskTypes} from '../../../actions/task_types_actions'
import { selectTaskType} from '../../../actions/task_form_actions'

const mapStateToProps = state => ({
    taskTypes: Object.values(state.entities.taskTypes)
})

const mapDispatchToProps = dispatch => ({
    getTaskTypes: () => dispatch(getTaskTypes()),
    selectTaskType: taskType => dispatch(selectTaskType(taskType))
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskExplorer)