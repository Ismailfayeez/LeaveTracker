import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { apiCallBegan } from "./apiactions";
import { createSelector } from "reselect";
import { Accepted, actionedApprovals, newApprovals, Pending, previousApprovals, Rejected } from "../components/approvals/config";
import { allGroups, myGroups } from "../components/Group/config";

const slice=createSlice({
    name:'groups',
    initialState:{
            myGroups:{
                list:[]
            },
            allGroups:{
                list:[]
    }
    },
    reducers:{
        groupsReceived:(groups,action)=>{
            let list=action.payload.data
            if(action.payload.context.key){
                let property=action.payload.context.key
                groups[property]['list']=list
        }        
    } 
}})

export const {groupsReceived}=slice.actions
export default slice.reducer

// dispatch
export const loadGroups=(type)=>(dispatch,getstate)=>{
    let group
    if (type && type==myGroups.name){
        group=myGroups.url
    } 
    if(type && type==allGroups.name){
        group=allGroups.url
    }
    return dispatch(
        apiCallBegan({
            url:`leavetracker/${!group ? "": group}`,
            method:'get',
            onSuccess:groupsReceived,
            context:{key:type}
        })
    )
}

// getState

export const sliceMyGroupList=createSelector(
    state=>state.entities.groups.myGroups,
    myGroups=>myGroups.list
)

export const sliceAllGroupList=createSelector(
    state=>state.entities.groups.allGroups,
    allGroups=>allGroups.list
)