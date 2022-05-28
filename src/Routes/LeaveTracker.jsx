import Auth from '../components/Auth/Auth';
import React, { Component, Fragment } from 'react';
import "../App.css"
import {Route, Routes} from "react-router-dom";
import Others from '../components/others/Others';
import Groups from '../components/Group/Groups';
import NavBar from '../components/navBar/NavBar';
import SideBar from '../components/SideBar.jsx/SideBar';
import Request from '../components/requests/Request';
import Status from '../components/status/Status';
import Approvals from '../components/approvals/Approvals';
import GroupInfo from '../components/Group/GroupInfo';
import GroupList from '../components/Group/GroupList';
import Dashboard from '../components/dashboard/Dashboard';
import UserDetail from '../components/project/UserDetail';
import UserPage from '../components/project/UserPage';
import RoleDetail from '../components/project/RoleDetail';
import RolePage from '../components/project/RolePage';
import Domain from '../components/project/pages/domain/Domain';
import DomainDetail from '../components/project/DomainDetail';
import LeaveType from '../components/project/pages/leavetype/LeaveType';
import ProjectDashboard from '../components/project/ProjectDashboard';
import ProjectDetails from '../components/project/ProjectDetails';
import LeaveDuration from '../components/project/pages/leaveduration/LeaveDuration';
import LeaveDurationDetail from '../components/project/LeaveDurationDetail';
import LeaveTypeDetail from '../components/project/LeaveTypeDetail';
function LeaveTracker(props) {
    const {handleDisplaySideBar,displaySideBar}=props
    return (
        <Fragment>
            <header>
          <NavBar handleDisplaySideBar={handleDisplaySideBar} displaySideBar={displaySideBar}/>
        </header>
        <main  className='main'>
          <SideBar handleDisplaySideBar={handleDisplaySideBar}  displaySideBar={displaySideBar}/>
          <div className='main__content'>
          <Routes>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='request' element={<Request/>}/>
            <Route path='status' element={<Status/>}/>
            <Route path='approvals' element={<Approvals/>}/>
            <Route path='group/:groupId' element={<GroupInfo/>}/>
            <Route path='group' element={<Groups/>}/>
            <Route path='others' element={<Others/>}/>
            <Route path='/project-dashboard/:projectId/employee/:employeeId' element={<UserDetail/>}/>
            <Route path='/project-dashboard/:projectId/employee' element={<UserPage/>}/>
            <Route path='/project-dashboard/:projectId/role/:roleId' element={<RoleDetail/>}/>
            <Route path='/project-dashboard/:projectId/role' element={<RolePage/>}/>
            <Route path='/project-dashboard/:projectId/domain' element={<Domain/>}/>
            <Route path='/project-dashboard/:projectId/domain/:domainId' element={<DomainDetail/>}/>
            <Route path='/project-dashboard/:projectId/leavetype' element={<LeaveType/>}/>
            <Route path='/project-dashboard/:projectId/leavetype/:leaveTypeId' element={<LeaveTypeDetail/>}/>
            <Route path='/project-dashboard/:projectId/leaveduration' element={<LeaveDuration/>}/>
            <Route path='/project-dashboard/:projectId/leaveduration/:leaveDurationId' element={<LeaveDurationDetail/>}/>
            <Route path='/project-dashboard/:projectId' element={<ProjectDetails/>}/>
            <Route path='/project-dashboard' element={<ProjectDashboard/>}/>   
            </Routes>
          </div>
          </main>
        </Fragment>
    );
}

export default LeaveTracker;