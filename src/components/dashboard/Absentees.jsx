import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AbsenteesList from "./AbsenteesList"
import './dashboard.css'
import { getAbsentees, getGroupsLeaveCount, loadAbsentees, loadGroupsLeaveCount } from '../../store/absentees';
import { useDispatch, useSelector } from 'react-redux';
import BarGraph from './graphs/BarGraph';



function Absentees(props) {
  const dispatch=useDispatch()
  const absenteesList=useSelector(state=>state.entities.absentees.list)
  const groupsLeaveCount=useSelector(getGroupsLeaveCount()) 
  const graphData={labels:groupsLeaveCount.map(group=>group['name']),value:groupsLeaveCount.map(group=>group['leave_count'])}
    
  console.log(graphData)
useEffect(()=>{
            Promise.all([dispatch(loadAbsentees()),
            dispatch(loadGroupsLeaveCount())])
},[])
    return (
        <div className='absentees-container'>
        <section className='absentees'>
                <p>Absentees as of today 15 members</p>
                <AbsenteesList absenteesList={absenteesList}/>
                <div className='button-list'>
                    <button className='btn btn--accept'>excel</button>
                    <button className='btn btn--reject'>pdf</button>
                </div>
               
        </section>
        {groupsLeaveCount.length>0 && <div className='graph'>
          <BarGraph graphData={graphData}/></div>}
            </div>
    );
}

export default Absentees;