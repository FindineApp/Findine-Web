import './App.css';
import Navigation from './components/navigation/Navigation';
import Find from './components/find/Find';
import { Map } from './components/map/Map';
import { Search } from './components/search/Search';
import Places from './components/places/Places';
import React from 'react';

function App() {
  return (
    <div className="App">
      <div className='page-header'>
        <Navigation />
        <Find id='find'/>
        <Map />
        <Search id='search'/>
        <Places id='browse'/>
      </div>
    </div>
  );
}

export default App;
