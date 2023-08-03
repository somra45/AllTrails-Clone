import { useDispatch, useSelector } from 'react-redux';
import { fetchTrail } from '../../store/trailsReducer';
import TrailReviewItem from './TrailReviewItem';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect } from 'react';

const TrailReview = () => {
    const reviews = Object.values(useSelector((state) => state.entities.reviews))
    return (
        <>
            {reviews.map(review => (
                < TrailReviewItem review={ review } key={review.id} />
            ))}
        </>
    );
};

export default TrailReview;