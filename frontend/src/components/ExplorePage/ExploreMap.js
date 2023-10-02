
import { useRef, useEffect, useState } from 'react';
import { Wrapper } from '@googlemaps/react-wrapper' 
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { openModal } from '../../store/modalReducer';
import TrailMapShow from './TrailMapShow';

const ExploreMap = ( {trails, mapOptions} ) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const mapRef = useRef(null);
    const markersRef = useRef({});
    
    const onMapClick = (trail) => {
        history.push(`trails/${trail.trailId}`)
    }

    useEffect(() => {

        if (mapRef.current === null) return;

        if (trails.length > 0) {
            const map = new window.google.maps.Map(mapRef.current, {
                center: {lat: 41.320550808381114, lng: -74.29142899041541},
                zoom: 8,
                ...mapOptions
            });
            Object.values(trails).forEach( (trail, idx) => {
                console.log('trail', trail)
                let marker = new window.google.maps.Marker({
                    position: {lat: trail?.lat, lng: trail?.lng},
                    map, 
                    title: trail?.name,
                    icon: "/assets/images/park.png"
                });
                
                markersRef.current[trail?.id] = marker;
                marker.addListener( 'click', () => {
                    onMapClick(trail)
                })
                return () => {
                    markersRef.current = {};
                }
            })

        }

     }, [trails, mapOptions])

    return (
        <div ref={mapRef} 
            style={{ width: '80%', 
                    height: '454px', 
                    borderRadius: '15px',
                    padding: '50px',
                    margin: '50px'
            }}
        >
        </div>
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
