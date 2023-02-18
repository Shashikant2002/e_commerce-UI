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
// For Alert
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


const Products = ({ productCount, title }) => {
    // filter start here 
    const [minPrice, setMenPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(250000000000);
    const [rating, setRating] = useState(0);
    console.log(rating)

    const [currentPage, setCurrentPage] = useState(1)
    const location = useLocation();
    const { loading, products, prodCount, resultPerPage, filteredProduct, error } = useSelector(state => state.products)

    const categories = ["laptop", "footbear", "phone", "camera"]
    const [category, setCategory] = useState("");

    const dispatch = useDispatch();
    const { keyword } = useParams();

    const setCurrentPageNo = (e) => {
        setCurrentPage(e)
    }

    const priceFilter = (e) => {
        e.preventDefault();
        setCurrentPageNo(1)
        dispatch(getProduct(keyword, currentPage, minPrice, maxPrice, category, rating));
    }

    useEffect(() => {
        dispatch(getProduct(keyword, currentPage, minPrice, maxPrice, category, rating));
    }, [dispatch, keyword, currentPage, category, rating])




    const count = filteredProduct;

    const clearFilter = () => {
        window.location.reload();
    }

    useEffect(() => {
        toast(error);
        // dispatch(clearAllError());
      }, [error, dispatch]);

    return (
        <>
            {
                error && error ?
                    <div className="commonSec">
                        <ToastContainer
                            position="bottom-right"
                        />
                    </div>
                    :
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
                                                        <div className="detail fil">
                                                            <h5>Total Product: {prodCount}</h5>
                                                            <h5>Result Per Page: {resultPerPage}</h5>
                                                            <h5>Filtered Product: {count}</h5>
                                                        </div>
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
                                                                            <li onClick={() => { setCategory(ele); setCurrentPageNo(1) }} key={ele}>{ele}</li>
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
                                                                    isHalf={false}
                                                                    value={rating}
                                                                    onChange={(e) => setRating(e)}
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
            }
        </>
    )
}

export default Products