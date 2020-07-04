import { RECEIVE_CURRENT_ARTIST } from '../../actions/users_actions'
import { SET_ARTIST_PAGE } from '../../actions/artist_page_actions'

export default (initialState = "", action) => {
    Object.freeze(initialState)
    switch (action.type) {
        case RECEIVE_CURRENT_ARTIST:
            return action.artistId
        case SET_ARTIST_PAGE:
            return action.artistId
        default:
            return initialState;
    }
}