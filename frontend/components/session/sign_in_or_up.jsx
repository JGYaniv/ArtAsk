import React from 'react'
import LogIn from './login'
import SignUp from './signup'
import Volunteer from './volunteer'
import {Switch, Route, Link} from 'react-router-dom'
import {AuthRoute} from '../../utils/route_utils'

class SignInOrUp extends React.Component {
    constructor(props){
        super(props)

        this.demoLogin = this.demoLogin.bind(this)
    }

    // swampy AF, dry it up
    demoLogin(e) {
        e.preventDefault();
        this.props.login({ email: 'bob@tablo.co', password: '123456' })
    }
    // swampy method alert

    render(){
        const SignInOrUpForm = () => (
            <form className='sign-in-or-up'>
                {/* facebook and google oauth features to be added: */}
                <input type="submit" value="Facebook" className="facebook" onClick={() => alert('oAuth featuer coming soon!')} />
                {/* ^^ oauth feature coming soon ^^ */}

                <input type="submit" value="Demo Log In" className="demo" onClick={this.demoLogin}/>
                <p>or</p>
                <p>Log in or sign up with email</p>
                <nav>
                    <Link className="session-link" to="/a/login">Log In</Link>
                    <Link className="session-link" to="/a/signup">Sign Up</Link>
                </nav>
                <p className='terms'>By clicking below you are agreeing to the ArtAsk <a href="#">terms and conditions.</a></p>
            </form>
        )
        
        return(
            <div className="session">
                <div>
                    <a href="/"><img src='https://i.imgur.com/sh8ARuh.png' /></a>
                    <Switch>
                        <Route exact path='/a' component={SignInOrUpForm} />
                        <Route path='/a/login' render={(props) => <LogIn {...props} 
                            login={this.props.login} 
                            errors={this.props.errors}/>} />
                        <Route path='/a/signup' render={(props) => <SignUp {...props} 
                            postUser={this.props.postUser} 
                            errors={this.props.errors} />} />
                        <Route path='/a/volunteer' render={(props) => <Volunteer {...props} 
                            postUser={this.props.postUser} 
                            errors={this.props.errors} />} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default SignInOrUp;