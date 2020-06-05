import { connect } from 'react-redux'
import TaskForm from './task_form'
import { postTask } from '../../actions/tasks_actions'
import { openModal, closeModal } from '../../actions/modal_actions'

const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
    taskTypes: state.entities.taskTypes,
    taskTypeId: state.ui.task_form.task_type_id,
    errors: state.errors.tasks,
    artists: state.entities.users,
    taskForm: state.ui.task_form
})

const mapDispatchToProps = dispatch => ({
    postTask: task => dispatch(postTask(task)),
    openModal: type => dispatch(openModal(type)),
    closeModal: () => dispatch(closeModal())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskForm)
