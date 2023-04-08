import React from 'react'
import Footer from '../footer/Footer'
import Navigation from '../navigation/Navigation'
import Map from '../../img/map.jpg'
import Browse from '../../img/browse.jpg'
import Search from '../../img/search.jpg'
import Find from '../../img/find.jpg'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
        <Navigation />
        <div className='page-hero'>
            <div className='container'>
                <h1>Findine</h1>
                <p>Find Your Desired Dine</p>
                <a className="btn" href="#">Learn More</a>
            </div>
        </div>
        <div className='body-content'>
            <div className='find'>
                <div className="container">
                    <img src={Find} height="400" width="400" />
                    <div className='container-text'>
                        <h2>Restaurant Auto Picker</h2>
                        <p>Out for the day and have trouble deciding where to eat?</p> 
                        <p>With just one click, discover new dining destinations without any of the hassle of decision-making</p>
                        <p>Try it today and take the stress out of dining!</p>
                        <button className='btn'>Try it Now</button>
                    </div>
                </div>
            </div>
            <div className='map'>
                <div className="container">
                    <img src={Map} height="400" width="400" />
                    <div className='container-text'>
                        <h2>Explore Restaurants on the Map</h2>
                        <p>Prefer a visual way to find nearby restaurants?</p>
                        <p>Use Findine's interactive map to browse through the area and discover local dining options</p>
                        <p>Simply zoom in or out, pan around, and click on a restaurant marker to see more details about the restaurant</p>
                        <button className='btn'>Start Exploring</button>
                    </div>
                </div>
            </div>
            <div className='browse'>
                <div className="container">
                    <div className='container-text'>
                        <h2>Browse Nearby Restaurants</h2>
                        <p>Want to explore the local dining scene?</p>
                        <p>Findine allows you to easily browse nearby restaurants and view detailed information for each one,</p>
                        <p>including menus, hours of operation, ratings, and reviews</p>
                        <button className='btn'>Start Browsing</button>
                    </div>
                </div>
            </div>
            <div className='search'>
                <div className="container">
                    <img src={Search} height="400" width="400" />
                    <div className='container-text'>
                        <h2>Search By Keywords</h2>
                        <p>Looking for a specific type of cuisine or dish?</p>
                        <p>Use Findine's search feature to find restaurants or food items that match your keywords</p>
                        <p>Whether you're in the mood for sushi, pizza, or vegetarian options, you can quickly find what you're looking for</p>
                        <button className='btn'>Search Now</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Home