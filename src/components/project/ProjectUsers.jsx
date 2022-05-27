import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ProjectUsers(props) {
    const{projectId}=props
    const [employees,setEmployees]=useState([])
    useEffect(
        ()=>{
            const fetchApi=async()=>{
                try{
                    const response= await axios(`http://127.0.0.1:8000/project/myprojects/${projectId}/employee`)
                setEmployees(response.data)
                }catch(err){

                }
            }
            fetchApi();
        },[projectId]
    )
    console.log(employees)
    return (
      <section>
          <h4>Active Users</h4>
          <table style={{width:"100%"}}>
              <thead>
                  <tr>
                      <th>S.no</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Status</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      employees.map(employee=>(
                          <tr><td>{}</td> 
                          <td>{employee.username}</td>
                          <td>
                              <Link to={`/project-dashboard/${projectId}/employee/${employee.id}`}>{employee.email}</Link></td> <td>active</td></tr>
                      ))
                  }
              </tbody>
          </table>
      </section>
    );
}

export default ProjectUsers;