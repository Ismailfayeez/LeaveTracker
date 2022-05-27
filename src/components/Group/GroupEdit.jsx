import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { renderButton, renderInput } from '../common/FunctionalForm';
import GroupMembersList from './GroupMembersList';
import Search from '../search/Search';
function GroupEdit(props) {
    const{group,filterAdminList,filterParticipantList,groupId}=props
    const [data,setData]=useState(props.group)
    const [error,setError]=useState({})
    const [selectedData,setSelectedData]=useState([])
    const [searchPage,hideSearchPage]=useState(false)
    const [searchedList,setSearchedList]=useState([])
    

    useEffect(()=>{
      setData(props.group)
    },[props.group])

    const handleData=({currentTarget:input})=>{
        const stateData={...data}
        stateData[input.name]=input.value
        setData(stateData)
      }
    const handleError=({currentTarget:input})=>{
        const error={...error}
        error[input.name]=input.value
        setError(error)
      }
    const handleSelectedData=({currentTarget:input})=>{
      if (input.checked){
        setSelectedData([...selectedData,input.name])
      }else{
        let index=selectedData.indexOf(input.name)
        let data=[...selectedData]
        data.splice(index,1)
        setSelectedData(data)
      }

    }
    const handleRemoveMember=async(e,id)=>{
 
      try{
        
        await axios.delete(`http://127.0.0.1:8000/leavetracker/myteam/6/member/${id}`)
     
       }catch(err){
      
       }
    }
    const handleSearchPage=()=>{
      hideSearchPage(!searchPage)
    }
    const handleSearchQuery=async({currentTarget:input})=>{
      console.log(input)
      if(!input.value) setSearchedList([])
      try{
        const response=await axios.get(`http://127.0.0.1:8000/leavetracker/employee/?search=${input.value}`)
        setSearchedList(response.data)
      }catch(err){

      }
    
    }
    const handleSubmit=async(e)=>{
      e.preventDefault()
      try{
       await axios.patch(`http://127.0.0.1:8000/leavetracker/myteam/${groupId}/`,data)
      }catch(err){
        console.log(err)
      }
    }
    console.log(selectedData)

    return (
        <section className='group-edit'>
          <form onSubmit={handleSubmit}>
                {renderInput({name:'name',label:'Name',type:'text',
                data:data,handleData:handleData,handleError:handleError,error:error})}
                {renderInput({name:'description',label:'description',type:'text',
                data:data,handleData:handleData,handleError:handleError,error:error})}
                <div className='button-list'>
                
                <button type="submit" className='btn btn--accept'>Save</button>
            </div> 
                <GroupMembersList title="Admin(s)" groupMembers={filterAdminList(group.team_members)} edit={false}/>
                <GroupMembersList 
                title="Members" 
                groupMembers={filterParticipantList(group.team_members)}
                selectedData={selectedData}
                handleSelectedData={handleSelectedData}
                handleRemoveMember={handleRemoveMember}
                handleSearchPage={handleSearchPage}
                
                edit={true}/>
            <div className='button-list'>
                    <button type="button" className='btn btn--reject'>Back</button>
                </div> 
           
          </form>
          {searchPage && <Search searchedList={searchedList} handleSearchQuery={handleSearchQuery}/>}
            </section>
    );
    
}

export default GroupEdit;