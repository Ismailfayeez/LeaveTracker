import React from 'react';

function TextArea({name,label,...rest}) {
    return (
        <div className='form-input'>
            <label htmlFor={name}>{label}</label>
            <textarea  name={name} id={name} {...rest} />
        </div>
    );
}

export default TextArea;