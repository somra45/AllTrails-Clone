import './EditReviewForm.css'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addReview, editReview } from '../../store/reviewReducer';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { closeModal } from '../../store/modalReducer';

const EditReviewForm = () => {
    const trailId = useParams().trailId;
    const trail = useSelector((state) => state.entities.trails[trailId]);
    const reviews = useSelector((state) => state.entities.reviews);
    const author = useSelector((state) => state.session.member); 
    const dispatch = useDispatch();
    const currentReview = Object.values(reviews).find((review) => review.author.id === author.id)
    const [review, setReview] = useState(currentReview.body);
    const [filled1, setFilled1] = useState(false);
    const [filled2, setFilled2] = useState(false);
    const [filled3, setFilled3] = useState(false);
    const [filled4, setFilled4] = useState(false);
    const [filled5, setFilled5] = useState(false);
    const [rating, setRating] = useState(1);
    const [clicked, setClicked] = useState(false);
    const [errors, setErrors] = useState([]);
    const handleEditReview = (e) => {
        e.preventDefault();
        const reviewId = Object.values(reviews).find((review) => review.author.id === author.id)
        dispatch(editReview({
          review: 
                {id: reviewId.id,
                body: review,
                trail_id: trail.trailId,
                author_id: author.id,
                rating: rating}
        })).then( async (response) => {
            if (response.ok) {
                dispatch(closeModal());
            }
        }).catch( async (response) => {
            let data;
            try {
                data = await response.clone().json();
            } catch {
                data = await response.text();
            }
            if (data?.errors) {
                setErrors(data.errors);
            } else if (data) {
                setErrors([data]);
            } else {
                setErrors([response.statusText]);
            }
        });    
    };

    const handleBackgroundClick = (e) => {
        e.preventDefault();
        dispatch(closeModal());
    }


    const handleHover1 = (e) => {
        e.preventDefault();
        setFilled1(true);
        e.stopPropagation();
    };
    
    const handleLeave1 = (e) => {
        if (!clicked)
        {e.preventDefault();
        setFilled1(false);
        e.stopPropagation();}
    };
    const handleHover2 = (e) => {
        e.preventDefault();
        setFilled1(true);
        setFilled2(true);
        e.stopPropagation();
    };
    
    const handleLeave2 = e => {
        if (!clicked) {
        e.preventDefault();
        setFilled1(false);
        setFilled2(false);
        e.stopPropagation();}
    };
    const handleHover3 = (e) => {
        e.preventDefault();
        setFilled1(true);
        setFilled2(true);
        setFilled3(true);
        e.stopPropagation();
    };
    
    const handleLeave3 = (e) => {
        if (!clicked)
       { e.preventDefault();
        setFilled1(false);
        setFilled2(false);
        setFilled3(false);
        e.stopPropagation();}
    };
    const handleHover4 = (e) => {
        e.preventDefault();
        setFilled1(true);
        setFilled2(true);
        setFilled3(true);
        setFilled4(true);
        e.stopPropagation();
    };
    
    const handleLeave4 = (e) => {
        if (!clicked)
        {e.preventDefault();
        setFilled1(false);
        setFilled2(false);
        setFilled3(false);
        setFilled4(false);
        e.stopPropagation();}
    };
    const handleHover5 = (e) => {
        e.preventDefault();
        setFilled1(true);
        setFilled2(true);
        setFilled3(true);
        setFilled4(true);
        setFilled5(true);
        e.stopPropagation();
    };
    
    const handleLeave5 = (e) => {
        if (!clicked)
        {e.preventDefault();
        setFilled1(false);
        setFilled2(false);
        setFilled3(false);
        setFilled4(false);
        setFilled5(false);
        e.stopPropagation();}
    };
    
    const handleClick1 = (e) => {
        e.preventDefault();
        setFilled1(true);
        setRating(1);
        setClicked(!clicked);
    };

    const handleClick2 = (e) => {
        e.preventDefault();
        setFilled1(true);
        setFilled2(true);
        setRating(2);
        setClicked(!clicked);
    };

    const handleClick3 = (e) => {
        e.preventDefault();
        setFilled1(true);
        setFilled2(true);
        setFilled3(true);
        setRating(3);
        setClicked(!clicked);
    };

    const handleClick4 = (e) => {
        e.preventDefault();
        setFilled1(true);
        setFilled2(true);
        setFilled3(true);
        setFilled4(true);
        setRating(4);
        setClicked(!clicked);
    };

    const handleClick5 = (e) => {
        e.preventDefault();
        setFilled1(true);
        setFilled2(true);
        setFilled3(true);
        setFilled4(true);
        setFilled5(true);
        setRating(5);
        setClicked(!clicked);
    };
    return (
        <>
        { trail && 
        <div className='edit-review-modal' onClick={handleBackgroundClick} >
        <div className='edit-review-div'>
            <div className='edit-review-form-div' onClick={e => e.stopPropagation()}>
                <h1 className='edit-review-header'>{trail.name}</h1>
                <form className='edit-review-form' onSubmit={handleEditReview} >
                    <span className='edit-review-field-header'>Rating</span>
                    <div className='rating-star-container'>
                        <div className='star-div'>
                            <svg onMouseEnter={handleHover1} onMouseLeave={handleLeave1} onClick={handleClick1} className={filled1 ? 'svg-edit-filled' : 'svg-edit'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="presentation" 
                                aria-hidden="true" focusable="false" data-testid="star-filled" >
                                <path d="M11.776.454a.25.25 0 0 1 .448 0l3.303 6.692 7.384 1.073a.25.25 0 0 1 .139.426l-5.344 5.21 1.262 7.354a.25.25 0 0 1-.363.264L12 18l-6.605 3.473a.25.25 0 0 1-.363-.264l1.262-7.355L.95 8.645a.25.25 0 0 1 .139-.426l7.384-1.073L11.776.454Z"></path>
                            </svg> 
                        </div> 
                        <div className='star-div'>
                            <svg  onMouseEnter={handleHover2} onMouseLeave={handleLeave2} onClick={handleClick2} className={filled2 ? 'svg-edit-filled' : 'svg-edit'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="presentation" 
                                aria-hidden="true" focusable="false" data-testid="star-filled" >
                                <path d="M11.776.454a.25.25 0 0 1 .448 0l3.303 6.692 7.384 1.073a.25.25 0 0 1 .139.426l-5.344 5.21 1.262 7.354a.25.25 0 0 1-.363.264L12 18l-6.605 3.473a.25.25 0 0 1-.363-.264l1.262-7.355L.95 8.645a.25.25 0 0 1 .139-.426l7.384-1.073L11.776.454Z"></path>
                            </svg> 
                        </div > 
                        <div className='star-div'>
                            <svg  onMouseEnter={handleHover3} onMouseLeave={handleLeave3} onClick={handleClick3}className={filled3 ? 'svg-edit-filled' : 'svg-edit'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="presentation" 
                                aria-hidden="true" focusable="false" data-testid="star-filled" >
                                <path d="M11.776.454a.25.25 0 0 1 .448 0l3.303 6.692 7.384 1.073a.25.25 0 0 1 .139.426l-5.344 5.21 1.262 7.354a.25.25 0 0 1-.363.264L12 18l-6.605 3.473a.25.25 0 0 1-.363-.264l1.262-7.355L.95 8.645a.25.25 0 0 1 .139-.426l7.384-1.073L11.776.454Z"></path>
                            </svg> 
                        </div> 
                        <div  className='star-div'>
                            <svg onMouseEnter={handleHover4} onMouseLeave={handleLeave4} onClick={handleClick4} className={filled4 ? 'svg-edit-filled' : 'svg-edit'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="presentation" 
                                aria-hidden="true" focusable="false" data-testid="star-filled" >
                                <path d="M11.776.454a.25.25 0 0 1 .448 0l3.303 6.692 7.384 1.073a.25.25 0 0 1 .139.426l-5.344 5.21 1.262 7.354a.25.25 0 0 1-.363.264L12 18l-6.605 3.473a.25.25 0 0 1-.363-.264l1.262-7.355L.95 8.645a.25.25 0 0 1 .139-.426l7.384-1.073L11.776.454Z"></path>
                            </svg> 
                        </div> 
                        <div className='star-div'>
                            <svg onMouseEnter={handleHover5} onMouseLeave={handleLeave5} onClick={handleClick5} className={filled5 ? 'svg-edit-filled' : 'svg-edit'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="presentation" 
                                aria-hidden="true" focusable="false" data-testid="star-filled" >
                                <path d="M11.776.454a.25.25 0 0 1 .448 0l3.303 6.692 7.384 1.073a.25.25 0 0 1 .139.426l-5.344 5.21 1.262 7.354a.25.25 0 0 1-.363.264L12 18l-6.605 3.473a.25.25 0 0 1-.363-.264l1.262-7.355L.95 8.645a.25.25 0 0 1 .139-.426l7.384-1.073L11.776.454Z"></path>
                            </svg> 
                        </div> 
                    </div>
                    <span className='edit-review-field-header' >Review</span>
                    <textarea className={errors.length > 0 ? 'edit-review-field-error' : 'edit-review-field'} type='textarea' 
                        value={review} onChange={(e) => setReview(e.target.value)} 
                        placeholder='Give back to the community. Share your thoughts 
                        about the trail so others know what to expect' rows='8' cols='10'
                        wrap='soft' name='text' />
                    {/* <ul className='edit-errors-list'>
                        {errors.map((error, idx) =>  
                            <li className='edit-errors-list-item' key={idx}>{error}</li>
                        )}
                    </ul> */}
                    <button value='submit' className={errors.length > 0 || review.length <= 3 ? 'edit-review-button-disabled' : 'edit-review-button'}>Post</button>
                </form>

            </div>
        </div>
        </div>
        }
        </>
    )
}

export default EditReviewForm