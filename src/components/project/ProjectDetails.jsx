import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProjectUsers from './ProjectUsers';
import RoleList from './RoleList';

function ProjectDetails(props) {
    const {projectId}=useParams()
    const [project, setProject]=useState({})
    const  list=[
        {label:'Employees',path:'employee'},{label:'Roles',path:'role'},
        {label:'Domains',path:'domain'},{label:'Leave types',path:'leavetype'},
        {label:'leave Duration',path:'leaveduration'}]
    useEffect(()=>{
        const fetchApi=async()=>{
            try{
            const response=await axios(`http://127.0.0.1:8000/project/myprojects/${projectId}/`)
            setProject(response.data)
            }catch(err){
                
            }
        }
        fetchApi()
    },[projectId])
    return (
        <section className='project-dashboard'>
            <h3>{project.name}</h3>
            {list.map(item=>
                (<div><Link to={`/project-dashboard/${projectId}/${item.path}`}>{item.label}</Link></div>))}
            
        </section>
    );
}

export default ProjectDetails;