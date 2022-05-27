import React, { useEffect, useRef } from 'react';

function UserCard(props) {
    const {user,handleSelectedData,selectedData}=props
    console.log(selectedData)
    return (
        <div className='user-card'>
            <div className='user-card__block'>
                <input type='checkbox' value={user.email} className='user-card__checkbox'
                 name={user.email}
                checked={selectedData.some(data=>data.email==user.email)}
                onChange={(e)=>handleSelectedData(e,user)} 
                />
                <div className='user-card__info'>
                    <div className='user-card__name'>{user.username}</div>
                    <div className='user-card__role'>{user.email}</div>
                </div>
            </div>
            <div className='user-card__block'>

            </div>
        </div>
    );
}

export default UserCard;