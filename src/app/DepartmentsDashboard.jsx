import React from 'react';
import {DepartmentsList } from './DepartmentsList';

export class DepartmentsDashboard extends React.Component{
    state = {
        departments = []
    }

    viewEmployees(dept_id){
        // TODO: display list of all employees with that dept_id
    
    }

    render(){
        return<>
            <h1>Departments</h1>
            {/* <DepartmentsList departments={this.state.departments} viewEmployees={dept_id=>this.viewEmployees(dept_id)}/> */}
        </>
    }

    componentDidMount(){
        //TODO
    }
}