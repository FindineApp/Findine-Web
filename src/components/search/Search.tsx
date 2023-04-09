import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import './Search.css'

export const Search = () => {
  return (
    <div className='search'>
      <Header />
      <input className='search-bar'
        type="text"
        placeholder="eg. Italian, Pizza, Sweets"
      />
      <Footer />
    </div>
  )
}