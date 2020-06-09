import React from 'react'
import Login from "../session/login"

export default ({
    clearErrors,
    openModal,
    closeModal,
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

    const forgot = (e) => {
        e.preventDefault();
        alert("try a demo account!")
    }

    const signupLink = (e) => {
        e.preventDefault();
        openModal("signup")
    }

    return (
        <div className="session-modal">
            <h1>Please log in to continue</h1>
            <Login
                clearErrors={clearErrors}
                closeModal={closeModal}
                login={login}
                errors={errors} />
            <p className="or">or</p>
            <nav>
                <a href="#" className="session-link" onClick={facebook}>Facebook</a>
                <a href="#" className="session-link" onClick={demoLogin}>Use Demo Account</a>
            </nav>
            <span className="login-link">
                <p>Don't have an Account?</p>
                <a href="#" onClick={signupLink}>Sign up</a>
            </span>
            <p className='modal-reset'><a href="#" onClick={forgot}>Forgot Password?</a></p>
        </div>
    )
}