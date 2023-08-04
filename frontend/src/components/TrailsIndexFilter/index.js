import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchTrails } from '../../store/trailsReducer';
import { useSelector } from 'react-redux';
import './TrailIndexFilter.css'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const TrailIndexFilter = () => {
    const dispatch = useDispatch();
    let alltrails = useSelector((state) => state.entities.trails);
    alltrails = Object.values(alltrails).filter(trail => trail.description.includes('waterfall') || trail.description.includes('Waterfall'))
    
    useEffect(() => {
        dispatch(fetchTrails());
    }, [])

    return (
        <>
            <div className='trails-filter-div'>
            {alltrails.map((trail) => (
                <Link to={`/trails/${trail.trailId}`} className='trail-link' >
                    <div className='trail-div'>
                        <div className='trail-image-filter-div'>
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

export default TrailIndexFilter