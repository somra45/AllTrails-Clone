import { useEffect } from "react";
import { fetchTrail } from "../../store/trailsReducer";
import { useDispatch, useSelector } from "react-redux";

const ProfileReviewItem = ({review}) => {
    const dispatch = useDispatch();
    const trail = useSelector(state => state.entities.trails)

    const convertTime = (timestamp) => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        timestamp = timestamp.slice(0, 10);
        let month = months[parseInt(timestamp.slice(5, 7)) - 1];
        return `${month} ${timestamp.slice(8)}, ${timestamp.slice(0,4)}`;
    }

    return (
        <>
            <div className='review-div'>
            <div className='review-author-container'>
                <div className="profile-picture" style={{backgroundImage: `url(${review.photoUrl})`}}></div>
                <div className='review-author-name-container'>
                    {/* <h2 className='review-author'>{`${review.author.firstname} ${review.author.lastname[0]}`}</h2> */}
                    <p className='review-time-created'> {convertTime(review.createdAt)}</p>
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
            </div>
            </>
        
    )

}


export default ProfileReviewItem;