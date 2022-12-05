import React, { useEffect, useState } from 'react'
import Place from './place/Place';
import ApiService from '../../scripts/ApiService';

const Places: React.FC = () => {
  const [places, setPlaces] = useState<google.maps.places.PlaceResult[]>()

  useEffect(() => {
    const apiService = new ApiService();
    const placesPromise = apiService.getPlaces();
    placesPromise.then((placesResult) => setPlaces(placesResult))
        .catch((e) => console.error(`Critical failure: ${e.message}`));
  }, []);

  return (
    <div id='browse' className='browse'>
        <h2>{places?.length} Places Nearby</h2>
        <Place />
    </div>
  )
}

export default Places