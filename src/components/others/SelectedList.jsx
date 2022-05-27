import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { renderButton } from '../common/FunctionalForm';
import UserCard from './UserCard';

function SelectedList(props) {
    const {selectedData,handleSubmit}=props
  
    return (
        <section className='search-page'>
        <div>
        <div >
            <span>Selected {selectedData.length}</span>
            <FontAwesomeIcon icon={faXmark}  className='icon x-mark'/>
        </div>
         </div>
         {selectedData.map(user=><UserCard user={user} selectedData={[]} handleSelectedData={()=>{}}/>)}
        
        <div className='search-page__button '>
            <button onClick={handleSubmit} >Submit</button>
            <button >remove</button>
            
            </div>
    </section>
    );
}

export default SelectedList;