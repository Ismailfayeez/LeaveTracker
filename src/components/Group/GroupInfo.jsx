import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GroupDetails from './GroupDetails';
import GroupEdit from './GroupEdit';

function GroupInfo(props) {
    const {groupId}=useParams()
    console.log(groupId)
    const [group,setGroup]=useState({name:"",description:"",team_members:[]})
    const filterAdminList=(members)=>(members.filter(member=>member.role=='admin'))
    const filterParticipantList=(members)=>(members.filter(member=>member.role=='participant'))
    useEffect(()=>{
        async function fetchData(){
        try{
            const response=await axios('http://127.0.0.1:8000/leavetracker/myteam/7/')
            setGroup(response.data)
        }catch(err){

        }}
        fetchData()
    },[])

    return (
        
        <div>
            <GroupDetails group={group} groupId={groupId} filterAdminList={filterAdminList} filterParticipantList={filterParticipantList}/>     
            <GroupEdit group={group} groupId={groupId} filterAdminList={filterAdminList} filterParticipantList={filterParticipantList}/>     
        </div>
    );
}

export default GroupInfo;