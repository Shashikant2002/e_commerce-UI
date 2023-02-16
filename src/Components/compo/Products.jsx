import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import { Link, useLocation, useParams } from 'react-router-dom';
import "../../Style/products.css"
import Devider from './Devider';
import { useDispatch, useSelector } from 'react-redux';
import ReactStars from 'react-stars';
import Loading from './Loading';
import { getProduct } from '../../Redux/actions/productAction';
// pagenation 
import Pagination from "react-js-pagination";


const Products = ({ productCount, title }) => {
    // filter start here 
    const [minPrice, setMenPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(250000000000);

    const [currentPage, setCurrentPage] = useState(1)
    const location = useLocation();
    const { loading, products, prodCount, resultPerPage, filteredProduct } = useSelector(state => state.products)

    const categories = ["laptop", "footbear", "phone", "camera"]
    const [category, setCategory] = useState("");

    const dispatch = useDispatch();
    const { keyword } = useParams();

    const priceFilter = (e) => {
        e.preventDefault();
        dispatch(getProduct(keyword, currentPage, minPrice, maxPrice, category));
    }

    useEffect(() => {
        dispatch(getProduct(keyword, currentPage, minPrice, maxPrice, category));
    }, [dispatch, keyword, currentPage, category])


    const setCurrentPageNo = (e) => {
        setCurrentPage(e)
    }

    const count = filteredProduct;

    const clearFilter = () => {
        setMenPrice(0);
        setMaxPrice(250000000000);
        setCategory("");
    }

    return (
        <>
            {
                loading ? <Loading /> :
                    <>
                        <section id='products' className="products commonSec textCenter">
                            <Devider title={title} />
                            <div className="container flex">
                                {
                                    location.pathname !== "/" ?
                                        <div className="filter">
                                            <h4 className='priceFilter fil'>Total Product: {prodCount} {resultPerPage} {count}</h4>
                                            <form onSubmit={priceFilter} className="priceFilter fil">
                                                <input value={minPrice} onChange={(e) => { setMenPrice(e.target.value) }} type="number" placeholder='₹ Min Price' />
                                                <input value={maxPrice} onChange={(e) => { setMaxPrice(e.target.value) }} type="number" placeholder='₹ Max Price' />
                                                <button className='globalBtnFillBtn'>Search</button>
                                            </form>
                                            <div action='#' className="categoryFilter fil">
                                                <h4>Category</h4>
                                                <ul>
                                                    {
                                                        categories && categories.map((ele, i) => {
                                                            return (
                                                                <li onClick={() => { setCategory(ele); console.log(ele) }} key={ele}>{ele}</li>
                                                            );
                                                        })
                                                    }
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
                                                <button onClick={() => clearFilter()} className='globalBtnFillBtn'>Clear Filter</button>
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
                                        }).slice(0, productCount && productCount)
                                    }
                                </div>
                            </div>
                            {location.pathname === "/" || count <= resultPerPage ? "" :
                                <div className="container flex justifyCenter alignCenter">
                                    <div className="pagenation flex justifyCenter alignCenter">
                                        <Pagination
                                            activePage={currentPage}
                                            onChange={setCurrentPageNo}
                                            itemsCountPerPage={resultPerPage}
                                            totalItemsCount={count && count}
                                            nextPageText="⇉"
                                            prevPageText="⇇"
                                            firstPageText={"1st"}
                                            lastPageText={"Last"}
                                            itemClass={"pagenationitem"}
                                            linkClass={"pagenationLink"}
                                            activeClass={"activeClass"}
                                            activeLinkClass={"pageActiveLink"}
                                        />
                                    </div>
                                </div>
                            }
                            {location.pathname === "/" ? <Link style={{ marginTop: "50px", padding: "15px 40px" }} to='/products' className='globalBtnFillBtn'>View All</Link> : ""}
                        </section>
                    </>
            }
        </>
    )
}

export default Products