import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchTrails } from '../../store/trailsReducer';
import { useSelector } from 'react-redux';
import './TrailIndexShow.css'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const TrailIndexShow = ( {currentTrail} ) => {
    const dispatch = useDispatch();
    let alltrails = useSelector((state) => state.entities.trails);
    alltrails = Object.values(alltrails);
    let currentState = currentTrail.location.includes('CA') ? 'CA' : 'NY';

    useEffect(() => {
        dispatch(fetchTrails());
    }, [])

    return (
        <>
            <h1 className='trails-show-index-heading'> Nearby Trails </h1>
            <div className='trails-show-div'>
            {alltrails.map((trail) => ( (currentTrail !== trail && trail.location.includes(currentState)) ?
                <Link to={`/trails/${trail.trailId}`} className='trail-link' >
                    <div className='trail-div'>
                        <div className='trail-image-show-div'>
                            <img className='trail-image'src={`${trail.imageUrls[0]}`}/>
                        </div>
                        <p className='trail-tag'>{trail.difficulty}</p>
                        <p className='trail-name'>{trail.name}</p>
                        <p className='trail-tag'>{trail.location}</p>
                        <p className='trail-tag'>Length: {trail.length} mi</p>
                    </div>
                </Link>
                : null))} 
            </div>
        </>
    )
}

export default TrailIndexShow