import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import './ProfilePage.css'
import { addFavorites } from '../../store/favoritesReducer';
import {useHistory} from 'react-router-dom'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { fetchMember } from '../../store/memberReducer';
import TrailReviewItem from '../TrailShowPage/TrailReviewItem.js'
import ProfileReviewItem from './ProfileReviewItem';
import Modal from '../Modal/modal';

const ProfilePage = () => {
    const member = useSelector(state => state.session.member);
    const [favoritesTab, setFavoritesTab]= useState(true);
    const [reviewTab, setReviewTab] = useState(false);
    let averageRating = 1 
    const reviews = Object.values(useSelector(state => state.entities.reviews))
    const dispatch = useDispatch();
    const favoritedTrails = Object.values(useSelector(state => state.entities.favorites))
    let year =  null

    let ratingCount1 = 0;
    let ratingCount2 = 0;
    let ratingCount3 = 0;
    let ratingCount4 = 0;
    let ratingCount5 = 0;

    reviews.forEach((review) => {
        if (review.rating === 1){
         ratingCount1++;
        } else if (review.rating === 2) {
         ratingCount2++
        } else if (review.rating === 3) {
         ratingCount3++
        } else if (review.rating === 4) {
         ratingCount4++
        } else if (review.rating === 5) {
         ratingCount5++
        }
     });

    const printMonthString = (member) => {
        const monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'August', 'September', 'October', 'November', 'December']
        const month = parseInt(member.createdAt.slice(5,7))
        year = parseInt(member.createdAt.slice(0,4));
        const day = parseInt(member.createdAt.slice(8,10))
        const createdAtDate = new Date(year,month,day) 
        return monthsArray[createdAtDate.getMonth().toString()]
    }

    const handleFavoriteSelect = (e) => {
        e.preventDefault();
        setFavoritesTab(true);
        setReviewTab(false);
    }

    const handleReviewSelect = (e) => {
        e.preventDefault();
        setFavoritesTab(false);
        setReviewTab(true);
    }

    const calculateAverageReview = (trail) => {
        const trailReviews = Object.values(trail.reviews) 
        let numReviews = trailReviews.length
        let totalRating = trailReviews.map( review => {
            return review.rating
            }).reduce((sum, acc) => (
                sum + acc
            ))
        const averageRatingC = Math.round((totalRating / numReviews * 10))/10
        return averageRatingC
    }

    const calculateAverageRating = (reviews) => {
        const numReviews = reviews.length
        const totalRating = reviews?.map(review => {return review.rating}).reduce((sum, acc) => (sum + acc));
        const averageRatingD = Math.round((totalRating/numReviews * 10))/10
        averageRating = averageRatingD
    }

    if (reviews.length > 0) {
        calculateAverageRating(reviews);
    }

    useEffect(() => {
        dispatch(fetchMember(member?.id))
    }, [dispatch])

    useEffect(() => {
        dispatch(addFavorites(member?.id))
    }, [dispatch])

    return (
        <>
        {member && <>
            <div className='full-page-div' >
                <div className='profile-left-container'>
                    <div className='profile-info-div'>
                        <div className="profile-page-photo" style={{ backgroundImage: `url(${member.photoUrl})`}}></div>  
                            <h2 className='profile-header' >{member.firstname} {member.lastname}</h2>
                            <div className="profile-page-picture" style={{backgroundImage: `url(${member.photoUrl})`}}>
                            <p className='member-since-p'>{`Member since ${printMonthString(member)} ${year}`}</p>
                        </div>
                    </div>
                    <p className='profile-trail-attribute copyright' > @2023 SmallTrails, All Rights Reserved</p>
                </div>
                <div className='profile-right-container'>
                    <div className='favorited-trails-container' >
                        <div>
                            <button className='favorited-trails-header fav' onClick={handleFavoriteSelect}> Favorites </button>
                            <button className='favorited-trails-header' onClick={handleReviewSelect} > Reviews </button>
                        </div>
                    { favoritesTab ? 
                        <div className='favorited-trails'>
                            {favoritedTrails.length > 0 && 
                                favoritedTrails?.map(trail => 
                                    <div className='individual-trail'>
                                        <Link to={`/trails/${trail.trailId}`}>
                                            <div className='profile-trail-image-div'  >
                                                <img className='profile-trail-image' src={trail.imageUrls[0]}></img> 
                                            </div>
                                        </Link>
                                        <div className='profile-trail-info-div' >
                                            <div className='profile-star-div'>
                                                <svg className='svg-2-filled star' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="presentation" 
                                                aria-hidden="true" focusable="false" data-testid="star-filled" >
                                                <path d="M11.776.454a.25.25 0 0 1 .448 0l3.303 6.692 7.384 1.073a.25.25 0 0 1 .139.426l-5.344 5.21 1.262 7.354a.25.25 0 0 1-.363.264L12 18l-6.605 3.473a.25.25 0 0 1-.363-.264l1.262-7.355L.95 8.645a.25.25 0 0 1 .139-.426l7.384-1.073L11.776.454Z">
                                                </path>
                                                </svg>
                                                <p className='profile-trail-attribute'>{calculateAverageReview(trail)} ({Object.values(trail.reviews).length})</p>
                                            </div>
                                            <h1 className='profile-trail-title'>{trail.name}</h1>
                                            <p className='profile-trail-attribute' >United States, {trail.location}</p>
                                            <p className='profile-trail-attribute' >{trail.length}</p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    : 
                    <>
                    <div className='profile-reviews-container' >
                        <div className='review-feed-div'>
                            <h1 id='review-header'>Reviews</h1>
                            <div className='rating-div'>
                                <div className='rating-count-div'>
                                        <div className='rating-bar-div'>
                                            <div className='rating-count-id-div'><p className='rating-count-id'>5</p></div>
                                            <div className='star-div'>
                                                <svg className='svg-2-filled star' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="presentation" 
                                                aria-hidden="true" focusable="false" data-testid="star-filled" >
                                                <path d="M11.776.454a.25.25 0 0 1 .448 0l3.303 6.692 7.384 1.073a.25.25 0 0 1 .139.426l-5.344 5.21 1.262 7.354a.25.25 0 0 1-.363.264L12 18l-6.605 3.473a.25.25 0 0 1-.363-.264l1.262-7.355L.95 8.645a.25.25 0 0 1 .139-.426l7.384-1.073L11.776.454Z">
                                                </path>
                                                </svg>
                                            </div>
                                            <div className='rating-bar-container' >
                                                <span className='rating-bar-span' style={{width: `${ratingCount5 * 15}%`}}></span>
                                            </div>
                                        </div>
                                            
                                        <div className='rating-bar-div'>
                                            <div className='rating-count-id-div'><p className='rating-count-id'>4</p></div>
                                            <div className='star-div'>
                                                <svg className='svg-2-filled star' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="presentation" 
                                                aria-hidden="true" focusable="false" data-testid="star-filled" >
                                                <path d="M11.776.454a.25.25 0 0 1 .448 0l3.303 6.692 7.384 1.073a.25.25 0 0 1 .139.426l-5.344 5.21 1.262 7.354a.25.25 0 0 1-.363.264L12 18l-6.605 3.473a.25.25 0 0 1-.363-.264l1.262-7.355L.95 8.645a.25.25 0 0 1 .139-.426l7.384-1.073L11.776.454Z">
                                                </path>
                                                </svg>
                                            </div>
                                            <div className='rating-bar-container' >
                                                <span className='rating-bar-span' style={{width: `${ratingCount4 * 15}%`}}></span>
                                            </div>
                                        </div>
                                            
                                        <div className='rating-bar-div'>
                                            <div className='rating-count-id-div'><p className='rating-count-id'>3</p></div>
                                            <div className='star-div'>
                                                <svg className='svg-2-filled star' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="presentation" 
                                                aria-hidden="true" focusable="false" data-testid="star-filled" >
                                                <path d="M11.776.454a.25.25 0 0 1 .448 0l3.303 6.692 7.384 1.073a.25.25 0 0 1 .139.426l-5.344 5.21 1.262 7.354a.25.25 0 0 1-.363.264L12 18l-6.605 3.473a.25.25 0 0 1-.363-.264l1.262-7.355L.95 8.645a.25.25 0 0 1 .139-.426l7.384-1.073L11.776.454Z">
                                                </path>
                                                </svg>
                                            </div>
                                            <div className='rating-bar-container' >
                                                <span className='rating-bar-span' style={{width: `${ratingCount3 * 15}%`}}></span>
                                            </div>
                                        </div>
                                            
                                        <div className='rating-bar-div'>
                                            <div className='rating-count-id-div'><p className='rating-count-id'>2</p></div>
                                            <div className='star-div'>
                                                <svg className='svg-2-filled star' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="presentation" 
                                                aria-hidden="true" focusable="false" data-testid="star-filled" >
                                                <path d="M11.776.454a.25.25 0 0 1 .448 0l3.303 6.692 7.384 1.073a.25.25 0 0 1 .139.426l-5.344 5.21 1.262 7.354a.25.25 0 0 1-.363.264L12 18l-6.605 3.473a.25.25 0 0 1-.363-.264l1.262-7.355L.95 8.645a.25.25 0 0 1 .139-.426l7.384-1.073L11.776.454Z">
                                                </path>
                                                </svg>
                                            </div>
                                            <div className='rating-bar-container' >
                                                <span className='rating-bar-span' style={{width: `${ratingCount2 * 15}%`}}></span>
                                            </div>
                                        </div>
                                            
                                        <div className='rating-bar-div'>
                                            <div className='rating-count-id-div'><p className='rating-count-id'>1</p></div>
                                            <div className='star-div'>
                                                <svg className='svg-2-filled star' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="presentation" 
                                                aria-hidden="true" focusable="false" data-testid="star-filled" >
                                                <path d="M11.776.454a.25.25 0 0 1 .448 0l3.303 6.692 7.384 1.073a.25.25 0 0 1 .139.426l-5.344 5.21 1.262 7.354a.25.25 0 0 1-.363.264L12 18l-6.605 3.473a.25.25 0 0 1-.363-.264l1.262-7.355L.95 8.645a.25.25 0 0 1 .139-.426l7.384-1.073L11.776.454Z">
                                                </path>
                                                </svg>
                                            </div>
                                            <div className='rating-bar-container' >
                                                <span className='rating-bar-span' style={{width: `${ratingCount1 + 15}%`}}></span>
                                            </div>
                                        </div>
                                </div>
                                <div className='profile-rating-count-div'>
                                    <h1 className='rating-average'>{averageRating}</h1>
                                    <div className='rating-average-stars'>
                                        <svg className={(averageRating > 0) ? 'svg-2-filled' : 'svg-2'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="presentation" 
                                            aria-hidden="true" focusable="false" data-testid="star-filled" >
                                            <path d="M11.776.454a.25.25 0 0 1 .448 0l3.303 6.692 7.384 1.073a.25.25 0 0 1 .139.426l-5.344 5.21 1.262 7.354a.25.25 0 0 1-.363.264L12 18l-6.605 3.473a.25.25 0 0 1-.363-.264l1.262-7.355L.95 8.645a.25.25 0 0 1 .139-.426l7.384-1.073L11.776.454Z">
                                            </path>
                                        </svg>
                                        <svg className={(averageRating > 1) ? 'svg-2-filled' : 'svg-2'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="presentation" 
                                            aria-hidden="true" focusable="false" data-testid="star-filled" >
                                            <path d="M11.776.454a.25.25 0 0 1 .448 0l3.303 6.692 7.384 1.073a.25.25 0 0 1 .139.426l-5.344 5.21 1.262 7.354a.25.25 0 0 1-.363.264L12 18l-6.605 3.473a.25.25 0 0 1-.363-.264l1.262-7.355L.95 8.645a.25.25 0 0 1 .139-.426l7.384-1.073L11.776.454Z">
                                            </path>
                                        </svg>
                                        <svg className={(averageRating > 2) ? 'svg-2-filled' : 'svg-2'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="presentation" 
                                            aria-hidden="true" focusable="false" data-testid="star-filled" >
                                            <path d="M11.776.454a.25.25 0 0 1 .448 0l3.303 6.692 7.384 1.073a.25.25 0 0 1 .139.426l-5.344 5.21 1.262 7.354a.25.25 0 0 1-.363.264L12 18l-6.605 3.473a.25.25 0 0 1-.363-.264l1.262-7.355L.95 8.645a.25.25 0 0 1 .139-.426l7.384-1.073L11.776.454Z">
                                            </path>
                                        </svg>
                                        <svg className={(averageRating > 3) ? 'svg-2-filled' : 'svg-2'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="presentation" 
                                            aria-hidden="true" focusable="false" data-testid="star-filled" >
                                            <path d="M11.776.454a.25.25 0 0 1 .448 0l3.303 6.692 7.384 1.073a.25.25 0 0 1 .139.426l-5.344 5.21 1.262 7.354a.25.25 0 0 1-.363.264L12 18l-6.605 3.473a.25.25 0 0 1-.363-.264l1.262-7.355L.95 8.645a.25.25 0 0 1 .139-.426l7.384-1.073L11.776.454Z">
                                            </path>
                                        </svg>
                                        <svg className={(averageRating > 4)? 'svg-2-filled' : 'svg-2'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="presentation" 
                                            aria-hidden="true" focusable="false" data-testid="star-filled" >
                                            <path d="M11.776.454a.25.25 0 0 1 .448 0l3.303 6.692 7.384 1.073a.25.25 0 0 1 .139.426l-5.344 5.21 1.262 7.354a.25.25 0 0 1-.363.264L12 18l-6.605 3.473a.25.25 0 0 1-.363-.264l1.262-7.355L.95 8.645a.25.25 0 0 1 .139-.426l7.384-1.073L11.776.454Z">
                                            </path>
                                        </svg>
                                        <p className='review-count'>{`${reviews.length} reviews`}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {reviews && 
                            reviews.map( review => {
                                return <>
                                <div className='profile-review-feed-div'>
                                    <  ProfileReviewItem review={review} key={review.id}/>
                                </div>
                                    
                                </>
                            })
                        }
                    </div>
                    </>
                    }
                    </div>
                </div>
            </div>
        </>
    }
    </>
    );
};

export default ProfilePage;