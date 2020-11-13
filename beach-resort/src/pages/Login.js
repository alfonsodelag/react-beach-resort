import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from "react-router-dom"
import logo from '../images/logo.svg'
import { auth } from '../firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = event => {
        event.preventDefault(); //Stopping the refresh when submitting
        // login logic
        auth
            .signInWithEmailAndPassword(email, password)
            // if it works....
            .then((auth) => {
                // logged in, redirect to homepage
                history.push("/");
            })
            .catch(e => alert(e.message))
    }

    const register = (event) => {
        event.preventDefault(); //Stopping the refresh when submitting
        // register logic
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(auth => {
                // created a user and logged in, redirect to homepage
                history.push("/");
            })
            .catch(e => alert(e.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src={logo}
                    alt=""
                />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
                </form>

                <p>By Signing In, you agree to our Terms and Conditions. Please see our Privacy Notice, our Cookies Notice, and our Interest-Based Ads notice.</p>
                <button onClick={register}>Create your Account</button>
            </div>

        </div>
    )
}

export default Login
