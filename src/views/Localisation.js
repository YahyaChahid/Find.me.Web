import React from 'react';
import '../assets/style/zinebStyle.css'
import {Helmet} from 'react-helmet';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '75vh'
};

const center = {
    lat: 31.64070881197436,
    lng: -8.041459607165606
};

function MyComponent() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAR4f6rYi3_5pmlZ495PGkVUDHxRgb0lCQ"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        // hna nqedru nketbu code itexuta avant ma map trendra
        setMap(null)
    }, [])

    return isLoaded ? (
        // <Marker position={ center } /> hadi katle3 mark fuq lblassa li derna f code (latitude & longitude)
        <>
            <Helmet>
                <style>{'body { background-color: #262936; }'}</style>
            </Helmet>
        <div>
            <h2 className="text-center text-white-50">
                Maps Javascript Api
            </h2>
            <div className="d-flex justify-content-center mt-2">
                <GoogleMap
                    // hadu kaytel3u latitude & longitude f console
                    onClick={ev => {
                        console.log("latitide = ", ev.latLng.lat());
                        console.log("longitude = ", ev.latLng.lng());
                    }}
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={1}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                >
                    <Marker position={ center } />
                    <></>
                </GoogleMap>
            </div>
        </div>
        </>
    ) : <></>
}

export default React.memo(MyComponent)
