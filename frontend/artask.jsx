import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root'
import storeConfig from './store/store'
import {getUser} from './actions/users_actions'
import { receiveCurrentUser } from './actions/session_actions'

document.addEventListener("DOMContentLoaded", ()=>{
    var preloadedState = {}
    let currentUserString = window.localStorage.getItem('currentUser')
    let currentUser;
    if (Boolean(currentUserString)){
        currentUser = JSON.parse(currentUserString)
    }

    if (Boolean(currentUser)) {
        preloadedState = {
            session: { currentUser: {id: currentUser.id} },
            entities: { users: { [currentUser.id]: currentUser}}
        }
    }
    let taskFormString = window.localStorage.getItem("task_form")
    let taskForm;
    if (Boolean(taskFormString)){
        preloadedState.ui = { task_form: JSON.parse(taskFormString) }
    }
    
    let store = storeConfig(preloadedState)
    window.store = store

    ReactDOM.render(<Root store={store}/>,
        document.getElementById("root"))
})