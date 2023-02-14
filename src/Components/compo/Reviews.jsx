import React from 'react';
import "../../Style/reviews.css";
import { FaWindowClose } from 'react-icons/fa';
import ReactStars from 'react-stars';

const Reviews = ({ revData }) => {
    const showPopup = () => {
        document.getElementById('showReviewPopup').classList.toggle('ReviewPopupShow')
    }

    const { avtar, name, rating, comment } = revData && revData;

    return (
        <>
            <div onClick={() => showPopup()} className="review textCenter">
                <img src={avtar && avtar.url} alt="" />
                <h5>{name && name}</h5>
                <h5><ReactStars
                    count={5}
                    size={24}
                    color2={"#0526a2"}
                    edit={false}
                    value={rating && rating}
                /></h5>
                <p>{comment && comment}</p>
            </div>

            <div id='showReviewPopup' className="ReviewPopup flex justifyCenter alignCenter">
                <div className="review textCenter">
                    <span onClick={() => showPopup()} className="close"><FaWindowClose /></span>
                    <img src={avtar && avtar.url} alt="" />
                    <h5>{name && name}</h5>
                    <h5><ReactStars
                        count={5}
                        size={24}
                        color2={"#0526a2"}
                        edit={false}
                        value={rating && rating}
                    /></h5>
                    <p>{comment && comment}</p>
                </div>
            </div>
        </>
    )
}

export default Reviews