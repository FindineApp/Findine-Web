import './App.css';
import Header from './components/page-header/Header';
import { Search } from './components/page-main/search/Search';

function App() {
  return (
    <div className="App">
      <h1 className='title'>Findine</h1>
      <Header />
      <Search />
    </div>
  );
}

export default App;
