import React, { Component, Fragment } from 'react';
import "./App.css"
import {Route, Routes} from "react-router-dom";
import Groups from './components/Group/Groups';
import Request from './components/requests/Request';
import Status from './components/status/Status';
import Approvals from './components/approvals/Approvals';
import Dashboard from './components/dashboard/Dashboard';
import Search from './components/search/Search';
import SideBar from './components/SideBar.jsx/SideBar';
import NavBar from './components/navBar/NavBar';
import GroupDetails from './components/Group/GroupDetails';
import GroupEdit from './components/Group/GroupEdit';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import GroupInfo from './components/Group/GroupInfo';
import ProjectDashboard from './components/project/ProjectDashboard';
import ProjectDetails from './components/project/ProjectDetails';
import UserDetail from './components/project/UserDetail';
import RoleDetail from './components/project/RoleDetail';
import DomainDetail from './components/project/DomainDetail';
import LeaveTypeDetail from './components/project/LeaveTypeDetail';
import LeaveDurationDetail from './components/project/LeaveDurationDetail';
import UserPage from './components/project/UserPage';
import RolePage from './components/project/RolePage';
import Domain from './components/project/pages/domain/Domain';
import LeaveType from './components/project/pages/leavetype/LeaveType';
import LeaveDuration from './components/project/pages/leaveduration/LeaveDuration';
import Others from './components/others/Others';
import Login from './components/Login/Login';

const store=configureStore()
class App extends Component {
  state={
    displaySideBar:false
  }
  handleDisplaySideBar=()=>{
    let displaySideBar=this.state.displaySideBar
    this.setState({displaySideBar:!displaySideBar})
  }
  
  render() { 
    return (
      <Fragment>
        <Provider store={store}>
        <header>
          <NavBar handleDisplaySideBar={this.handleDisplaySideBar} displaySideBar={this.state.displaySideBar}/>
        </header>
        <main  className='main'>
          <SideBar handleDisplaySideBar={this.handleDisplaySideBar}  displaySideBar={this.state.displaySideBar}/>
          
          <div className='main__content'>
            <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/request' element={<Request/>}/>
            <Route path='/status' element={<Status/>}/>
            <Route path='/approvals' element={<Approvals/>}/>
            <Route path='/group/:groupId' element={<GroupInfo/>}/>
            <Route path='/group' element={<Groups/>}/>
            <Route path='/others' element={<Others/>}/>
            <Route path='/project-dashboard/:projectId/employee/:employeeId' element={<UserDetail/>}/>
            <Route path='/project-dashboard/:projectId/employee' element={<UserPage/>}/>
            <Route path='/project-dashboard/:projectId/role/:roleId' element={<RoleDetail/>}/>
            <Route path='/project-dashboard/:projectId/role' element={<RolePage/>}/>
            <Route path='/project-dashboard/:projectId/domain' element={<Domain/>}/>
            <Route path='/project-dashboard/:projectId/domain/:domainId' element={<DomainDetail/>}/>
            <Route path='/project-dashboard/:projectId/leavetype' element={<LeaveType />}/>
            <Route path='/project-dashboard/:projectId/leavetype/:leaveTypeId' element={<LeaveTypeDetail/>}/>
            <Route path='/project-dashboard/:projectId/leaveduration' element={<LeaveDuration/>}/>
            <Route path='/project-dashboard/:projectId/leaveduration/:leaveDurationId' element={<LeaveDurationDetail/>}/>
            <Route path='/project-dashboard/:projectId' element={<ProjectDetails/>}/>
            <Route path='/project-dashboard' element={<ProjectDashboard/>}/>
            
            </Routes>
          </div>
        </main>
        </Provider>
      </Fragment>
    );
  }
}
 
export default App;