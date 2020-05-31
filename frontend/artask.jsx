import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root'
import storeConfig from './store/store'
import {logout} from './actions/session_actions'
document.addEventListener("DOMContentLoaded", ()=>{
    var preloadedState = {}
    if (window.currentUser) {
        preloadedState = {
            session: { currentUser: {...window.currentUser} }
        }
        delete window.currentUser
    }
    let store = storeConfig(preloadedState)
    window.store = store
    window.logout = () => store.dispatch(logout())

    ReactDOM.render(<Root store={store}/>,
        document.getElementById("root"))
})