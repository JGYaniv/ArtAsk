import React from 'react'

export default class SignUp extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="session-background-image">
                <form className="signup">
                    <img src='https://i.imgur.com/sh8ARuh.png' />
                    <input type="text" placeholder="First Name"/>
                    <input type="text" placeholder="Last Name"/>
                    <input type="text" placeholder="Email Address"/>
                    <input type="password" placeholder="Password"/>
                    <input type="text" placeholder="Zip Code"/>
                    <p>By clicking below you are agreeing to the ArtAsk <a href="#">terms and conditions.</a></p>
                    <input type="submit" value="Sign up"/>
                </form>
            </div>
        )
    }
}