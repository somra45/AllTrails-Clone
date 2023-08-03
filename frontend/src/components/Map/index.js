
import { useRef, useEffect } from 'react';
import { Wrapper } from '@googlemaps/react-wrapper' 

const Map = ( {trail, mapOptions} ) => {
    const mapRef = useRef(null);
    const markersRef = useRef({});
    
    useEffect(() => {
        if (mapRef.current === null) return;

        const map = new window.google.maps.Map(mapRef.current, {
            center: {lat: trail?.lat, lng: trail?.lng },
            zoom: 12,
            ...mapOptions
        });

        const marker = new window.google.maps.Marker({
            position: {lat: trail?.lat, lng: trail?.lng},
            map, 
            title: trail?.name,
            icon: "/assets/images/marker.png"
        });

        markersRef.current[trail?.id] = marker;
        return () => {
            markersRef.current = {};
        }
     }, [trail, mapOptions])

    return (
        <div ref={mapRef} style={{ width: '100%', height: '304px', borderRadius: '15px'}} />
    );
};


export const MapWrapper = (props) => {
    return (
        <Wrapper apiKey={process.env.REACT_APP_MAPS_API_KEY}>
            < Map {...props} /> 
        </Wrapper>
    );
};

export default MapWrapper;
