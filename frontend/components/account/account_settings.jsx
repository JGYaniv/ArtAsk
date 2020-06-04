import React from 'react'
import MenuBar from '../menu_bar/menu_bar'
import {Route, NavLink, Redirect} from 'react-router-dom'
import Profile from './profile'
import EditProfile from './edit_profile'
import Password from './password'
import Deactivate from './deactivate'
export default class extends React.Component{ 
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                <MenuBar />
                <div className="account-settings">
                    <h1>Your Account</h1>
                    <div className='account-content'>
                        <nav>
                            <NavLink to="/account/profile">Profile</NavLink>
                            <NavLink to="/account/password">Password</NavLink>
                            <NavLink to="/account/deactivate">Deactivate</NavLink>
                        </nav>
                        <Route exact path="/account">
                            <Redirect to="/account/profile" />
                        </Route>
                        <Route path='/account/profile' render={() => <Profile 
                                {...this.props} 
                                currentUser={this.props.currentUser}
                                logout={this.props.logout} />}
                        />
                        <Route path='/account/edit' render={() => <EditProfile 
                                {...this.props} 
                                currentUser={this.props.currentUser}
                                logout={this.props.logout} />}
                        />
                        <Route path='/account/password' render={() => <Password 
                                {...this.props} 
                                currentUser={this.props.currentUser}
                                update={this.props.update} />}
                        />
                        <Route path='/account/deactivate' render={() => <Deactivate 
                                {...this.props} 
                                currentUser={this.props.currentUser}
                                deactivate={this.props.deactivate} />}
                        />
                    </div>
                </div>
            </>
        )
    }
}