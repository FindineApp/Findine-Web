import './App.css';
import Navigation from './components/navigation/Navigation';
import Finder from './components/finder/Finder';
import { Map } from './components/map/Map';
import { SearchBar } from './components/search-bar/SearchBar';
import Places from './components/places/Places';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Map />} />
        <Route path="/pets" element={<SearchBar />} />
        <Route path="/addPets" element={<Places />} />
      </Routes> 
    </main>
  );
}

export default App;