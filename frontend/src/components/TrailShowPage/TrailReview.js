import TrailReviewItem from './TrailReviewItem';



const TrailReview = ({ reviews }) => {
    return (
        <>
            {reviews.map(review => (
                < TrailReviewItem review={ review } key={review.id} />
            ))}
        </>
    );
};

export default TrailReview;