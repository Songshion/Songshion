import React, { useState, useEffect } from 'react';
export default function App() {
  const [search, setSearch] = useState('');
  const [list, setList] = useState([]);
  async function handleClick(e) {
    e.preventDefault();
    console.log('click', search);
    try {
      const response = await fetch(
        'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&city=Chicago&localStartEndDateTime=2021-10-05T00:00:00,2021-10-06T00:00:00&apikey=wCk6GSsb161G6CrEc2a8Rv2BQAEZ7PdQ',
        {
          method: 'GET',
        }
      );
      const fetchedQuery = await response.json();
      setList(fetchedQuery);
    // line below works in pulling in artist name  
      console.log('Artist Name:', fetchedQuery._embedded.events[0].name);
    // lines below are to try to store the artist name 
    //   setList(fetchedQuery._embedded.events[0].name);
    //   console.log('testingsetArtist:', setList);
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
      <h1> Giphy Image Finder</h1>
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