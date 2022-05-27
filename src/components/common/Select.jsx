import React, { useState } from 'react';

function Select({name,label,options,value,handleChange}) {
    
    return (
        <div className='form-group'>
            {label&&<label htmlFor={name}>{label}</label>}
            <select name={name} id={name} value={value}  onChange={handleChange}>
                        <option value="" disabled></option>
                        {options.length && options.map(option=>(<option value={option["value"]}>{option["name"]}</option>
                        ))}
            </select> 
        </div>
    );
}

export default Select;