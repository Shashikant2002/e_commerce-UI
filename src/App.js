import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Banner from "./Components/compo/Banner";
import CartSec from "./Components/compo/CartSec";
import ProductDetailPage from "./Components/compo/ProductDetailPage";
import Products from "./Components/compo/Products";
import Footer from "./Components/headFoot/Footer";
import Header from "./Components/headFoot/Header";
import WebFont from "webfontloader";
import { useEffect } from "react";
import Home from "./pages/Home";
// For Alert
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import Login from "./Components/loginReg/Login";
import Register from "./Components/loginReg/Register";
import store from "./Redux/store.js";
import { loadUser } from "./Redux/actions/userAction";
import User from "./Components/compo/User";
import ForgetPassword from "./Components/compo/ForgetPassword";
import ResetPassword from "./Components/compo/ResetPassword";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());
  }, []);

  const { error } = useSelector((state) => state.products);
  useEffect(() => {
    toast(error);
  }, [error]);

  return (
    <>
      <BrowserRouter>
        <ToastContainer position="bottom-right" />
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />

          <Route
            exact
            path="/products"
            element={
              <>
                <Banner mainTitle="All Products" />
                <Products title="All Products" />
              </>
            }
          />
          <Route
            path="/products/:keyword"
            element={
              <>
                <Banner mainTitle="All Products" />
                <Products title="All Products" />
              </>
            }
          />

          <Route
            exact
            path="/product/:id"
            element={
              <>
                <Banner mainTitle="Product Detail" />
                <ProductDetailPage />
              </>
            }
          />

          <Route
            exact
            path="/cart"
            element={
              <>
                <Banner mainTitle="Your Cart" />
                <CartSec />
              </>
            }
          />

          <Route
            exact
            path="/login"
            element={
              <>
                <Banner mainTitle="Login Here" />
                <Login />
              </>
            }
          />
          <Route
            exact
            path="/register"
            element={
              <>
                <Banner mainTitle="Register Here" />
                <Register />
              </>
            }
          />

          <Route
            exact
            path="/profile" 
            element={
              <>
                <Banner mainTitle="Your Profile" />
                <User />
              </>
            }
          />

          <Route
            exact
            path="/password/resetpassword/:token" 
            element={
              <>
                <Banner mainTitle="Your Profile" />
                <ResetPassword />
              </>
            }
          />

          <Route
            exact
            path="/forgetPassword" 
            element={
              <>
                <Banner mainTitle="Forget Password" />
                <ForgetPassword />
              </>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
