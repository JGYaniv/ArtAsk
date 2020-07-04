import { connect } from 'react-redux'
import {getUser} from '../../actions/users_actions'
import { setArtistPage } from '../../actions/artist_page_actions'
import ArtistPage from './artist_page'

const mapStateToProps = (state, ownProps) => {
    return ({
    currentArtist: state.entities.users[ownProps.match.params.id],
    currentArtistId: ownProps.match.params.id,
    reviews: Object.values(state.entities.reviews),
    users: state.entities.users
})}

const mapDispatchToProps = dispatch => ({
    getUser: userId => dispatch(getUser(userId)),
    setArtistPage: userId => dispatch(setArtistPage(userId))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArtistPage)