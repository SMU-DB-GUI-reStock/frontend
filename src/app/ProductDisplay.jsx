//This component is a page that displays information regarding a product

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { ProductRepository } from '../api';

//ADD PRODUCT NAME TO TOP OF PAGE

export class ProductDisplay extends React.Component{

  productRepository = new ProductRepository();
  

  state = {
    products: [],
    section: ''
  };

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

        <div className="container">
            <table className="table table-striped table-condensed">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Department</th>
                        <th>Location</th>
                        <th>Order</th>
                        <th>Sale</th>
                        <th>Expiration</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.products.map(product =>
                        <tr key={product.product_id}>

                          {this.state.section == product.product_type_id && (  
                            <td>
                                {product.product_id}
                            </td>
                          )}
                          {this.state.section == product.product_type_id && (  
                            <td>
                                {product.dept_id}
                            </td>
                          )}
                          {this.state.section == product.product_type_id && (  
                            <td>
                                {product.location}
                            </td>
                          )}
                          {this.state.section == product.product_type_id && (  
                            <td>
                                {product.order_id}
                            </td>
                          )}
                          {this.state.section == product.product_type_id && ( 
                            <td>
                                {product.sale_id}
                            </td>
                          )}
                          {this.state.section == product.product_type_id && ( 
                            <td>
                                {product.exp_date}
                            </td>
                          )}
                        
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        
        
        </div>
        
      );
    }
    componentDidMount(){
      this.productRepository.getProducts()
          .then(products=> {
            this.setState(this.state.products = products.data);
            this.setState({section: this.props.match.params.id})
          });
  }

    }
  
