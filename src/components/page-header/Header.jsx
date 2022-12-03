import React from 'react'
import { Map } from './map/Map'
import Find from './find/Find'

const Header = () => {
  return (
    <div className='page-header'>
      <Find />
      <Map />
    </div>
  )
}

export default Header