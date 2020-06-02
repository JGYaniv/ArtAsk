import {connect} from 'react-redux'
import AccountSettings from './account_settings'
import {logout} from '../../actions/session_actions'
import {deleteUser, updateUser} from '../../actions/users_actions'

const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
    errors: state.errors.session
})

const mapDispatchToProps = dispatch => ({
    logout: () => {dispatch(logout())},
    deactivate: (userId) => dispatch(deleteUser(userId)),
    update: (user) => dispatch(updateUser(user))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountSettings)