import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { renderButton, renderInput } from '../common/FunctionalForm';

function LoginForm(props) {
    const [data,setData]=useState({
        email:"",password:""
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
        {renderInput(createObject("password"))}
        {renderButton("Login")}
        <section>
            <span>Need an account?</span >
            <Link to="/signup">Sign Up</Link>
        </section>
        <hr/>
        {renderButton("Login to project")}
        </form>
        </>
    );
}

export default LoginForm;