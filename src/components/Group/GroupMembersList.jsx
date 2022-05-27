import React from 'react';
import Accordion from '../common/Accordion';

function GroupMembersList(props) {
    const {handleSelectedData,handleRemoveMember,handleSearchPage}=props
    return (
        <div className={`group-member ${props.edit? 'group-member--edit' : ''}`}>
            <Accordion label={<span className='group-members__title'>{props['title']}</span>}>
            <ul className='group-member__list'>
                {props.groupMembers.map((member)=>(
                    <li className='group-member__instance'>
                    <input className='group-member__checkbox' name={member.email} onClick={handleSelectedData} type='checkbox'/>
                    <div className='group-member__info'>
                    <span className='group-member__name'>{member.username}</span>
                    <div className='group-member__email'>{member.email}</div>
                    </div>
                    <div className='group-member__removegroup-member__remove'>
                        <button type="button" onClick={(e)=>handleRemoveMember(e,member.id)} className='btn btn--remove'>Remove</button>
                    </div>
                </li>
                ))}  
            </ul>
            <div className='button-list'>
                <button type="button" className='btn btn--accept' onClick={handleSearchPage}>Add</button>
                <button type="button" className='btn btn--reject' >Remove</button>
            </div>
            </Accordion>        
        </div>
    );
}

export default GroupMembersList;