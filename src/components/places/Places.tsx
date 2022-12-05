import React, { useState } from 'react'
import Place from './place/Place';

const Places = () => {
  const [placeCount, setPlaceCount] = useState(60)

  return (
    <div id='browse' className='browse'>
        <h2>{placeCount} Places Nearby</h2>
        <Place />
    </div>
  )
}

export default Places