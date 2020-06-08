import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root'
import storeConfig from './store/store'
import {logout} from './actions/session_actions'
document.addEventListener("DOMContentLoaded", ()=>{
    var preloadedState = {}

    if (Boolean(window.localStorage.getItem('currentUser'))) {
        preloadedState = {
            session: { currentUser: JSON.parse(window.localStorage.getItem('currentUser')) },
        }
    }

    let taskForm = JSON.parse(window.localStorage.getItem("task_form"))
    if (Boolean(taskForm.task_type_id)){
        preloadedState.ui = { task_form: taskForm }
    }
    debugger
    let store = storeConfig(preloadedState)

    window.store = store
    window.logout = () => store.dispatch(logout())

    ReactDOM.render(<Root store={store}/>,
        document.getElementById("root"))
})