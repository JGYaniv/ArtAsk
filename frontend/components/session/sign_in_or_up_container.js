import { connect } from 'react-redux'
import SignInOrUp from './sign_in_or_up'
import { postUser } from '../../actions/users_actions'
import { login } from '../../actions/session_actions'

const mapStateToProps = state => ({
    errors: state.errors.session
})

const mapDispatchToProps = dispatch => ({
    postUser: user => dispatch(postUser(user)),
    login: user => dispatch(login(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignInOrUp)