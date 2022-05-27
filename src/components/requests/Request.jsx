import React from 'react';
import Form from '../common/Form';
import Badge from '../common/Badge';
import Accordion from '../common/Accordion';
import leaveList from '../../mockdata'
import balanceList from '../../mockdata1'
import UserCard from '../search/UserCard';
import { connect } from 'react-redux';
import { createLeave, createLeaveRequest } from '../../store/leaves';
import { loadApprovers } from '../../store/employee';
import UserInfoCard from '../common/UserInfoCard';
import Modal from '../common/Modal';
import moment from 'moment';
class Request extends Form {
    state = { 
        data:{
            from_date:"",
            to_date:"",
            reachout_person:"",
            duration:"",
            type:"",
            leave_date_list:[]
        },
        errors:{

        },modal:{
            show:false,
            content:""
        }
     } 
    componentDidMount(){
        // APi call
        this.props.loadApprovers()
        
        // state update
        const currentDate=moment().format('YYYY-MM-DD')
        const data={...this.state.data}
        data['from_date']=currentDate
        data['to_date']=currentDate
        data['leave_date_list']=this.updateLeaveList(currentDate,currentDate)
        this.setState({data})
    }
    componentDidUpdate(prevProps,prevState){
        const {data:prevData}=prevState
        const {data:currData}=this.state
        if(prevData.from_date!=currData.from_date ||prevData.to_date!=currData.to_date){
            const data={...currData}
            data['leave_date_list']=this.updateLeaveList(currData.from_date,currData.to_date)
            this.setState({data})
        }
    }

    updateLeaveList=(startDate,endDate)=>{
        let dt=moment(startDate,'YYYY-MM-DD')
        let edt=moment(endDate,'YYYY-MM-DD')
        let result=[]
        while(dt<=edt){
            result.push(dt.format('YYYY-MM-DD'))
            dt.add(1,'days')
        }
        return result
    }
    leaveDuration=[{name:'half day',code:'HALF',hours:4.5},{name:'full day',code:'FULL',hours:9}]
    leaveTypes=[{code:"SCK",name:'sick',label:'sick'}]
    approvers=['fayeez','majidha','arafath','abdul']
    getLeaveList=()=>{
        return (<div className='flex leave-list'>{this.state.data.leave_date_list.map(leave=>(
            <span className='badge badge--outline'>{leave}</span>
        ))}</div>)
    }
    getCategory=()=>{
        return this.leaveTypes.map(type=>(
            <li className='item'>
            {this.renderInput(type['name'],type['label'],'radio')}
            </li>
        ))
    }
    handleModal=(modalTemplate, data,template)=>{
        let modal={...this.state.modal}
        if(modalTemplate && data){
            modal["content"]=modalTemplate(data,template)
        }
        modal['show']=!modal['show']
        console.log(modal)
        this.setState({modal})
    }
    getBalance=()=>{
        return(
            balanceList.map(balance=>(<tr>
            <td className='name'>{Object.keys(balance)}</td>
            <td className='days'>{balance[Object.keys(balance)]}</td>
        </tr>))
        )
    }
    getApprover=()=>{
        return(
            
            this.props.approvers.map(approver=>(
                <UserInfoCard user={approver}/>
            )
            )
        )
    }

    handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            const response=await this.props.createLeaveRequest(this.state.data)
            if(response.statusText=="OK"){
                console.log(response.data)
                alert(response.data.request_number)
            }
        }catch(err){
           if(err && err.response){
               console.log(err.response.data.error[0])
            alert(err.response.data.error[0])
           }
        }
        
        
    }
    
    render() { 
        
        return (
            <section className='request'>
                <Modal handleModal={this.handleModal} show={this.state.modal.show}>{this.state.modal.content}</Modal>
                <h3 className='request__title'>leave request</h3>
                <button onClick={this.getData}>date</button>
                <div className='grid grid1x2--md-8-4'>
                <form onSubmit={this.handleSubmit}>
                <div className='request__content grid grid1x2--md-6-6'> 
                
                {this.renderInput('from_date','From','date')}
                {this.renderInput('to_date','To','date')}
                <div className='remove-weekends'>
                {this.renderInput('remove-weekends','Remove weekends','checkbox')} 
                </div> 
                <div className='request__modify-leave'>
                    <Accordion label="Modify Leave" name='modify-leave'>
                      {this.getLeaveList()}
                    </Accordion>
                </div>
                <div className='request__category'>
                    <label>Category</label>
                    <div className='content grid'>
                    <div className=''>
                        {this.renderSelect('type',this.leaveTypes,"type",{value:"code",name:'name'})}
                   
                    </div>
                    <div className='hours'>
                        {this.renderSelect('duration',this.leaveDuration,"duration",{value:"code",name:'name'})}
                        </div>
                    </div>       
                </div>
                <div className='request__duration'>
                <label>Duration</label>
                <p>27 days(s) or 243 hr(s)</p>
                </div>
                
                {this.renderInput('reachout_person','Reachout Person','text')}
                {this.renderTextArea('leave_reason','Leave Reason',{rows:'5',cols:'10'})} 
                <div className='request__mail_uploads '>
                <label>mail & uploads</label>
                <div className='content grid grid1x2--md-6-6'>
                {this.renderInput('send-email','Send email','checkbox')}
                {this.renderInput('uploadDocument','','file')}
                </div>
                </div>
               
                </div>
                <button type='submit'>Submit</button>
                <button type='reset'>reset</button>
                </form>
                <div className='request__sidebar'>
                <div className='request__balance'>
                <label>Balance</label>
                <table className='balance__table'>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Days</th>
                        </tr>
                    </thead>
                    <tbody>
                       {this.getBalance()}
                    </tbody>
                </table> 
                </div>
                
                <div className='request__approvers'>
                <label>Approvers</label>
                {this.getApprover()}
                </div>
                 
                </div>
                   
                </div>
                </section>
        );
    }
}
const mapStateToProps=state=>({
    approvers:state.entities.employee.approvers}
)

const mapDispatchToProps=dispatch=>({
    loadApprovers:()=>dispatch(loadApprovers()),
    createLeaveRequest:(data)=>dispatch(createLeaveRequest(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(Request)
