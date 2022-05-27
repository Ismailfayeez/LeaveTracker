import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Table from '../common/table/Table';

function List(props) {
    const{projectId}=useParams()
    const{columns,onRetrieveUrl}=props
    const [list,setList]=useState([])
    
    useEffect(()=>{
        async function fetchApi(){
            try{
                const response= await axios(onRetrieveUrl(projectId))
                setList([...response.data])
            }catch(err){}
        }
        fetchApi()
    },[])
    
    return (
       <section className='project-dashboard'>
           <Table columns={columns} data={list}/>
           <button>Add New</button>
       </section>
    );
}

export default List;