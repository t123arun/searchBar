import { useState } from 'react'

function SearchBar({setResults}){
    const [input, setInput] = useState("");

    const fetchData = (value) => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return value && user && user.name && user.name.toLowerCase().includes(value)
        });
        setResults = results;
      });
    }
  
    const handleChange= (value) => {
      setInput(value);
      fetchData(value);
    }
    return(
        <form>
            <input type="text" name="search-input" 
            id="search-input" value={input} onChange={(e) => handleChange(e.target.value)}/>
            <label htmlFor="search-input"></label>
        </form>
    )
}

export default SearchBar