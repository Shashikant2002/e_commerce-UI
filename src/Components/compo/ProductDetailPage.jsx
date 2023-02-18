import React, { useEffect, useState } from 'react';
// For Alert
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../../Style/detailPage.css'
import Devider from './Devider';
import Reviews from './Reviews';
import { FaWindowClose } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetail } from '../../Redux/actions/productAction';
import Loading from './Loading';
import ReactStars from 'react-stars';
import MataData from '../MataData';

const ProductDetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [count, setCount] = useState(1);
  useEffect(() => {
    if (count <= 0) {
      setCount(1);
    }
  }, [count])

  const showsubmitReview = () => {
    document.getElementById('submitReview').classList.toggle('showsubmitReview');
  }


  useEffect(() => {
    dispatch(getProductDetail(id))
  }, [dispatch, id])

  const { loading, product, error } = useSelector((state) => state.productDetail)

  useEffect(() => {
    toast(error);
    // dispatch(clearAllError());
  }, [error, dispatch]);

  return (
    <>
    <MataData title={"Product Detail"} />
      {
        error ?
          <div className="commonSec">
            <ToastContainer
              position="bottom-right"
            />
          </div> :
          loading && loading ? <Loading /> :
            <div className="detailPage commonSec">
              <div className="container flex">
                <div className="image">
                  <Carousel>
                    {
                      product.images && product.images.map((ele, i) => {
                        return (
                          <div key={i}>
                            <img src={ele.url} alt={`${i} name`} />
                          </div>
                        )
                      })
                    }
                  </Carousel>
                </div>
                <div className="content">
                  <h3>{product.name}</h3>
                  <h6>Product Id: {product._id}</h6>
                  <h5><ReactStars
                    count={5}
                    size={24}
                    color2={"#0526a2"}
                    edit={false}
                    value={product.ratings}
                  /> ({product.numOfReviews} Reviews)</h5>
                  <h4>${product.price}</h4>
                  <div className="contQuentity flex alignCenter">
                    <h5 onClick={() => setCount(count - 1)} className='globalBtnFillBtn'>-</h5><input className='count textCenter' type="text" value={count} /><h5 className='globalBtnFillBtn' onClick={() => setCount(count + 1)}>+</h5>
                    <button className='globalBtnFillBtn'>Add to Cart</button>
                  </div>
                  <h5><span>Status: </span> <span className='coloGreen'>{product.stock<1 ? "Out of Stock" : <span>In Stock</span>} {product.stock}</span></h5>
                  <h4>Description: </h4>
                  <p>{product.description}</p>
                  <button onClick={() => showsubmitReview()} className='globalBtnFillBtn'>Submit Review</button>
                </div>

                {/* Review Form on Popup  */}
                <div id='submitReview' className="submitReview flex alignCenter justifyCenter">
                  <div className="reviewform">
                    <span onClick={() => showsubmitReview()} className='close'><FaWindowClose /></span>
                    <form action="/">
                      <textarea name="" id="" rows="15" placeholder='Write Review'></textarea>
                      <button className='globalBtnFillBtn'>Submit Review</button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="container">
                <Devider title="Product Reviews" />
                <div className="reviews flex justifyCenter flexWrap comCardGap">
                  {
                    product.reviews && product.reviews.length < 1 ? <h5>No Reviews Yet</h5> :
                      product.reviews && product.reviews.map((ele, i) => {
                        return (
                          <Reviews key={i} index={i} revData={ele} />
                        )
                      })
                  }
                </div>
              </div>
            </div>
      }




    </>
  )
}

export default ProductDetailPage