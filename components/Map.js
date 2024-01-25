"use client";

import React, { useEffect } from 'react'
import { Loader } from '@googlemaps/js-api-loader';

const Map = () => {
    const mapRef = React.useRef(null);
    useEffect(() => {
        const initMap = async () => {
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
                version: 'weekly'
            });
            const { Map } = await loader.importLibrary('maps');
            const { Marker } = await loader.importLibrary('marker');
            const position = {
                lat: 6.4854873,
                lng: 3.3555328
            }
            const mapOptions = google.maps.mapOptions = {
                center: position,
                zoom: 17,
                mapId: 'AHRELIA_MAPID'
            }
            const map = new Map(mapRef.current, mapOptions);
        }
        initMap();
    }, []);

    return (
        <div style={{ height: '500px', }} ref={mapRef} />
    )
}

export default Map