
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import UserInfo from './components/userinfo/UserInfo';
import Events from './components/events/Events';

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
        </Switch>
      </Router>
    </div>
  );
};

export default App;



// function App() {
//   return (
//     <div className="App">
//       <UserInfo/>
//     </div>
//   );
// }

// export default App;
