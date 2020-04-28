import React from 'react';
import {ProductsList } from './ProductsList';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import {ProductRepository} from './../api';
import { ProductSearch } from './ProductSearch';

export class ProductsDashboard extends React.Component{
    productRepository = new ProductRepository();

    state = {
        products: []
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
                
                <li className="breadcrumb-item active" aria-current="page"> Products List </li> 
            </ol>
            
            <ProductSearch onSearch={params=>this.onSearch(params)} />
         
            <h1 style={{padding: 10}}>What we carry:</h1>
            
            <ProductsList products={this.state.products}/>

        </>
    }


    componentDidMount(){
        this.onSearch();
    }
}