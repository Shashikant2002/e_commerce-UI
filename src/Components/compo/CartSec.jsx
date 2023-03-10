import React, { useEffect, useState } from "react";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addItemsToCart, removeCart } from "../../Redux/actions/cartAction";
import "../../Style/cartCss.css";

const CartSec = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const [subTotal, setSubTotal] = useState(0);
  const [count, setCount] = useState(1);
  useEffect(() => {
    if (count <= 0) {
      setCount(1);
    }
  }, [count]);
  console.log(cartItems);

  useEffect(() => {
    let subTotal = 0;
    cartItems.forEach((ele) => {
      let proTotal = ele.quentity * ele.price;
      subTotal += proTotal;
      setSubTotal(subTotal);
    });
  }, [count, cartItems]);

  const incQuentity = (id, quentity, stock) => {
    console.log(id, quentity, stock);
    const newQty = quentity + 1;
    if (stock <= quentity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };
  const decreatseQuentity = (id, quentity, stock) => { 
    console.log(id, quentity, stock);
    const newQty = quentity - 1;
    if (quentity <= 1) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const removeCartMain = (id) => {
    dispatch(removeCart(id))
  }

  return (
    <>
      <div className="cartSec commonSec">
        <div className="container">
          {cartItems.length === 0 ? (
            <div className="shopingNow textCenter">
              <span>
                <MdOutlineRemoveShoppingCart />
              </span>
              <h4>No Product in Your Cart</h4>
              <Link className="globalBtnFillBtn" to="/products">
                View Product
              </Link>
            </div>
          ) : (
            <div className="cartProduct">
              <div className="table">
                <div className="head flex">
                  <div className="head_1">
                    <h5>Products</h5>
                  </div>
                  <div className="head_2">
                    <h5>Quentity</h5>
                  </div>
                  <div className="head_3">
                    <h5>Subtot0al</h5>
                  </div>
                </div>
                <div className="body">
                  {cartItems &&
                    cartItems.map((ele) => {
                      return (
                        <div className="pro flex alignCenter">
                          <div className="head_1 flex alignCenter">
                            <div className="image">
                              <Link to={`/product/${ele.product}`}>
                                <img src={ele.image} alt="" />
                              </Link>
                            </div>
                            <div className="content">
                              <h6>{ele.name}</h6>
                              <p>
                                Price:{" "}
                                <span>
                                  <b>${ele.price}</b>
                                </span>
                              </p>
                              <button onClick={() => removeCartMain(ele.product)} className="globalBtn">Remove</button>
                            </div>
                          </div>
                          <div className="head_2">
                            <div className="contQuentity flex alignCenter">
                              <h5
                                onClick={() =>
                                  decreatseQuentity(
                                    ele.product,
                                    ele.quentity,
                                    ele.stock
                                  )
                                }
                                className="globalBtnFillBtn"
                              >
                                -
                              </h5>
                              <input
                                className="count textCenter"
                                type="text"
                                value={ele.quentity}
                              />
                              <h5
                                className="globalBtnFillBtn"
                                onClick={() =>
                                  incQuentity(
                                    ele.product,
                                    ele.quentity,
                                    ele.stock
                                  )
                                }
                              >
                                +
                              </h5>
                            </div>
                          </div>
                          <div className="head_3">
                            <h5>${ele.quentity * ele.price}</h5>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className="grossTotal">
                <div className="gross flex justifySpaceBetween">
                  <h6>Gross Total</h6>
                  <h5>${subTotal}</h5>
                </div>
                <button className="globalBtnFillBtn">Check Out Now</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSec;
