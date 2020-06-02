import React from 'react'

export default class LogIn extends React.Component {
    constructor(props){
        super(props)
        this.state = {email: "", password: ""}
        this.localErrors = {}
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
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

    handleFocus(e){
        e.target.classList.add("activeInput")
    }

    validateEmail(email) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){return true}
        return false
    }

    handleBlur(e){
        if (e.target.value.length < 1){ 
            e.target.classList.add("invalidInput")
            this.localErrors[e.target.name] = "Cannot be blank 🥺"
         }
        else if (e.target.name === 'email' && !this.validateEmail(e.target.value)){ 
            e.target.classList.add("invalidInput")
            this.localErrors[e.target.name] = "Invalid email address 😅" 
        }
        else { 
            e.target.classList.remove("invalidInput")
            delete this.localErrors[e.target.name] 
        }
        e.target.classList.remove("activeInput")
        this.forceUpdate();
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
                <input 
                    type="text"
                    value={this.state.email} 
                    onChange={this.handleChange("email")}
                    name="email" 
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}/>
                <p className="inlineError">{this.localErrors.email}</p>
                <label>Password</label>
                <input 
                    type="password" 
                    name="password"
                    value={this.state.password} 
                    onChange={this.handleChange("password")}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}/>
                <p className="inlineError">{this.localErrors.password}</p>
                {this.renderErrors()}
                <input type="submit" value="Log in" className="login"/>
                <input type="submit" value="Demo Login" className="demo" onClick={this.demoLogin}/>
                <p className='reset'><a href="#">Reset password</a></p>
            </form>
        )
    }
}