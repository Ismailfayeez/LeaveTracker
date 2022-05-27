import axios from 'axios';
import React, { useState } from 'react';
import Search from './Search';

function Approvers(props) {
    const [originalData,setOriginalData]=useState([])
    const [localData,setLocalData]=useState([])
    const [edit,setEdit]=useState(false)
    const [searchPage,displaySearchPage]=useState(false)
    const [selectedData,setSelectedData]=useState([])
    console.log(selectedData)
    const handleSubmit=async()=>{
        try{
        const response =await axios.post(`http://127.0.0.1:8000/leavetracker/myteam/6/member/`,selectedData)
        alert("success")
        }catch(err){
        
        }
    }
    
    useState(()=>{
        const fetchApi=async()=>{
            try{
            const response = await axios("http://127.0.0.1:8000/leavetracker/approver/")
            setOriginalData([...response.data])
            setLocalData([...response.data])
            }catch(err){

            }
       
        }
        fetchApi()
    },[])
    
   
    return (
        <div>
            <h4>Approvers</h4>
            {localData.map(approver=>
            <input value={approver.username} readOnly /> )}
           
        {!edit &&<div><button onClick={e=>setEdit(true)}>Edit</button></div>}
        {edit &&<div>
            <button onClick={e=>displaySearchPage(true)}>Add</button>
            <button>Save</button>
            <button onClick={e=>setEdit(false)}>Cancel</button></div>}
            {searchPage&&
            <Search 
            setSelectedData={setSelectedData}
            selectedData={selectedData}
            handleSubmit={handleSubmit}
            />}
        </div>
    );

}

export default Approvers;