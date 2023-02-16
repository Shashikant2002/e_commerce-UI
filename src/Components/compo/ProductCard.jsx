import React from "react";
import { Link } from "react-router-dom";
import "../../Style/productCard.css";
import ReactStars from "react-stars";

const ProductCard = ({data}) => {
  const {category, description, name, images, numOfReviews, price, ratings, stock, _id} = data;
  return (
    <>
      <Link to={`/product/${_id}`}>
        <div className="productCard">
          <div className="thumb">
            <img
              src={images[0].url}
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
