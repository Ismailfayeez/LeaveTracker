import React from 'react';
import { useParams } from 'react-router-dom';
import Detail from './Detail';

function LeaveDurationDetail(props) {
    const{projectId,leaveDurationId}=useParams()
    const url=`http://127.0.0.1:8000/project/myprojects/${projectId}/leaveduration/${leaveDurationId}/`
    const setStateProps=()=>({name:'',code:'',hours:''})
    const mapStateValue=(section)=>({name:section.name,code:section.code,hours:section.hours})

    return (
        <div className='project-dashboard'>
            leaveDuration detail
            <Detail url={url} setStateProps={setStateProps} mapStateValue={mapStateValue}/>
        </div>
    );
}

export default LeaveDurationDetail;