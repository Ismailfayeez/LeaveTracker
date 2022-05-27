import React, { useEffect } from 'react';
import './approval.css'
import Table from '../common/table/Table';
import {  getActionedApproval, getNewApproval, getPreviousApproval, loadApprovals, updateApprovalStatus } from '../../store/approvals';
import { useDispatch, useSelector } from 'react-redux';
import { Accepted, actionedApprovals, newApprovals, previousApprovals, Rejected } from './config';

function Approvals(props) {
    const handleApprovalInput=(leave,approvalInput)=>{
        dispatch(updateApprovalStatus(leave,approvalInput))
    }
    const columns=[
        {path:'serial_no',label:"no",className:'serial-no'},
        {path:'info', label:'info',className:'info',content:(approval)=>(
            <>
            <div className='request-no'>{approval.request.request_number}</div>
            <div className='name'>{approval.approver}</div>
            </>
        )},
        {path:'range', label:'range',className:'range collapsible-sm',content:(approval)=>(
            <>
            <div>
            <label className=''>From</label> <span>{approval.request.from_date}</span>
            </div>
            <label>To</label> <span>{approval.request.to_date}</span>
            </>
        )},
        {path:'type', label:'type',className:'type collapsible-md'},
        {path:'duration', label:'duration ',className:'duration collapsible-md'},
        {path:'overall_status', label:'overall status',className:'overall-status collapsible-sm'},
        {path:'approve/reject',label:'',className:'approve-reject',content:(approval)=>(<div className='input-button'>
        <button className='btn btn--accept' onClick={()=>handleApprovalInput(approval,Accepted.code)}>Approve</button>
        <button className='btn btn--reject' onClick={()=>handleApprovalInput(approval,Rejected.code)}>Reject</button>
    
    </div>)}
    ]
     
    const dispatch=useDispatch()

    const newApprovalsList=useSelector(getNewApproval)
    const actionedApprovalList=useSelector(getActionedApproval)
    const previousApprovalsList=useSelector(getPreviousApproval)
    

    useEffect(()=>{
        Promise.all([dispatch(loadApprovals(newApprovals.name)),
        dispatch(loadApprovals(actionedApprovals.name)),
        dispatch(loadApprovals(previousApprovals.name))])

    },[])
    return (
        <div className='approvals'>     
        <section className='List'>
            <label>{newApprovals.label}</label>
          <Table data={newApprovalsList} columns={columns} className="leave-approval-table new-approval-table"/>
        </section>
        <section className='actionedApprovals'>
            <label>{actionedApprovals.label}</label>
          <Table data={actionedApprovalList} columns={columns} className="leave-approval-table"/>
        </section>
        <section className='previousApprovals'>
            <label>{previousApprovals.label}</label>
          <Table data={previousApprovalsList} columns={columns} className="leave-approval-table "/>
        </section>
        </div>
    );
}

export default Approvals;