import React from 'react'

export default class EditProfile extends React.Component {
    constructor(props) {
        super(props)
        const { id, email, first_name, last_name, phone_number, area_code } = props.currentUser
        this.state = { id, email, first_name, last_name, phone_number, area_code }
        this.localErrors = {}
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
    }

    componentDidMount(){
        this.props.clearSessionErrors()
    }

    handleChange(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
            this.forceUpdate()
        }

    }

    validateEmail(email) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) { return true }
        return false
    }

    validateAreaCode(zip) {
        if (/^\d{5}$/.test(zip)) { return true }
        return false
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.email === "bob@tablo.co"){
            alert("Cannot edit demo account Mr. Tables!")
        } else {
            this.props.update(this.state)
                .then(() => this.props.history.push('/account'));
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
                <h2>Edit Profile</h2>
                <div className="profile-cols">
                    <div className="left-col">
                        <img src={this.props.currentUser.photo_url} className="profilePic"></img>
                    </div>
                    <div className="middle-col">
                        <form>
                            <label>First Name</label>
                            <input
                                type="text"
                                name="first_name"
                                value={this.state.first_name}
                                onChange={this.handleChange("first_name")}
                                onFocus={this.handleFocus}
                                onBlur={this.handleBlur} />
                            <p className="inlineError">{this.localErrors.first_name}</p>
                            <label>Email</label>
                            <input
                                type="text"
                                value={this.state.email}
                                onChange={this.handleChange("email")}
                                name="email"
                                onFocus={this.handleFocus}
                                onBlur={this.handleBlur} />
                            <p className="inlineError">{this.localErrors.email}</p>
                            <label>Phone Number</label>
                            <input
                                type="text"
                                name="phone_number"
                                value={this.state.phone_number || ""}
                                onChange={this.handleChange("phone_number")}
                                onFocus={this.handleFocus}
                                onBlur={this.handleBlur} />
                            <p className="inlineError">{this.localErrors.phone_number}</p>
                            <label>Zip Code</label>
                            <input
                                type="text"
                                name="area_code"
                                value={this.state.area_code}
                                onChange={this.handleChange("area_code")}
                                onFocus={this.handleFocus}
                                onBlur={this.handleBlur} />
                            <p className="inlineError">{this.localErrors.area_code}</p>
                            {this.renderErrors()}
                        </form>
                    </div>
                    <div className="middle-col">
                    <form>
                    <label>Last Name</label>
                    <input
                        type="text"
                        name="last_name"
                        value={this.state.last_name}
                        onChange={this.handleChange("last_name")}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur} />
                    <p className="inlineError">{this.localErrors.last_name}</p>
                    </form>
                    </div>
                </div>
                <form className="submit-buttons">
                    <span>
                        <button onClick={() => this.props.history.push('/account')}>Cancel</button>
                        <button onClick={this.handleSubmit}>Submit</button>
                    </span>
                </form>
            </div>
        )
    }
}