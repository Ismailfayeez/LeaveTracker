import axios from 'axios';
import React, { useEffect, useState } from 'react';
import http from '../../services/httpService';

function Detail(props) {
    const{sectionId,url,setStateProps,mapStateValue}=props
    const[originalData,setOriginalData]=useState(()=>setStateProps())
    const[localData,setLocalData]=useState(()=>setStateProps())
    const [edit,setEdit]=useState(false)
    useEffect(()=>{
        const fetchApi=async()=>{
            if (sectionId==='new') return null;
            try{
            const response=await axios(url)
            setOriginalData(mapStateValue(response.data))
            setLocalData(mapStateValue(response.data))
            }catch(err){}
        } 
        fetchApi() ;
    },[])
    const handleChange=({currentTarget:input})=>(
        setLocalData({...localData,[input.name]:input.value}))
    const handleReset=()=>{
        setLocalData({...originalData})
        setEdit(!edit)
    }
    const handleSubmit=async()=>{
        const method=sectionId==='new'?'post':'put'
        try{
            const response=await http.request(
                {
                    url:url,
                    method,
                    data:localData,
                }
                
            )
            setOriginalData(mapStateValue(response.data))
            setLocalData(mapStateValue(response.data))
    }catch(err){}}
    
    return (
        <section className=''>
            <table>
                <tbody>
                {Object.keys(localData).map(data=>(<tr><th>{data}</th>
                <td>
                    <input name={data} 
                    onChange={(e)=>handleChange(e)} 
                    value={localData[data]}
                    disabled={!edit}/></td></tr>))}
                </tbody>
            </table>
            {!edit &&<div>
                <button onClick={()=>setEdit(!edit)}>Edit</button>
            </div>}
            {edit && <div><button onClick={handleSubmit}>Save</button>
            <button onClick={handleReset}>Cancel</button></div>}

        
        </section>
    );
}

export default Detail;