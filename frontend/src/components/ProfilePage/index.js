import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import './ProfilePage.css'
import { addFavorites } from '../../store/favoritesReducer';

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

    useEffect(() => {
        dispatch(addFavorites(member.id))
    }, [])

    return (
        <>
        {member && <>

            <div className='full-page-div' >
                <div className='profile-left-container'>
                    <div className='profile-info-div'>
                        <h2 className='profile-header' >{member.firstname} {member.lastname}</h2>
                        <div className="profile-page-picture" style={{backgroundImage: `url(${member.photoUrl})`}}>
                            <p className='member-since-p'>{`Member since ${printMonthString(member)} ${year}`}</p>
                        </div>
                    </div>
                </div>
                <div className='profile-right-container'>
                    <div className='favorited-trails-container' >
                        <div className='favorited-trails'>
                            {favoritedTrails.length > 0 && 
                                favoritedTrails?.map(trail => 
                                    <div className='individual-trail'>
                                        <div className='profile-trail-info-div' >

                                        </div>
                                       <img className='profile-trail-image' src={trail.imageUrls[0]}></img> 
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