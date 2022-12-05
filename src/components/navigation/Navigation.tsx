import React from 'react'
import './Navigation.css'

const Navigation = () => {
  return (
    <div className='navigation'>
      <h1 className='title'>Findine</h1>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#find">Find</a></li>
        <li><a href="#search">Search</a></li>
        <li><a href="#browse">Browse</a></li>
      </ul>
    </div>
  )
}

export default Navigation