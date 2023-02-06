import React from 'react';
import { Link } from 'react-router-dom';
import "../../Style/productCard.css";

const ProductCard = () => {
    return (
        <>
            <Link to="/detailPage">
                <div className="productCard">
                    <div className="thumb">
                        <img src="https://m.media-amazon.com/images/I/81anm+VxFKL._SL1500_.jpg" alt="////" />
                    </div>
                    <div className="content">
                        <h6>Product Name</h6>
                        <p>⭐⭐⭐⭐⭐</p>
                        <h5>₹4000</h5>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default ProductCard