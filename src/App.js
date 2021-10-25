import React from 'react';
import "./css/App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Profile from './Components/Profile';


function App() {

  return (
    <Router>
      <Switch>
        <Route path="/profile">
          <div>
            <Profile 
            author={'hei'}/>
          </div>
        </Route>
        <Route path='/'>
          <div>
            <Home />
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
