import axios from 'axios';
import React, { useState } from 'react';
import SearchBar from '../common/SearchBar';
import { renderButton } from '../common/Utilities';
import SelectedList from './SelectedList';
import UserCard from './UserCard';

function Search(props) {
    const {selectedData, setSelectedData,handleSubmit}=props
    const [searchedResults,setSearchedList]=useState([])
    
    const handleSelectedData=({currentTarget:input},newData)=>{
      console.log(input.checked,input.name)
        if (input.checked){
          setSelectedData([...selectedData,newData])
        }else{
          let index=selectedData.findIndex(data=>data.email===newData.email)
          let data=[...selectedData]
          data.splice(index,1)
          setSelectedData(data)
        }
      }
      
      
      const handleSearchQuery=async({currentTarget:input})=>{
        console.log(input.value ?"true":"false")
        
        if(input.value) {try{
          const response=await axios.get(`http://127.0.0.1:8000/leavetracker/employee/?search=${input.value}`)
          setSearchedList(response.data)
        }catch(err){
  
        }
        }else{setSearchedList([])}
      }
      
    return (
        <section className='search-page'>
            <SearchBar handleSearchQuery={handleSearchQuery}/>
            <div>
            {searchedResults.length>0 && <p className='search-page__total-results'>{searchedResults.length} total results</p>}
            {selectedData.length>0 &&<span className='selected'>selected {selectedData.length}</span>}
            </div>
            {searchedResults.map(user=>
            <UserCard user={user.user}
             handleSelectedData={handleSelectedData}
             selectedData={selectedData}/>)}
            
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