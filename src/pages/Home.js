import React from "react";
import Banner from "../Components/compo/Banner";
import Products from "../Components/compo/Products";

const Home = () => {
  return (
    <>
      <Banner
        title="Welcome to Our E-Commerce Website"
        mainTitle="Find Your Product"
      />
      <Products title="Products" productCount={8} />
    </>
  );
};

export default Home;
