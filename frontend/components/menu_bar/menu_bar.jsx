import React from 'react'

export default class MenuBar extends React.Component{
    constructor(props){
        super(props)
        this.mode = props.mode
    }
    render(){
        if (this.mode === "splash"){
            return (
                <div className="menu-bar">
                    <a href="/"><img src="https://i.imgur.com/sh8ARuh.png" className="nav-logo" /></a>
                    <nav>
                        <a href="#login">Login</a>
                        <a href="#signup" className="volunteerButton">Volunteer with us!</a>
                    </nav>
                </div>
            )
        } else {
            return(
                <div className="menu-bar">
                    <a href="/"><img src="https://i.imgur.com/sh8ARuh.png" className="nav-logo"/></a>
                    <nav>
                        <a href="#dashboard/explore">Book a Task</a>
                        <a href="#dashboard/active">My Tasks</a>
                        <a href="#account">Account</a>
                    </nav>
                </div>
            )
        }
    }
}