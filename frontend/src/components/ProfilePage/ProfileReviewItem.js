import { useEffect } from "react";
import { fetchTrail } from "../../store/trailsReducer";
import { useDispatch, useSelector } from "react-redux";
import './ProfileReviewItem.css'
import { openModal } from "../../store/modalReducer";
import { deleteReview } from "../../store/reviewReducer";

const ProfileReviewItem = ({review}) => {
    const dispatch = useDispatch();

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteReview(review.id));
    };

    const timeSinceCreatedAt = (createdTimestamp) => {
        if (!(createdTimestamp instanceof Date)) {
          createdTimestamp = new Date(createdTimestamp);
        }
        const currentTimestamp = new Date();
        const timeDifference = currentTimestamp - createdTimestamp;
        const minute = 60 * 1000;
        const hour = 60 * minute;
        const day = 24 * hour;
        const week = 7 * day;
        const month = 30.44 * day; 
        const year = 365.25 * day; 
      
        let unit, value;
        if (timeDifference < minute) {
          unit = 'second';
          value = Math.floor(timeDifference / 1000);
        } else if (timeDifference < hour) {
          unit = 'minute';
          value = Math.floor(timeDifference / minute);
        } else if (timeDifference < day) {
          unit = 'hour';
          value = Math.floor(timeDifference / hour);
        } else if (timeDifference < week) {
          unit = 'day';
          value = Math.floor(timeDifference / day);
        } else if (timeDifference < month) {
          unit = 'week';
          value = Math.floor(timeDifference / week);
        } else if (timeDifference < year) {
          unit = 'month';
          value = Math.floor(timeDifference / month);
        } else {
          unit = 'year';
          value = Math.floor(timeDifference / year);
        }
      
        if (value !== 1) {
          unit += 's';
        }
      
        return `${value} ${unit} ago`;
      }
      
    return (
        <>
            <div className='review-div'>
            <div className='review-author-container'>
                <div className="profile-trail-picture" style={{backgroundImage: `url(${review.imageUrls[0]})`}}></div>
                <div className='review-author-name-container'>
                    <h2 className='profile-review-author'>{`${review.trail.name}`}</h2>
                    <p className='review-time-created'> {timeSinceCreatedAt(review.createdAt)}</p>
                </div>
            </div>
         
            <div>
                <svg className={(review.rating > 0) ? 'svg-1-filled' : 'svg-1'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="presentation" 
                    aria-hidden="true" focusable="false" data-testid="star-filled" >
                    <path d="M11.776.454a.25.25 0 0 1 .448 0l3.303 6.692 7.384 1.073a.25.25 0 0 1 .139.426l-5.344 5.21 1.262 7.354a.25.25 0 0 1-.363.264L12 18l-6.605 3.473a.25.25 0 0 1-.363-.264l1.262-7.355L.95 8.645a.25.25 0 0 1 .139-.426l7.384-1.073L11.776.454Z">
                    </path>
                </svg>
                <svg className={(review.rating > 1) ? 'svg-1-filled' : 'svg-1'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="presentation" 
                    aria-hidden="true" focusable="false" data-testid="star-filled" >
                    <path d="M11.776.454a.25.25 0 0 1 .448 0l3.303 6.692 7.384 1.073a.25.25 0 0 1 .139.426l-5.344 5.21 1.262 7.354a.25.25 0 0 1-.363.264L12 18l-6.605 3.473a.25.25 0 0 1-.363-.264l1.262-7.355L.95 8.645a.25.25 0 0 1 .139-.426l7.384-1.073L11.776.454Z">
                    </path>
                </svg>
                <svg className={(review.rating > 2) ? 'svg-1-filled' : 'svg-1'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="presentation" 
                    aria-hidden="true" focusable="false" data-testid="star-filled" >
                    <path d="M11.776.454a.25.25 0 0 1 .448 0l3.303 6.692 7.384 1.073a.25.25 0 0 1 .139.426l-5.344 5.21 1.262 7.354a.25.25 0 0 1-.363.264L12 18l-6.605 3.473a.25.25 0 0 1-.363-.264l1.262-7.355L.95 8.645a.25.25 0 0 1 .139-.426l7.384-1.073L11.776.454Z">
                    </path>
                </svg>
                <svg className={(review.rating > 3) ? 'svg-1-filled' : 'svg-1'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="presentation" 
                    aria-hidden="true" focusable="false" data-testid="star-filled" >
                    <path d="M11.776.454a.25.25 0 0 1 .448 0l3.303 6.692 7.384 1.073a.25.25 0 0 1 .139.426l-5.344 5.21 1.262 7.354a.25.25 0 0 1-.363.264L12 18l-6.605 3.473a.25.25 0 0 1-.363-.264l1.262-7.355L.95 8.645a.25.25 0 0 1 .139-.426l7.384-1.073L11.776.454Z">
                    </path>
                </svg>
                <svg className={(review.rating > 4)? 'svg-1-filled' : 'svg-1'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="presentation" 
                    aria-hidden="true" focusable="false" data-testid="star-filled" >
                    <path d="M11.776.454a.25.25 0 0 1 .448 0l3.303 6.692 7.384 1.073a.25.25 0 0 1 .139.426l-5.344 5.21 1.262 7.354a.25.25 0 0 1-.363.264L12 18l-6.605 3.473a.25.25 0 0 1-.363-.264l1.262-7.355L.95 8.645a.25.25 0 0 1 .139-.426l7.384-1.073L11.776.454Z">
                    </path>
                </svg>
            </div>
                <p className='review'>{review.body}</p>
                <div className='edit-delete-container'>
                    <button onClick={handleDelete} className='edit-delete-button' >Delete</button>
                </div>
            </div>
         
            </>
        
    )

}


export default ProfileReviewItem;