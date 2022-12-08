import React from 'react';
import Header from './Header';
// import logo from './logo.svg';
import './App.css';
// import { Router } from '@mui/icons-material';
// import { Route } from '@mui/icons-material';
import { Switch } from '@mui/material';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Router, Switch, Route } from 'react-router-dom';
import TinderCards from './TinderCards';


function App() {
  return (
    <div className="App">
      <Header />
    <Router>
      <Switch>
        <Route path="/chat">
        <h1>I am the chat page</h1>
        </Route>
        <Route path="/">
          <TinderCards />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
