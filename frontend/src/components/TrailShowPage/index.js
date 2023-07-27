import { useSelector } from 'react-redux';
import './TrailShowPage.css'
import { useParams } from 'react-router-dom';
import { fetchTrail, fetchTrails } from '../../store/trailsReducer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Footer from '../Footer';


const TrailShowPage = () => {
    const trailId = useParams().trailId;
    const dispatch = useDispatch();
    const trail = useSelector((state) => state.entities.trails[trailId]);
    const reviews = Object.values(useSelector((state) => state.entities.reviews))
    useEffect(() => {
        dispatch(fetchTrail(trailId));
    }, [trailId]) 

    return (
        <>
        { trail &&  
            <div className='show-page-div'>
                <h2 className='navigation-header'>United States  {trail.location}</h2>
                <div className='show-module'>
                    <div className='show-image-div'>
                        <h1 className='show-header'>{trail.name}</h1>
                        <h2 className='show-header-attribute'>{trail.difficulty}</h2>
                        <h2 className='show-header-attribute'>{trail.location}</h2>
                    </div>
                    <div className='links-bar'>
                        <div className='link'>
                            <div className='links-circle-div'>
                                <img src='../assets/images/Show-page-icons/camera.svg' alt='photos'></img>
                            </div>
                            <p className='link-header'>Photos</p>
                        </div>
                        <div className='link'>
                            <div className='links-circle-div'>
                                <img src='../assets/images/Show-page-icons/truck.svg' alt='directions'></img>
                            </div>
                            <p className='link-header'>Directions</p>
                        </div>

                        <div className='link'>
                            <div className='links-circle-div'>
                                <img src='../assets/images/Show-page-icons/printer.svg' alt='print'></img>
                            </div> 
                            <p className='link-header'>Print</p>
                        </div>
                        
                        <div className='link'>
                            <div className='links-circle-div'>
                                <img src='../assets/images/Show-page-icons/share.svg' alt='share'></img>
                            </div>
                            <p className='link-header'>Share</p>
                        </div>
                        
                        <div className='link'>
                            <div className='links-circle-div'>
                                <img src='../assets/images/Show-page-icons/more-horizontal.svg' alt='more'></img>
                            </div> 
                            <p className='link-header'>More</p>  
                        </div>
                        
                    </div>
                    <div className='all-attributes-div'>
                        <div className='ler-attribute-div'>
                            <div>
                                <p className='ler-attribute-heading'>Length</p>
                                <p className='ler-attribute-value'>{trail.length}</p>
                            </div>
                            <div>
                                <p className='ler-attribute-heading'>Elevation Gain</p>
                                <p className='ler-attribute-value'>{trail.elevationGain}</p>
                            </div>
                            <div>
                                <p className='ler-attribute-heading'>Route type</p>
                                <p className='ler-attribute-value'>{trail.routeType}</p>
                            </div>
                        </div>
                        <div className='description-paragraph-div'> 
                            <p className='description-paragraph'>
                                {trail.description}
                            </p>
                        </div>
                        <div className='all-tags-div'>
                        {trail.tags.map((tag) => (<div className='tag-div'><p className='tag'>{tag}</p></div>))}  
                        </div>
                        <div className='review-feed-div'>
                            <h1 className='review-header'>Reviews</h1>
                        {reviews.map((review) => (
                            <div className='review-div'>
                                <h2 className='review-author'>{`${review.author.firstname} ${review.author.lastname[0]}`}</h2>
                                <p className='review'>{review.body}</p>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        }
        < Footer />
        </>
    );
};

export default TrailShowPage