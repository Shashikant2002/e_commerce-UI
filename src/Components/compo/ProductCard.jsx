import React from "react";
import { Link } from "react-router-dom";
import "../../Style/productCard.css";
import ReactStars from "react-stars";

const ProductCard = () => {
  return (
    <>
      <Link to="/detailPage">
        <div className="productCard">
          <div className="thumb">
            <img
              src="https://m.media-amazon.com/images/I/81anm+VxFKL._SL1500_.jpg"
              alt="////"
            />
          </div>
          <div className="content">
            <h6>Product Name</h6>
            <p className="flex justifyCenter">
              <ReactStars
                count={5}
                size={24}
                color2={"#ffd700"}
                edit={false}
                value={4.5}
              />
            </p>
            <h5>₹4000</h5>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
