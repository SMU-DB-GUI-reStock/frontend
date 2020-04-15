import React from 'react';
import {Link} from 'react-router-dom';
import {ProductType, Product} from '../models';

// export const ProductsList = props =>{
//     return <> 
//         <div className="container">
//             <table className="table table-striped table-condensed">
//                 <thead>
//                     <tr>
//                         {/* product_id */}
//                         <th>ID</th>

//                         {/* product_name */}
//                         <th>Name</th>

//                         {/* product_price */}
//                         <th>Price</th>

//                         {/* sql query */}
//                         <th>Quantity</th>

//                         {/* dept_id */}
//                         <th>Department</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     props.productTypes.map(product =>
//                         <tr key={product.product_id}>
//                             <td>
//                                 {product.product_id}
//                             </td>
//                             <td>
//                                 {product.product_name}
//                             </td>
//                             <td>
//                                 {product.product_price}
//                             </td>
//                             <td>
//                                 0
//                                 {/* needs to be a SQL query */}
//                             </td>
//                             <td>
//                                 {product.dept_id}
//                             </td>
//                             <td>
//                                 <button type="button"
//                                 className="btn btn-sm">
//                                     View Full Inventory
//                                 </button>
//                             </td>
//                         </tr>
//                     )
//                 </tbody>
//             </table>
//         </div>
//     </>
// }
