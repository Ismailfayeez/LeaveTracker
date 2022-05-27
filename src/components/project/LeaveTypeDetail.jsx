import React from 'react';
import { useParams } from 'react-router-dom';
import Detail from './Detail';

function LeaveTypeDetail(props) {
    const{projectId,leaveTypeId}=useParams()
    const url=`http://127.0.0.1:8000/project/myprojects/${projectId}/leavetype/${leaveTypeId}/`
    const setStateProps=()=>({name:'',code:'',hours:'',days:''})
    const mapStateValue=(section)=>(
        {name:section.name,code:section.code,hours:section.hours,days:section.days})

    return (
        <div className='project-dashboard'>
            Domain detail
            <Detail url={url} setStateProps={setStateProps} mapStateValue={mapStateValue}/>
        </div>
    );
}

export default LeaveTypeDetail;