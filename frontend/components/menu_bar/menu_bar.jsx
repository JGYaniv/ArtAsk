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
                    <img src="https://i.imgur.com/sh8ARuh.png" className="nav-logo" />
                    <nav>
                        <a href="#login">Login</a>
                        <a href="#signup">Artist Sign Up</a>
                    </nav>
                </div>
            )
        } else {
            return(
                <div className="menu-bar">
                    <img src="https://i.imgur.com/sh8ARuh.png" className="nav-logo"/>
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