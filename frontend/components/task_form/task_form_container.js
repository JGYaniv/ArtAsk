import { connect } from 'react-redux'
import TaskForm from './task_form'
import { postTask } from '../../actions/tasks_actions'
import { openModal, closeModal } from '../../actions/modal_actions'
import { 
    getTaskTypes, 
    getTaskTypeArtists, 
    getTaskTypeReviews 
} from '../../actions/task_types_actions'
import { 
    receiveDescribeForm, 
    updateDescribeForm,
    receiveArtistForm, 
    receiveTimeForm, 
    receiveFormStep,
    receiveTaskForm, 
    receiveTaskFormErrors, 
    receiveTaskFormError, 
    clearTaskFormErrors,
    clearTaskFormError,
    receiveFocusSection
} from '../../actions/task_form_actions'

const mapStateToProps = state => {
    return {
        currentUser: state.session.currentUser,
        taskTypes: state.entities.taskTypes,
        taskTypeId: state.ui.task_form.task_type_id,
        errors: state.errors.task_form,
        users: state.entities.users,
        reviews: state.entities.reviews,
        taskForm: state.ui.task_form,
        formStep: state.ui.task_form.form_step
    }
}

const mapDispatchToProps = dispatch => ({
    getTaskTypeArtists: taskTypeId => dispatch(getTaskTypeArtists(taskTypeId)),
    getTaskTypeReviews: taskTypeId => dispatch(getTaskTypeReviews(taskTypeId)),
    getTaskTypes: () => dispatch(getTaskTypes()),
    receiveTaskForm: taskForm => dispatch(receiveTaskForm(taskForm)),
    setDescribeForm: describe => dispatch(receiveDescribeForm(describe)),
    updateDescribeForm: describe => dispatch(updateDescribeForm(describe)),
    setArtistForm: artist => dispatch(receiveArtistForm(artist)),
    setTimeForm: time => dispatch(receiveTimeForm(time)),
    setErrors: errors => dispatch(receiveTaskFormErrors(errors)),
    setError: error => dispatch(receiveTaskFormError(error)),
    setFocus: section => dispatch(receiveFocusSection(section)),
    setFormStep: formStep => dispatch(receiveFormStep(formStep)),
    postTask: task => dispatch(postTask(task)),
    clearErrors: () => dispatch(clearTaskFormErrors()),
    clearError: (error) => dispatch(clearTaskFormError(error)),
    openModal: type => dispatch(openModal(type)),
    closeModal: () => dispatch(closeModal()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskForm)
