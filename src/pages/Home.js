import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../Components/compo/Banner";
import Loading from "../Components/compo/Loading";
import Products from "../Components/compo/Products";
import MataData from "../Components/MataData";
import { getProduct } from "../Redux/actions/productAction"

const Home = () => {
  const { loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch])


  return (
    <>
      {
        loading && loading ? <Loading /> :
          <>
            <MataData title="E-Com" />
            <Banner
              title="Welcome to Our E-Commerce Website"
              mainTitle="Find Your Product"
            />
            <Products title="Products" productCount={8} />
          </>
      }
    </>
  );
};

export default Home;
