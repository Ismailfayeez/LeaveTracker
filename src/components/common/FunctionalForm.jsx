import React from 'react';
import Input from './Input';





  
 
export const renderButton=(name,label,className)=>(
      <button className={`btn ${className}`} name={name}>{label}</button>
    )

export const renderInput=(obj)=>{
    if (!obj) return null
    obj.type=obj.type? obj.type:"text"
    return (
          <Input
          type={obj.type}
          name={obj.name}
          label={obj.label}
          value={obj.data[obj.name]}
          onChange={obj.handleData}
          
          />
    )
      
  }
