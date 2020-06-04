import {connect} from 'react-redux'
import AccountSettings from './account_settings'
import {logout, clearSessionErrors} from '../../actions/session_actions'
import {deleteUser, updateUser, clearUsersErrors} from '../../actions/users_actions'

const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
    sessionErrors: state.errors.session,
    userErrors: state.errors.user
})

const mapDispatchToProps = dispatch => ({
    logout: () => {dispatch(logout())},
    deactivate: (userId) => dispatch(deleteUser(userId)),
    update: (user) => dispatch(updateUser(user)),
    clearUserErrors: () => dispatch(clearUsersErrors()),
    clearSessionErrors: () => dispatch(clearSessionErrors())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountSettings)