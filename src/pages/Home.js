import React from "react";
import Banner from "../Components/compo/Banner";
import Products from "../Components/compo/Products";
import MataData from "../Components/MataData";

const Home = () => {
  return (
    <>
      <MataData title="E-Com" />
      <Banner
        title="Welcome to Our E-Commerce Website"
        mainTitle="Find Your Product"
      />
      <Products title="Products" productCount={8} />
    </>
  );
};

export default Home;
