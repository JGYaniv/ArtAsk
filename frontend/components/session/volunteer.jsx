import React from 'react'

export default class SignUp extends React.Component {
    constructor(props) {
        super(props)
        const { errors, postUser, history } = props.sessionProps
        this.errors = errors
        this.postUser = postUser
        this.history = history

        this.state = { email: "", password: "", first_name: "", last_name: "", area_code: "", account_type: "client" }

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
        if (this.errors.length > 0) {
            return (
                <ul>
                    {this.errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
            )
        }
        return errors
    }

    render() {
        return (
            <form className="signup volunteer" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="First Name" onChange={this.handleChange("first_name")} value={this.state.first_name} />
                <input type="text" placeholder="Last Name" onChange={this.handleChange("last_name")} value={this.state.last_name} />
                <input type="text" placeholder="Email Address" onChange={this.handleChange("email")} value={this.state.email} />
                <input type="password" placeholder="Password" onChange={this.handleChange("password")} value={this.state.password} />
                <input type="text" placeholder="Area Code" onChange={this.handleChange("area_code")} value={this.state.area_code} />
                {this.renderErrors()}
                <p>By clicking below you are agreeing to the ArtAsk <a href="#">terms and conditions.</a></p>
                <input type="submit" value="Start Volunteering!" />
            </form>
        )
    }
}