import axios from 'axios';
import React, { useState } from 'react';
import SearchBar from '../common/SearchBar';
import { renderButton } from '../common/Utilities';
import SelectedList from './SelectedList';
import UserCard from './UserCard';

function Search(props) {
    const {searchedList, handleSearchQuery}=props
    const [selectedData,setSelectedData]=useState([])
    
    const handleSelectedData=({currentTarget:input},newData)=>{
        if (input.checked){
          setSelectedData([...selectedData,newData])
        }else{
          let index=selectedData.indexOf(newData)
          let data=[...selectedData]
          data.splice(index,1)
          setSelectedData(data)
        }
      }
      const handleSubmit=async()=>{
        try{
        const response =await axios.post(`http://127.0.0.1:8000/leavetracker/myteam/6/member/`,selectedData)
        alert("success")
        }catch(err){
        
        }
      }
    return (
        <section className='search-page'>
            <SearchBar handleSearchQuery={handleSearchQuery}/>
            <div>
            {searchedList.length>0 && 
            <p className='search-page__total-results'>{searchedList.length} total results</p>}
            {selectedData.length>0 &&<span className='selected'>selected {selectedData.length}</span>}
            </div>
            {searchedList.map(user=><UserCard user={user.user} handleSelectedData={handleSelectedData}/>)}
            
            <div className='search-page__button '>
                {renderButton('add','add','btn--accept')}
                {renderButton('reset','reset','btn--accept')}
                </div>
            <SelectedList
            selectedData={selectedData}
            handleSelectedData={handleSelectedData}
            handleSubmit={handleSubmit}/>
        </section>
    );
}

export default Search;