import React from 'react';

function AbsenteesList(props) {
    const{absenteesList}=props
    console.log(absenteesList)
   
    return  absenteesList && absenteesList.length>0 && (<ul className='absentee__list'>
                {
                    absenteesList.map((absentee)=>(
                        <li className='absentee__instance'>
                        <span className='absentee__serial-no'>{absentee.serialNo}</span>
                        <div className='absentee__info'>
                        <div className='absentee__name'>{absentee.name}</div>
                        <div className='absentee__team'>
                            {absentee.common_team.map(team=>(<span>{`${team}, `}</span>))}</div>
                        </div>
                        <div className='absentee--info-button'>
                            <button className='btn btn--accept'>view</button>
                        </div>
                        </li>
                    ))
                }
              
                
            </ul>)}


export default AbsenteesList;