import React from 'react'
import ProductCard from './ProductCard';
import data from '../../fakejson.json';
import { Link, useLocation } from 'react-router-dom';
import "../../Style/products.css"
import Devider from './Devider';
import { useSelector } from 'react-redux';
import ReactStars from 'react-stars';


const totalData = data.length;

const Products = ({ productCount = totalData, title }) => {
    const location = useLocation();
    const { loading, error, products, prodCount } = useSelector(state => state.products)
    const data = useSelector(state => state.products)

    console.log(data)
    return (
        <>
            <section id='products' className="products commonSec textCenter">
                <Devider title={title} />
                <div className="container flex">
                    {
                        location.pathname === "/products" ?
                            <div className="filter">
                                <form action='#' className="priceFilter fil">
                                    <input type="number" placeholder='₹ Min Price' />
                                    <input type="number" placeholder='₹ Max Price' />
                                    <button className='globalBtnFillBtn'>Search</button>
                                </form>
                                <div action='#' className="categoryFilter fil">
                                    <h4>Category</h4>
                                    <ul>
                                        <li>Category_1</li>
                                        <li>Category_2</li>
                                        <li>Category_3</li>
                                        <li>Category_4</li>
                                        <li>Category_5</li>
                                        <li>Category_6</li>
                                    </ul>
                                </div>
                                <div action='#' className="categoryFilter fil">
                                    <h4>Above Rating</h4>
                                    <ul>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            color2={"#0526a2"}
                                            edit={true}
                                            value={2.5}
                                        />
                                    </ul>
                                </div>
                                <div action='#' className="categoryFilter fil">
                                    <button className='globalBtnFillBtn'>Clear Filter</button>
                                </div>
                            </div>
                            : ""
                    }
                    <div style={location.pathname === "/products" ? { width: "75%" } : {}} className="prod flex justifyCenter comCardGap flexWrap">
                        {
                            products && products.map((cur, i) => {
                                return (
                                    <ProductCard data={cur} key={i} />
                                )
                            }).slice(0, productCount)
                        }
                    </div>
                </div>
                {location.pathname !== "/products" ? <Link style={{ marginTop: "50px", padding: "15px 40px" }} to='/products' className='globalBtnFillBtn'>View All</Link> : ""}
            </section>
        </>
    )
}

export default Products