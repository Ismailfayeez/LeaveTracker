import React from 'react';
import Accordion from '../common/Accordion';
import {renderText} from '../common/Utilities';
function UserInfo(props) {
    return (
        <section className='user-info'>
            <h4 className='title'>User Info</h4>
            {renderText('name','name','mohammed ismail fayeez')}
            {renderText('email','email','mohammedismailfayeez@gmail.com')}
            {renderText('leaveBalance','Leave Balance','17/60')}
            <Accordion label='leave types'>
                sick
                vacation
            </Accordion>
        </section>
    );
}

export default UserInfo;