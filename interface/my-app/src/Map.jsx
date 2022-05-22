import React, { useRef, useEffect, useState, forwardRef,useImperativeHandle } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax


mapboxgl.accessToken='pk.eyJ1IjoidmluLXhpIiwiYSI6ImNrejExcnZ0NDBhMW0ydnBxeGw3MnV0M3oifQ.jWgYBYCLnKdiZOdzfoZzhA'
const geojson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-77.032, 38.913]
      },
      properties: {
        title: 'Mapbox',
        description: 'Washington, D.C.'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-122.414, 37.776]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
  ]
};

 const MapView=forwardRef((props,ref)=> {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  

  useEffect(() => {
  if (map.current) return; // initialize map only once

  map.current = new mapboxgl.Map({
  container: mapContainer.current,
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [lng, lat],
  zoom: zoom
  });
  });
  
  useImperativeHandle(
    ref,
    (s) => ({
      flyMap(){
        console.log(props.lat,props.long)
        const el = document.createElement('div');
        el.className = 'marker';

          // make a marker for each feature and add to the map
        new mapboxgl.Marker({
          color:'#153780',

        }
        ).setLngLat([props.lat,props.long]).addTo(map.current);
        map.current.flyTo({
          center: [
          props.lat,props.long  
          ],
          essential: true // this animation is considered essential with respect to prefers-reduced-motion
          });
          
      },
      addMarker(){

      }
    }),
  )
  useEffect(() => {
  if (!map.current) return; // wait for map to initialize
  
  map.current.on('move', () => {
  setLng(map.current.getCenter().lng.toFixed(4));
  setLat(map.current.getCenter().lat.toFixed(4));
  setZoom(map.current.getZoom().toFixed(2));
  
  });
  console.log(map.current)
});
    
  return (
  <div>
  <div className="sidebar">
  Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
  </div>
  <div ref={mapContainer} className="map-container" />
  </div>
  );
 })

export default MapView