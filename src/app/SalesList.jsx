import React from 'react';
import {Link} from 'react-router-dom';
import {Sale} from '../models';
import {ProductType, Product} from '../models';
import {SaleRepository} from './../api/SalesRepository';

//Gabi, this is where you will create the ordered list of sales
export const SalesList = props =>{

        return <> 
        <div className="container">
            <table className="table table-striped table-condensed">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Sale Date</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {props.products.map(product =>
                        <tr key={product.product_id}>
                            <td>
                                {product.product_type_id}
                            </td>
                            <td>
                                <Link to={'Products/' + product.product_type_id }>
                                    {product.product_type_name}
                                </Link>
                            </td>
                            <td>
                                ${product.price}.00
                            </td>
                            <td>
                                Quantity
                            </td>
                            <td>
                                ${this.sale.sale_date}
                            </td>
                        </tr>
                    
                    )}
                </tbody>
            </table>
        </div>
    </>
    
}

