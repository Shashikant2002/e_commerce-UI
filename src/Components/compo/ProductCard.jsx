import React from "react";
import { Link } from "react-router-dom";
import "../../Style/productCard.css";
import ReactStars from "react-stars";

const ProductCard = ({data}) => {
  const {category, description, name, numOfReviews, price, ratings, stock, _id} = data;
  return (
    <>
      <Link to={`/product/${_id}`}>
        <div className="productCard">
          <div className="thumb">
            <img
              src="https://m.media-amazon.com/images/I/81anm+VxFKL._SL1500_.jpg"
              alt="////"
            />
          </div>
          <div className="content">
            <h6>{name}</h6>
            <p className="flex justifyCenter">
              <ReactStars
                count={5}
                size={24}
                color2={"#0526a2"}
                edit={false}
                value={ratings}
              />
            </p>
            <h5>₹{price}</h5>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
