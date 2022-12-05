import React from 'react'
import './Place.css'

const Place = (props: google.maps.places.PlaceResult) => {
  return (
    <div className='place'>
      <img src='https://www.vmcdn.ca/f/files/burnabynow/images/business/haidilao-food.jpg' alt='image of place'/>  
      <div className='placeAttributes'>
        <div className='placeAttributesTop'>
          <h3>HaiDiLao HotPot Richmond</h3>
          <h4>700 m</h4>
        </div>
        <div className='placeAttributesBot'>
          <h4>★4.5 (416)</h4>
          <h4>Chinese Hotpot</h4>
        </div>
      </div>
    </div>
  )
}

export default Place