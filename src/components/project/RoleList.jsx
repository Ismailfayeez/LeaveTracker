import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Table from '../common/table/Table';

function RoleList(props) {
    const{projectId}=useParams()
    const [roleList,setRoleList]=useState([])
    const handleDelete=async(record)=>{
        console.log(record)
        try{await axios.delete(`http://127.0.0.1:8000/project/myprojects/f5b10d49-9056-4faa-b95a-251f998a724f/role/${record.id}/`)}
        catch(err){

        }
}
    const columns=[{label:'S.no',path:'s.no'},{label:'name',path:'name'},
    {label:'code',path:'code'},
    {label:'',path:"delete",content:(record)=>(<button onClick={()=>handleDelete(record)}>Delete</button>)}]
    
    useEffect(()=>{
        async function fetchApi(){
            try{
                const response= await axios(`http://127.0.0.1:8000/project/myprojects/${projectId}/role/`)
                setRoleList([...response.data])
            }catch(err){}
        }
        fetchApi()
    },[])
    return (
       <section>
           <Table columns={columns} data={roleList}/>
           <button>Add New</button>

       </section>
    );
}

export default RoleList;