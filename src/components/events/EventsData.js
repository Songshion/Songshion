import { Card, Col, Row } from 'antd';
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import Moment from 'moment';
// import ''



export default function EventData() {
  const [search, setSearch] = useState('');
  const [list, setList] = useState([]);
  const [fetchData, setFetchData] = useState({});
  const [fetchName, setFetchName] = useState([])
  const [fetchImg, setFetchImg] = useState([])
  const [fetchGenre, setFetchGenre] = useState([])
  const [fetchTime, setFetchTime] = useState([])
  const [fetchDate, setFetchDate] = useState([])
  const [fetchVenue, setFetchVenue] = useState([])
  const [events, setEvents] = useState([]);
  async function handleInput(e, value) {
    setSearch(e.target.value);
    setFetchName({ ...fetchName, [e]: value })
  };
  async function handleClick(e) {
    e.preventDefault();
    const updateEvents = [...events, fetchName]
    setEvents(updateEvents)
    setFetchName({ name: [] })
    const date = Moment().format()
    const startDate = date.slice(0, 19)
    const endDate = Number(date.slice(8, 10)) + 3
    const firstHalf = date.slice(0, 8)
    const secondHalf = date.slice(10, 19)
    const API_KEY = 'aTlH3EnwmeBRZCg1uZj01xUefGqN8bGI'
    console.log("hello", secondHalf);
    const realEndDate = firstHalf + '0' + endDate.toString() + secondHalf;
    console.log("firstHalf of endsearchtime", firstHalf);
    console.log("endDate", endDate);
    console.log("secondHalf", secondHalf);
    console.log("realEndDate", realEndDate);
    console.log(date)
    console.log(Number(date.slice(8, 10)) + 3)
    try {
      const response = await fetch(
        // 2021-09-16T21:30:36-05:00
        `https://floating-badlands-12965.herokuapp.com/https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&city=${search}&localStartEndDateTime=${startDate},${realEndDate}&apikey=${API_KEY}`,
        {
          method: 'GET',
          headers: {
            'X-Requested-With': 'XMLHttpRequest'
          },
        }
      );
      const fetchedQuery = await response.json();
      setFetchData(fetchedQuery._embedded.events);
      setFetchName(fetchedQuery._embedded.events[0].name);
      setFetchImg(fetchedQuery._embedded.events[0].images[0].url);
      setFetchGenre(fetchedQuery._embedded.events[0].classifications[0].genre.name);
      setFetchTime(fetchedQuery._embedded.events[0].dates.start.localTime);
      setFetchDate(fetchedQuery._embedded.events[0].dates.start.localDate);
      setFetchVenue(fetchedQuery._embedded.events[0]._embedded.venues[0].name);
      // line below works in pulling in artist name
      // console.log('Artist Name:', fetchedQuery._embedded.events[0].name);
      // lines below are to try to store the artist name
      //   setList(fetchedQuery._embedded.events[0].name);
      //   console.log('testingsetArtist:', setList);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    console.log('Data', fetchData)
  }, [
    fetchData,
    fetchName,
    fetchVenue,
    fetchDate,
    fetchGenre,
    fetchTime,
    fetchImg
  ]
  );
  const eventsList = fetchData.length
    ? fetchData.map(event => <div key={event.id}>
      <Card
        title={event.name}
        style={{
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5)',
          padding: '.5rem 1rem',
          margin: '5rem',
          fontSize: "4rem",
          fontWeight: 'bolder',
          color: '#81E979',
          height: 'auto',
          width: '75%',
          backgroundColor: '#595A4A',
          textAlign: 'center'
          }}
      >
    <p class="cardsubdetails">Genre: {event.classifications[0].genre.name}</p>

      <img
        style={{
          padding: '1ex',
          height: '500px',
          width: 'auto'
        }}
        alt={event.name}
        src={event.images[0].url}
      />
      <p class="cardsubdetails">Where: {event._embedded.venues[0].name}</p>
      <p class="cardsubdetails">Date: {event.dates.start.localDate}</p>

      <div
        className="cardcontainer"
        style={{
          position: 'relative',
          bottom: '0',
          backgroundColor: '#e28743'
        }}
      >
      </div>
    </Card>

    
    {/* <img src={event.images[0].url} alt={event.name}/>
    <p>{event.name}</p>
    <p>{event.classifications[0].genre.name}</p>
    <p>{event.venue}</p>
    <p>{event.dates.start.localDate}{event.dates.start.localTime}</p> */}
    </div >)
  : <p>No data</p>
  // const eventsList = events.map((fetchName, index) =>{
  //   <li key={index}>
  //     {fetchName.name}
  //   </li>
  // });
  //   let musicData = fetchName._embedded.events.map((event)=>{
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
  // const display = list.map(gif => {
  //   return (
  //     <img src= "" alt= "" type= "gif"></img>
  //   )
  // })
  return (
    <div className="App">
      <h1> Please enter your city </h1>
      <form>
        <input className="cityenter"
          type="text"
          placeholder="Search your city"
          onChange={handleInput}
        />
        {/* <button onClick={handleClick}>Search</button> */}
          <Button type="primary" onClick={handleClick} icon={<SearchOutlined />}>
          Search
        </Button>

        {/* <input type="button" onClick={handleClick} /> */}
      </form>
      <div>
        <ul>{eventsList}</ul>
      </div>
      {/* {musicData} */}
    </div>
  );
}