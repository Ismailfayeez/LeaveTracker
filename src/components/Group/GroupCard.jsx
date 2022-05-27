import React from 'react';

function GroupCard(props) {
    const {group}=props
    return (
        <div className="group-card">
               <div className='group-card__block-1'>
               <div className='group-card__title'>{group.name}</div>
               <div className='group-card__description'>{group.description}</div>
               </div>
               <div className='group-card__block-2'>
                   <div className='group-card__members'>{group.members} members</div>
               </div>
           </div>
    );
}

export default GroupCard;