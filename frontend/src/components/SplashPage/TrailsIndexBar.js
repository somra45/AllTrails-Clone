import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchTrails } from '../../store/trailsReducer';
import { useSelector } from 'react-redux';
import './TrailsIndex.css'
import { Link } from 'react-router-dom';

const TrailsIndex = () => {
    const dispatch = useDispatch();
    let trails = useSelector((state) => state.entities.trails)
    trails = Object.values(trails)

    useEffect(() => {
        dispatch(fetchTrails());
    }, [])

    return (
        <>
            <div className='trails-index-div'>
            {trails.map((trail) => (
                <Link to={`/trails/${trail.trailId}`} className='trail-link' key={trail.id}>
                    <div className='trail-div' key={trail.id}>
                        <div className='trail-image-div'>
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
    )
}

export default TrailsIndex