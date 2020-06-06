import { connect } from 'react-redux'
import TaskForm from './task_form'
import { postTask } from '../../actions/tasks_actions'
import { openModal, closeModal } from '../../actions/modal_actions'
import {receiveDescribeForm, receiveArtistForm, receiveTimeForm} from '../../actions/task_form_actions'

const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
    taskTypes: state.entities.taskTypes,
    taskTypeId: state.ui.task_form.task_type_id,
    errors: state.errors.tasks,
    users: state.entities.users,
    taskForm: state.ui.task_form
})

const mapDispatchToProps = dispatch => ({
    receiveDescribeForm: describe => dispatch(receiveDescribeForm(describe)),
    receiveArtistForm: artist => dispatch(receiveArtistForm(artist)),
    receiveTimeForm: time => dispatch(receiveTimeForm(time)),
    postTask: task => dispatch(postTask(task)),
    openModal: type => dispatch(openModal(type)),
    closeModal: () => dispatch(closeModal())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskForm)
