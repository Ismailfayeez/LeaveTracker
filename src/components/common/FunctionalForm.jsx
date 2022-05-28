import React from 'react';
import Input from './Input';





  
 
export const renderButton=(name,label=name,className)=>(
      <button className={`btn ${className? className:""}`} name={name}>{label}</button>
    )

export const renderInput=(obj)=>{
      console.log(obj.value)
    if (!obj) return null
    obj.type=obj.type? obj.type:"text"
    
    return (
          <Input
          type={obj.type}
          name={obj.name}
          label={obj.label}
          value={obj.data[obj.name]}
          onChange={obj.handleChange}
          className={obj.className?obj.className:null}
          />
    )
      
  }
