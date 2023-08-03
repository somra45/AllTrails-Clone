import { useSelector } from 'react-redux';
import './TrailShowPage.css'
import { useParams } from 'react-router-dom';
import { fetchTrail, fetchTrails } from '../../store/trailsReducer';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Footer from '../Footer';
import TrailReview from './TrailReview';
import TrailImages from './TrailImages';
import { openModal } from '../../store/modalReducer';
import Modal from '../Modal/modal';
import MapWrapper from '../Map';
import TrailIndexShow from './TrailIndexShow';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const TrailShowPage = () => {
    const trailId = useParams().trailId;
    const dispatch = useDispatch();
    const trail = useSelector((state) => state.entities.trails[trailId]);
    const reviews = Object.values(useSelector((state) => state.entities.reviews));
    const currentMember = useSelector(state => state.session.member)
    const [totalRating, setTotalRating] = useState(1); 
    const [averageRating, setAverageRating] = useState(1);
    const history = useHistory();
    let ratingCount1 = 0;
    let ratingCount2 = 0;
    let ratingCount3 = 0;
    let ratingCount4 = 0;
    let ratingCount5 = 0;

    useEffect(() => {
        if (reviews.length > 0) {
            setTotalRating(reviews.map((review) => {return review.rating} )
            .reduce((partialSum, acc) =>  partialSum + acc ));
            setAverageRating(Math.round((totalRating/reviews.length * 10))/10);
        }
    }, [reviews])

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

     const handleClick = (e) => {
        e.preventDefault();
        if (currentMember) {
            dispatch(openModal('createreview'));
        } else {
            history.push('/login')
        }
     };

    useEffect(() => {
        dispatch(fetchTrail(trailId))

    }, [trailId]) 

    const openPhotos = (e) => {
        e.preventDefault();
        history.push(`/trails/${trailId}/photos`);
    }

    return (
        <>
        { trail && trail.imageUrls &&
            <div className='show-page-div'>
                < Modal />
                <h2 className='navigation-header'>United States  {trail.location}</h2>
                <div className='show-module'>
                    <div className='show-image-div' style={{backgroundImage: `url(${trail.imageUrls[0]})`}}>
                        <h1 className='show-header'>{trail.name}</h1>
                        <h2 className='show-header-attribute'>{trail.difficulty}</h2>
                        <h2 className='show-header-attribute'>{trail.location}</h2>
                    </div>
                    <div className='links-bar'>
                        <div className='link' onClick={openPhotos} > 
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
                    <div className='show-information-div'>
                        <div className='all-attributes-div'>
                        <div className='ler-attribute-div'>
                            <div>
                                <p className='ler-attribute-heading'>Length</p>
                                <p className='ler-attribute-value'>{`${trail.length} mi`}</p>
                            </div>
                            <div>
                                <p className='ler-attribute-heading'>Elevation Gain</p>
                                <p className='ler-attribute-value'>{`${trail.elevationGain} ft`}</p>
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
                        {trail.tags.map((tag) => (<div className='tag-div' key={tag.id} ><p className='tag'  key={tag.id}>{tag}</p></div>))}  
                        </div>
                       { reviews && <div className='review-feed-div'>
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
                                <div className='rating-count-div'>
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
                                <button onClick={handleClick} className='write-review-button'>Write review
                                </button>
                            </div>
                            < TrailReview />
                        </div>
                        }
                    </div>
                    <div className='right-bar-div'>
                        <div className='maps-div'>
                            < MapWrapper trail={ trail }/>
                        </div>   
                        <div className='nearby-trails-div'>
                            <TrailIndexShow currentTrail={ trail } />
                        </div>
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