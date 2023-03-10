import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, forgetPasswordMain } from "../../Redux/actions/userAction";
import "../../Style/user.css";
import Loading from "./Loading";

// For Alert
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  const { loading, message, error } = useSelector((state) => state.forgetPasswordReducer);
  console.log(message)

  useEffect(() => {
    if (error) {
      toast(error);
      dispatch(clearErrors());
      return () => {
        console.log(error);
      }
    }
    if (message) {
      toast(message);
      dispatch(clearErrors());
      return () => {
        console.log(message);
      }
    }
  }, [error, dispatch, message]);
  
  const forgetPassword = (e) => {
    e.preventDefault();
    console.log(email)
    dispatch(forgetPasswordMain(email));
  };

  const forgetPasswordOnChance = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      {loading && loading ? (
        <Loading />
      ) : (
        <div className="forgetPassword">
          <div className="container flex justifyCenter alignCenter">
            <form className="form" onSubmit={forgetPassword}>
              <input
                name="oldPassword"
                onChange={forgetPasswordOnChance}
                type="text"
                value={email}
                placeholder={`Enter Your Email Id`}
              />
              <button type="submit" className="globalBtnFillBtn">
                Update Password
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ForgetPassword;
