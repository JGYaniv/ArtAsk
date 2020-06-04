import React from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuBar extends React.Component{
    constructor(props){
        super(props)
        this.mode = props.mode
    }
    render(){
        if (this.mode === "splash"){
            return (
                <div className="menu-bar">
                    <div>
                        <a href="/"><img src="https://i.imgur.com/sh8ARuh.png" className="nav-logo" /></a>
                        <nav>
                            <a href="#/a/">Log In</a>
                            <a href="#/" className="volunteerButton">Volunteer with us!</a>
                        </nav>
                    </div>
                </div>
            )
        } else {
            return(
                <div className="menu-bar">
                    <div>
                    <a href="/"><img src="https://i.imgur.com/sh8ARuh.png" className="nav-logo"/></a>
                        <nav>
                            <NavLink to="/dashboard/explore">Book a Task</NavLink>
                            <NavLink to="/dashboard/active">My Tasks</NavLink>
                            <NavLink to="/account">Account</NavLink>
                        </nav>
                    </div>
                </div>
            )
        }
    }
}