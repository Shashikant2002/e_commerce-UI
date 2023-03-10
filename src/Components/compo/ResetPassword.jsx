import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { clearErrors, resetPasswordMain } from "../../Redux/actions/userAction";
import Loading from "./Loading";
// For Alert
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const ResetPassword = () => {
    const navigate = useNavigate();
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { token } = useParams();

  const { loading, error, message } = useSelector((state) => state.resetPasswordReducer);

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

  const resetPasswordPassword = (e) => {
    e.preventDefault();
    console.log(token);
    dispatch(resetPasswordMain({ password, confirmPassword, token }));
    navigate("/")
  };

  return (
    <>
      {loading && loading ? (
        <Loading />
      ) : (
        <div className="forgetPassword">
          <div className="container flex justifyCenter alignCenter">
            <form className="form" onSubmit={resetPasswordPassword}>
              <input
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                value={password}
                placeholder={`Enter Your New Password`}
              />
              <input
                name="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="text"
                value={confirmPassword}
                placeholder={`Enter Your Confirm Password`}
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

export default ResetPassword;
