import React from 'react'
import ProductCard from './ProductCard';
import data from '../../fakejson.json';
import { Link, useLocation } from 'react-router-dom';
import "../../Style/products.css"
import Devider from './Devider';


const totalData = data.length;

const Products = ({ productCount = totalData, title }) => {
    const location = useLocation();
    console.log(location);
    return (
        <>
            <section id='products' className="products commonSec textCenter">
            <Devider title={title} />
                <div className="container flex">
                    {
                        location.pathname == "/products" ?
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
                                        <li>⭐⭐⭐⭐⭐</li>
                                        <li>⭐⭐⭐⭐</li>
                                        <li>⭐⭐⭐</li>
                                        <li>⭐⭐</li>
                                        <li>⭐</li>
                                    </ul>
                                </div>
                                <div action='#' className="categoryFilter fil">
                                    <button className='globalBtnFillBtn'>Clear Filter</button>
                                </div>
                            </div>
                            : ""
                    }
                    <div style={location.pathname == "/products" ? { width: "75%" } : {}} className="prod flex justifyCenter comCardGap flexWrap">
                        {
                            data && data.map((cur, i) => {
                                return (
                                    <ProductCard key={i} />
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