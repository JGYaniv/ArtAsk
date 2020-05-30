import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './login_container'
import Signup from './signup_container'

export default () => (
    <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
    </Switch>
)