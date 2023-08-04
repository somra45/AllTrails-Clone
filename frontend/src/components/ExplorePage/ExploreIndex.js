import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchTrails } from '../../store/trailsReducer';
import { useSelector } from 'react-redux';
import './ExploreIndex.css'
import { Link } from 'react-router-dom';

const ExploreIndex = () => {
    const dispatch = useDispatch();
    const trails = Object.values(useSelector(state => state.entities.trails))

    useEffect(() => {
        dispatch(fetchTrails());
    }, [])

    return (
        <>
        {trails &&
            <>
            <h1 className='trails-explore-index-heading'> Explore SmallTrails </h1>
            <div className='trails-explore-div'>
            {trails.map((trail) => (  
                <Link to={`/trails/${trail.trailId}`} className='trail-link' >
                    <div className='trail-div'>
                        <div className='trail-image-explore-div'>
                            <img className='trail-image'src={`${trail.imageUrls[0]}`}/>
                        </div>
                        <p className='trail-tag'>{trail.difficulty}</p>
                        <p className='trail-name'>{trail.name}</p>
                        <p className='trail-tag'>{trail.location}</p>
                        <p className='trail-tag'>Length: {trail.length} mi</p>
                    </div>
                </Link>
                ))} 
            </div>
            </>
        }
        </>
    )
}

export default ExploreIndex