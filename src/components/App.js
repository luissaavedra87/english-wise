import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup} />
    </Switch>
  </Router>
);

export default App;
