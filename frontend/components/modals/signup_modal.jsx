import React from 'react'
import Signup from "../session/signup"

export default ({
    clearErrors,
    openModal,
    closeModal,
    postUser,
    login,
    errors
}) => {
    const demoLogin = (e) => {
        e.preventDefault();
        login({ email: 'bob@tablo.co', password: '123456' })
    }

    const facebook = (e) => {
        e.preventDefault();
        alert("oAuth feature coming sooooon!")
    }

    const loginLink = (e) => {
        e.preventDefault();
        openModal("login")
    }

    return (
        <div className="session-modal">
            <h1>Create an account</h1>
            <h2>You'll be able to review everything before confirming</h2>
            <Signup
                clearErrors={clearErrors}
                closeModal={closeModal}
                postUser={postUser}
                errors={errors} />
            <p className="or">or</p>
            <nav>
                <a href="#" className="session-link" onClick={facebook}>Facebook</a>
                <a href="#" className="session-link" onClick={demoLogin}>Use Demo Account</a>
            </nav>
            <span className="login-link">
                <p>Have an Account?</p>
                <a href="#" onClick={loginLink}>Log In</a>
            </span>
        </div>
    )
}