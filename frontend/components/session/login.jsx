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

    //maybe this can be refactored into a util file
    renderErrors(){
        let errors = []
        if (this.props.errors.length > 0){
            return (
            <ul className='errors'>
                {this.props.errors.map((error, idx) => (
                    <li key={idx} className="error">{error}</li>
                ))}
            </ul>
        )}
        return errors
    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Email Address</label>
                <input type="text" value={this.state.email} onChange={this.handleChange("email")}/>
                <label>Email Address</label>
                <input type="password" value={this.state.password} onChange={this.handleChange("password")}/>
                {this.renderErrors()}
                <input type="submit" value="Log in" className="login"/>
                <input type="submit" value="Demo Login" className="demo" onClick={this.demoLogin}/>
                <p className='reset'><a href="#">Reset password</a></p>
            </form>
        )
    }
}