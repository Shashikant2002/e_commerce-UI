import React from 'react';
import "../../Style/reviews.css";
import { FaWindowClose } from 'react-icons/fa';

const Reviews = () => {
    const showPopup = () => {
        document.getElementById('showReviewPopup').classList.toggle('ReviewPopupShow')
    }


    return (
        <>
            <div onClick={() => showPopup()} className="review textCenter">
                <img src="https://cdn.pixabay.com/photo/2013/07/13/10/44/man-157699__340.png" alt="" />
                <h5>Person Name</h5>
                <h5>⭐⭐⭐⭐⭐</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique esse corporis ea voluptas accusamus, officia consequatur voluptates facilis repellat dolor perferendis harum hic tempora pariatur tenetur sapiente perspiciatis consectetur laboriosam!</p>
            </div>

            <div id='showReviewPopup' className="ReviewPopup flex justifyCenter alignCenter">
                <div className="review textCenter">
                <span onClick={() => showPopup()} className="close"><FaWindowClose /></span>
                    <img src="https://cdn.pixabay.com/photo/2013/07/13/10/44/man-157699__340.png" alt="" />
                    <h5>Person Name</h5>
                    <h5>⭐⭐⭐⭐⭐</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique esse corporis ea voluptas accusamus, officia consequatur voluptates facilis repellat dolor perferendis harum hic tempora pariatur tenetur sapiente perspiciatis consectetur laboriosam!</p>
                </div>
            </div>
        </>
    )
}

export default Reviews