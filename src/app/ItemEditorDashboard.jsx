import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { ProductRepository, DepartmentRepository } from '../api';
import { ItemEditor } from './ItemEditor';


export class ItemEditorDashboard extends React.Component {

    departmentRepository = new DepartmentRepository();

    state = {
        departments: []
    };

    // onSubmit() {
    //     this.productRepository
    //     .addProductType(this.state.name, this.state.department, this.state.price)
    //     .then(() => {
    //         alert("Product Added");
    //         this.setState({ redirect: '/products' });
    //     });
    // }

    render() {
        return <>
            <ol className="breadcrumb border border-0 rounded mb-0">
                <li className="breadcrumb-item"><a href="/Home">Home</a></li> 
                <li className="breadcrumb-item"><a href="/products">Inventory</a></li>
                <li className="breadcrumb-item active" aria-current="page"> Add New Product </li> 
            </ol>
            <ItemEditor departments={this.state.departments}/>
        </>;
    }

    componentDidMount() {
        this.departmentRepository.getDepartments()
        .then( departments=>{
            this.setState(this.state.departments = departments.data);
        });
    }
}