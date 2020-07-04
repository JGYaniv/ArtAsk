import {connect} from 'react-redux'
import Splash from './splash'
import {getUsers} from '../../actions/users_actions'

const filterArtists = users => {
    let artists = Object.values(users)
    let filteredArtists = artists.filter(user => user.account_type === "artist")
    return filteredArtists
}

const mapStateToProps = state => ({
    taskTypes: state.entities.taskTypes,
    artists: filterArtists(state.entities.users)
})

const mapDispatchToProps = dispatch => ({
    getUsers: () => dispatch(getUsers())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Splash)