import React from 'react';

function ApproverCard(props) {
    console.log(props)
    return (
        <div className='approval-card'>
            <div className='request-details'>
                <div className='request-no'>{props.request.requestNo}</div>
                <div className='request-user'>{props.request.requestUser}</div>
            </div>
            <div className='input-button'>
                <button className='btn btn--accept'>Approve</button>
                <button className='btn btn--reject'>Reject</button>

            </div>
            
        </div>
    );
}

export default ApproverCard;