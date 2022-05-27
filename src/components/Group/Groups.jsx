import React from 'react';
import GroupDetails from './GroupDetails';
import GroupEdit from './GroupEdit';
import GroupList from './GroupList';
function Groups(props) {
    return (
        <div className='groups'>
            <h3 className='groups__heading'>Groups</h3>
            
            <GroupList/>
            
        </div>
    );
}

export default Groups;