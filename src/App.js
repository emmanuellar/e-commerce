import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from '../src/pages/homepage/homepage.component';
import shopPage from './pages/shop/shop.component'; 

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={shopPage} />
      </Switch>
    </div>
  );
}

export default App;

// onClick={() => props.history.push('/')} is also used for routing in React
