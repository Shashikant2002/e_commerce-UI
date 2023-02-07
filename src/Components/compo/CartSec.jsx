import React, { useEffect, useState } from 'react';
import { MdOutlineRemoveShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import "../../Style/cartCss.css";

const CartSec = () => {
    const [count, setCount] = useState(1);
    useEffect(() => {
        if (count <= 0) {
            setCount(1);
        }
    }, [count])
    return (
        <>
            <div className="cartSec commonSec">
                <div className="container">
                    <div className="shopingNow textCenter">
                        <span><MdOutlineRemoveShoppingCart /></span>
                        <h4>No Product in Your Cart</h4>
                        <Link className='globalBtnFillBtn' to="/products">View Product</Link>
                    </div>

                    <div className="cartProduct">
                        <div className="table">
                            <div className="head flex">
                                <div className="head_1"><h5>Products</h5></div>
                                <div className="head_2"><h5>Products</h5></div>
                                <div className="head_3"><h5>Products</h5></div>
                            </div>
                            <div className="body">
                                <div className="pro flex alignCenter">
                                    <div className="head_1 flex alignCenter">
                                        <div className="image">
                                            <img src="https://m.media-amazon.com/images/I/81anm+VxFKL._SL1500_.jpg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
                                            <p>Price: <span><b>$3499</b></span></p>
                                            <button className='globalBtn'>Remove</button>
                                        </div>
                                    </div>
                                    <div className="head_2">
                                        <div className="contQuentity flex alignCenter">
                                            <h5 onClick={() => setCount(count - 1)} className='globalBtnFillBtn'>-</h5><input className='count textCenter' type="text" value={count} /><h5 className='globalBtnFillBtn' onClick={() => setCount(count + 1)}>+</h5>
                                        </div>
                                    </div>
                                    <div className="head_3"><h5>$8974</h5></div>
                                </div>
                                <div className="pro flex alignCenter">
                                    <div className="head_1 flex alignCenter">
                                        <div className="image">
                                            <img src="https://m.media-amazon.com/images/I/81anm+VxFKL._SL1500_.jpg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
                                            <p>Price: <span><b>$3499</b></span></p>
                                            <button className='globalBtn'>Remove</button>
                                        </div>
                                    </div>
                                    <div className="head_2">
                                        <div className="contQuentity flex alignCenter">
                                            <h5 onClick={() => setCount(count - 1)} className='globalBtnFillBtn'>-</h5><input className='count textCenter' type="text" value={count} /><h5 className='globalBtnFillBtn' onClick={() => setCount(count + 1)}>+</h5>
                                        </div>
                                    </div>
                                    <div className="head_3"><h5>$8974</h5></div>
                                </div>
                                <div className="pro flex alignCenter">
                                    <div className="head_1 flex alignCenter">
                                        <div className="image">
                                            <img src="https://m.media-amazon.com/images/I/81anm+VxFKL._SL1500_.jpg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
                                            <p>Price: <span><b>$3499</b></span></p>
                                            <button className='globalBtn'>Remove</button>
                                        </div>
                                    </div>
                                    <div className="head_2">
                                        <div className="contQuentity flex alignCenter">
                                            <h5 onClick={() => setCount(count - 1)} className='globalBtnFillBtn'>-</h5><input className='count textCenter' type="text" value={count} /><h5 className='globalBtnFillBtn' onClick={() => setCount(count + 1)}>+</h5>
                                        </div>
                                    </div>
                                    <div className="head_3"><h5>$8974</h5></div>
                                </div>
                            </div>
                        </div>
                        <div className="grossTotal">
                            <div className="gross flex justifySpaceBetween">
                                <h6>Gross Total</h6>
                                <h5>$789789</h5>
                            </div>
                            <button className='globalBtnFillBtn'>Check Out Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartSec