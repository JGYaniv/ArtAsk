import React from 'react'

export default class LogIn extends React.Component {
    constructor(props){
        super(props)
        this.state = {email: "", password: ""}
        this.handleSubmit = this.handleSubmit.bind(this)
        this.demoLogin = this.demoLogin.bind(this)
    }

    handleChange(type){
        return (e) => {
            this.setState({[type]: e.target.value})
        }
    }
    
    handleSubmit(e){
        e.preventDefault();
        this.props.login(this.state)
            .then(() => this.props.history.push('/dashboard'));
    }

    demoLogin(e){
        e.preventDefault();
        this.props.login({email: 'bob@tablo.co', password: '123456'})
            .then(() => this.props.history.push('/dashboard'));
    }

    renderErrors(){
        let errors = []
        if (this.props.errors.length > 0){
            // console.log(this.props.errors)
            return (
            <ul>
                {this.props.errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                ))}
            </ul>
        )}
        return errors
    }
    
    render(){
        return(
            <div className="session-background-image">
                <form onSubmit={this.handleSubmit}>
                    <a href="/"><img src='https://i.imgur.com/sh8ARuh.png' /></a>
                    <input type="text" placeholder="Email Address" value={this.state.email} onChange={this.handleChange("email")}/>
                    <input type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange("password")}/>
                    {this.renderErrors()}
                    <input type="submit" value="Log in" className="login"/>
                    <p><a href="#">Reset password</a></p>
                    <div className="separator"></div>
                    <input type="submit" value="Demo" className="demo" onClick={this.demoLogin}/>
                </form>
            </div>
        )
    }
}