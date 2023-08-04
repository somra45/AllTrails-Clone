
import { useRef, useEffect } from 'react';
import { Wrapper } from '@googlemaps/react-wrapper' 
import { useDispatch } from 'react-redux';
import { openModal } from '../../store/modalReducer';

const ExploreMap = ( {trails, mapOptions} ) => {
    const dispatch = useDispatch();

    const mapRef = useRef(null);
    const markersRef = useRef({});

    useEffect(() => {

        if (mapRef.current === null) return;

        if (trails.length > 0) {
            const map = new window.google.maps.Map(mapRef.current, {
                center: {lat: 41.320550808381114, lng: -74.29142899041541},
                zoom: 8,
                ...mapOptions
            });
            Object.values(trails).forEach( (trail, idx) => {
                let marker = new window.google.maps.Marker({
                    position: {lat: trail?.lat, lng: trail?.lng},
                    map, 
                    title: trail?.name,
                    icon: "/assets/images/map-pin.svg"
                });
        
                markersRef.current[trail?.id] = marker;
                return () => {
                    markersRef.current = {};
                }
            })

        }

     }, [trails, mapOptions])

    return (
        <div ref={mapRef} 
            style={{ width: '60%', 
                    height: '454px', 
                    borderRadius: '15px',
                    padding: '50px',
                    margin: '50px'
            }}
        />
    );
};


export const ExploreMapWrapper = (props) => {
    return (
        <Wrapper apiKey={process.env.REACT_APP_MAPS_API_KEY}>
            < ExploreMap {...props} /> 
        </Wrapper>
    );
};

export default ExploreMapWrapper;