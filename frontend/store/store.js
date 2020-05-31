import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'

import rootReducer from '../reducers/root_reducer'
import thunk from 'redux-thunk'

export default (initialState = {}) => createStore(
    rootReducer, initialState, applyMiddleware(thunk)
)