import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
// @ts-ignore
import MapboxGeocoder from "mapbox-gl-geocoder";

interface MapGeocoderProps {
  map: mapboxgl.Map | null
}

const MapGeocoder = ({ map }: MapGeocoderProps) => {

  useEffect(() => {
    if (!map) return;
    const mapboxGeocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl
    })

    map.addControl(mapboxGeocoder);

    return () => {
      map.removeControl(mapboxGeocoder);
    }
  })

  return <></>;
}

export default MapGeocoder;