
import React from 'react';
import GoogleMapReact from 'google-map-react'
import Marker from './Marker';


const Map = ({trails}) => {

    const defaultProps = {
        center: {lat: 40.73656149838155, lng:-73.99371238042113},
        zoom: 11
      };


    return (
        <div style={{ height: '100%', width: '100%' }}>
            < GoogleMapReact 
                bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_API_KEY }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                yesIWantToUseGoogleMapApiInternals
            >
                {trails && trails.map( trail => {
                    return (
                            < Marker
                                key={trail.id}
                                trail={trail}
                                lat={trail.lat}
                                lng={trail.lng}
                                // position={ { lat: trail.lat, lng: trail.lng }}
                            />
                    )
                })}
            </GoogleMapReact>
        </div>
    )
}

export default Map;