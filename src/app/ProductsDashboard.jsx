import React from 'react';
import {ProductsList } from './ProductsList';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


export class ProductsDashboard extends React.Component{


    state = {
        products: []
    };

    render(){
        return<>

            {/*nav bar*/}
            <Link to="/">
                    <button className="btn float-right">Logout</button>
            </Link>
            
            <ol className="breadcrumb border border-0 rounded mb-0">
                <li className="breadcrumb-item"><a href="/Home">Home</a></li> 
                
                <li className="breadcrumb-item active" aria-current="page"> Products </li> 
            </ol>
            

            <h1>Products</h1>
            
            
        </>
    }
}