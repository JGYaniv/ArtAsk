import { connect } from 'react-redux'
import TaskForm from './task_form'
import { postTask } from '../../actions/tasks_actions'
import { getTaskTypes, getTaskTypeArtists, getTaskTypeReviews } from '../../actions/task_types_actions'
import { openModal, closeModal } from '../../actions/modal_actions'
import {receiveDescribeForm, receiveArtistForm, receiveTimeForm, receiveFormStep} from '../../actions/task_form_actions'

const mapStateToProps = state => {
    let savedForm = window.localStorage.getItem("task_form")
    return {
    currentUser: state.session.currentUser,
    taskTypes: state.entities.taskTypes,
    taskTypeId: state.ui.task_form.task_type_id || (savedForm === "" ? "" : JSON.parse(savedForm).task_type_id),
    errors: state.errors.tasks,
    users: state.entities.users,
    reviews: state.entities.reviews,
    taskForm: state.ui.task_form,
    formStep: state.ui.task_form.formStep,
}}

//is receiveDescribeForm and the others really doing anything? somehow the globals tate seems to be updating regardless. Some redux magic I guess?

const mapDispatchToProps = dispatch => ({
    getTaskTypeArtists: taskTypeId => dispatch(getTaskTypeArtists(taskTypeId)),
    getTaskTypeReviews: taskTypeId => dispatch(getTaskTypeReviews(taskTypeId)),
    receiveDescribeForm: describe => dispatch(receiveDescribeForm(describe)),
    receiveArtistForm: artist => dispatch(receiveArtistForm(artist)),
    receiveTimeForm: time => dispatch(receiveTimeForm(time)),
    getTaskTypes: () => dispatch(getTaskTypes()),
    postTask: task => dispatch(postTask(task)),
    openModal: type => dispatch(openModal(type)),
    closeModal: () => dispatch(closeModal()),
    setFormStep: formStep => dispatch(receiveFormStep(formStep))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskForm)
