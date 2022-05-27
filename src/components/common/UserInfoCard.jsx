import React from 'react';

function UserInfoCard(props) {
    const {user}=props
    return ((user && 
        <div className='user-card'>
            <div className='user-card__block'>
                <div className='user-card__info'>
                    <div className='user-card__name'>{user.username}</div>
                    <div className='user-card__email'>{user.email}</div>
                </div>
            </div>
            <div className='user-card__block'>

            </div>
        </div>)
    );
}

export default UserInfoCard;