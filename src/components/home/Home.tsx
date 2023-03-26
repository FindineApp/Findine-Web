import React from 'react'
import Footer from '../footer/Footer'
import Navigation from '../navigation/Navigation'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
        <Navigation />
        <div className='page-hero'>
            <div className='container'>
                <h1>Findine</h1>
                <p>Connect your ideas globally</p>
                <a className="btn" href="#">Learn More</a>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Home