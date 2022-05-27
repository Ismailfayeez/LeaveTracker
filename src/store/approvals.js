import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { apiCallBegan } from "./apiactions";
import { createSelector } from "reselect";
import { Accepted, actionedApprovals, newApprovals, Pending, previousApprovals, Rejected } from "../components/approvals/config";

const slice=createSlice({
    name:'approval',
    initialState:{
            newApprovals:{
                list:[]
        },actionedApprovals:{
            list:[]
    },previousApprovals:{
        list:[]
}
    },
    reducers:{
        approvalsReceived:(approval,action)=>{
            let list=action.payload.data
            if(action.payload.context.key){
                let query=action.payload.context.key
                if (query==newApprovals.name){
                    list=list.filter(item=>item['approver_status']==Pending.name)
                }if (query==actionedApprovals.name){
                    list=list.filter(item=>item['approver_status']!=Pending.name)
                }
                approval[action.payload.context.key]['list']=list
        }
    },approvalStatusUpdated:(approval,action)=>{
     
        alert(action.payload.data.approver_status)
    }
    
}})

export const {approvalsReceived,approvalStatusUpdated}=slice.actions
export default slice.reducer

// dispatch
export const loadApprovals=(type)=>(dispatch,getstate)=>{
    let queryParam
    if (type && type==newApprovals.name){
        queryParam=newApprovals.url
    } 
    if(type && type==actionedApprovals.name){
        queryParam=actionedApprovals.url
    }
    if(type && type==previousApprovals.name){
        queryParam=previousApprovals.url
    }
    return dispatch(
        apiCallBegan({
            url:`leavetracker/approval${!queryParam ? "":`?${queryParam}`}`,
            method:'get',
            onSuccess:approvalsReceived.type,
            context:{key:type}
        })
    )

}

export const updateApprovalStatus=(leave,approvalInput)=>(dispatch,getState)=>{
    const data={}
    if (approvalInput)
    {
    data['approver_status']=approvalInput===Accepted.code?Accepted.code:Rejected.code
    return dispatch(
        apiCallBegan({
            url:`leavetracker/approval/${leave.id}/`,
            method:'patch',
            data,
            onSuccess:approvalStatusUpdated.type,
        })
    )}
}
// get
export const getNewApproval=createSelector(
    state=>state.entities.approvals.newApprovals,
    newApprovals=>newApprovals.list
)

export const getActionedApproval=createSelector(
    state=>state.entities.approvals.actionedApprovals,
    actionedApprovals=>actionedApprovals.list
)

export const getPreviousApproval=createSelector(
    state=>state.entities.approvals.previousApprovals,
    previousApprovals=>previousApprovals.list
)