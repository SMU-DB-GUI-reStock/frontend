import React from 'react';
import {SalesList } from './SalesList';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import {SalesRepository} from './../api';

export class SalesDashboard extends React.Component{
    salesRepository = new SalesRepository();

    state = {
        sale: []
    };

    onSearch(params){
        this.productRepository.getProductTypes(params)
        .then(products=> {
            this.setState(this.state.products = products.data);
        });
    }

    render(){
        return<>
            <Link to="/">
                    <button className="btn float-right">Logout</button>
            </Link>
        
            
            <Link to="/addItem">
                    <button className="btn float-right">+</button>
            </Link>
            
            <ol className="breadcrumb border border-0 rounded mb-0">
                <li className="breadcrumb-item"><a href="/Home">Home</a></li> 
                
                <li className="breadcrumb-item active" aria-current="page"> Sales List </li> 
            </ol>
            
            <ProductSearch onSearch={params=>this.onSearch(params)} />
         
            <h1 style={{padding: 10}}>What we carry:</h1>
            <SalesList sale={this.state.sale}/>

        </>
    }


    componentDidMount(){
        this.onSearch();
    }
}