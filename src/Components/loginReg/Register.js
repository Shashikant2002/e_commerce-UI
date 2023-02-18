import React, { useState } from 'react';
import "../../Style/logReg.css"
import { Link } from 'react-router-dom';

const Register = () => {
    const [registerForm, setreRisterForm] = useState({
        name: "",
        email: "",
        password: "",
        cPassword: ""
    });
    const [avtar, setAvtar] = useState("");
    const [avtarPreview, setAvtarPreview] = useState("https://easydrawingguides.com/wp-content/uploads/2021/12/how-to-draw-a-scared-face-featured-image-1200.png");

    const { name, email, password, cPassword } = registerForm;

    const registerFormData = (e) => {
        e.preventDefault();
        const loginFormData = new FormData();
        loginFormData.set("name", name)
        loginFormData.set("email", email)
        loginFormData.set("password", password)
        loginFormData.set("cPassword", cPassword)
        loginFormData.set("avtar", avtar)
        console.log("register form submited")
    }

    const registerOnChange = (e) => {
        if (e.target.name === "avtar") {
            const fileReader = new FileReader();
            fileReader.onload = () => {
                if (fileReader.readyState === 2) {
                    setAvtarPreview(fileReader.result)
                    setAvtar(fileReader.result)
                }
            }
            fileReader.readAsDataURL(e.target.files[0]);
        } else {
            setreRisterForm({ ...registerForm, [e.target.name]: e.target.value })
        }
    }

    console.log(registerForm, avtar)

    return (
        <div className="login commonSec">
            <div className="container">
                <form encType='multipart/form-data' onSubmit={registerFormData} className="login_form">
                    <input name='name' onChange={registerOnChange} placeholder='Enter Your Name' type="text" />
                    <input name='email' onChange={registerOnChange} placeholder='Enter Your Email' type="email" />
                    <input name='password' onChange={registerOnChange} placeholder='Enter Your Password' type="password" />
                    <input name='cPassword' onChange={registerOnChange} placeholder='Enter Confirm Password' type="text" />
                    <input name='avtar' onChange={registerOnChange} placeholder='Your Profile Picture' type="file" accept='image/*' />
                    <div className="image">
                        <img src={avtarPreview} alt="" />
                    </div>
                    <button className='globalBtnFillBtn' type='submit'>Register Now</button>
                    <p><Link to={"/login"}>Login Here</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Register