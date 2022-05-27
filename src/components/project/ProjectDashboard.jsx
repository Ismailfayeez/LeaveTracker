import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MyProjects from './MyProjects';
import ProjectDetails from './ProjectDetails';

function ProjectDashboard(props) {
    return (
        <section className='project-dashboard '>
            <h3 className=''>
                Project Dashboard
            </h3>
            <MyProjects/>
            
        </section>
    );
}

export default ProjectDashboard;