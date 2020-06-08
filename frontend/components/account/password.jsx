import React from 'react'
import { verification } from '../../utils/users_api_utils'

export default class Password extends React.Component {
    constructor(props) {
        super(props)
        this.state = { oldPassword: "", newPassword: "", confirmPassword: "" }
        this.localErrors = {}
        this.verification = verification
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
    }

    componentDidMount() {
        this.props.clearSessionErrors()
    }

    handleChange(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
            this.forceUpdate()
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.currentUser.email === "bob@tablo.co") {
            alert("Cannot edit demo account Mr. Tables!")
        } else {
            this.verification({
                id: this.props.currentUser.id,
                email: this.props.currentUser.email, 
                password: this.state.oldPassword
            }).then( res => {
                if (res.bool && this.state.newPassword == this.state.confirmPassword){
                    this.props.update({
                        id: this.props.currentUser.id,
                        password: this.state.newPassword
                    }).then(
                        () => this.props.history.push('/account')
                    )
                } else {
                    this.localErrors.oldPassword = "Invalid password"
                    let tester = this.localErrors
                    this.forceUpdate();
                }
            })
        }
    }

    handleFocus(e) {
        e.target.classList.add("activeInput")
    }

    handleBlur(e) {
        if (e.target.value.length < 1) {
            e.target.classList.add("invalidInput")
            this.localErrors[e.target.name] = "Cannot be blank 🥺"
        }
        else if (e.target.name === 'confirmPassword' && 
            !(this.state.newPassword == this.state.confirmPassword)) {
                e.target.classList.add("invalidInput")
                this.localErrors[e.target.name] = "Passwords must match 😑"
        }
        else {
            e.target.classList.remove("invalidInput")
            delete this.localErrors[e.target.name]
        }
        e.target.classList.remove("activeInput")
        this.forceUpdate();
    }


    //maybe this can be refactored into a util file
    renderErrors() {
        let errors = []
        if (this.props.sessionErrors.length > 0) {
            return (
                <ul className='errors'>
                    {this.props.sessionErrors.map((error, idx) => (
                        <li key={idx} className="error">{error}</li>
                    ))}
                </ul>
            )
        }
        return errors
    }

    render() {
        return (
            <div>
                <h2>Change Password</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter current password:</label>
                    <input
                        type="password"
                        value={this.state.oldPassword}
                        onChange={this.handleChange("oldPassword")}
                        name="oldPassword"
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur} />
                    <p className="inlineError">{this.localErrors.oldPassword}</p>
                    <label>Enter new password:</label>
                    <input
                        type="password"
                        name="newPassword"
                        value={this.state.newPassword}
                        onChange={this.handleChange("newPassword")}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur} />
                    <p className="inlineError">{this.localErrors.newPassword}</p>
                    <label>Confirm new password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={this.state.confirmPassword}
                        onChange={this.handleChange("confirmPassword")}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur} />
                    <p className="inlineError">{this.localErrors.confirmPassword}</p>
                    {this.renderErrors()}
                    <span>
                        <button>Cancel</button>
                        <button>Submit</button>
                    </span>
                </form>
            </div>
        )
    }
}