import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { renderButton, renderInput } from '../common/FunctionalForm';

function SignUpForm(props) {
    const [data,setData]=useState({
        email:"",password:"",username:""
    })
    
    const handleChange=({currentTarget:input})=>{
        const result={...data,[input.name]:input.value}
        setData(result)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(data)
    }
    const createObject=(value)=>({type:value,label:value,name:value,data,
        handleChange:handleChange})
    
    return (
        <>
        <form onSubmit={handleSubmit}>
        {renderInput(createObject("email"))}
        {renderInput(createObject("username"))}
        {renderInput(createObject("password"))}
        {renderInput(createObject("confirm password","password"))}
        {renderButton("Create")}
        
        </form>
        </>
    );
}

export default SignUpForm;