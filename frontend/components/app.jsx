import React from 'react'
import {Route, Switch} from 'react-router-dom'
import AccountSettings from './account/account_settings_container'
import SignInOrUp from './session/sign_in_or_up_container'
import Dashboard from './dashboard/dashboard'
import Splash from './splash/splash_container'
import {ProtectedRoute, AuthRoute} from '../utils/route_utils'
import TaskForm from './task_form/task_form_container'
import Modal from './modals/modal'
import ArtistPage from './artist/artist_page_container'

export default () => (
    <>
        <Modal />
        <Switch>
            <AuthRoute path="/a/" component={SignInOrUp}/> 
            <AuthRoute path="/splash" component={Splash}/> 
            <Route path="/form" component={TaskForm}/>
            <Route path="/artist/:id" component={ArtistPage}/>
            <ProtectedRoute path="/account" component={AccountSettings} />
            <ProtectedRoute path="/" component={Dashboard}/>
        </Switch>
    </>
)

// try this out: <Route path="/(home|users|widgets)/" component={dashboard} />