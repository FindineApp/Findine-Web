import './App.css';
import Navigation from './components/navigation/Navigation';
import Find from './components/find/Find';
import { Map } from './components/map/Map';
import { Search } from './components/search/Search';

function App() {
  return (
    <div className="App">
      <div className='page-header'>
        <Navigation />
        <Find id='find'/>
        <Map />
        <Search id='search'/>
      </div>
    </div>
  );
}

export default App;
