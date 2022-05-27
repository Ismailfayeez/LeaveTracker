import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { apiCallBegan } from "./apiactions";


const slice=createSlice({
    name:'leave',
    initialState:{
        leaveType:[],
        leaveDuration:[],
        leaveRequests:{
            upcomingLeaves:{
                list:[]
            },previousLeaves:{
                list:[]
            }
        }

    },reducers:{
        leaveTypeReceived:(leave,action)=>{
            leave['leaveType']=action.payload
        },
        leaveDurationReceived:(leave,action)=>{
            leave['leaveDuration']=action.payload
        },
        leaveRequestsReceived:(leave,action)=>{
            if(action.payload.context.key){
                leave['leaveRequests'][action.payload.context.key]['list']=action.payload.data
            }
            
        }
    }
}
)
export const {leaveDurationReceived,leaveTypeReceived,leaveRequestsReceived}=slice.actions
export default slice.reducer

export const createLeaveRequest=(data)=>(dispatch,getState)=>{
    return dispatch(
        apiCallBegan({
            url:'leavetracker/request/',
            method:'post',
            data:data
        })
    )
}
export const  loadLeaveType=()=>(dispatch,getstate)=>{
    return dispatch(
        apiCallBegan({
            url:'leavetracker/approver',
            method:'get',
            onSuccess:leaveTypeReceived
        })
    )
}

export const  loadLeaveDuration=()=>(dispatch,getstate)=>{
    return dispatch(
        apiCallBegan({
            url:'leavetracker/approver',
            method:'get',
            onSuccess:leaveDurationReceived
        })
    )
}
export const  loadLeaveRequests=(filter)=>(dispatch,getstate)=>{
    let queryParam=""
    if (filter && filter=='upcomingLeaves'){
        queryParam=`from_date__gt${moment().format('YYYY-MM-DD')}`
    } 
    if(filter && filter=='previousLeaves'){
        queryParam=`from_date__lte${moment().format('YYYY-MM-DD')}`
    }
    return dispatch(
        apiCallBegan({
            url:`leavetracker/request${!queryParam? "":`?${queryParam}`}`,
            method:'get',
            onSuccess:leaveRequestsReceived.type,
            context:{key:filter}
        })
    )
}