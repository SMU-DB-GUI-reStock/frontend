import React from 'react';
import {ProductsList } from './ProductsList';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import {ProductRepository} from './../api';

export class ProductsDashboard extends React.Component{
    productRepository = new ProductRepository();

    state = {
        products: []
    };

    render(){
        return<>
            <Link to="/">
                    <button className="btn float-right">Logout</button>
            </Link>
            
            <ol className="breadcrumb border border-0 rounded mb-0">
                <li className="breadcrumb-item"><a href="/Home">Home</a></li> 
                
                <li className="breadcrumb-item active" aria-current="page"> Products </li> 
            </ol>
            

            <h1>Products</h1>
            <ProductsList products={this.state.products}/>
        </>
    }


    componentDidMount(){
        this.productRepository.getProductTypes()
            .then(products=> {
                this.setState(this.state.products = products.data);
            });
    }
}