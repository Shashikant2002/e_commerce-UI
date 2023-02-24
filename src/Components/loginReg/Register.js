import React, { useEffect, useState } from "react";
import "../../Style/logReg.css";
import { Link, useNavigate } from "react-router-dom";
import { clearErrors, register } from "../../Redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../compo/Loading";
// For Alert
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [registerForm, setreRisterForm] = useState({
    name: "",
    email: "",
    password: "",
    cPassword: "",
  });
  const [avtar, setAvtar] = useState("");
  const [avtarPreview, setAvtarPreview] = useState(
    "https://easydrawingguides.com/wp-content/uploads/2021/12/how-to-draw-a-scared-face-featured-image-1200.png"
  );

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const { name, email, password, cPassword } = registerForm;

  const registerFormDataHandeler = (e) => {
    e.preventDefault();
    const registerFormData = new FormData();
    registerFormData.set("name", name);
    registerFormData.set("email", email);
    registerFormData.set("password", password);
    registerFormData.set("cPassword", cPassword);
    registerFormData.set("avtar", avtar);
    dispatch(register(registerFormData));
  };

  useEffect(() => {
    if (error) {
      toast(error);
      clearErrors();
    }
    if (isAuthenticated) {
      navigate("/profile");
    }
  }, [error, dispatch, loading, isAuthenticated, navigate]);

  const registerOnChange = (e) => {
    if (e.target.name === "avtar") {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        if (fileReader.readyState === 2) {
          setAvtarPreview(fileReader.result);
          setAvtar(fileReader.result);
        }
      };
      fileReader.readAsDataURL(e.target.files[0]);
    } else {
      setreRisterForm({ ...registerForm, [e.target.name]: e.target.value });
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="login commonSec">
          <div className="container">
            <form
              encType="multipart/form-data"
              onSubmit={registerFormDataHandeler}
              className="login_form"
            >
              <input
                name="name"
                onChange={registerOnChange}
                placeholder="Enter Your Name"
                type="text"
              />
              <input
                name="email"
                onChange={registerOnChange}
                placeholder="Enter Your Email"
                type="email"
              />
              <input
                name="password"
                onChange={registerOnChange}
                placeholder="Enter Your Password"
                type="password"
              />
              <input
                name="cPassword"
                onChange={registerOnChange}
                placeholder="Enter Confirm Password"
                type="text"
              />
              <input
                name="avtar"
                onChange={registerOnChange}
                placeholder="Your Profile Picture"
                type="file"
                accept="image/*"
              />
              <div className="image">
                <img src={avtarPreview} alt="" />
              </div>
              <button className="globalBtnFillBtn" type="submit">
                Register Now
              </button>
              <p>
                <Link to={"/login"}>Login Here</Link>
              </p>
            </form>
          </div>
          <ToastContainer position="bottom-right" />
        </div>
      )}
    </>
  );
};

export default Register;
