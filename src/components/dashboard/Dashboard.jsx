import React, { Component } from 'react';
import SearchBar from '../common/SearchBar';
import Absentees from './Absentees';
import UserInfo from './UserInfo';
import Graph from './graphs/Graph';
class Dashboard extends Component {
    state = {  } 
    render() { 
   
        return (
            <section className='dashboard'>
                <h3 className='dashboard__title'>Dashboard</h3>
                <Absentees/>
                <UserInfo/>
                <Graph/>
            </section>
        );
    }
}
 
export default Dashboard;