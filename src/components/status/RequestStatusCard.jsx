import React from 'react';

function RequestStatusCard(props) {
    return (
        <div className='request-status-card'>
                    <div className='serial-number'>{props.request.serialNo}</div>
                    <div className='request-details'>
                    <div className='request-no'>{props.request.requestNo}</div>
                    <div className='request-range'>{props.request.fromDate} to {props.request.toDate}</div></div>
                    <div className='request-status'>{props.request.status}</div>
                </div>
    );
}

export default RequestStatusCard;