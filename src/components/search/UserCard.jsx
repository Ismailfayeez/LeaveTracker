import React, { useEffect, useRef } from 'react';

function UserCard(props) {
    const {user,handleSelectedData}=props
    console.log(user)
    return (
        <div className='user-card'>
            <div className='user-card__block'>
                <input type='checkbox' className='user-card__checkbox' onClick={(e)=>handleSelectedData(e,user)} name={user.email}/>
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