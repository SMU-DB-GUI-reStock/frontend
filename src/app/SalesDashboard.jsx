import React from 'react';
import {SalesList } from './SalesList';
import { Redirect, Link } from 'react-router-dom';
import {SaleRepository} from './../api';

export class SalesDashboard extends React.Component{
    salesRepository = new SaleRepository();

    state = {
        sale: []
    };

    onSearch(params){
        this.salesRepository.getSales(params)
        .then(sale=> {
            this.setState(this.state.sale = sale.data);
        });
    }

    render(){
        if (this.state.redirect) {
            return <Redirect to={ this.state.redirect } />
        }
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
         
            <h1 style={{padding: 10}}>Sales</h1>
            <SalesList sale={this.state.sale}/>

        </>
    }

    componentWillMount(){
        if(window.sessionStorage.getItem("loggedIn") != 1){
            alert("Not logged in");
            this.setState({ redirect: '/' });
        }
    }
    
    componentDidMount(){
        this.onSearch();
    }
}