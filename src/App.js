import './App.css';
import { Map } from './components/map/Map';
import { Search } from './components/search/Search';

function App() {
  return (
    <div className="App">
      <h1 className='title'>Findine</h1>
      <Map />
      <Search />
    </div>
  );
}

export default App;
