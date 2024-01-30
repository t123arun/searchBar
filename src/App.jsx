import SearchBar from './SearchBar';
import './App.css'
import SearchResults from './SearchResults';
import { useState } from 'react';

function App() {

  const [results, setResults] = useState([]);

  return (
    <>
      <div className="search-wrapper">
        <SearchBar setResults = { setResults }/>
        <SearchResults results = { results }/>
    </div>
    </>
  )
}

export default App
