import React from 'react';
import { Link } from 'react-router-dom';

function SideBar(props) {
    const {displaySideBar,handleDisplaySideBar}=props
    let menu=[{path:'dashboard',label:'Dashboard'},
    {path:'request',label:'Request'},
    {path:'status',label:'Status'},
    {path:'approvals',label:'Approval'},
    {path:'group',label:'Groups'},
    {path:'others',label:'Others'},
{path:'project-dashboard', label:'project dashboard'}]
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