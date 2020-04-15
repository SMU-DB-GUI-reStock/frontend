import React from 'react';
import {Department, User} from '../models';

export const DepartmentsList = props =>{
    return <>

    <div className="container">
        <table className="table table-striped table-condensed">
            <thead>
                <tr> 
                    <th>Department</th>
                    <th>Department Manager</th>
                    <th>&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.departments.map(department => 
                    <tr key={department.dept_id}>
                        <td>{department.dept_name}</td>
                        <td>{department.dept_mngr}</td>
                        <td>
                            <button type="button"
                            className="btn btn-sm btn-primary">
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