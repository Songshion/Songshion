import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import UserInfo from './components/userinfo/UserInfo';
import Events from './components/events/Events';
import Fashion from './components/fashion/Fashion';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <UserInfo />
          </Route>
          <Route path="/events" exact>
            <Events />
          </Route>
          <Route path="/fashion" exact>
            <Fashion />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;











/* 
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
      <h1> Giphy Image Finder</h1>
      <form>
        <input
          type="text"
          placeholder="search for giphy"
          onChange={handleInput}
        />

      </form>
    </div>
  );
} */