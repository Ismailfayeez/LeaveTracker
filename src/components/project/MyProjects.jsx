import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ProjectDetails from './ProjectDetails';

function MyProjects(props) {
    const [projectList,setProjectList]=useState([])
    useEffect(
        ()=>{
            const fetchApi=async()=>{
            const response=  await axios("http://127.0.0.1:8000/project/myprojects/")
            setProjectList(response.data)
            }
            fetchApi();
        },[]
    )
    
    return (
        <section className='my-projects'>
            <h4 className=''>My Projects</h4>
            <ul>
            
                {
                    projectList.map(project=>(
                        <Link to={`/project-dashboard/${project.id}`}><li>{project.name}</li></Link>
                    ))
                }
            </ul>
            
        </section>
    );
}

export default MyProjects;