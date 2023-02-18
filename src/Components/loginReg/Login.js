import React, { useState } from 'react';
import "../../Style/logReg.css";
import { Link } from 'react-router-dom';

const Login = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const loginSubmit = (e) => {
        e.preventDefault();
        // const loginFormData = new FormData();
        // loginForm.set("email", loginEmail)
        // loginForm.set("password", loginPassword)
        console.log("login form submited")
    }

  return (
    <>
        <div className="login commonSec">
            <div className="container">
                <form onSubmit={loginSubmit} className="login_form">
                    <input value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} placeholder='Enter Your Email' type="email" />
                    <input value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} placeholder='Enter Your Password' type="password" />
                    <button className='globalBtnFillBtn' type='submit'>Login</button>
                    <p><Link to={"/register"}>Register Now</Link></p>
                    <p><Link to={"/register"}>Forget Password</Link></p>
                </form>
            </div>
        </div>
    </>
  )
}

export default Login