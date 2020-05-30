import React from 'react'

export default class LogIn extends React.Component {
    constructor(props){
        super(props)
        this.state = {email: "", password: ""}
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(type){
        return (e) => {
            this.setState({[type]: e.target.value})
        }
    }
    
    handleSubmit(e){
        e.preventDefault();
        this.props.login({
            email: this.state.email,
            password: this.state.password
        })
    }
    
    render(){
        return(
            <div className="session-background-image">
                <form onSubmit={this.handleSubmit}>
                    <img src='https://i.imgur.com/sh8ARuh.png' />
                    <input type="text" placeholder="Email Address" onChange={this.handleChange("email")}/>
                    <input type="password" placeholder="Password" onChange={this.handleChange("password")}/>
                    <p><a href="#">Reset password</a></p>
                    <input type="submit" value="Log in" className="login"/>
                    <div className="separator"></div>
                    <input type="submit" value="Demo" className="demo"/>
                </form>
            </div>
        )
    }
}