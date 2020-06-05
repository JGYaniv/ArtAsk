import { connect } from 'react-redux'
import TaskForm from './task_form'

const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
})

const mapDispatchToProps = null
// const mapDispatchToProps = dispatch => ({
// })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskForm)
