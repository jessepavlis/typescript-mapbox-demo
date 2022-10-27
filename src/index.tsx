import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Map from "./Map";
import mapboxgl from "mapbox-gl";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const mapClickLog = (mapEvent: mapboxgl.MapMouseEvent) => {
  console.log(mapEvent.lngLat.wrap());
}

root.render(
  <React.StrictMode>
    <Map onClickCB={mapClickLog} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
