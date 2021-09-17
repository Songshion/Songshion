import React, { useState, useEffect } from 'react';
import Moment from 'moment';
export default function App() {
  const [search, setSearch] = useState('');
  const [list, setList] = useState([]);
  const [fetchdata, setFetchData] = useState([])

  async function handleClick(e) {
    e.preventDefault();

    const date = Moment().format()
    const startDate = date.slice(0, 19)
    const endDate = Number(date.slice(8, 10))+3
    const firstHalf = date.slice(0, 8)
    const secondHalf = date.slice(10, 19)
    console.log("hello" , secondHalf);
    const realEndDate = firstHalf + endDate.toString()+secondHalf;
    console.log("realEndDate" , realEndDate);
    console.log(date)
    
    console.log(Number(date.slice(8, 10))+3)

    try {
      const response = await fetch(
       // 2021-09-16T21:30:36-05:00
        'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&city='+search+'&localStartEndDateTime='+startDate+','+realEndDate+'&apikey=wCk6GSsb161G6CrEc2a8Rv2BQAEZ7PdQ',
        {
          method: 'GET',
        }
      );
      const fetchedQuery = await response.json();
      setFetchData(fetchedQuery._embedded.events);
    // line below works in pulling in artist name  
      // console.log('Artist Name:', fetchedQuery._embedded.events[0].name);
    // lines below are to try to store the artist name 
    //   setList(fetchedQuery._embedded.events[0].name);
    //   console.log('testingsetArtist:', setList);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() =>{
    console.log('Cars', fetchdata[0].name)
  },[fetchdata]);
//   let musicData = fetchdata._embedded.events.map((event)=>{
//    if (musicData.length == 0){
//      return (<div></div>)
//    } else {
//    return(
//      <div>
//        <p>YO</p>
//      </div>
//    )
//    }
//  })


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
        <input type="button" onClick={handleClick} />
      </form>
      {/* {musicData} */}
    </div>
  );
}