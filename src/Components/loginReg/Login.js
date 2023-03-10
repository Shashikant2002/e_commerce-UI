import React, { useEffect, useState } from "react";
import "../../Style/logReg.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login } from "../../Redux/actions/userAction";

// For Alert
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Loading from "../compo/Loading";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  let navigate = useNavigate();

  const dispatch = useDispatch();
  const { error, loading, isAuthenticated } = useSelector((state) => state.user);

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };

  useEffect(() => {
    if (error) {
      toast(error);
      clearErrors();
    }

    if(isAuthenticated){
        navigate('/profile')
    }

  }, [error, dispatch, isAuthenticated, navigate]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="login commonSec">
            <div className="container">
              <form onSubmit={loginSubmit} className="login_form">
                <input
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  type="email"
                />
                <input
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="Enter Your Password"
                  type="password"
                />
                <button className="globalBtnFillBtn" type="submit">
                  Login
                </button>
                <p>
                  <Link to={"/register"}>Register Now</Link>
                </p>
                <p>
                  <Link to={"/forgetPassword"}>Forget Password</Link>
                </p>
              </form>
            </div>
          </div>
        </>
      )}

      <ToastContainer position="bottom-right" />
    </>
  );
};

export default Login;
