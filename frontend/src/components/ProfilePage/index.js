import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import './ProfilePage.css'
import { addFavorites } from '../../store/favoritesReducer';
import {useHistory} from 'react-router-dom'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const ProfilePage = () => {
    const member = useSelector(state => state.session.member);
   
    let dispatch = useDispatch();
    const favoritedTrails = Object.values(useSelector(state => state.entities.favorites))
    let year =  null

    const printMonthString = (member) => {
        const monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'August', 'September', 'October', 'November', 'December']
        const month = parseInt(member.createdAt.slice(5,7))
        year = parseInt(member.createdAt.slice(0,4));
        const day = parseInt(member.createdAt.slice(8,10))
        const createdAtDate = new Date(year,month,day) 
        return monthsArray[createdAtDate.getMonth()]
    }

    const calculateAverageReview = (trail) => {
        const trailReviews = Object.values(trail.reviews) 
        let numReviews = trailReviews.length
        let totalRating = trailReviews.map( review => {
            return review.rating
        }).reduce((sum, acc) => (
             sum + acc
        ))
        const averageRating = Math.round((totalRating / numReviews * 10))/10
        return averageRating
    }

    useEffect(() => {
        dispatch(addFavorites(member.id))
    }, [])

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
                        <div className='favorited-trails'>
                            <h1 className='favorited-trails-header'>Favorites</h1>
                            {favoritedTrails.length > 0 && 
                                favoritedTrails?.map(trail => 
                                    <div className='individual-trail'>
                                        <Link to={`/trails/${trail.id}`}>
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
                    </div>
                </div>
            </div>
        </>
    }
    </>
    );
};

export default ProfilePage;