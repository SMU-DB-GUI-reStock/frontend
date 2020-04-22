//This component is a page that has contact info for user if they forgot their password

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';



export class ProductDisplay extends React.Component{
    render(){
      return (
          
        <div>
        <Link to="/">
                    <button className="btn float-right">Logout</button>
            </Link>
            
            <ol className="breadcrumb border border-0 rounded mb-0">
                <li className="breadcrumb-item"><a href="/Home">Home</a></li> 
                <li className="breadcrumb-item"><a href="/ProductsList">Products List</a></li> 
                <li className="breadcrumb-item active" aria-current="page"> Product </li> 
            </ol>

        <h1>Product Display:</h1>
        </div>
        
      );
    }
  }
