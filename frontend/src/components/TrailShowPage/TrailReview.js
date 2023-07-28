import TrailReviewItem from './TrailReviewItem';



const TrailReview = ({ reviews }) => {
    return (
        <>
            {reviews.map(review => (
                < TrailReviewItem review={ review }/>
            ))}
        </>
    );
};

export default TrailReview;