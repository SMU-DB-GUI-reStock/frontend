//This function will generate a list of departments
import React from 'react';
import {EmployeeRepository} from './../api';

export class DepartmentsList extends React.Component{

    employeeRepository = new EmployeeRepository();

    state = {
        employees: [],
        dept_id: 1
    }

    getEmployees(dept_id){
        this.employeeRepository.getEmployeesbyDept(dept_id)
            .then(x=>{
                this.setState({employees: x.data})
            }
        )
    }


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
                                
                                    <td>{department.manager_first} {department.manager_last}</td>
                                    <td>
                                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target={"#"+department.dept_name} onClick={()=>this.getEmployees(department.dept_id)}>
                                        View employees
                                    </button>

                                        <div key={department.dept_id} class="modal fade" id={department.dept_name} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                            aria-hidden="true">
                                                 <div class="modal-dialog" role="document">
                                                    <div class="modal-content">

                                                        <div class="modal-header">
                                                            <h5 class="modal-title" id="exampleModalLabel">{department.dept_name} Department Employees</h5>
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>

                                                        <div class="modal-body">
                                                            <table>
                                                                <thead>
                                                                    <tr>
                                                                        <th>First Name</th>
                                                                        <th>Last Name</th>
                                                                        <th>Email</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {this.state.employees.map(employee=>
                                                                        <tr key={employee.id}>
                                                                            <td>{employee.first}</td>
                                                                            <td>{employee.last}</td>
                                                                            <td>{employee.email}</td>
                                                                        </tr>

                                                                    )}
                                                                </tbody>
                                                            </table>
                                                        </div> 

                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                                                        </div>

                                                    </div>
                                                </div>
                                        </div>
                                        
                                    </td>
                                </tr>
                        )}
                    </tbody>
                </table>

                {/* {this.props.departments.map(department =>
                    <div key={department.dept_id}>
          
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target={"#"+department.dept_name}>
                        Launch demo modal
                        </button>

                        <div class="modal fade" id={department.dept_name} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel"></h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                ...
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>

                )} */}
                   
             </div>
        </>


    }
}