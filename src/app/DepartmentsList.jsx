//This function will generate a list of departments
import React from 'react';
import {Department, User} from '../models';
import {EmployeeRepository} from './../api';

export class DepartmentsList extends React.Component{

    employeeRepository = new EmployeeRepository();

    state = {
        employees: [] 
    }

    // getEmployee(id){
    //     var first_name;
    //     var last_name;
    //     this.employeeRepository.getEmployee(id)
    //         .then(x=>{
    //             first_name = x.data[0].first;
    //             last_name = x.data[0].last;
    //             console.log(first_name, last_name);
    //             return(first_name);
    //         }
    //     )
    // }

    render(){
        return <>

            <div className="container">
                <table className="table table-striped table-condensed">
                    <thead>
                        <tr> 
                            <th>Department</th>
                            <th>Manager</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.departments.map(department => 
                            
                                <tr key={department.dept_id}>
                                    <td>{department.dept_name}</td>
                                
                                    <td>name</td>
                                    <td>
                                        <button type="button"
                                        className="btn btn-sm btn-primary"
                                        data-toggle="collapse"
                                        aria-expanded="true">
                                            View Employees
                                        </button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
            </>
    }
}