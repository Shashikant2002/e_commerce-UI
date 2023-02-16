import React from 'react';
import "../../Style/reviews.css";
import { FaWindowClose } from 'react-icons/fa';
import ReactStars from 'react-stars';

const Reviews = ({ revData, index }) => {

    const showPopup = () => {
        document.getElementById(`showReviewPopup${index}`).classList.toggle('ReviewPopupShow')
    }

    const { avtar, name, rating, comment } = revData && revData;
    console.log(avtar)

    return (
        <>
            <div onClick={() => showPopup()} className="review textCenter">
                {/* <img src={avtar && avtar.url || "https://hope.be/wp-content/uploads/2015/05/no-user-image.gif"} alt="" /> */}
                <img src={"https://hope.be/wp-content/uploads/2015/05/no-user-image.gif"} alt="" />
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

            <div id={`showReviewPopup${index}`} className="ReviewPopup flex justifyCenter alignCenter">
                <div className="review textCenter">
                    <span onClick={() => showPopup()} className="close"><FaWindowClose /></span>
                    {/* <img src={avtar && avtar.url} alt="" /> */}
                    <img src={"https://hope.be/wp-content/uploads/2015/05/no-user-image.gif"} alt="" />
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