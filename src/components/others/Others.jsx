import React from 'react';
import ConfirmationPopup from '../common/modal/ConfirmationPopup';
import Approvers from './Approvers';

function Others(props) {
    return (
        <div className='groups'>
            {/* <ConfirmationPopup/> */}
            <Approvers/>
            
        </div>
    );
}

export default Others;