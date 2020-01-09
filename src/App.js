import React from 'react';
import Users from './components/users/Users';
import Navbar from './components/partials/Navbar';
import UserItem from './components/users/UserItem';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <div className="container mt-2">
        <switch>
            <Route exact path="/users" component={Users} />
            <Route exact path="/users/:login" component={UserItem} />
            <Route exact component={Users} />
        </switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
