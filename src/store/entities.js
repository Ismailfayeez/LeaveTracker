import { combineReducers } from "@reduxjs/toolkit";
import leavesReducer from "./leaves";
import employeeReducer from "./employee";
import approvalsReducer from "./approvals";
import groupsReducer from "./groups";
import absenteesReducer from "./absentees"
export default combineReducers({
leaves: leavesReducer,
employee:employeeReducer,
approvals:approvalsReducer,
groups:groupsReducer,
absentees:absenteesReducer
})