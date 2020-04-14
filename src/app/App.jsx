import React, {Component} from 'react';
import './App.css';
import {DepartmentsList} from './DepartmentsList';
import {Login} from './Login';
import { ProductsList } from './ProductsList';
import {SalesList} from './SalesList';
import {ForgotPassword} from './ForgotPassword';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component{
  render(){
    return (
      <Router>
            {/*alias*/}
            <Switch>
              <Route exact path="/" component={Login}/>
              <Route path='/ForgotPassword' exact={true} component={ ForgotPassword } /> 
              {/* <Route path="/products" component={ProductsList}/> TODO*/}
              {/* <Route path="/departments" component={DepartmentsList} TODO*/}
              {/* <Route path="/sales" component={SalesList} TODO*/} 
            </Switch>
          </Router>
    );
  }
}

export default App;
