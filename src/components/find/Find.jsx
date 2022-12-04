import React from 'react'
import './Find.css'
import { Link } from "react-router-dom";

const Find = () => {

  const findPlace = () => {

  }
  
  return (
    <Link to="/placedetails">
      <button 
        className='find'
        onClick={findPlace}>
      Find
      </button>
    </Link>
  )
}

export default Find