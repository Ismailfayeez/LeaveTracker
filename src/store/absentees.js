import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./apiactions";
import { createSelector } from "reselect";

const slice=createSlice({
    name:"Absentees",
    initialState:{
        list:[],
        groupsLeaveCount:{
            list:[]
        }
    },
    reducers:{
        absenteesReceived:(absentees,action)=>{
            absentees["list"]=action.payload.data
        },
        groupsLeaveCountReceived:(absentees,action)=>{
            absentees['groupsLeaveCount']['list']=action.payload.data
        }
    }
})

export const {absenteesReceived,groupsLeaveCountReceived}=slice.actions
export default slice.reducer

export const loadAbsentees=()=>(dispatch,getstate)=>{
    return dispatch(
        apiCallBegan({
           url:`/leavetracker/absentees/` ,
           onSuccess:absenteesReceived.type
        })
    )
}
export const loadGroupsLeaveCount=()=>(dispatch,getstate)=>{
    return dispatch(
        apiCallBegan({
           url:`leavetracker/graph/groups_leave_count/` ,
           onSuccess:groupsLeaveCountReceived.type
        })
    )
}

export const getGroupsLeaveCount=()=>{
    return state=>state.entities.absentees.groupsLeaveCount.list
}

export const getAbsentees=createSelector(
    state=>state.entities.absentees.list
)
