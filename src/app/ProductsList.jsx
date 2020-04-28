import React from 'react';
import {Link} from 'react-router-dom';
import {ProductType, Product} from '../models';
import { ProductDisplay } from './ProductDisplay';

export const ProductsList = props =>{
    return <> 
        <div className="container">
            <table className="table table-striped table-condensed">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Department</th>
                        <th>Quantity</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map(product =>
                        <tr key={product.product_id}>
                            <td>
                                {product.product_type_id}
                            </td>
                            <td>
                                    {product.product_type_name}
                            </td>
                            <td>
                                ${product.price}.00
                            </td>
                            <td>
                                {product.dept_id}
                            </td>
                            <td>
                                Quantity
                            </td>
                            <td>
                                <Link to={'Products/' + product.product_type_id}>
                                    <button type="button"
                                    className="btn btn-primary btn-sm">
                                        View Full Inventory
                                    </button>
                                </Link>
                            </td>
                        </tr>
                    
                    )}
                </tbody>
            </table>
        </div>
    </>
}
