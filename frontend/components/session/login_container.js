import { connect } from 'react-redux'
import LogIn from './login'
import {login} from '../../actions/session_actions'

const mapStateToProps = state => ({
    errors: state.errors.session
})
const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)