import React from 'react';
import {DepartmentsList } from './DepartmentsList';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
export class DepartmentsDashboard extends React.Component{


    viewEmployees(dept_id){
        // TODO: display list of all employees with that dept_id
    
    }

    render(){
        return<>

            {/*nav bar*/}
            <Link to="/">
                    <button className="btn float-right">Logout</button>
            </Link>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/Home">Home</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Departments</li>
                </ol>
            </nav>

        
            <h1>Departments</h1>
           
            {/* <DepartmentsList departments={this.state.departments} viewEmployees={dept_id=>this.viewEmployees(dept_id)}/> */}
        </>
    }

    componentDidMount(){
        //TODO
    }
}