import React from 'react'
import {Route, Switch} from 'react-router-dom'
import SignInOrUp from './session/sign_in_or_up_container'
import AccountSettings from './account/account_settings_container'
import Dashboard from './home/dashboard'
import Splash from './home/splash'
import {ProtectedRoute, AuthRoute} from '../utils/route_utils'
import TaskForm from './task_form/task_form_container'
import Modal from './modals/modal'

export default () => (
    <>
        <Modal />
        <Switch>
            <AuthRoute path="/a/" component={SignInOrUp}/> 
            <AuthRoute path="/splash" component={Splash}/> 
            <ProtectedRoute path="/account" component={AccountSettings}/> 
            <Route path="/form" component={TaskForm}/>
            <ProtectedRoute path="/" component={Dashboard}/>
        </Switch>
    </>
)

// try this out: <Route path="/(home|users|widgets)/" component={dashboard} />