import React from 'react'
import './Search.css'

export const Search = () => {
  return (
    <div className='page-header'>
      <div className='search-bar'>
        <input 
          type="text"
          placeholder="eg. Italian, Pizza, Sweets"
        />
        <button>Search</button>
      </div>
    </div>
  )
}
