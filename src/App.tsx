import './App.css';
import Navigation from './components/navigation/Navigation';
import Finder from './components/finder/Finder';
import { Map } from './components/map/Map';
import { SearchBar } from './components/search-bar/SearchBar';
import Places from './components/places/Places';

function App() {
  return (
    <div className="App">
      <div className='page-header'>
        <Navigation />
        <Finder/>
        <Map />
        <SearchBar/>
        <Places/>
      </div>
    </div>
  );
}

export default App;