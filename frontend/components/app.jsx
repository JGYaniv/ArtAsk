import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Session from './session/session'
import Dashboard from './home/dashboard'
import Splash from './home/splash'
import {ProtectedRoute} from '../utils/route_utils'

export default () => (
    <>
        <Switch>
            <Route path="/login" component={Session}/> 
            <Route path="/signup" component={Session}/> 
            {/* <Route path="/account" component={Account}/>  */}
            {/* <Route path="/form" component={TaskForm}/>  */}
            <Route path="/splash" component={Splash}/>
            <ProtectedRoute path="/" component={Dashboard}/>
            <ProtectedRoute path="/dashboard" component={Dashboard}/>
        </Switch>
    </>
)

// try this out: <Route path="/(home|users|widgets)/" component={dashboard} />