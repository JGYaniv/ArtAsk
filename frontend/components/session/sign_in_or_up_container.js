import { connect } from 'react-redux'
import SignInOrUp from './sign_in_or_up'
import { postUser } from '../../actions/users_actions'
import { login, clearSessionErrors } from '../../actions/session_actions'

const mapStateToProps = state => ({
    errors: state.errors.session
})

const mapDispatchToProps = dispatch => ({
    postUser: user => dispatch(postUser(user)),
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearSessionErrors())
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(SignInOrUp)