import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import Table from '../common/table/Table';

function UserDetail(props) {
    const{projectId,employeeId}=useParams()
    const [originalUserInfo,setOriginalUserInfo]=useState({name:"",email:'',role:"",domain:"",is_active:""})
    const [employeeInfo,setEmployeeInfo]=useState({role:"",domain:"",is_active:""})
    const [roleList,setRoleList]=useState([])
    const [domainList,setDomainList]=useState([])
    const [edit,setEdit]=useState(false)

    const copyOriginalUserData=()=>({role:originalUserInfo['role'],domain:originalUserInfo['domain'],is_active:originalUserInfo['is_active']})
    
    useEffect(()=>{
        const fetchApi=async()=>{
            try{
            const response=await axios(`http://127.0.0.1:8000/project/myprojects/${projectId}/employee/${employeeId}/`)
            setOriginalUserInfo(response.data)
            setEmployeeInfo(copyOriginalUserData())
          
        }catch(err){
                
            }
        }
        const fetchRole=async()=>{
            try{
                const response=await axios(`http://127.0.0.1:8000/project/myprojects/${projectId}/role/`)
                setRoleList(response.data)
                
            }catch(err){
                    
                }

        }
        const fetchDomain=async()=>{
            try{
                const response=await axios(`http://127.0.0.1:8000/project/myprojects/${projectId}/domain/`)
                setDomainList(response.data)
                
            }catch(err){
                    
                }

        
        }
        fetchApi()
        fetchDomain()
        fetchRole()
    },[originalUserInfo.id])

    const handleChange=({currentTarget:input})=>(setEmployeeInfo({...employeeInfo,[input.name]:input.value}))

    const handleReset=()=>{
        setEdit(!edit)
        setEmployeeInfo(copyOriginalUserData())
    }
    const handleSubmit=async()=>{
        console.log(employeeInfo)
        try{
        const response= await axios.put(`http://127.0.0.1:8000/project/myprojects/${projectId}/employee/${employeeId}/`,employeeInfo)
    }catch(err){console.log(err.response)}}
    return (
        <section className='project-dashboard'>
            <h4>{originalUserInfo.username}</h4>
            <table>
                <tbody>
                <tr>
                    <th>Name</th><td>{originalUserInfo['username']}</td>
                </tr>
                <tr>
                    <th>Email</th><td>{originalUserInfo['email']}</td>
                </tr>
                <tr>
                    <th>Role</th><td>
                        <select name='role' value={employeeInfo['role']} 
                        onChange={e=>handleChange(e)} disabled={!edit}>
                            <option value={""}></option>
                            {roleList.map(role=>(<option value={role.code}>{role.name}</option>))}</select></td>
                </tr>
                <tr>
                    <th>Domain</th><td>
                    <select name='domain' value={employeeInfo['domain']} 
                        onChange={e=>handleChange(e)} disabled={!edit}>
                            <option value={null}></option>
                            {domainList.map(domain=>(<option value={domain.code}>{domain.name}</option>))}</select></td>
                </tr>
               </tbody>
            </table>
{!edit &&<div>
                <button onClick={()=>setEdit(!edit)}>Edit</button>
            </div>}
{edit && <div>                <button onClick={handleSubmit}>Save</button>
<button onClick={handleReset}>Cancel</button></div>}
        </section>
    );
}

export default UserDetail;