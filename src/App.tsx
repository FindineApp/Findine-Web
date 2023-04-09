import './App.css';
import Header from './components/header/Header';
import Finder from './components/finder/Finder';
import { Map } from './components/map/Map';
import { Search } from './components/search/Search';
import Places from './components/places/Places';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Browse from './components/browse/Browse';

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find" element={<Finder />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/search" element={<Search />} />
      </Routes> 
    </main>
  );
}

export default App;