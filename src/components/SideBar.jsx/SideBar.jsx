import React from 'react';
import { Link } from 'react-router-dom';

function SideBar(props) {
    const {displaySideBar,handleDisplaySideBar}=props
    let menu=[{path:'lt/dashboard',label:'Dashboard'},
    {path:'lt/request',label:'Request'},
    {path:'lt/status',label:'Status'},
    {path:'lt/approvals',label:'Approval'},
    {path:'lt/group',label:'Groups'},
    {path:'lt/others',label:'Others'},
{path:'lt/project-dashboard', label:'project dashboard'}]
    return (
        <div className={`side-bar ${displaySideBar ? '': 'hide'}`}>
            <ul className={`side-bar__list`}>
                {
                    menu.map((item)=>(
                        <li className='side-bar__item'>
                        <Link to={`/${item.path}`}>
                            <div onClick={handleDisplaySideBar}>{item.label}
                            </div>
                        </Link>
                        </li>
                        
                    ))
                }
            </ul>
            
        </div>
    );
}

export default SideBar;