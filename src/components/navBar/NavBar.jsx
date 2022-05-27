import { faBars,faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
function NavBar(props) {
    let {handleDisplaySideBar,displaySideBar}=props
    return (
        <div className='App-header'>
            {
                !displaySideBar &&<FontAwesomeIcon icon={faBars} onClick={handleDisplaySideBar} className='icon menu-bar'/>
            }
            {
                displaySideBar &&<FontAwesomeIcon icon={faXmark} onClick={handleDisplaySideBar} className='icon x-mark'/>
            }
            
            
        </div>
    );
}

export default NavBar;