import React from 'react'

export default class SignUp extends React.Component {
    constructor(props){
        super(props)
        this.state = { email: "", password: "", first_name: "", last_name: "", area_code: "", account_type: "client"}
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.postUser(this.state)
            .then(() => window.localStorage.setItem('currentUser', {
                email: this.state.email,
                account_type: 'client'
            }))
            .then(() => this.props.history.push('/dashboard'))
    }

    render(){
        return(
            <div className="session-background-image">
                <form className="signup" onSubmit={this.handleSubmit}>
                    <a href="/"><img src='https://i.imgur.com/sh8ARuh.png' /></a>
                    <input type="text" placeholder="First Name" onChange={this.handleChange("first_name")} value={this.state.first_name}/>
                    <input type="text" placeholder="Last Name" onChange={this.handleChange("last_name")} value={this.state.last_name}/>
                    <input type="text" placeholder="Email Address" onChange={this.handleChange("email")} value={this.state.email}/>
                    <input type="password" placeholder="Password" onChange={this.handleChange("password")} value={this.state.password}/>
                    <input type="text" placeholder="Area Code" onChange={this.handleChange("area_code")} value={this.state.area_code}/>
                    <p>By clicking below you are agreeing to the ArtAsk <a href="#">terms and conditions.</a></p>
                    <input type="submit" value="Sign up"/>
                </form>
            </div>
        )
    }
}