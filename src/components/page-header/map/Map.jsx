import React from 'react'
import './Map.css'
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

export const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapApiKey: "AIzaSyA1r74F89lUC_UioBorQ-osgkA0Rcx1IUY"
  });  

  if (!isLoaded) return <div>Loading...</div>;
  
  return (
    <GoogleMap 
      zoom={10} 
      center={{lat: 44, lng: -80}}
      mapContainerClassName="map-container"
    ></GoogleMap>
    );
}
