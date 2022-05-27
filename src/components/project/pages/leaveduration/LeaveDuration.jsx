import axios from 'axios';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import List from '../../List';

function LeaveDuration(props) {
    const {projectId}=useParams()
    const retrieveInstanceUrl=(projectId,recordId)=>(
        `http://127.0.0.1:8000/project/myprojects/${projectId}/leaveduration/${recordId}/`
    )
    const retrieveListUrl=(projectId)=>(
        `http://127.0.0.1:8000/project/myprojects/${projectId}/leaveduration/`
    )
    const handleDelete=async(projectId,record)=>{
        try{await axios.delete(retrieveInstanceUrl(projectId,record.id))}
        catch(err){

        }
}
    const columns=[{label:'S.no',path:'s.no'},
    {label:'name',path:'name',content:(record)=>
    <Link to={`/project-dashboard/${projectId}/leaveduration/${record.id}`}>{record['name']}</Link>},
    {label:'code',path:'code'},
    {label:'hours',path:'hours'},
    {label:'',path:"delete",content:(record)=>(
    <button onClick={()=>handleDelete(projectId,record)}>Delete</button>)}]
    
    return (
       <List
       columns={columns}
       onDeleteUrl={retrieveInstanceUrl}
       onRetrieveUrl={retrieveListUrl}/>
    );
}

export default LeaveDuration;