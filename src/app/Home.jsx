import React from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


export class Home extends React.Component{
    render(){
        return (<>
            <h1>Home</h1>
            <Link to="/Departments">
                <button>View Departments</button>
            </Link>
            <Link to="/Products">
                <button>View Inventory</button>
            </Link>
            <Link to="/Sales">
                <button>View Sales History</button>
            </Link>
        </>
        );
    }
}