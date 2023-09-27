import React, { useState } from 'react';
import { useEffect } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux"
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import { fetchTrail } from '../../store/trailsReducer';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './PhotoSlider.css'

const PhotoSlider = () => {
    const dispatch = useDispatch();
    const trailId = useParams().trailId;
    const trail = useSelector(state => state.entities.trails[trailId]);
    const imageUrls = trail?.imageUrls;
    const sliderData = imageUrls?.map((imageUrl) => {
        return {image: imageUrl}
    });
    const [current, setCurrent] = useState(0);
    const length = sliderData?.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    useEffect(() => {
        dispatch(fetchTrail(trailId))
    }, [trailId])

    if (!Array.isArray(sliderData) || sliderData?.length <= 0) {
        return null;
    }

    return (
        <>
            <div className='photo-page-details-div'>
                <h1 className='photo-page-header'>{trail.name}</h1>
                <p className='photo-page-location'>{trail.location}</p>
                < Link to={`/trails/${trailId}`}><p className='photo-page-link'>Back to Trail</p></Link>
            </div>
            
            <section className='image-slider'>
                <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
                <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
                {sliderData.map((slide, index) => {
                    return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (
                        <img src={slide.image} alt='travel slide-image' className='slide-image' />
                        )}
                    </div>
                );
                })}
            </section>
        </>
    );
};

export default PhotoSlider;