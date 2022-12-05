import React from 'react'
import './SearchBar.css'

export const SearchBar = () => {
  return (
    <div id='search' className='search-bar'>
      <input 
        type="text"
        placeholder="eg. Italian, Pizza, Sweets"
      />
    </div>
  )
}