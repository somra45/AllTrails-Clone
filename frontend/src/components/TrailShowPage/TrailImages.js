import './TrailImages.css'

const TrailImages = ( {trail} ) => {
    return (
        <>
        {trail.imageUrls && 
        <div className="image-container-modal">
            <div className="image-container">
                {trail.imageUrls.map((image) => 
                    <img className='image' src={image} />
                )}
            </div>
        </div>
        }
        </>
    );
};

export default TrailImages;