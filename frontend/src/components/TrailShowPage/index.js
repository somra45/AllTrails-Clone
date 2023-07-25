import { useSelector } from 'react-redux';
import './TrailShowPage.css'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { fetchTrail } from '../../store/trailsReducer';


const TrailShowPage = () => {
    const trailId = useParams().trailId;
    const trail = useSelector(fetchTrail(trailId));

    return (
        <div className='show-page-div'>
            <div className='show-module'>
                <div className='show-image-div'>
                    <h1 className='show-header'>{trail.name}</h1>
                    <h2 className='show-header-attribute'>{trail.difficulty}</h2>
                    <h2 className='show-header-attribute'>{trail.location}</h2>
                </div>
            </div>
        </div>
    )
};

export default TrailShowPage