//This serves as the container of the landing page for Departments. It will
//hold the department list and admin tools to edit departments.

import React from 'react';
import {DepartmentsList } from './DepartmentsList';
import {DepartmentRepository} from './../api';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


export class DepartmentsDashboard extends React.Component{

    departmentRepository = new DepartmentRepository();

    state = {
        departments: []
    };

    // viewEmployees(dept_id){
    //     // TODO: display list of all employees with that dept_id
    //     this.departmentRepository.getEmployees(dept_id)
    //         .then(employees =>{
    //             employees.forEach(employee =>{
    //                 let 
    //             })
    //         })
    // }

    getDepartments(params){
        this.departmentRepository.getDepartments(params)
            .then(departments=>{
                this.setState({departments});
            });
    }

    render(){
        return<>

            {/*nav bar*/}
            <Link to="/">
                    <button className="btn float-right">Logout</button>
            </Link>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/Home">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Departments</li>
                </ol>
            </nav>
        
            <h1>Departments</h1>
            <DepartmentsList departments={this.state.departments}/>
             {/* <DepartmentsList departments={this.state.departments} viewEmployees={dept_id=>this.viewEmployees(dept_id)}/> */}
        </>
    }

    componentDidMount(){
        this.getDepartments();
    }
}