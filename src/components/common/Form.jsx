import React, { Component } from 'react';
import Input from './Input';
import Select from './Select';
import TextArea from './TextArea';
class Form extends Component {
  state={
    data:{
          from_date:"",
          to_date:"",
          reachout_person:"",
          duration:"",
          type:"",
          leave_date_list:[]
    },
    errors:{

    }
  }
  handleChange=({currentTarget:input})=>{
    console.log(input);
    const data={...this.state.data}
    data[input.name]=input.value
    this.setState({data})
  }
  renderText=(name,label,text)=>(
    <div className='text-group '>
    <label >{label}</label>
    <p>{text}</p>
    </div>
  )
  renderButton=(name,label,className)=>(
    <button className={`btn ${className}`} name={name}>{label}</button>
  )
  renderInput=(name,label,type='text',others)=>{
    const{data,errors,}=this.state
    return (
          <Input
          type={type}
          name={name}
          label={label}
          value={data[name]}
          onChange={this.handleChange}
          {...others}
          />
    )
      
  }
  renderTextArea=(name,label,others)=>{
    const{data,errors,}=this.state
    console.log(data[name],name)
    return (
          <TextArea
          name={name}
          label={label}
          value={data[name]}
          onChange={this.handleChange}
          {...others}
          />)
  }
  renderSelect=(name,options,label,keysObj)=>{
    const{data,errors}=this.state
    let optionKeys=keysObj?keysObj:{value:"value",name:"name"}
    
    return(
      <Select
          name={name}
          label={label}
          value={data[name]}
          handleChange={this.handleChange}
          options={options}
          optionKeys={optionKeys}
      />
    )
  }
}
 
export default Form;