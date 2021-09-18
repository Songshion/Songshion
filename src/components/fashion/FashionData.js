import React, { useState, useEffect } from 'react';
import EventsData from '../events/EventsData';
export default function App() {
  const [search, setSearch] = useState('');
  const [list, setList] = useState([]);
  async function handleClick(e) {
    e.preventDefault();
    console.log('click', search);
    try {
      const response = await fetch(
        'https://bing-image-search1.p.rapidapi.com/images/search?q=' +
          search +
          '&count=3',
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'bing-image-search1.p.rapidapi.com',
            'x-rapidapi-key':
              '8f51a65917msh0db0978dd11a003p1d2088jsn580b050a1a14'
          }
        }
      );
      const fetchedQuery = await response.json();
      setList(fetchedQuery);
      console.log('hello', fetchedQuery.value);
    } catch (err) {
      console.log(err);
    }
  }
  const handleInput = e => {
    setSearch(e.target.value);
  };
  // const display = list.map(gif => {
  //   return (
  //     <img src= "" alt= "" type= "gif"></img>
  //   )
  // })
  return (
    <div className="App">
      <h1> Outfit Finder</h1>
      <form>
        <input
          type="text"
          placeholder="search for giphy"
          onChange={handleInput}
        />
        <input type="button" value="SEARCH" onClick={handleClick} />
      </form>
    </div>
  );
}