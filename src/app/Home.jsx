//This is the main landing page of the app that gives the user options

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Logo from '../images/logo.png';

export class Home extends React.Component{
    render(){
        return (<>
            <nav>
                <Link to="/">
                    <button className="btn float-right">Logout</button>
                </Link>
            </nav>
            <div className="jumbotron">
                <img src={Logo} style={{width:'50%'}}></img>
                <h1 className="jumbotron">reStock Home</h1>
                <p className="lead">What would you like to do today?</p>
                <hr className="my-4"/>
                <p>Please select from the following options:</p>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Link to="/Departments">
                                <button className="btn btn-block btn-primary btn-lg">View Departments</button>
                            </Link>
                        </div>
                        <div className="col">
                            <Link to="/ProductsList">
                                <button className="btn btn-block btn-primary btn-lg">View Inventory</button>
                            </Link>
                        </div>
                        <div className="col">
                            <Link to="/Sales">
                                <button className="btn btn-block btn-primary btn-lg">View Sales History</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
        );
    }
}