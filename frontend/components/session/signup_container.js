import { connect } from 'react-redux'
import SignUp from './signup'
import { postUser } from '../../actions/users_actions'

const mapStateToProps = state => ({
    errors: state.errors.user
})

const mapDispatchToProps = dispatch => ({
    postUser: user => dispatch(postUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)