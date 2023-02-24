import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import "../../Style/user.css";
import { Link } from "react-router-dom";
import { FaWindowClose } from "react-icons/fa";

// For Alert
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { loadUser, logout, updateProfileDetail } from "../../Redux/actions/userAction";
import { UPDATE_RESET } from "../../Redux/constance/userConstance";

const showUpdateForm = () => {
  const editForm = document.getElementById("editForm");
  editForm.classList.toggle("showUpdateForm");
};
const showupdatePassword = () => {
  const editForm = document.getElementById("updatePassword");
  editForm.classList.toggle("showupdatePassword");
};

const User = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, isAuthenticated, user, error } = useSelector(
    (state) => state.user
  );
  const {isUpdated} = useSelector((state) => state.profile)

  const [avtarPreview, setAvtarPreview] = useState(
    user.user && user.user.avtar.url
  );
  const [avtar, setAvtar] = useState("");
  const [name, setName] = useState(user.user && user.user.name);
  const [email, setEmail] = useState(user.user && user.user.email);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
    if (isUpdated) {
      toast("Profile Updated Successful");
      dispatch(loadUser())
      navigate("/");
      dispatch({
        type: UPDATE_RESET,
      })
    }
    if (error) {
      return toast(error);
    }
  }, [isAuthenticated, error, navigate, isUpdated, dispatch]);

  const logoutAccount = () => {
    dispatch(logout());
    toast("Logout Successful");
    navigate("/");
  };

  const updateProfile = (e) => {
    e.preventDefault();
    dispatch(updateProfileDetail({name, email, avtar}))
  };

  const updateOnChange = (e) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      if (fileReader.readyState === 2) {
        setAvtarPreview(fileReader.result);
        setAvtar(fileReader.result);
      }
    };
    fileReader.readAsDataURL(e.target.files[0]);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="profile">
          <div className="container textCenter">
            <div className="content flex alignCenter flexDirCol">
              <div className="image ">
                {user.user ? (
                  <img
                    src={
                      user.user.avtar.url
                        ? user.user.avtar.url
                        : "https://easydrawingguides.com/wp-content/uploads/2021/12/how-to-draw-a-scared-face-featured-image-1200.png"
                    }
                    alt=""
                  />
                ) : (
                  ""
                )}
              </div>
              <div className="detail">
                <h4>Name: {user.user && user.user.name}</h4>
                <p>User ID: {user.user && user.user._id}</p>
                <h6>User E-Mail: {user.user && user.user.email}</h6>
                <h6>Role: {user.user && user.user.role}</h6>
                <h6>
                  Joinded On: {user.user && user.user.createdAt.slice(0, 10)}
                </h6>
              </div>
            </div>

            <div className="buttons flex alignCenter justifyCenter">
              <button className="globalBtnFillBtn" onClick={""}>
                <Link to={"/cart"}>Your Cart</Link>
              </button>
              <button className="globalBtnFillBtn" onClick={""}>
                <Link to={"/"}>Home</Link>
              </button>
              <button className="globalBtnFillBtn" onClick={""}>
                <Link to={"/orders"}>My Orders</Link>
              </button>
              <button className="globalBtnFillBtn" onClick={""}>
                <Link to={"/products"}>Start Shopping</Link>
              </button>
              {user.user && user.user.role === "Admin" ? (
                <button className="globalBtnFillBtn" onClick={""}>
                  Go To DashBoard
                </button>
              ) : (
                ""
              )}
            </div>
            <div className="buttons flex alignCenter justifyCenter">
              <button className="globalBtnFillBtn" onClick={logoutAccount}>
                Logout
              </button>

              <button onClick={showUpdateForm} className="globalBtnFillBtn">
                Edit Profile
              </button>
              <button onClick={showupdatePassword} className="globalBtnFillBtn">
                Update Password
              </button>
            </div>
          </div>
        </div>
      )}

      <div id="editForm" className="editForm">
        <div className="container flex justifyCenter alignCenter">
          <form className="form" onSubmit={updateProfile}>
            <span onClick={showUpdateForm} className="close">
              <FaWindowClose />
            </span>
            <input
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder={`Name: ${user.user && user.user.name}`}
            />
            <input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder={`E-Mail: ${user.user && user.user.email}`}
            />
            <input
              name="avtar"
              onChange={updateOnChange}
              placeholder="Your Profile Picture"
              type="file"
              accept="image/*"
            />
            <div className="image">
              <img src={avtarPreview} alt="" />
            </div>
            <button type="submit" className="globalBtnFillBtn">
              Update Profile
            </button>
          </form>
        </div>
      </div>

      <div id="updatePassword" className="editForm">
        <div className="container flex justifyCenter alignCenter">
          <form className="form" onSubmit={updateProfile}>
            <span onClick={showupdatePassword} className="close">
              <FaWindowClose />
            </span>
            <input
              name="oldPassword"
              onChange={updateOnChange}
              type="text"
              placeholder={`Old Password`}
            />
            <input
              name="newPassword"
              onChange={updateOnChange}
              type="password"
              placeholder={`Enter New Password`}
            />
            <input
              name="cPassword"
              onChange={updateOnChange}
              placeholder="Enter Your Confirm Password"
              type="text"
            />
            <button type="submit" className="globalBtnFillBtn">
              Update Password
            </button>
          </form>
        </div>
      </div>

      <ToastContainer position="bottom-right" />
    </>
  );
};

export default User;
