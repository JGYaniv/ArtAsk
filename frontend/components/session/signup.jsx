import React from 'react'

export default class SignUp extends React.Component {
    constructor(props){
        super(props)
        this.postUser = props.postUser

        this.state = { email: "", password: "", first_name: "", last_name: "", area_code: "", account_type: "client"}
        this.localErrors = {}
        this.handleBlur = this.handleBlur.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.clearErrors()
    }
    
    handleChange(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.postUser(this.state)
            .then(() => this.props.history.push('/dashboard'))
    }

    handleFocus(e) {
        e.target.classList.add("activeInput")
    }

    validateEmail(email) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) { return true }
        return false
    }

    validateAreaCode(zip) {
        if (/^\d{5}$/.test(zip)) { return true }
        return false
    }

    handleBlur(e) {
        if (e.target.value.length < 1) { 
            e.target.classList.add("invalidInput")
            this.localErrors[e.target.name] = "Cannot be blank 🥺" 
        }
        else if (e.target.name === 'email' && !this.validateEmail(e.target.value)) {
            e.target.classList.add("invalidInput")
            this.localErrors[e.target.name] = "Invalid email address 😅"
        }
        else if (e.target.name === 'area_code' && !this.validateAreaCode(e.target.value)) {
            e.target.classList.add("invalidInput")
            this.localErrors[e.target.name] = "Invalid area code 🤔"
        }
        else { 
            e.target.classList.remove("invalidInput")
            delete this.localErrors[e.target.name] 
        }
        e.target.classList.remove("activeInput")
        this.forceUpdate();
    }

    renderErrors() {
        let errors = []
        if (this.props.errors.length > 0) {
            return (
                <ul className='errors'>
                    {this.props.errors.map((error, idx) => (
                        <li key={idx} className='error'>{error}</li>
                    ))}
                </ul>
            )
        }
        return errors
    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>First Name</label>
                <input 
                    type="text" 
                    onChange={this.handleChange("first_name")} 
                    value={this.state.first_name}
                    name="first_name"
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur} />
                <p className="inlineError">{this.localErrors.first_name}</p>
                <label>Last Name</label>
                <input 
                    type="text" 
                    onChange={this.handleChange("last_name")} 
                    value={this.state.last_name}
                    name="last_name"
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur} />
                <p className="inlineError">{this.localErrors.last_name}</p>
                <label>Email Address</label>
                <input 
                    type="text" 
                    onChange={this.handleChange("email")} 
                    value={this.state.email}
                    name="email"
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur} />
                <p className="inlineError">{this.localErrors.email}</p>
                <label>Password</label>
                <input 
                    type="password" 
                    onChange={this.handleChange("password")} 
                    value={this.state.password}
                    name="password"
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur} />
                <p className="inlineError">{this.localErrors.password}</p>
                <label>Zip Code</label>
                <input 
                    type="text" 
                    onChange={this.handleChange("area_code")} 
                    value={this.state.area_code}
                    name="area_code"
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur} />
                <p className="inlineError">{this.localErrors.area_code}</p>
                {this.renderErrors()}
                <p className='big-terms'>By clicking below you are agreeing to the ArtAsk <a href="#" onClick={e => e.preventDefault()}>terms and conditions. </a>Please read them carefully!</p>
                <input type="submit" value="Sign up" className="signup"/>
            </form>
        )
    }
}