import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { ProductRepository, DepartmentRepository } from '../api';


export class ItemEditor extends React.Component {

    productRepository = new ProductRepository();
    departmentRepository = new DepartmentRepository();

    state = {
        name: '',
        department: '',
        price: ''
    };


    onSubmit() {
        this.productRepository
        .addProductType(this.state)
        .then(() => {
            alert("Product Added");
            this.setState({ redirect: '/products' });
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={ this.state.redirect } />
        }
        return <>
            <form className="container">
                <h1>Add an Item</h1>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        value={this.state.name}
                        onChange={ e => this.setState({ name: e.target.value }) } />
                </div>

                <div className="col-3">
                    <label htmlFor="department">Department</label>
                    <select
                        name="department"
                        id="department"
                        className="form-control"
                        value={this.state.department}
                        onChange={ e => this.setState({ department: e.target.value })}>
                        <option></option>
                        {this.props.departments.map(department =>
                            <option key={department.dept_id} value={department.dept_id}>{department.dept_name}</option>
                        )}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="text"
                        id="price"
                        name="price"
                        className="form-control"
                        value={this.state.price}
                        onChange={ e => this.setState({ price: e.target.value }) } />
                </div>

                <button type="button"
                        className="btn btn-primary btn-block"
                        onClick={ () => this.onSubmit() }>
                        Add New Product
                </button>

                {/* {
                    this.state.isEmployee &&
                        <div className="form-group">
                            <label htmlFor="departentId">Department</label>
                            <select id="departentId"
                                name="departentId"
                                className="form-control"
                                value={this.state.departmentId}
                                onChange={ e => this.setState({ departmentId: e.target.value }) }>
                                <option></option>
                                {
                                    DEPARTMENTS.map((d, i) => <option key={ i } value={ d.id }>{ d.name }</option>)
                                }
                            </select>
                        </div>
                } */}

{/*             
                <div>
                    <button type="button"
                            className="btn btn-primary btn-block"
                            onClick={ () => this.onSubmit() }>
                        Save
                    </button>
                    <Link className="btn btn-secondary btn-block" to="/">
                        Return to List
                    </Link>
                </div> */}
                    
            </form>
        </>;
    }

    componentDidMount() {
        // this.departmentRepository.getDepartments()
        // .then( departments=>{
        //     this.setState(this.state.departments = departments.data);
        // });
    }
}