import React, { Fragment, useState } from 'react';

function Accordion(props) {
    const [hide, setHide] = useState(false)
    return (
        <div  className='accordion'>
            <div className='accordion__label' onClick={()=>setHide(!hide)}>
                <label >{props.label}</label></div>
            <div className={`accordion__body ${hide ? "hide" : ""}`}>{
                props.children
            }</div>
        </div>
    );
}

export default Accordion;