import React,{ useEffect, useState } from 'react'
import { ListEmployees } from '../services/EmployeeServicecomponent'

const ListEmployeeComponent = () => {
    
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        ListEmployees().then((response) => {
            console.log(response.data); // 查看API返回的数据
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, []);

      

    return (
    <div className='container'>
        <h2 className='text-center'>List of Employees</h2>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employ Id</th>
                    <th>Employ First Name</th>
                    <th>Employ Last Name</th>
                    <th>Employ Email Id</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                        </tr>
                        )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent