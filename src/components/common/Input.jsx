import React, { Fragment } from 'react';

function Input({name,label,...rest}) {
    return (
        <div className={`form-input ${rest.className? rest.className:""}`}>
            <label htmlFor={name}>{label}</label>
            <input  name={name} id={name}  {...rest}/>
        </div>
    );
}
export default Input;