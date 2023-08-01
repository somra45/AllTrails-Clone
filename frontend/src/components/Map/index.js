import GoogleMapReact from 'google-map-react';

const Map = () => {
    const center = {
        lat: 40.73632,
        lng: -73.99376
    }
    const containerStyle = {
        width: '100vw',
        height: '50vh'
    }
    return (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            >

            </GoogleMap>
    );
};


export default Map;