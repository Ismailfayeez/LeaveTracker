import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProjectUsers from './ProjectUsers';

function UserPage(props) {
    const {projectId}=useParams()
    const [project, setProject]=useState({})
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
            <ProjectUsers projectId={projectId}/>
            
        </section>
    );
}

export default UserPage;