import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);
  return (
    <>
      <BrowserRouter>
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
            exact
            path="/detailPage"
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
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
