import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';


function SearchBar() {
    const[query,setQuery]=useState('');
  const history = useHistory();


  const handleSearch = (e) => {
    e.preventDefault();
history.push('search/${query}');
  };

  return (
    <form onSubmit={handleSearch}>
      <input type="text" 
      value={query} 
      onChange={(e) => setQuery(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;