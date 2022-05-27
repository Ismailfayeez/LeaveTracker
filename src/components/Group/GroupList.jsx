import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGroups, sliceAllGroupList, sliceMyGroupList } from '../../store/groups';
import { allGroups, myGroups } from './config';
import GroupCard from './GroupCard';

function GroupList(props) {
    const dispatch=useDispatch()
    const myGroupList=useSelector(sliceMyGroupList)
    const allGroupList=useSelector(sliceAllGroupList)
    const renderGroupcard=(list)=>(
        list.map((group)=>(
           <GroupCard group={group}/>   
        ))
    )
    useEffect(()=>{
        dispatch(loadGroups(myGroups.name))
        dispatch(loadGroups(allGroups.name))
    },[])
    return (
        <div>
            <div className='my-groups'>
                <h4>{myGroups.label}</h4>
                {renderGroupcard(myGroupList)}
            </div>
            <div className='all-groups'>
                <h4>{allGroups.label}</h4>
                {renderGroupcard(allGroupList)}
            </div>
                <div className='flex flex--center '>
                    <button className='btn create-new-group '>Create New Group</button>
                </div>
            
        </div>
    );
}

export default GroupList;