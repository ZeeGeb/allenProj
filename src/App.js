import React from 'react';
import logo from './logo.svg';
import Login from './Components/login/login';
import Test from './Components/test';
import { Container, CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
//import { GuestRoute } from './Components/guest.route';


function App() {
  return ( 
    <React.Fragment>
      <Router>
          <Switch>  
            <Route path='/test' component={Test}/>
            <Route path='/create' component={Test}/>
            <Route path='/' component={Login}/>
            <Route path="*" component={() => "404 NOT FOUND"} />
          </Switch>
        </Router>
    </React.Fragment>
  );
}

export default App;
