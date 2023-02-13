import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../../Style/detailPage.css'
import Devider from './Devider';
import Reviews from './Reviews';
import { FaWindowClose } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetail } from '../../Redux/actions/productAction';
// For Alert
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetailPage = () => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    if (count <= 0) {
      setCount(1);
    }
  }, [count])

  const showsubmitReview = () => {
    document.getElementById('submitReview').classList.toggle('showsubmitReview');
  }

  const { id } = useParams;

  const dispatch = useDispatch();

  dispatch(getProductDetail(id))



  const { error } = useSelector((state) => state.productDetail);
  useEffect(() => {
    toast(error);
  }, [error]);

  return (
    <>
      <ToastContainer
        position="bottom-right"
      />
      <div className="detailPage commonSec">
        <div className="container flex">
          <div className="image">
            <Carousel>
              <div>
                <img src="https://m.media-amazon.com/images/I/81anm+VxFKL._SL1500_.jpg" alt='' />
              </div>
              <div>
                <img src="https://m.media-amazon.com/images/I/81anm+VxFKL._SL1500_.jpg" alt='' />
              </div>
              <div>
                <img src="https://m.media-amazon.com/images/I/81anm+VxFKL._SL1500_.jpg" alt='' />
              </div>
            </Carousel>
          </div>
          <div className="content">
            <h3>ASUS TUF Tempered Glass Gaming GT301 Mid-Tower Compact Case for ATX Motherboards with Honeycomb Front Panel, 120mm Aura Addressable RBG Fans and 360mm Radiator Support, 2 x USB 3.2, Black</h3>
            <h6>Product Id: 76sf8sd77f987d8f79sf</h6>
            <h5>⭐⭐⭐⭐⭐ (1 Reviews)</h5>
            <h4>$24999</h4>
            <div className="contQuentity flex alignCenter">
              <h5 onClick={() => setCount(count - 1)} className='globalBtnFillBtn'>-</h5><input className='count textCenter' type="text" value={count} /><h5 className='globalBtnFillBtn' onClick={() => setCount(count + 1)}>+</h5>
              <button className='globalBtnFillBtn'>Add to Cart</button>
            </div>
            <h5><span>Status: </span> <span className='coloGreen'>In Stock</span></h5>
            <h4>Description: </h4>
            <p>Stylishly design: Perforated honeycomb front panel to aid airflow and features a tempered-glass side panel to showcase your build’s internals in the compact case. <br />
              Efficient cooling: Equipped with three 120mm Aura Sync addressable RGB-illuminated fans and one 120mm rear fan, plus up to six fan-mounting points for targeted airflow. <br />
              Space reserved for 280/360mm water-cooling radiators in front and 120mm at rear <br />
              Integrated 6 ports Aura Sync addressable-RGB controller hub and a dedicated front panel control button to create a stunning lighting effect <br />
              Extensive storage options: up to 2 HDD (trays included) and 6x SDD (2x dedicated bracket included, one is on the power supply shroud) mounting locations
              Combat-ready: Customized headphone hook which can be hanged on both sides</p>
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
            <Reviews />
            <Reviews />
            <Reviews />
            <Reviews />
            <Reviews />
            <Reviews />
            <Reviews />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetailPage