import React, {useEffect, useRef, useState} from "react";

import mapboxgl from "mapbox-gl";
import "./Map.css";
import MapGeocoder from "./MapGeocoder";

if (!process.env.REACT_APP_MAPBOX_TOKEN) throw new Error("You need to set REACT_APP_MAPBOX_TOKEN")
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN

const Map = () => {

  const mapContainer = useRef(null);
  // const map = useRef<mapboxgl.Map | null>(null);
  const [map, setMap] = useState<mapboxgl.Map | null>(null);

  useEffect(() => {
    console.log("hit!")
    if (map) return; // initialize map only once
    if (!mapContainer.current) {
      console.log("map container not set");
      return;
    }
    const newMap = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-70.9, 42.35],
      zoom: 9
    });

    setMap(newMap);

    return () => {
      newMap.remove()
      setMap(null);
    }
  }, []);


  return (
    <div ref={mapContainer} className={'map-container'}>
      <MapGeocoder map={map} />
    </div>
  )
}


export default Map;