import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import Detail from './Detail';

function RoleDetail(props) {
    const{projectId,roleId}=useParams()
    const url=`http://127.0.0.1:8000/project/myprojects/${projectId}/role/${roleId}/`
    const setStateProps=()=>({name:'',code:''})
    const mapStateValue=(section)=>({name:section.name,code:section.code})

    return (
        <div className='project-dashboard'>
            roledetail
            <Detail url={url} setStateProps={setStateProps} mapStateValue={mapStateValue}/>
        </div>
    );
}

export default RoleDetail;