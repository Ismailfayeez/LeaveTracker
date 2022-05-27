import axios from 'axios';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import List from '../../List';

function Domain(props) {
    const {projectId}=useParams()
    const onDeleteUrl=(projectId,recordId)=>(
        `http://127.0.0.1:8000/project/myprojects/${projectId}/domain/${recordId}/`
    )
    const onRetrieveUrl=(projectId)=>(
        `http://127.0.0.1:8000/project/myprojects/${projectId}/domain/`
    )
    const handleDelete=async(projectId,record)=>{
        try{await axios.delete(onDeleteUrl(projectId,record.id))}
        catch(err){

        }
}
    const columns=[{label:'S.no',path:'s.no'},
    {label:'name',path:'name',content:(record)=>
    <Link to={`/project-dashboard/${projectId}/domain/${record.id}`}>{record['name']}</Link>},
    {label:'code',path:'code'},
    {label:'',path:"delete",content:(record)=>(
    <button onClick={()=>handleDelete(projectId,record)}>Delete</button>)}]
    
    return (
       <List
       columns={columns}
       onDeleteUrl={onDeleteUrl}
       onRetrieveUrl={onRetrieveUrl}/>
    );
}

export default Domain;