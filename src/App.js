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
            <Events />
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




