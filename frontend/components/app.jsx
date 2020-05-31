import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Session from './session/session'
import Dashboard from './home/dashboard'
import Splash from './home/splash'
import {ProtectedRoute, AuthRoute} from '../utils/route_utils'

export default () => (
    <>
        <Switch>
            <AuthRoute path="/login" component={Session}/> 
            <AuthRoute path="/signup" component={Session}/> 
            <AuthRoute path="/splash" component={Splash}/> 
            {/* <ProtectedRoute path="/account" component={Account}/>  */}
            {/* <Route path="/form" component={TaskForm}/>  */}
            <ProtectedRoute path="/" component={Dashboard}/>
        </Switch>
    </>
)

// try this out: <Route path="/(home|users|widgets)/" component={dashboard} />