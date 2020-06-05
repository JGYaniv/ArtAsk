import { OPEN_MODAL, CLOSE_MODAL } from '../../actions/modal_actions'

export default (initialState = [], action) => {
    Object.freeze(initialState)
    switch (action.type) {
        case OPEN_MODAL:
            return action.modal
        case CLOSE_MODAL:
            return null
        default:
            return initialState;
    }
}