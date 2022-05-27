import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./apiactions";


const slice=createSlice({
    name:'employee',
    initialState:{
        approvers:[]
    },reducers:{
        approverListReceived:(employee,action)=>{
            employee.approvers=action.payload.data
        }
    }
}
)

export const {approverListReceived} = slice.actions
export default slice.reducer
export const  loadApprovers=()=>(dispatch,getstate)=>{
    return dispatch(
        apiCallBegan({
            url:'leavetracker/approver',
            method:'get',
            onSuccess:approverListReceived.type
        })
    )
}