//This is the base of our app. It directs traffic through the multiple routes on the site.

import React, {Component} from 'react';
import './App.css';
import {DepartmentsDashboard} from './DepartmentsDashboard';
import {Login} from './Login';
import { ProductsList } from './ProductsList';
import {SalesList} from './SalesList';
import {ForgotPassword} from './ForgotPassword';
import {Home} from './Home';
import { ProductsDashboard } from './ProductsDashboard';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component{
  render(){
    return (
      <Router>
            {/*alias*/}
            <Switch>
              <Route exact path="/" component={Login}/>
              <Route exact path='/ForgotPassword' component={ ForgotPassword } /> 
              <Route path="/Home" component={Home}/>
              <Route exact path="/Products" component={ ProductsDashboard }/>  
              <Route exact path="/Departments" component={DepartmentsDashboard}/>
              {/* <Route path="/Sales" component={SalesList} TODO*/} 
            </Switch>
          </Router>
    );
  }
}

export default App;
