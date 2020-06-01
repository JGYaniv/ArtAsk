import React from 'react'

export default class SignUp extends React.Component {
    constructor(props){
        super(props)
        this.postUser = props.postUser

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
        this.postUser(this.state)
            .then(() => this.props.history.push('/dashboard'))
    }

    renderErrors() {
        let errors = []
        if (this.props.errors.length > 0) {
            return (
                <ul>
                    {this.props.errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
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
                <input type="text" onChange={this.handleChange("first_name")} value={this.state.first_name}/>
                <label>Last Name</label>
                <input type="text" onChange={this.handleChange("last_name")} value={this.state.last_name}/>
                <label>Email Address</label>
                <input type="text" onChange={this.handleChange("email")} value={this.state.email}/>
                <label>Password</label>
                <input type="password" onChange={this.handleChange("password")} value={this.state.password}/>
                <label>Zip Code</label>
                <input type="text" onChange={this.handleChange("area_code")} value={this.state.area_code}/>
                {this.renderErrors()}
                <p className='big-terms'>By clicking below you are agreeing to the ArtAsk <a href="#">terms and conditions. </a>Please read them carefully!</p>
                <input type="submit" value="Sign up" className="signup"/>
            </form>
        )
    }
}